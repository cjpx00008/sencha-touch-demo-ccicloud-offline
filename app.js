/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when it performs code generation tasks such as generating new
 models, controllers or views and when running "sencha app upgrade".

 Ideally changes to this file would be limited and most work would be done
 in other places (such as Controllers). If Sencha Cmd cannot merge your
 changes and its generated code, it will produce a "merge conflict" that you
 will need to resolve manually.
 */

Ext.Loader.setPath({
    'Ext.ux': 'app/ux'
});

//Ext.Loader.setConfig({
//    disableCaching:false
//});

Ext.application({
    name: 'CCICloud',

    requires: [
        'Ext.MessageBox',
        'Ext.field.Password',
        'Ext.form.FieldSet',
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.SegmentedButton',
        'Ext.plugin.ListPaging',
        'Ext.data.proxy.LocalStorage',
        'Ext.plugin.PullRefresh',
        'Ext.field.Search',
        'Ext.ux.Global',
        'Ext.field.Toggle'
    ],

    views: [
        'Main',
        'Login',
        'ViewTab',
        'home.Home',
        'home.Category',
        'home.GroupCategory',
        'home.InternalGroup',
        'home.ExternalGroup',
        'home.WeiboDetail',
        'home.PicPreview',
        'send.Send',
        'send.FaceContainer',
        'send.PicContainer',
        'send.DetailPic',
        'send.AtSelect',
        'send.ForwardGroup',
        'contacts.Contacts',
        'contacts.UserInfo',
        'info.Info',
        'info.InfoList',
        'config.Config',
        'config.EditInfo',
        'config.SwitchCompany',
        'config.About'
    ],

    models: [
        'User',
        'Weibo',
        'WeiboDetail',
        'Group',
        'Contact',
        'Info',
        'Company',
        'Config'
    ],

    stores: [
        'User',
        'Weibo',
        'WeiboDetail',
        'InternalGroup',
        'ExternalGroup',
        'Contact',
        'Info',
        'Company',
        'Config'
    ],

    controllers: [
        'Main',
        'Login',
        'ViewTab',
        'home.Home',
        'home.Category',
        'home.WeiboDetail',
        'send.Send',
        'send.FaceContainer',
        'send.PicContainer',
        'send.ForwardGroup',
        'contacts.Contacts',
        'config.Config',
        'info.Info'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var store = Ext.getStore("config");
        console.log(store.getCount());
        if (!store.load().getCount()) {
            console.log("add");
            store.add({beep: 1, vibrate: 1, push: 1});
            store.sync();
        }
        // Initialize the main view
        Ext.Viewport.add(Ext.create('CCICloud.view.Main'));
        var MB = Ext.MessageBox;
        Ext.apply(MB, {
            OK: { text: '确&nbsp;&nbsp;&nbsp;定', itemId: 'ok', ui: 'msg' }
        });
        Ext.apply(MB, {
            YES: { text: '确定', itemId: 'yes', ui: 'msg' }
        });
        Ext.apply(MB, {
            NO: { text: '取消', itemId: 'no', ui: 'msg' }
        });
        Ext.apply(MB, {
            YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
        });
    },

    onUpdated: function () {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function (buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
