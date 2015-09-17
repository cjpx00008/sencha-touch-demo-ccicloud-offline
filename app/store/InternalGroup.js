/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-26
 * Time: 上午9:44
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.InternalGroup", {
    extend: "Ext.data.Store",

    config: {
        model:"CCICloud.model.Group",
        storeId: "internalGroup",
        pageSize: 10,
        proxy: {
            type: "ajax",
            url: "internalGroup.json",
            reader: {
                type: "json",
                rootProperty: "data",
                totalProperty: "count"
            }
        }
    }
})