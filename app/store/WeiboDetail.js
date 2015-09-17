/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-7
 * Time: 下午1:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.WeiboDetail",{
    extend:"Ext.data.Store",

    config:{
        model:"CCICloud.model.WeiboDetail",
        storeId:"weiboDetail",
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: "weiboDetail.json",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'count'
            }
        }
    }
});