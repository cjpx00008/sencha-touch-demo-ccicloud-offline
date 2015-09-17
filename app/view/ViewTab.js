/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-19
 * Time: 下午2:58
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.ViewTab", {
    extend: "Ext.tab.Panel",
    alias: "widget.viewTab",

    config: {
        tabBarPosition: "bottom",
        tabBar: {
            defaults: {
                flex: 1
            }
        },
        layout: {
           animation:false
        },
        ui: "gray",
        items: [
            {
                iconCls: "icon-home",
//                layout:"vbox",
                itemId: "home",
                xtype: "home",
                title: "首页"
            },
            {
                iconCls: "icon-user",
//                layout:"vbox",
                xtype:"contacts",
                itemId:"contacts",
                title: "通讯录"
            },
            {
                iconCls: "icon-info",
                itemId: "info",
                xtype:"info",
//                layout:"vbox",
                title: "消息",
                badgeText: " "
            },
            {
                iconCls: "icon-setting",
                itemId: "settings",
                xtype: "config",
//                layout: "vbox",
                title: "设置"
            }
        ]
    }
});