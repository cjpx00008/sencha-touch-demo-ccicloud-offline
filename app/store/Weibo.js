/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-25
 * Time: 上午10:32
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.Weibo", {
    extend: "Ext.data.Store",

    config: {
        storeId: "weiboStore",
        model: "CCICloud.model.Weibo",
        pageSize: 5,
        proxy: {
            type: "ajax",
            url: "weibo.json",
            reader: {
                type: 'json',
                rootProperty: 'data',
                totalProperty: 'count'
            }
        }

    }
})
