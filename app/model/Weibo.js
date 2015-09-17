/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-25
 * Time: 上午10:16
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.Weibo", {
    extend: "Ext.data.Model",

    config: {
        idProperty:"weiboId",
        fields: [
            {
                name:"weiboId"
            },
            {
                name: "userhead"
            },
            {
                name: "username"
            },
            {
                name: "userId"
            },
            {
                name: "createTime"
            },
            {
                name: "content"
            },
            {
                name: "forward"
            },
            {
                name: "media"
            },
            {
                name: "like", type:"int"
            },
            {
                name: "likeStatus"
            }
        ]
    }
})