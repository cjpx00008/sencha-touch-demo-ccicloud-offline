/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-19
 * Time: 下午1:46
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.User", {
    extend: "Ext.data.Model",

    config: {
        identifier:"uuid",
        fields: [
            {
                name: "username"
            },
            {
                name: "userpassword"
            },
            {
                name:"loginTime"
            }
        ],

        validations: [
            {
                field: "username",
                type: "presence",
                message: "用户名不能为空"
            },
            {
                field: "username",
                type: "email",
                message: "用户名格式不正确"
            },
            {
                field: "userpassword",
                type: "presence",
                message: "用户密码不能为空"
            }
        ]
    }
})