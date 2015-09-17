/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-19
 * Time: 下午1:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.Login", {
    extend: "Ext.app.Controller",

    config: {
        before: {
            toHome: "ensureStoreLoad"
        },
        refs: {
            loginForm: "login",
            loginButton: "login #login"
        },
        control: {
            loginButton: {
                tap: "login"
            },
            loginForm: {
                hide: "loginViewHide",
                initialize: "loginInit"
            }
        }
    },

    login: function (button) {
        var loginForm = this.getLoginForm(),
            that = this,
            formValues = loginForm.getValues(),
            model = Ext.create("CCICloud.model.User", formValues),
            errors = model.validate(),
            userStore = Ext.getStore("userAccount"),
            account = userStore.load().getAt(0),
            msg = '';

        if (!errors.isValid()) {
            Ext.Msg.alert("提示信息", errors.getAt(0).getMessage());
        }
        else {
            loginForm.submit({
                url: "login.json",
                method: "get",
                timeout: "10000",
                waitMsg: " ",
                success: function (form, result) {
                    if (!account) {
                        userStore.add({username: formValues.username, userpassword: formValues.userpassword, loginTime: new Date().getTime()});
                        userStore.sync();
                    }
                    else {
                        userStore.getAt(0).set("loginTime", new Date().getTime());
                        userStore.sync();
                    }
                    Global.setIsAdd(true);
                    that.redirectTo("home");
                },
                failure: function (form, result) {
                    console.log("失败");
                }
            });
        }
    },

    loginInit: function () {
        var userStore = Ext.getStore("userAccount"),
            account = userStore.load().getAt(0);
        if (account && this.judgeTime(account.getData().loginTime)) {
            this.getLoginForm().setValues(account.getData());
            this.login();
        }
    },

    loginViewHide: function (loginform, e) {
        loginform.destroy();
    },

//    toHome: function (id) {
//
//        var stack = Global.getStack(),
//            previousStackItem = stack[stack.length - 2];
//        if (previousStackItem && previousStackItem == id) {
//            stack.pop();
//            this.getMain().animateActiveItem("viewTab", {type: "slide", direction: "right"});
//        }
//        else {
//            stack.push("home");
//            this.getMain().setActiveItem("viewTab");
//        }
//    },

    judgeTime: function (time) {
        var newTime = new Date().getTime();
        if (newTime - time < 7 * 24 * 60 * 60 * 1000) {
            return true;
        }
        else {
            return false;
        }

    }
});