/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-9
 * Time: 下午3:22
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.model.Info", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            {
                name: "infoId"
            },
            {
                name: "infoContent"
            },
            {
                name: "createTime"
            },
            {
                name: "type"
            }
        ]
    }
});