/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-6
 * Time: 下午12:59
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.send.ForwardGroup", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            forwardGroup: "forwardGroup",
            groupType: "forwardGroup #groupType",
            internalGroup: "internalGroup",
            externalGroup: "externalGroup"
        },
        control: {
            groupType: {
                toggle: "groupTypeChange"
            }
        }
    },

    groupTypeChange: function (segbutton, button, isPressed, eOpts) {
        var groupView = this.getForwardGroup(),
            internalGroup = this.getInternalGroup() ? this.getInternalGroup() : Ext.create("CCICloud.view.home.InternalGroup"),
            externalGroup = this.getExternalGroup() ? this.getExternalGroup() : Ext.create("CCICloud.view.home.ExternalGroup"),
            internalStore = internalGroup.getStore("internalGroup"),
            externalStore = externalGroup.getStore("externalGroup");


        if (isPressed == true && button.getText() == "内部") {
            internalGroup.setMode("MULTI");
            internalGroup.setOnItemDisclosure(true);
            internalGroup.setPreventSelectionOnDisclose(false);
            internalGroup.setItemTpl("<div style='font-size: 0.9em'><img src='resources/images/list-group.png' style='vertical-align: middle; margin-right:10px '/>{name}</div>");
            internalStore.load();
            groupView.animateActiveItem(internalGroup, {type: "slide", direction: "right"})
        }
        else if (isPressed == true && button.getText() == "外部") {
            externalGroup.setMode("MULTI");
            externalGroup.setOnItemDisclosure(true);
            internalGroup.setPreventSelectionOnDisclose(false);
            externalGroup.setItemTpl("<div style='font-size: 0.9em'><img src='resources/images/list-group.png' style='vertical-align: middle; margin-right:10px '/>{name}</div>");
            externalStore.load();
            groupView.animateActiveItem(externalGroup, {type: "slide", direction: "left"})
        }
    }
});