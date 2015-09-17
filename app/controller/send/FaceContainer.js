/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-30
 * Time: 上午9:58
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.send.FaceContainer", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            send: "send",
            faceContainer: "faceContainer",
            textarea:"send textareafield"
        },
        control: {
            faceContainer: {
                initialize: "initialize",
                show: "show"
            }
        }
    },

    initialize: function (container, eOpts) {
        console.log("faceInit");
        container.element.on({
            delegate: "li",
            tap: "faceInsert",
            scope: this
        });
    },

    faceInsert: function (e) {
        var target = e.target,
            text = "",
            li = null,
            textarea = this.getTextarea();
        if(e.target.localName == "img") {
           li = e.target.parentNode;
        }
        if (e.target.localName == "li") {
            li = e.target;
        }
        text = li.getAttribute("data-text");
        textarea.setValue(textarea.getValue() + text);
        this.getSend().removeAt(2);
    }
});