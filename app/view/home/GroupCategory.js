/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-24
 * Time: 上午11:21
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.home.GroupCategory", {
    extend: "Ext.Container",
    alias: "widget.groupCategory",

    config: {
        layout: "card",
        items: [
            {
                xtype: "toolbar",
                ui: "gray",
                docked: "top",
                items: [
                    {
                        xtype: "button",
                        ui: "plain",
                        iconCls: "left-arrow",
                        labelCls: "label-back",
                        action: "backButton"
                    },
                    {
                        xtype: "segmentedbutton",
                        centered: true,
                        itemId: "groupType",
                        defaults: {
                            width: 66,
                            labelCls: "seg-label"
                        },
                        items: [
                            {
                                text: "内部",
                                pressed: true
                            },
                            {
                                text: "外部"
                            }
                        ]
                    }
                ]
            }
        ]
    }

})