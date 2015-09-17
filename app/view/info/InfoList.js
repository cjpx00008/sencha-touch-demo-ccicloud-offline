/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-9
 * Time: 下午1:55
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.info.InfoList", {
    extend: "Ext.dataview.List",
    alias: "widget.infoList",

    config: {
        type:"systemNotice",
        store: "info",
        plugins: [
            {
                type: 'listpaging',
                autoPaging: true,
                loadMoreText: '<div style="color: #333333; font-size: 0.7em; height: 41px; line-height: 41px; background-color: #e9e9e9"><img src="resources/images/clock.png" style="width:15px; height:15px; vertical-align: middle;  margin-right: 3px"/>更早消息</div>',
                noMoreRecordsText: '<p style="color: #333333; font-size: 15px">没有消息了</p>'
            }
        ],
        items: [
            {
                xtype: "titlebar",
                title: "消息中心",
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
        emptyText: "您还没有收到通知",
        itemTpl: [
            "<tpl if='type == \"mentioned\"'>",
                "<div class='icon-info-at clearfix'>",
            "<tpl elseif = 'type == \"reply\"'>",
                "<div class='icon-info-reply clearfix'>",
            "<tpl elseif = 'type == \"like\"'>",
                "<div class='icon-info-like clearfix'>",
            "<tpl elseif = 'type == \"systemNotice\"'>",
                "<div class='icon-info-sys clearfix'>",
            "</tpl>",
                    "<p class='fl-l' style='width: 100%; font-size: 0.9em'>{infoContent}</p>",
                    "<span class='createtime fl-l'>{createTime}</span>",
                "</div>"
        ].join(""),
        data: [
            {
                "info": "任曦已经将您添加为网络管理员",
                "createTime": "2014-01-07 13:52:22"
            }
        ]
    }
});