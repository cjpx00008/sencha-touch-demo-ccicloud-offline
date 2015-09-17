/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-7
 * Time: 下午1:55
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.WeiboDetail", {
    extend: "Ext.data.Model",

    config: {
        fields: [
            {
                name: "weiboInfo"
            },
            {
                name: "reply"
            }
        ]
    }
});