/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 14-1-14
 * Time: 上午11:15
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.config.About", {
    extend: "Ext.Container",
    alias: "widget.about",

    config: {
        styleHtmlContent: true,
        items: {
            xtype: "titlebar",
            ui: "gray",
            title: "关于",
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
        html: "<div>江苏如云信息科技股份有限公司[1]成立于2013年1月18日，公司注册资金1亿元人民币，拥有3000平方米IDC及办公区域，现有员工100余人，85%本科以上学历，其中，硕士以上学历占5%，博士以上学历占2%，为江苏省信息化协会常务理事单位，同时也是SAP中国战略合作伙伴。</div>"
    }
});