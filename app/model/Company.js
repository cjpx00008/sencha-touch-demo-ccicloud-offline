/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-10
 * Time: 上午11:15
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.Company", {
    extend: "Ext.data.Model",

    config: {
        fields: [
            {
                name: "companyId"
            },
            {
                name: "companyName"
            },
            {
                name: "status", type:"int"
            }
        ]
    }
});