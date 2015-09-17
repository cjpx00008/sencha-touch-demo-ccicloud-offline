/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-30
 * Time: 下午3:13
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.DetailPic", {
    extend: "Ext.Container",
    alias: "widget.detailPic",

    config: {
        style:"background-color:#19191a",
        items: [
            {
                xtype: "img",
                width: "100%",
                height: "100%"
            },
            {
                xtype: "toolbar",
                ui: "gray",
                docked: "bottom",
                items: [
                    {
                        xtype: "button",
                        text: "取消",
                        action: "backButton"
                    },
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        text: "删除",
                        itemId: "delete"
                    }
                ]
            }
        ]
    }
});