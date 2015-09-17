/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-6
 * Time: 下午3:13
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.home.WeiboDetail", {
    extend: "Ext.List",
    alias: "widget.weiboDetail",

    config: {
        cls:"my-detailList",
        store: "weiboDetail",
        plugins: [{
            type: 'listpaging',
            autoPaging:true,
            loadMoreText:'<p style="color: #666666; font-size: 15px">更多数据</p>',
            noMoreRecordsText: '<p style="color: #666666; font-size: 15px">没有更多数据了</p>'
        }],
        itemTpl:[
            "<tpl for='weiboInfo'>",
            "<div class='home-list clearfix'>",
                "<div class='wb-face'>",
                    "<img src='{userhead}' width='52' height='52'/>",
                "</div>",
                "<div class='wb-info'>",
                    "<span class='wb-un'>{username}</span><p class='wb-time'>{createTime}</p>",
                "</div>",
                "<div class='wb-detail'>",
                "<tpl if='title'>",
                    "<div class='wb-title' style='text-align: center'>{title}</div>",
                "</tpl>",
                "<div class='wb-text'>{content}</div>",
                "<tpl if='forward'>",
                "<div class='wb-forward'>",
                    "<div class='wb-text'>",
                        "<a class='wb-name'>{forward.username}</a>:{forward.content}",
                "</div>",
                "<tpl if='forward.media.length'>",
                    "<div class='wb-media-list'>",
                "<tpl if='forward.media.length == 4'>",
                    "<ul class='lotspic-list clearfix' style='width: 170px'>",
                "<tpl else>",
                    "<ul class='lotspic-list clearfix'>",
                "</tpl>",
                "<tpl for = 'forward.media'>",
                    "<li><img src='{m-src}'/></li>",
                "</tpl>",
                    "</ul>",
                "</div>",
                "</tpl>",
                "</div>",
                "</tpl>",
                "<div class='wb-media-list'>",
                    "<tpl if='media.length == 4'>",
                        "<ul class='lotspic-list clearfix' style='width: 170px'>",
                    "<tpl else>",
                        "<ul class='lotspic-list clearfix'>",
                    "</tpl>",
                    "<tpl for = 'media'>",
                        "<li><img src='{m-src}'/></li>",
                    "</tpl>",
                "</ul>",
                "</div>",
                "</div>",
            "</div>",
            "<div class='wb-about clearfix' style='margin-bottom: 1px'>",
                 "<span class='reply-count fl-l'>回复({replyCount})</span><span class='like-count fl-r'>赞({like})</span>",
            "</div>",
            "</tpl>",
            "<div class='wb-replyContent  clearfix'>",
                  "<tpl for='reply'>",
                  "<div class='reply-item'>",
                         "<div class='reply-head fl-l'>",
                            "<img src='{replyHead}' width='52' height='52'/>",
                         "</div>",
                         "<div class='reply-detail fl-l'>",
                            "<div class='reply-info'>",
                                "<span class='reply-name'>{replyName}</span>",
                                "<span class='reply-handle fl-r'></span>",
                            "</div>",
                            "<div class='reply-content'>{replyContent}</div>",
                            "<div class='pub-info fl-l'><span class='reply-time'>{replyTime}</span></div>",
                         "</div>",
                  "</div>",
                  "</tpl>",
            "</div>"
        ].join(""),
        items: [
            {
                xtype: "titlebar",
                ui: "gray",
                docked: "top",
                title: "详情",
                items: [
                    {
                        xtype: "button",
                        ui: "plain",
                        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
                        iconCls: "left-arrow",
                        action: "backButton",
                        itemId: "back",
                        labelCls: "label-back"
                    }
                ]
            },
            {
                xtype:"container",
                itemId:"handleContainer",
                docked:"bottom",
                tpl:["<div class='wb-detail-handle'>",
                    "<a class='hd-action c-reply'><em class='hd-reply hd-handle-icon'></em>回复</a><i class='hd-line'>|</i>",
                    "<a class='hd-action c-forwarding'><em class='hd-forward hd-handle-icon'></em>转发</a><i class='hd-line'>|</i>",
                    "<a class='hd-action  c-attention'>",
                    "<tpl if='likeStatus == 0'>",
                    "<em class='hd-like-before hd-handle-icon'></em>({like})",
                    "<tpl else>",
                    "<em class='hd-like-after hd-handle-icon'></em>({like})",
                    "</tpl>",
                    "</a>",
                    "</div>"],
                data:
                    {
                    "likeStatus" : 0,
                    "like" : 5,
                    "weiboId" : "1",
                    "username" :"黄吉吉"
                    }
            }
        ]
    }
});