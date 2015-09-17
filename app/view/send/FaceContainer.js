/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-27
 * Time: 下午4:53
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.send.FaceContainer", {
    extend: "Ext.Container",
    alias: "widget.faceContainer",

    config: {
        tpl: "<div class='clearfix'><ul><tpl for='faces'><li data-text='[{text}]' style='float: left; width:30px; margin-top: 10px; margin-left: 6px '><img src='{url}'/></li></tpl></ul></div>",
        docked: "bottom",
        data: {
            faces: [
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"大笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"傻笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                },
                {
                    url: "resources/images/face/smilea_thumb.gif",
                    text:"呆笑"
                }

            ]
        }
    },

    faceInsert: function(li){
          console.log("点击表情")
    }
})