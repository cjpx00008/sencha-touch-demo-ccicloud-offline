/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-24
 * Time: 下午2:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.home.Category", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            title:"home titlebar",
            category: "category",
            groupCategory: "groupCategory",
            internalGroup: "internalGroup",
            innerInternalGroup: "groupCategory internalGroup",
            externalGroup: "externalGroup",
            innerExternalGroup:"groupCategory externalGroup",
            groupType: "groupCategory #groupType"
        },
        control: {
            groupType: {
                toggle: "groupTypeChange"
            },
            category: {
                itemtap: "chooseCategory",
                hide: "doHide"
            },
            groupCategory: {
                hide:"doHide"
            },
            innerInternalGroup: {
                itemtap: "chooseCategory"
            },
            innerExternalGroup: {
                itemtap: "chooseCategory"
            }
        }
    },

    doHide: function(c,e){
        c.destroy();
    },

    groupTypeChange: function (segbutton, button, isPressed, eOpts) {
        var groupView = this.getGroupCategory(),
            internalStore = Ext.getStore("internalGroup"),
            externalStore = Ext.getStore("externalGroup");

        if (isPressed == true && button.getText() == "内部") {
            internalStore.load();
            groupView.animateActiveItem("internalGroup", {type: "slide", direction: "right"})
        }
        else if (isPressed == true && button.getText() == "外部") {
            externalStore.load();
            groupView.animateActiveItem("externalGroup", {type: "slide", direction: "left"})
        }
    },

    chooseCategory: function(list, index, target, record, e, eOpts){
          var type = record.get("type");
          Global.setIsAdd(true);
          if(type == "all"){
              this.redirectTo("home");
          }
          else{
              this.redirectTo("category/"+type);
          }
    }
})