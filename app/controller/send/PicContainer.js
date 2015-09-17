/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-30
 * Time: 下午2:35
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.send.PicContainer", {
    extend: "Ext.app.Controller",

    config: {
        refs: {
            picContainer: "picContainer",
            detailPic: "detailPic",
            delImg: "detailPic #delete"
        },
        control: {
            detailPic: {
                hide: "hideDetailPic",
                show: "showDetailPic"
            },
            delImg: {
                tap:"delImg"
            }
        }
    },

    showDetailPic: function () {
        this.getDetailPic().fireEvent("changeBackPro",this.getDetailPic());

    },

//    imgTap: function (img) {
//        var picView = Ext.create("CCICloud.view.send.DetailPic");
//        picView.down("img").setSrc(img.getSrc());
//        picView.setData({imgObj:img});
//        Global.setIsAdd(true);
//        this.fireAction("")
//        this.redirectTo("pic");
//    },

    delImg: function(button) {
       var picContainer = this.getPicContainer(),
           picView = this.getDetailPic(),
           item = picView.getData().imgObj;
        picContainer.remove(item);
        if(!picContainer.getItems().length){
            picContainer.destroy();
        }
        history.back();
    },

    hideDetailPic: function (container, eOpts) {
        container.destroy();
    }
});