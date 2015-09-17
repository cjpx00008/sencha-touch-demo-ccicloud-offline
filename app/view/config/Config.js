/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-7
 * Time: 下午2:26
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.config.Config", {
    extend: "Ext.Container",
    alias: "widget.config",

    config: {
        scrollable: true,
        flex: 1,
        listeners: {
            show: function () {
                var sheet = this.element.down(".userInfo"),
                    userinfo = sheet.query(".user-info"),
                    width = sheet.getWidth() - 122;
                console.log(userinfo);
                userinfo[0].style.width = width;
                userinfo[1].style.width = width;
            }
        },
        items: [
            {
                xtype: "titlebar",
                ui: "gray",
                title: "任曦"
            },
            {
                xtype: "container",
                tpl: [
                    "<div class='userInfo clearfix'>",
                    "<div class='user-face'>",
                    "<img src='{userHead}' />",
                    "</div>",
                    "<div class='user-info'>",
                    "<span class='user-name'>{username}</span>",
                    "</div>",
                    "<div class='user-info'>",
                    "<span class='user-department'>{department}</span>",
                    "<span class='user-office'>{office}</span>",
                    "</div>",
                    "</div>"
                ].join(""),
                data: {
                    "username": "任曦",
                    "userHead": "resources/images/userInfo-head.png",
                    "userFans": 10,
                    "userInterest": 12,
                    "department": "产品中心",
                    "office": "产品经理",
                    "email": "chenxi@jsruyun.com",
                    "attentionStatus": 0
                }
            },
            {
                xtype: "button",
                text: "切换企业用户",
                margin: "10px auto",
                itemId: "switchCompany",
                ui: "plain",
                border: 1,
                width: "97%",
                height: 55,
                iconCls: "right-blue-arrow",
                labelCls: "my-button",
                style: "border:1px solid #dedede; webkit-border-radius: none; -moz-border-radius: 0; -ms-border-radius: 0; -o-border-radius: 0; border-radius: 0;"
            },
            {
                xtype: "togglefield",
                width: "97%",
                labelWidth: "50%",
                margin: "0 auto 10px",
                labelCls: "label-toggle",
                itemId: "beep",
                border: 1,
                style: "border: 1px solid #dedede",
                label: "声音"
            },
            {
                xtype: "togglefield",
                width: "97%",
                labelWidth: "50%",
                margin: "0 auto 10px",
                labelCls: "label-toggle",
                itemId: "vibrate",
                border: 1,
                style: "border: 1px solid #dedede",
                label: "震动"
            },
            {
                xtype: "togglefield",
                labelWidth: "50%",
                width: "97%",
                margin: "0 auto 10px",
                labelCls: "label-toggle",
                itemId: "push",
                border: 1,
                style: "border: 1px solid #dedede",
                label: "接受信息推送"
            },
//            {
//                xtype: "button",
//                text: "检查更新",
//                margin: "10px auto",
//                ui: "plain",
//                itemId: "updateCheck",
//                border: 1,
//                width: "97%",
//                height: 55,
//                labelCls: "my-button",
//                style: "border:1px solid #dedede; webkit-border-radius: none; -moz-border-radius: 0; -ms-border-radius: 0; -o-border-radius: 0; border-radius: 0;"
//            },
            {
                xtype: "button",
                text: "关于",
                margin: "10px auto",
                ui: "plain",
                border: 1,
                width: "97%",
                height: 55,
                itemId:"showAbout",
                labelCls: "my-button",
                style: "border:1px solid #dedede; webkit-border-radius: none; -moz-border-radius: 0; -ms-border-radius: 0; -o-border-radius: 0; border-radius: 0;"
            },
            {
                xtype: "button",
                text: "退出登录",
                margin: "0 auto",
                width: "97%",
                itemId: "logout",
                ui: "logout",
                height: 45,
                style: "border:none; webkit-border-radius: none; -moz-border-radius: 0; -ms-border-radius: 0; -o-border-radius: 0; border-radius: 0;"
            }
        ]
    }
});