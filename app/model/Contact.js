/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-31
 * Time: 上午11:23
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.Contact", {
    extend: "Ext.data.Model",

    config: {
        idProperty:"userId",
        fields: [
            {
                name: "userId"
            },
            {
                name: "username"
            },
            {
                name: "nameGroup"
            }
        ]
    }
})