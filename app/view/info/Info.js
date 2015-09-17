/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-2
 * Time: 下午5:11
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.info.Info", {
    extend: "Ext.dataview.List",
    alias: "widget.info",

    config: {
        flex:1,
        itemTpl: "<div style='font-size: 0.9em'><img src='{icon}' style='width: 23px; height: 23px;margin-right: 10px;vertical-align: middle'/><span class='right-arrow'></span>{name}</div>",
        height: 300,
        scrollable: false,
        items: [
            {
                xtype: "titlebar",
                title: "消息中心",
                ui: "gray",
                docked: "top"
            }
        ],
        data: [
            {
                "name": "提到我的",
                "icon": "resources/images/info-at.png",
                "type": "mentioned"
            },
            {
                "name": "回复我的",
                "icon": "resources/images/info-reply.png",
                "type": "reply"
            },
            {
                "name": "赞我的",
                "icon": "resources/images/info-like.png",
                "type": "like"
            },
            {
                "name": "系统消息",
                "icon": "resources/images/info-sys.png",
                "type": "systemNotice"
            },
            {
                "name": "公告",
                "icon": "resources/images/info-notice.png",
                "type": "notice"
            }
        ]
    }
});