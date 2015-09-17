/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-3
 * Time: 下午5:00
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.ForwardScope", {
    extend: "Ext.Container",
    alias: "widget.forwardScope",

    config: {
        items: [
            {
                xtype: "titlebar",
                title: "转发范围",
                ui: "gray",
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
            },
            {
                xtype: "togglefield",
                labelCls: "label-toggle",
                label: "隐私"
            },
            {
                xtype: "button",
                text:"我的群组",
                ui:"plain",
                cls: "listButton",
                iconAlign: "right",
                height:55,
                iconCls: "icon-right-arrow",
                border: 1,
                style:"border-bottom:1px solid #dedede; border-top:1px solid #dedede; border-radius: 0; -webkit-border-radius: 0",
                labelCls: "label-button"
            }
        ]
    }

});