/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-19
 * Time: 下午1:21
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.Main", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            main: "main",
            title: "home titlebar",
            backButton: "button[action=backButton]"
        },
        control: {
            backButton: {
                tap: "doBack"
            }
        },
//        before: {
//            showHome: "ensureHomeStoreLoad",
//            showByCategory: "ensureHomeStoreLoad",
//            showGroupCategory: "ensureGroupStoreLoad"
//        },
        routes: {
            "home": "showHome",
            "pic": "showPic",
            "selectAt": "showSelectAt",
            "forwardGroup": "showForwardGroup",
            "editInfo": "showInfoEdit",
            'switchCompany': "showCompanyList",
            "category": "showCategory",
            "imgPreview": "showImg",
            "about": "showAbout",
            "category/group": "showGroupCategory",
            "category/:id": "showByCategory",
            "send/:id": "showSendView",
            "userInfo/:id": "showUserById",
            "weiboDetail/:id": "showWeiboDetail",
            "infoList/:id": "showInfoList"
        }
//        stack: []
    },

//    ensureHomeStoreLoad: function (action) {
//        var store = Ext.getStore("weiboStore");
//        if (store.data.all.length) {
//            action.resume();
//        } else {
//            store.on('load', function () {
//                action.resume();
//            }, this, {
//                single: true
//            });
//        }
//    },
//
//    ensureGroupStoreLoad: function (action) {
//        var store = Ext.getStore("internalGroup");
//        if (store.data.all.length) {
//            action.resume();
//        } else {
//            store.on('load', function () {
//                action.resume();
//            }, this, {
//                single: true
//            });
//        }
//    },

    //显示主页微博信息
    showHome: function () {
        var store = Ext.getStore("weiboStore"),
            titlebar = this.getTitle();
        store.load({
            params: {"userId": "1"}
        });
        store.on('load', function () {
            this.animationControl("viewTab");
            if (titlebar) {
                titlebar.setTitle("所有动态");
            }
        }, this, {
            single: true
        });
    },

    //显示分类
    showCategory: function () {
        this.animationControl("category");
    },

    //显示群组分类
    showGroupCategory: function () {
        var internalGroup = Ext.widget("internalGroup"),
            store = internalGroup.getStore("internalGroup");
        store.load();
        store.on('load', function () {
            this.animationControl("groupCategory");
            Ext.ComponentQuery.query("groupCategory")[0].setActiveItem(internalGroup);
        }, this, {
            single: true
        });
    },

    //根据分类展示微博信息
    showByCategory: function (id) {
        var store = Ext.getStore("weiboStore"),
            titlebar = this.getTitle(),
            title = null;
        switch (id) {
            case "attention":
                title = "我关注的";
                break;
            case "join":
                title = "我参与的";
                break;
            case "notice":
                title = "公告";
                break;
        }
        if (titlebar) {
            titlebar.setTitle(title);
        }
        store.load({
            params: {userId: "1", type: id}
        });
        store.on('load', function () {
            this.animationControl("viewTab");
        }, this, {
            single: true
        });
    },

    showSendView: function (id) {
        var view = "send",
            type = id;
        if (type == "default") {
            this.animationControl(view);
        }
        else {
            var forwardView = Ext.ComponentQuery.query(view)[0],
                titlebar = forwardView.down("titlebar"),
                toolbar = forwardView.down("toolbar"),
                data = forwardView.getData(),
                textarea = forwardView.down("textareafield"),
                textContent = textarea.getValue();

            toolbar.remove(toolbar.down("#showPic"));
            toolbar.remove(toolbar.down("#showCam"));
            if (type == "forward" && !toolbar.down("#forwardScope")) {
                toolbar.add(forwardView.getForward());
                titlebar.setTitle("转发");
            }
            else if (type == "reply") {
                titlebar.setTitle("回复");
                textarea.setPlaceHolder("");
            }
            if (!textContent && data.username) {
                textarea.setValue("@" + data.username + ":");
                forwardView.setDefaultText("@" + data.username + ":");
            }
            this.animationControl(forwardView);
        }
    },

    showPic: function () {
        var view = "detailPic";
        this.animationControl(view);
    },

    showSelectAt: function () {
        var store = Ext.getStore("contact");
        store.load({
            params: {
                userId: "1"
            }
        });
        store.on('load', function () {
            this.animationControl("atSelect");
        }, this, {
            single: true
        });
    },

    showUserById: function (id) {
        var view = "userInfo",
            main = this.getMain(),
            that = this,
            userInfoView = Ext.widget("userInfo");
        main.setMasked({
            xtype: "loadmask",
            message: "努力加载中..."
        });
        Ext.Ajax.request({
            url: "userInfo.json",
            timeout: 10000,
            method: "get",
            params: {
                userId: "1"
            },
            success: function (response) {
                main.unmask();
                var obj = Ext.decode(response.responseText);
                userInfoView.setData(obj.data);
                userInfoView.down("titlebar").setTitle(obj.data.username);
                that.animationControl(view);
            },
            failure: function () {
                main.unmask();
                Ext.Msg.alert("提示信息", "数据请求失败");
            }
        })
    },

    showForwardGroup: function () {
        var internalGroup = Ext.widget("internalGroup"),
            store = internalGroup.getStore("internalGroup");
        internalGroup.setMode("MULTI");
        internalGroup.setOnItemDisclosure(true);
        internalGroup.setItemTpl("<div style='font-size: 0.9em'><img src='resources/images/list-group.png' style='vertical-align: middle; margin-right:10px '/>{name}</div>");
        store.load();
        store.on('load', function () {
            this.animationControl("forwardGroup");
            Ext.ComponentQuery.query("forwardGroup")[0].setActiveItem(internalGroup);
        }, this, {
            single: true
        });
    },

    showWeiboDetail: function (id) {
        var weiboDetail = Ext.create("CCICloud.view.home.WeiboDetail"),
            store = weiboDetail.getStore();
        store.load({
            params: {
                userId: "1",
                weiboId: "id"
            }
        });
        store.on('load', function () {
            this.animationControl(weiboDetail);
        }, this, {
            single: true
        });
    },

    showInfoEdit: function () {
        var view = Ext.create("CCICloud.view.config.EditInfo"),
            main = this.getMain(),
            that = this;
        main.setMasked({
            xtype: "loadmask",
            message: "努力加载中..."
        });
        Ext.Ajax.request({
            params: {
                userId: "1"
            },
            url: "userInfo.json",
            timeout: 10000,
            method: "get",
            success: function (response) {
                main.unmask();
                var obj = Ext.decode(response.responseText);
                view.down("#userInfo").setData(obj.data);
                view.setValues(obj.data);
                that.animationControl(view);
            },
            failure: function () {
                main.unmask();
                Ext.Msg.alert("提示信息", "数据请求失败");
            }
        });
    },

    showInfoList: function (id) {
        var view = Ext.create("CCICloud.view.info.InfoList"),
            store = view.getStore(),
            titlebar = view.down("titlebar");
        switch (id) {
            case "mentioned":
                titlebar.setTitle("提到我的");
                view.setType("mentioned");
                break;
            case "reply":
                titlebar.setTitle("回复我的");
                view.setType("reply");
                break;
            case "like":
                titlebar.setTitle("赞我的");
                view.setType("like");
                break;
            case "systemNotice":
                titlebar.setTitle("系统消息");
                view.setType("systemNotice");
                break;
            case "notice":
                titlebar.setTitle("系统消息");
                view.setType("notice");
                break;
        }
        store.load({
            params: {
                userId: "1",
                type: id
            }
        });
        store.on('load', function () {
            this.animationControl(view);
        }, this, {
            single: true
        });
    },

    showCompanyList: function () {
        var view = Ext.create("CCICloud.view.config.SwitchCompany"),
            store = view.getStore();
        store.load({
            params: {
                userId: "userId"
            },
            callback: function (records, operation, success) {
                // the operation object contains all of the details of the load operation
                Ext.each(records, function (record, index, recordItself) {
                    if (record.get("status")) {
                        view.select(index, true, false);
                        return;
                    }
                });
                this.animationControl(view);
            },
            scope: this
        })
    },

    //微博图片预览
    showImg: function () {
        var view = "picPreview";
        this.animationControl(view);
    },

    showAbout: function () {
        this.animationControl("about");
    },

    /**
     * 控制路由动画
     * @param url 路由操作url
     * @param view 跳转视图
     */
    animationControl: function (view) {
//        var stack = this.getStack(), //获取模拟堆栈
//            previousStackItem = stack[stack.length - 2],//从堆栈获取上次操作记录
        var main = this.getMain(),//获取顶层容器
            animation = main.getLayout().getAnimation(),
            transformView = null;//获取顶层容器动画
        //判断操作是否是执行返回操作
//        previousStackItem && previousStackItem == url &&
        if (animation.isAnimation) {
            if (!Global.getIsAdd()) {
//            stack.pop();//将记录移除
                animation.setReverse(true);//动画反转
            }
            else {
                animation.setReverse(false); //取消动画反转
//            stack.push(url); //将操作记录压入堆栈
            }
        }
        if (Ext.isString(view)) {
            transformView = Ext.ComponentQuery.query(view);//当前组件在组件管理器中的值
            if (transformView && transformView.length) {
                view = transformView[0];
            }
        }

        main.setActiveItem(view);//界面跳转
        Global.setIsAdd(false);
    },

    //返回按钮控制
    doBack: function (button) {
        history.back();
    }

});