/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-23
 * Time: 下午5:25
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.home.Category", {
    extend: "Ext.dataview.List",
    alias: "widget.category",

    config: {
        itemTpl: "<div style='font-size: 0.9em'><img src='{icon}' style='width: 22px; height: 22px; margin-right: 10px;vertical-align: middle'/><span class='right-arrow'></span>{name}</div>",
        scrollable: false,
        height: 300,
        items: [
            {
                xtype: "titlebar",
                title: "分 类",
                ui: "gray",
                docked: "top",
                items: [
                    {
                        xtype: "button",
                        ui: "plain",
                        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                        iconCls: "left-arrow",
                        action: "backButton",
                        itemId: "back",
                        labelCls: "label-back"
                    }
                ]
            }
        ],
        data: [
            {
                "name": "所有动态",
                "icon": "resources/images/list-all.png",
                "type": "all"
            },
            {
                "name": "我关注的",
                "icon": "resources/images/list-eye.png",
                "type": "attention"
            },
            {
                "name": "我参与的",
                "icon": "resources/images/list-u.png",
                "type": "join"
            },
            {
                "name": "公告",
                "icon": "resources/images/list-notice.png",
                "type": "notice"
            },
            {
                "name": "群组",
                "icon": "resources/images/list-group.png",
                "type": "group"
            }
        ]
    }
})