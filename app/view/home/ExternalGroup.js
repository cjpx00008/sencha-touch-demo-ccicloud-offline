/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-24
 * Time: 下午2:14
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.view.home.ExternalGroup",{
     extend:"Ext.dataview.List",
     alias:"widget.externalGroup",

     config:{
         plugins: [
             {
                 type: 'listpaging',
                 autoPaging: true,
                 loadMoreText: '<p style="color: #666666">更多群组</p>',
                 noMoreRecordsText: '<p style="color: #666666">没有群组了</p>'
             }
         ],
         itemTpl: "<div style='font-size: 0.9em'><img src='resources/images/list-group.png' style='vertical-align: middle; margin-right:10px '/><span class='right-arrow'></span>{name}</div>",
         store:"externalGroup"
     }

});