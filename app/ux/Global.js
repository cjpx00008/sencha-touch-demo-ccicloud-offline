/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-24
 * Time: 下午5:01
 * To change this template use File | Settings | File Templates.
 */
Ext.define("Ext.ux.Global", {
    alternateClassName: "Global",
    singleton: true,

    config: {
        isAdd: false,
        version: 1.0,
        images: []
    },

    constructor: function (config) {
        this.initConfig(config);
    }
});