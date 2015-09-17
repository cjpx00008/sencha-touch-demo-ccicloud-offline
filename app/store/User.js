/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-24
 * Time: 下午3:57
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.User",{
    extend:"Ext.data.Store",

    config:{
        model:"CCICloud.model.User",
        storeId: "userAccount",
        proxy: {
            type: "localstorage",
            id: "userAccount"
        }
    }
});