/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-10
 * Time: 上午11:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.Company", {
    extend: "Ext.data.Store",

    config: {
        model: "CCICloud.model.Company",
        storeId: "company",
        pageSize: 10,
        proxy: {
            type: "ajax",
            url: "company.json",
            reader: {
                type: "json",
                rootProperty: "data",
                totalProperty: "count"
            }
        }
    }
});