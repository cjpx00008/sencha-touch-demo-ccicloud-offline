/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-15
 * Time: 下午4:28
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.store.Config",{
    extend:"Ext.data.Store",

    config:{
        model:"CCICloud.model.Config",
        storeId: "config",
        proxy: {
            type: "localstorage",
            id: "config"
        }
    }
});