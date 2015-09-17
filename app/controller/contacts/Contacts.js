/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-2
 * Time: 上午9:18
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.contacts.Contacts", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            userInfo: "userInfo",
            contactList: "contacts list",
            searchContact: "contacts searchfield"
        },
        control: {
            userInfo: {
                initialize: "userInfoInit"
            },
            contactList: {
                itemtap: "contactSelect"
            },
            searchContact: {
                keyup: "searchContact"
            }
        }
    },

    userInfoInit: function (container) {
        container.element.on({
            delegate: ".user-attention",
            tap: "toggleAttention",
            scope: this
        })
    },

    contactSelect: function (list, index, target, record, e, eOpts) {
        Global.setIsAdd(true);
        this.redirectTo("userInfo/" + record.get("userId"));
    },

    searchContact: function (searchfield) {
        var keyValue = searchfield.getValue(),
            store = Ext.getStore("contact");
        store.load({
            params: {
                userId: "1",
                keyValue: keyValue
            }
        });
    },

    toggleAttention: function (e) {
        var span = e.target,
            innerText = span.innerText,
            userInfo = this.getUserInfo(),
            userData = userInfo.getData();
        if(innerText == "+ 关注"){
            span.style.color = "#adadad";
            span.innerText = "已关注";
            userData.userFans += 1;
            userData.attentionStatus = 1;
            userInfo.setData(userData);
        }
        else if(innerText == "已关注"){
            span.style.color = "#159ae5";
            span.innerText = "+ 关注";
            userData.userFans -= 1;
            userData.attentionStatus = 0;
            userInfo.setData(userData);
        }
    }

});