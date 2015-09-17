/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-30
 * Time: 上午11:08
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.PicContainer", {
    extend: "Ext.Container",
    alias: "widget.picContainer",

    config: {
        id: "picContainer",
        height: "150px",
        defaults: {
            style: "float:left",
            width: "18%",
            height: 67,
            margin: "3px"
        },
        items: [
            {
                xtype: "img",
                action: "addImg",
                border: 2,
                style: "border-color: #e2e2e2; border-style: dashed; float:left",
                src: "resources/images/addImg.png"
            }
        ]
    }

});