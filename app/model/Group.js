/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-26
 * Time: 上午9:41
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.Group", {
    extend: "Ext.data.Model",

    config: {
        idProperty: "groupId",
        fields: [
            {
                name: "name"
            },
            {
                name: "groupId"
            }
        ]
    }
})