/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-6
 * Time: 下午12:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.ForwardGroup", {
    extend: "Ext.Container",
    alias: "widget.forwardGroup",

    config: {
        layout: "card",
        cls: "forwardGroup",
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
                    },
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        text: "确定",
                        align: "right",
                        itemId: "doneButton"
                    }
                ]
            },
            {
                xtype: "internalGroup",
                mode: "MULTI",
                preventSelectionOnDisclose: false,
                onItemDisclosure: true
            }
        ]
    }
});