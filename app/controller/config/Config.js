/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-9
 * Time: 上午11:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.config.Config", {
    extend: "Ext.app.Controller",
    requires: ["Ext.device.Browser"],

    config: {
        refs: {
            main: "main",
            viewTab: "viewTab",
            about: "about",
            configView: "config",
            editInfo: "editInfo",
            editButton: "editInfo #editButton",
            switchCompany: "config #switchCompany",
            beep: "config #beep",
            vibrate: "config #vibrate",
            push: "config #push",
            updateCheck: "config #updateCheck",
            showAbout: "config #showAbout",
            logout: "config #logout"
        },
        control: {
            about: {
                hide: "hideAbout"
            },
            config: {
                initialize: "configInit"
            },
            editButton: {
                tap: "doEdit"
            },
            switchCompany: {
                tap: "switchCompany"
            },
            beep: {
                change: "beepChange"
            },
            vibrate: {
                change: "vibrateChange"
            },
            push: {
                change: "pushChange"
            },
            updateCheck: {
                tap: "updateCheck"
            },
            showAbout: {
                tap: "showAbout"
            },
            logout: {
                tap: "logout"
            }
        }
    },

    configInit: function (container) {
        var el = container.element,
            store = Ext.getStore("config"),
            configValue = store.getAt(0),
            beep = this.getBeep(),
            vibrate = this.getVibrate(),
            push = this.getPush();
        beep.setValue(configValue.data.beep);
        vibrate.setValue(configValue.data.vibrate);
        push.setValue(configValue.data.push);

        el.on({
            delegate: ".userInfo",
            tap: "showUserEdit",
            scope: this
        })
    },

    showUserEdit: function (e) {
        Global.setIsAdd(true);
        this.redirectTo("editInfo");
    },

    doEdit: function (button) {
        var form = this.getEditInfo(),
            textfields = form.query("textfield"),
            container = form.down("#userInfo");
        if (button.getText() == "编辑") {
            button.setText("保存");
            Ext.Array.each(textfields, function (obj, index, allItems) {
                if (index == 0) {
                    obj.focus();
                }
                obj.setReadOnly(false);
            });
            console.log(textfields);
        }
        else if (button.getText() == "保存") {
            button.setText("编辑");
            Ext.Array.each(textfields, function (obj, index, allItems) {
                obj.setReadOnly(true);
            });
            form.submit({
                url: "login.json",
                method: "get",
                timeout: "10000",
                waitMsg: " ",
                success: function (form, result) {
                    console.log("保存成功");
                    if (container.isHidden()) {
                        container.show();
                    }
                },
                failure: function (form, result) {
                    console.log("失败");
                }
            });
        }
        console.log("edit");
    },

    switchCompany: function (button) {
        Global.setIsAdd(true);
        this.redirectTo("switchCompany");
    },

    beepChange: function(toggle, newValue, oldValue, eOpts) {
        var store = Ext.getStore("config");
        store.getAt(0).set("beep", newValue);
        store.sync();
    },

    vibrateChange: function (toggle, newValue, oldValue, eOpts) {
        var store = Ext.getStore("config");
        store.getAt(0).set("vibrate", newValue);
        store.sync();
    },

    pushChange: function (toggle, newValue, oldValue, eOpts) {
        var store = Ext.getStore("config");
        store.getAt(0).set("push", newValue);
        store.sync();
    },

    updateCheck: function (button) {
        var currentVersion = Global.getVersion(),
            main = this.getMain();
        main.setMasked({
            xtype: "loadmask",
            message: "版本检测中..."
        });
        Ext.Ajax.request({
            method: "get",
            url: "version.json",
            success: function (response) {
                main.unmask();
                var obj = Ext.decode(response.responseText),
                    version = obj.version;
                if (version > currentVersion) {
                    Ext.Msg.confirm("提示信息", "检测到有新版本更新，是否进行更新", function (answer) {
                        if (answer == 'yes') {
                            console.log("开始更新");
                            Ext.device.Browser.open(obj.url);
                        } else {
                            return;
                        }
                    });
                }
                else {
                    Ext.Msg.alert("提示信息", "您当前的版本已经是最新版本");
                }
            },
            failure: function (response) {
                main.unmask();
                Ext.Msg.alert("提示信息", "检测失败");
            }
        });
    },

    showAbout: function (button) {
        Global.setIsAdd(true);
        this.redirectTo("about");
    },

    hideAbout: function (container) {
        container.destroy();
    },

    logout: function (button) {
        var store = Ext.getStore("userAccount"),
            main = this.getMain(),
            viewTab = this.getViewTab();
        Ext.Ajax.request({
            method: "get",
            url:"login.json",
            params:{
                userId:"1"
            },
            success: function (response) {
                store.removeAll();
                store.sync();
                viewTab.setActiveItem(0);
                main.setActiveItem("login");
            },
            failure: function (response) {
                console.log("注销失败");
            }
        })
    }
});