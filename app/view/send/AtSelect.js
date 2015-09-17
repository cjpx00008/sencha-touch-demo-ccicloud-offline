/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-31
 * Time: 上午10:29
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.AtSelect", {
    extend: "Ext.Container",
    alias: "widget.atSelect",

    config: {
        layout:'vbox',
        items: [
            {
                xtype: "titlebar",
                ui: "gray",
                title: "联系人",
                items: [
                    {
                        xtype: "button",
                        text: "取消",
                        action:"backButton"
                    }
                ]
            },
            {
                xtype: "searchfield",
                height:20,
                border: 1,
                margin:"5px auto 5px auto",
                style: 'border-color: #dedddd; border-style: solid;',
                inputCls: "my-searchfield",
                placeHolder: "请输入姓名"
            },
            {
                xtype: "list",
                flex: 1,
                store:"contact",
                type: 'listpaging',
                itemTpl:"<div>{username}</div>",
                autoPaging:true,
                grouped:true,
                indexBar:true,
                loadMoreText:'<p style="color: #666666; font-size: 15px">更多好友</p>',
                noMoreRecordsText: '<p style="color: #666666; font-size: 15px">没有好友了...</p>'
            }
        ]
    }

})