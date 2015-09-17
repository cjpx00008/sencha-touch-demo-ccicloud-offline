/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-9
 * Time: 下午3:28
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.Info", {
    extend: "Ext.data.Store",

    config: {
        model: "CCICloud.model.Info",
        storeId: "info",
        pageSize: 10,
        proxy: {
            type: "ajax",
            url: "info.json",
            reader: {
                type: "json",
                rootProperty: "data",
                totalProperty: "count"
            }
        }
    }
});