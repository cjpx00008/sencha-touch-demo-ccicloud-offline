/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-2
 * Time: 上午11:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.ViewTab", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            viewTab: "viewTab",
            homeTab: "viewTab #home",
            contactsTab: "viewTab #contacts",
            infoTab: "viewTab #info",
            settingsTab: "viewTab #settings"
        },

        control: {
            viewTab: {
                activeitemchange: "viewTabChange"
            }
//            homeTab: {
//                activate: "showHome",
//                deactivate: "destroyContent"
//            },
//            contactsTab: {
//                activate: "showContacts",
//                deactivate: "destroyContent"
//            },
//            infoTab: {
//                activate: "showInfo",
//                deactivate: "destroyContent"
//            },
//            settingsTab: {
//                activate: "showSettings",
//                deactivate: "destroyContent"
//            }
        }
    },

    viewTabChange: function (viewTab, value, oldValue, eOpts) {
        var title = value.config.title,
            store = Ext.getStore("contact");
        if (title == "通讯录") {
            viewTab.setMasked({
                xtype: "loadmask",
                message: "加载数据中..."
            })
            store.load();
            store.on('load', function () {
                viewTab.unmask();
            }, this, {
                single: true
            });
        }
    },

    showHome: function (newActiveItem) {
        newActiveItem.setActiveItem("home");
    },

    showContacts: function (newActiveItem) {
        newActiveItem.setActiveItem("contacts");
    },

    showInfo: function (newActiveItem) {
        newActiveItem.setActiveItem("info");
    },

    showSettings: function (newActiveItem) {
        newActiveItem.setActiveItem("config");
    },

    destroyContent: function (oldActiveItem) {
        oldActiveItem.removeAll(true);
    }
});