/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-19
 * Time: 下午2:33
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.home.Home", {
    extend: "Ext.dataview.List",
    alias: "widget.home",

    config: {
        flex:1,
        plugins: [{
            type: 'listpaging',
            autoPaging:true,
            loadMoreText:'<p style="color: #666666; font-size: 15px">更多数据</p>',
            noMoreRecordsText: '<p style="color: #666666; font-size: 15px">没有更多数据了</p>'
        },
        {
            type: 'pullrefresh',
            pullText: "下拉刷新",
            lastUpdatedText: "上次更新时间",
            lastUpdatedDateFormat: "Y-m-d h:iA",
            releaseText:"松开刷新",
            loaded:"已加载",
            loadingText:"加载中..."
        }],
        emptyText:"暂无数据",
        loadingText:"努力加载中...",
        itemTpl: ["<div class='home-list clearfix'>",
                        "<div class='wb-face'>",
                             "<img src='{userhead}' width='52' height='52'/>",
                        "</div>",
                        "<div class='wb-info'>",
                            "<span class='wb-un'>{username}</span><p class='wb-time'>{createTime}</p>",
                        "</div>",
                        "<div class='wb-detail'>",
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
                                                "<li><img src='{m-src}' data-media-index = '{[xindex]}'/></li>",
                                        "</tpl>",
                                        "</ul>",
                                 "</div>",
                                 "</tpl>",
                            "</div>",
                            "</tpl>",
                            "<tpl if='media.length'>",
                            "<div class='wb-media-list'>",
                            "<tpl if='media.length == 4'>",
                                "<ul class='lotspic-list clearfix' style='width: 170px'>",
                            "<tpl else>",
                                "<ul class='lotspic-list clearfix'>",
                            "</tpl>",
                                "<tpl for = 'media'>",
                                "<li><img src='{m-src}' data-media-index = '{[xindex]}'/></li>",
                                "</tpl>",
                                "</ul>",
                            "</div>",
                            "</tpl>",
                            "<div class='wb-handle'>",
                                  "<a class='hd-action wb-reply'><em class='hd-reply hd-handle-icon'></em>回复</a><i class='hd-line'>|</i>",
                                  "<a class='hd-action wb-forwarding'><em class='hd-forward hd-handle-icon'></em>转发</a><i class='hd-line'>|</i>",
                                  "<a class='hd-action  wb-attention'>",
                                       "<tpl if='likeStatus == 0'>",
                                          "<em class='hd-like-before hd-handle-icon'></em>({like})",
                                       "<tpl else>",
                                           "<em class='hd-like-after hd-handle-icon'></em>({like})",
                                       "</tpl>",
                                  "</a>",
                            "</div>",
                        "</div>",
                    "</div>"].join(""),
        store:"weiboStore",
        items: [
            {
                xtype: "titlebar",
                title: "所有动态",
                minHeight: "2.4em",
                height: "2.4em",
                docked: "top",
                ui: "gray",
                defaults: {
                    xtype: "button",
                    ui: "plain",
                    text:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                },
                items: [
                    {
                        iconCls: "list",
                        itemId: "toCategory",
                        align: "left"
                    },
                    {
                        iconCls: "compose",
                        itemId: "toSend",
                        iconAlign: "right",
                        align: "right"
                    }
                ]
            }
        ]
    }

})