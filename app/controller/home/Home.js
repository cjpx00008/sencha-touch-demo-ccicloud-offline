/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-25
 * Time: 下午4:34
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.home.Home", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            main: "main",
            viewTab: "viewTab",
            home: "home",
            send: "send",
            picPreview: "picPreview",
            imgView : "picPreview img",
            toCategory: "home #toCategory",
            toSend: "home #toSend"
        },
        control: {
            home: {
                initialize: "homeInit",
                itemtap: "showDetail"
            },
            picPreview: {
                hide: "hideImg",
                activeitemchange: "imgChange"
            },
            imgView: {
                tap: "closeImg"
            },
            toCategory: {
                tap: "toCategory"
            },
            toSend: {
                tap: "toSend"
            }
        }
    },

    homeInit: function (container) {
        console.log("homeInit");
        var el = container.element;
        //点赞操作
        el.on({
            delegate: ".wb-attention",
            tap: "attentionTap",
            scope: this
        });

        //转发操作
        el.on({
            delegate: ".wb-forwarding",
            tap: "forwardTap",
            scope: this
        });

        //回复
        el.on({
            delegate: ".wb-reply",
            tap: "replyTap",
            scope: this
        });

        //点击图片
        el.on({
            delegate: "img",
            tap: "imgTap",
            scope: this
        })

    },

    attentionTap: function (e) {
        var record = this.getHomeData(e),
            target = e.target,
            likeStatus = record.get("likeStatus"),
            like = record.get("like");
        if (likeStatus) {
            record.set("like", like - 1);
            record.set("likeStatus", 0);
        }
        else {
            record.set("like", like + 1);
            record.set("likeStatus", 1);
        }
        record = null;
        e.stopPropagation();
    },

    forwardTap: function (e) {
        var record = this.getHomeData(e),
            username = record.get("username"),
            weiboId = record.get("weiboId"),
            forwarding = Ext.widget("send");
        forwarding.setData({username: username, weiboId: weiboId});
        Global.setIsAdd(true);
        this.redirectTo("send/forward");
        e.stopPropagation();
    },

    replyTap: function (e) {
        var record = this.getHomeData(e),
            weiboId = record.get("weiboId");
        Global.setIsAdd(true);
        this.redirectTo("weiboDetail/" + weiboId);
        e.stopPropagation();
    },

    imgTap: function (e) {
        var record = this.getHomeData(e),
            index = e.target.getAttribute("data-media-index"),
            OriginalMedia = record.get("media") ? record.get("media") : [],
            forward = record.get("forward"),
            forwardMedia = record.get("forward") ? record.get("forward").media : [],
            view = Ext.create("CCICloud.view.home.PicPreview"),
            media = null,
            length = 0,
            imgView = null;
        if (OriginalMedia.length) {
            media = OriginalMedia;
            length = OriginalMedia.length;
        }
        else if (forwardMedia.length) {
            media = forwardMedia;
            length = forwardMedia.length;
        }
        Ext.Array.each(media, function (obj, index, itself) {
            imgView = Ext.create("Ext.Img", {src: obj["h-src"]});
            view.add(imgView);
        });
        view.setActiveItem(index - 1);
        view.down("container").setData({index:index, total:length});
        Global.setIsAdd(true);
        this.redirectTo("imgPreview");
        e.stopPropagation();
    },

    imgChange: function(carousel, value, oldValue, eOpts) {
        carousel.down("container").setData({index:carousel.getActiveIndex() + 1,total:carousel.getItems().length - 1});
    },

    hideImg: function (container) {
        container.destroy();
    },

    closeImg: function () {
        history.back();
        console.log("imgTap");
    },

    //获取点击列表的信息
    getHomeData: function (e) {
        var item = Ext.getCmp(Ext.get(e.getTarget()).up('.x-list-item').id),
            index = item.$dataIndex,
            store = this.getHome().getStore(),
            record = store.getAt(index),
            e = null;
        return record;
    },

    showDetail: function (list, index, target, record, e, eOpts) {
        Global.setIsAdd(true);
        this.redirectTo("weiboDetail/" + record.get("weiboId"));
    },

    toCategory: function () {
        Global.setIsAdd(true);
        this.redirectTo("category");
    },

    toSend: function () {
        Global.setIsAdd(true);
        this.redirectTo("send/default");
    }
})