/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-26
 * Time: 下午4:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.Send", {
    extend: "Ext.Container",
    alias: "widget.send",

    config: {
        type: "default",
        defaultText:"",
        forward: [
            {
                xtype: "spacer"
            },
            {
                xtype: "button",
                text: "转发范围",
                iconCls: "compose",
                itemId:"forwardScope"
            }
        ],
        listeners: {
            initialize: function () {
                var textarea = this.down("textareafield");
                textarea.element.on("drag", function (e) {
                    var t = textarea.element.down('textarea');
                    t.dom.scrollTop -= (e.deltaY / 2.2);
                });
            },
//           show: function(){
//               var sheet = this.element.down(".x-dock-body"),
//                   textarea = this.down("textareafield"),
//                   toolbar = sheet.down(".x-toolbar");
//               console.log(sheet.getHeight()+"==="+sheet.getWidth());
//               console.log(toolbar.getHeight()+"==="+toolbar.getWidth());
//               textarea.setHeight(sheet.getHeight() - toolbar.getHeight());
//               textarea.focus();
//           },
            resize: function () {
                var sheet = this.element.down(".x-dock-body"),
                    textarea = this.down("textareafield"),
                    toolbar = sheet.down(".x-toolbar"),
                    picContainer = sheet.down("#picContainer");
                if (!picContainer) {
                    textarea.setHeight(sheet.getHeight() - toolbar.getHeight());
                }
                else {
                    textarea.setHeight(sheet.getHeight() - toolbar.getHeight() - picContainer.getHeight());
                }
            }
        },
        items: [
            {
                xtype: "titlebar",
                ui: "gray",
                title: "发分享",
                items: [
                    {
                        xtype: "button",
                        text: "取消",
                        itemId: "cancel"
                    },
                    {
                        xtype: "button",
                        text: "发送",
                        itemId: "sendButton",
                        align: "right"
                    }
                ]
            },
            {
                xtype: "textareafield",
                itemId: "textContent",
                minHeight: 40,
                draggable: false,
                clearIcon: false,
                placeHolder: "大家来聊点工作吧"
            },
            {
                xtype: "toolbar",
                docked: "bottom",
                cls: "send-bottom",
                ui: "gray",
                items: [
                    {
                        xtype: "button",
                        ui: "plain",
                        width: "22%",
                        iconCls: "icon-face",
                        itemId: "showFace"
                    },
                    {
                        xtype: "button",
                        ui: "plain",
                        width: "22%",
                        iconCls: "icon-pic",
                        itemId: "showPic"
                    },
                    {
                        xtype: "button",
                        ui: "plain",
                        width: "22%",
                        iconCls: "icon-cam",
                        itemId: "showCam"
                    },
                    {
                        xtype: "button",
                        ui: "plain",
                        width: "22%",
                        iconCls: "icon-a",
                        itemId: "showAt"
                    }
                ]
            },
            {
                xtype: "container",
                itemId: "lengthContainer",
                docked: "bottom",
                tpl: ["<div style='background-color: #fff; width: 100%; height: 100%'>",
                    "<tpl if='remain &lt; 0 '>",
                    "<span style='float:right; margin-right: 10px; color: #ba0a0a'>{remain}</span>",
                    "<tpl else>",
                    "<span style='float:right; margin-right: 10px'>{remain}</span>",
                    "</tpl>",
                    "</div>"]
            }
        ]
    }
});