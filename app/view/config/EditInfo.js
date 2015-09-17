/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-9
 * Time: 上午9:00
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.config.EditInfo", {
    extend: "Ext.form.Panel",
    alias: "widget.editInfo",

    config: {
        lastHeight:0,
        listeners: {
           resize: function(element, eOpts ) {
               var containerView = this.down("#userInfo"),
                   titlebar = this.down("titlebar");
               if(this.down("#editButton").getText() == "保存"){
                     if(this.getLastHeight() > eOpts.height && !containerView.isHidden()){
                         containerView.hide();
//                         titlebar.hide();
                     }
                     else if (this.getLastHeight() < eOpts.height && containerView.isHidden()){
                         containerView.show();
//                         titlebar.show();
                     }
               }
               this.setLastHeight(eOpts.height);
           }
        },
        items: [
            {
                xtype: "titlebar",
                title: "个人资料",
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
                    },
                    {
                        xtype: "button",
                        align: "right",
                        text: "编辑",
                        itemId: "editButton"
                    }
                ]
            },
            {
                xtype: "container",
                hideAnimation: "fadeOut",
                showAnimation: "fade",
                itemId:"userInfo",
                tpl: [
                    "<div class='userInfo clearfix'>",
                    "<div class='user-face'>",
                    "<img src='{userHead}' width='102' height='102'/>",
                    "</div>",
                    "<div class='user-info'>",
                    "<span class='user-name'>{username}</span>",
                    "</div>",
                    "<div class='user-info'>",
                    "<span class='user-fans fl-l'>粉丝({userFans})</span>",
                    "<span class='user-interest fl-r'>关注({userInterest})</span>",
                    "</div>",
                    "</div>"]
            },
            {
                xtype: "textfield",
                border: 1,
                style: "width:97%;border-left:1px solid #e7e7e7;border-right:1px solid #e7e7e7",
                margin: "0 auto",
                readOnly: true,
                label: "手机",
                labelCls: "label-edit",
                name: "mobile"
            },
            {
                xtype: "textfield",
                border: 1,
                style: "width:97%;border-left:1px solid #e7e7e7;border-right:1px solid #e7e7e7",
                margin: "0 auto",
                readOnly: true,
                label: "电话",
                labelCls: "label-edit",
                name: "tel"
            },
            {
                xtype: "textfield",
                border: 1,
                style: "width:97%;border-left:1px solid #e7e7e7;border-right:1px solid #e7e7e7",
                margin: "0 auto",
                readOnly: true,
                label: "公司",
                labelCls: "label-edit",
                name: "company"
            },
            {
                xtype: "textfield",
                border: 1,
                style: "width:97%;border-left:1px solid #e7e7e7;border-right:1px solid #e7e7e7",
                margin: "0 auto",
                readOnly: true,
                label: "部门",
                labelCls: "label-edit",
                name: "department"
            },
            {
                xtype: "textfield",
                border: 1,
                style: "width:97%;border-left:1px solid #e7e7e7;border-right:1px solid #e7e7e7",
                margin: "0 auto",
                readOnly: true,
                label: "职位",
                labelCls: "label-edit",
                name: "office"
            },
            {
                xtype: "textfield",
                border: 1,
                style: "width:97%;border-left:1px solid #e7e7e7;border-right:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7;",
                margin: "0 auto",
                readOnly: true,
                label: "邮箱",
                labelCls: "label-edit",
                name: "email"
            }
        ]
    }
});