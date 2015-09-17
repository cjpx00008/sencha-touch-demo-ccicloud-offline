/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-2
 * Time: 下午12:53
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.contacts.UserInfo", {
    extend: "Ext.Container",
    alias: "widget.userInfo",

    config: {
        items: [
            {
                xtype: "titlebar",
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
            }
        ],
        tpl: [
            "<div class='userInfo clearfix'>",
               "<div class='user-face'>",
                   "<img src='{userHead}' width='102' height='102'/>",
               "</div>",
               "<div class='user-info'>",
                   "<span class='user-name'>{username}</span>",
                   "<tpl if = 'attentionStatus == 0'>",
                   "<span class='user-attention'>+ 关注</span>",
                   "<tpl else>",
                   "<span class='user-attention'>已关注</span>",
                   "</tpl>",
               "</div>",
                "<div class='user-info'>",
                   "<span class='user-fans fl-l'>粉丝({userFans})</span>",
                   "<span class='user-interest fl-r'>关注({userInterest})</span>",
                "</div>",
            "</div>",
//            "<div class='userLev clearfix'>",
//                "<span class='user-fans fl-l'>粉丝({userFans})</span>",
//                "<span class='user-interest fl-r'>关注({userInterest})</span>",
//            "</div>",
            "<div class='userLev clearfix'>",
                "<span class='user-label'>手机</span>",
                "<span class='user-field'>{mobile}</span>",
                "<span class='user-label'>电话</span>",
                "<span class='user-field'>{tel}</span>",
            "</div>",
            "<div class='userLev clearfix'>",
                "<span class='user-label'>部门</span>",
                "<span class='user-field'>{department}</span>",
                "<span class='user-label'>职位</span>",
                "<span class='user-field'>{office}</span>",
                "<span class='user-label'>邮箱</span>",
                "<span class='user-field'>{email}</span>",
            "</div>"
        ].join("")
    }

});