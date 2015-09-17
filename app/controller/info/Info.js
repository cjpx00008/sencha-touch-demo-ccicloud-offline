/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-9
 * Time: 下午4:36
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.info.Info", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            infoView: "info",
            infoList: "infoList"
        },
        control: {
            infoView: {
                itemtap: "infoTypeTap"
            },
            infoList: {
                itemtap: "showInfoDetail"
            }
        }
    },

    infoTypeTap: function (list, index, target, record, e, eOpts) {
        Global.setIsAdd(true);
        this.redirectTo("infoList/" + record.get("type"));
    },

    showInfoDetail: function (list, index, target, record, e, eOpts) {
        var type = list.getType();
        if (type == "systemNotice") {
              return;
        }
        else{
            Global.setIsAdd(true);
            this.redirectTo("weiboDetail/" + record.get("weiboId"));
        }
    }
});