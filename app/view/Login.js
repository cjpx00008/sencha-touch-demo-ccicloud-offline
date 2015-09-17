/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-19
 * Time: 上午9:30
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.Login", {
    extend: "Ext.form.Panel",
    alias: "widget.login",

    config: {
        items: [
            {
                xtype: "img",
                src: "resources/images/ccicloud.png",
                width: 170,
                height: 26,
                margin: "1.5em auto 1.7em auto"
            },
            {
                xtype: "fieldset",
                style:"margin-bottom: 1.2em",
                defaults: {
                    labelWidth: "15%"
                },
                items: [
                    {
                        xtype: "textfield",
                        labelCls: "label-user",
                        placeHolder: "用户名",
                        name: "username",
                        label: " "
                    },
                    {
                        xtype: "passwordfield",
                        labelCls: "label-password",
                        name: "userpassword",
                        placeHolder: "密码",
                        label: " "
                    }
                ]
            },
            {
                xtype: "button",
                text: "登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录",
                itemId: "login",
                ui: "login",
                margin: "0 0.5em 0 0.5em",
                height: 45,
                style: "border:none; border-radius:0; -webkit-border-radius:0"
            }

        ]
    }
})