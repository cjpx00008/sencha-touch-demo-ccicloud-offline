/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-15
 * Time: 下午4:20
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.Config", {
    extend: "Ext.data.Model",

    config: {
        identifier:"uuid",
        fields: [
            {
                name: "beep"
            },
            {
                name: "vibrate"
            },
            {
                name: "push"
            }
        ]
    }
});