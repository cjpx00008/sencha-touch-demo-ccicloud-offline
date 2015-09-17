/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-10
 * Time: 上午10:52
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.config.SwitchCompany", {
    extend: "Ext.dataview.List",
    alias: "widget.switchCompany",

    config: {
        store: "company",
        onItemDisclosure: true,
        preventSelectionOnDisclose: false,
        cls:"switchcompany",
        items: [
            {
                xtype: "titlebar",
                title: "切换企业",
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
                    },
                    {
                        xtype: "button",
                        text: "确定",
                        align: "right"
                    }
                ]
            }
        ],
        itemTpl: "<div>{companyName}</div>",
        plugins: [
            {
                type: 'listpaging',
                autoPaging: true,
                loadMoreText: '<p style="color: #666666; font-size: 15px">更多公司</p>',
                noMoreRecordsText: '<p style="color: #666666; font-size: 15px">没有其他公司了</p>'
            }
        ]

    }
});