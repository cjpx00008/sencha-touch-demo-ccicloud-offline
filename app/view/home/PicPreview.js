/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-13
 * Time: 下午1:32
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.home.PicPreview", {
    extend: "Ext.Carousel",
    alias: "widget.picPreview",

    config: {
        style: "background:#19191a",
        indicator: false,
        border: 0,
        items: [
            {
                xtype: "container",
                style: "background-color: #19191a",
                tpl: "<div style='font-size: 0.7em; text-align: center; height: 40px; line-height: 40px; color: #fff'>{index}/{total}</div>",
                docked: "bottom"
            }
        ]
    }
});