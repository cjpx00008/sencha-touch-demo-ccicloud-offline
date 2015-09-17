/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-31
 * Time: 上午11:25
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.Contact",{
    extend:"Ext.data.Store",

    config:{
        model:"CCICloud.model.Contact",
        storeId:"contact",
        pageSize:10,
        grouper: {
            groupFn: function(record) {
                return record.get('nameGroup');
            }
        },
        proxy: {
            type: "ajax",
            url: "contact.json",
            reader: {
                type: "json",
                rootProperty: "data",
                totalProperty: "count"
            }
        }
    }
});