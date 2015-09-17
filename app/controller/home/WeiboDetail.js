/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-8
 * Time: 上午9:51
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.home.WeiboDetail", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            weiboDetail: "weiboDetail",
            handleView: "weiboDetail #handleContainer"
        },
        control: {
            weiboDetail: {
                show: "weiboDetailShow",
                hide: "dohide"
            }
        }
    },

    weiboDetailShow: function (container) {
        var el = container.element,
            forward = el.down(".wb-forward");
        if (forward) {
            forward.on("tap", "forwardTap", this);
        }

        //详细页回复事件绑定
        el.on({
            delegate: ".c-reply",
            tap: "toReply",
            scope: this
        });
        //详细页面转发事件绑定
        el.on({
            delegate: ".c-forwarding",
            tap: "toForward",
            scope: this
        });
        //详细页面赞操作事件绑定
        el.on({
            delegate: ".c-attention",
            tap: "toggleAttention",
            scope: this
        });
        //详细页回复他人事件绑定
        el.on({
            delegate: ".reply-handle",
            tap: "replyOther",
            scope: this
        });
    },

    dohide: function (container) {
        container.destroy();
    },

    forwardTap: function (e) {
        var record = this.getWeiboDetailData(e),
            weiboId = record.get("weiboInfo").weiboId;
        Global.setIsAdd(true);
        this.redirectTo("weiboDetail/" + weiboId);
    },

    toReply: function (e) {
        var container = this.getHandleView(),
            data = container.getData(),
            forward = Ext.create("CCICloud.view.send.Send");
        data.username = null;
        forward.setData(data);
        Global.setIsAdd(true);
        e.stopPropagation();
        this.redirectTo("send/reply");
    },

    toForward: function (e) {
        console.log("forward");
        var container = this.getHandleView(),
            data = container.getData(),
            forward = Ext.create("CCICloud.view.send.Send");
        forward.setData(data);
        Global.setIsAdd(true);
        e.stopPropagation();
        this.redirectTo("send/forward");
    },

    toggleAttention: function (e) {
        console.log("toggleAttention");
        var store = this.getWeiboDetail().getStore(),
            container = this.getHandleView(),
            data = container.getData(),
            likeStatus = data.likeStatus,
            like = data.like,
            record = store.getAt(0),
            weiboInfo = record.get("weiboInfo");

        if (likeStatus) {
            container.setData({likeStatus: 0, like: like - 1});
            weiboInfo.like = like - 1;
            weiboInfo.likeStatus = 0;
            record.set("weiboInfo", weiboInfo);
        }
        else {
            container.setData({likeStatus: 1, like: like + 1});
            weiboInfo.like = like + 1;
            weiboInfo.likeStatus = 1;
            record.set("weiboInfo", weiboInfo);
        }
        e.stopPropagation();
    },

    replyOther: function (e) {
        var record = this.getWeiboDetailData(e),
            forward = Ext.create("CCICloud.view.send.Send"),
            replyInfo = record.get("reply");
        forward.setData({username: replyInfo.replyName, replyId: replyInfo.replyId});
        Global.setIsAdd(true);
        e.stopPropagation();
        this.redirectTo("send/reply");
    },

    //获取点击列表的信息
    getWeiboDetailData: function (e) {
        var item = Ext.getCmp(Ext.get(e.getTarget()).up('.x-list-item').id),
            index = item.$dataIndex,
            store = this.getWeiboDetail().getStore(),
            record = store.getAt(index),
            e = null;
        return record;
    }
});