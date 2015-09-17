/**
 * Created with JetBrains WebStorm.
 * User: whf
 * Date: 13-12-27
 * Time: 下午3:07
 * To change this template use File | Settings | File Templates.
 */
Ext.define("CCICloud.controller.send.Send", {
    extend: "Ext.app.Controller",

    config: {
        isBack: true,
        refs: {
            main: "main",
            sendView: "send",
            cancelButton: "send #cancel",
            picContainer: "picContainer",
            detailPic: "detailPic",
            addImg: "picContainer img[action=addImg]",
            faceContainer: "faceContainer",
            atSelect: "atSelect",
            searchView: "atSelect searchfield",
            atList: "atSelect list",
            textContent: "send #textContent",
            sendButton: "send #sendButton",
            lengthContainer: "send #lengthContainer",
            showFace: "send #showFace",
            showPic: "send #showPic",
            showCam: "send #showCam",
            showAt: "send #showAt",
            forwardScope: "send #forwardScope"
        },
        control: {
            sendView: {
                hide: "hideSend"
//                deactivate: "sendDeactivate"
            },
            detailPic: {
                changeBackPro: "changeBackPro"
            },
            textContent: {
                keyup: "textChange"
            },
            showFace: {
                tap: "showFace"
            },
            showPic: {
                tap: "showPic"
            },
            addImg: {
                tap: "showPic"
            },
            showCam: {
                tap: "showCam"
            },
            showAt: {
                tap: "showAt"
            },
            atSelect: {
                hide: "hideSelect"
            },
            searchView: {
                keyup: "searchAt"
            },
            atList: {
                itemtap: "atTap"
            },
            forwardScope: {
                tap: "showForwardScope"
            },
            sendButton: {
                tap: "doSend"
            },
            cancelButton: {
                tap: "doCancel"
            }
        }
    },

//    sendDeactivate: function(oldActiveItem, component, newActiveItem, eOpts) {
//        console.log("undestroy:" + this.getIsBack());
//        if (this.getIsBack()) {
////            oldActiveItem.destroy();
//            this.getMain().remove(oldActiveItem);
//        }
//        this.setIsBack(true);
//        console.log(Ext.ComponentQuery.query("send"));
//    },

    changeBackPro: function () {
        console.log("back");
        this.setIsBack(false);
    },

    hideSend: function (container) {
        console.log("undestroy:" + this.getIsBack());
        if (this.getIsBack()) {
            container.destroy();
        }
        this.setIsBack(true);
        console.log("destroy:" + this.getIsBack());
    },

    textChange: function (textarea, e, eOpts) {
        var length = textarea.getValue().length,
            remain = 1000 - length,
            lengthContainer = this.getLengthContainer();
        if (remain <= 10) {
            lengthContainer.setData({remain: remain});
        }
        else {
            lengthContainer.setData({remain: " "});
        }
    },

    showFace: function (button) {
        var faceContainer = this.getFaceContainer(),
            sendView = this.getSendView();
        if (faceContainer) {
            sendView.removeAt(2);
        }
        else {
            faceContainer = Ext.create("CCICloud.view.send.FaceContainer");
            sendView.insert(2, faceContainer);
        }
    },

    showPic: function (button) {
        var sendView = this.getSendView(),
            picContainer = this.getPicContainer(),
            faceContainer = this.getFaceContainer(),
            picLength = null,
            that = this,
            imgComponent = null;
        if (faceContainer) {
            sendView.removeAt(2);
        }
        imgComponent = Ext.create("Ext.Img", {src: 'resources/images/1.jpg', action: "viewImg"});
        imgComponent.on({
            tap: "imgTap",
            scope: that
        });
        if (picContainer) {
            picLength = picContainer.getItems().length;
            if (picLength < 9) {
                picContainer.insert(picLength - 1, imgComponent);
            }
            else if (picLength == 9) {
                picContainer.insert(picLength - 1, imgComponent);
                picContainer.getAt(9).hide();
            }
            else {
                Ext.Msg.alert("提示信息", "上传的图片不能超过9张");
            }
        }
        else {
            picContainer = Ext.create("CCICloud.view.send.PicContainer");
            picContainer.getAt(0).show();
            picContainer.insert(0, imgComponent);
            sendView.insert(3, picContainer);
            this.resetTextArea();
        }

//        Ext.device.Camera.capture({
//            success: function (image) {
//                imgComponent = Ext.create("Ext.Img",{src:'data:image/jpeg;base64,' + image});
//                if (picContainer) {
//                    picLength = picContainer.getItems().length;
//                    if (picLength < 9) {
//                        picContainer.insert(picLength - 1, imgComponent);
//                    }
//                    else if (picLength == 9) {
//                        picContainer.insert(picLength - 1, imgComponent);
//                        picContainer.getAt(9).hide();
//                    }
//                    else {
//                        Ext.Msg.alert("提示信息", "上传的图片不能超过9张");
//                    }
//                }
//                else {
//                    picContainer = Ext.create("CCICloud.view.send.PicContainer");
//                    picContainer.getAt(0).show();
//                    picContainer.insert(0, imgComponent);
//                    sendView.insert(3, picContainer);
//                    this.resetTextArea();
//                }
//            },
//            failure: function () {
//                console.log("失败");
//            },
//            quality: 75,
//            scope: this,
//            source: "album",
//            destination: 'data'
//        });

//        navigator.camera.getPicture(function (image) {
//            imgComponent = Ext.create("Ext.Img", {src: 'data:image/jpeg;base64,' + image});
//            imgComponent.on({
//                tap: "imgTap",
//                scope: that
//            });
//            if (picContainer) {
//                picLength = picContainer.getItems().length;
//                if (picLength < 9) {
//                    picContainer.insert(picLength - 1, imgComponent);
//                }
//                else if (picLength == 9) {
//                    picContainer.insert(picLength - 1, imgComponent);
//                    picContainer.getAt(9).hide();
//                }
//                else {
//                    Ext.Msg.alert("提示信息", "上传的图片不能超过9张");
//                }
//            }
//            else {
//                picContainer = Ext.create("CCICloud.view.send.PicContainer");
//                picContainer.getAt(0).show();
//                picContainer.insert(0, imgComponent);
//                sendView.insert(3, picContainer);
//                that.resetTextArea();
//            }
//        }, function (message) {
//            console.log(message);
//        }, {
//            quality: 50,
//            destinationType: Camera.DestinationType.DATA_URL,
//            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM
//        });

    },

    showCam: function (button) {
        var sendView = this.getSendView(),
            picContainer = this.getPicContainer(),
            faceContainer = this.getFaceContainer(),
            picLength = null,
            that = this,
            imgComponent = null;
        if (faceContainer) {
            sendView.removeAt(2);
        }
//        Ext.device.Camera.capture({
//            success: function (image) {
//                console.log(image);
//                imgComponent = Ext.create("Ext.Img",{src:'data:image/jpeg;base64,' + image});
//                if (picContainer) {
//                    picLength = picContainer.getItems().length;
//                    if (picLength < 9) {
//                        picContainer.insert(picLength - 1, imgComponent);
//                    }
//                    else if (picLength == 9) {
//                        picContainer.insert(picLength - 1, imgComponent);
//                        picContainer.getAt(9).hide();
//                    }
//                    else {
//                        Ext.Msg.alert("提示信息", "上传的图片不能超过9张");
//                    }
//                }
//                else {
//                    picContainer = Ext.create("CCICloud.view.send.PicContainer");
//                    picContainer.getAt(0).show();
//                    picContainer.insert(0, imgComponent);
//                    sendView.insert(3, picContainer);
//                    this.resetTextArea();
//                }
//            },
//            failure: function () {
//                console.log("失败");
//            },
//            quality: 75,
//            scope: this,
//            source: "camera",
//            destination: 'data'
//        });
        navigator.camera.getPicture(function (image) {
            imgComponent = Ext.create("Ext.Img", {src: 'data:image/jpeg;base64,' + image});
            imgComponent.on({
                tap: "imgTap",
                scope: that
            });
            if (picContainer) {
                picLength = picContainer.getItems().length;
                if (picLength < 9) {
                    picContainer.insert(picLength - 1, imgComponent);
                }
                else if (picLength == 9) {
                    picContainer.insert(picLength - 1, imgComponent);
                    picContainer.getAt(9).hide();
                }
                else {
                    Ext.Msg.alert("提示信息", "上传的图片不能超过9张");
                }
            }
            else {
                picContainer = Ext.create("CCICloud.view.send.PicContainer");
                picContainer.getAt(0).show();
                picContainer.insert(0, imgComponent);
                sendView.insert(3, picContainer);
                that.resetTextArea();
            }
        }, function (message) {
            console.log(message);
        }, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA
        });
    },

    imgTap: function (img) {
        var picView = Ext.create("CCICloud.view.send.DetailPic");
        picView.down("img").setSrc(img.getSrc());
        picView.setData({imgObj: img});
        Global.setIsAdd(true);
        this.redirectTo("pic");
    },

    hideSelect: function (container) {
        container.destroy();
    },

    showAt: function (button) {
        Global.setIsAdd(true);
        this.setIsBack(false);
        this.redirectTo("selectAt");
    },

    atTap: function (list, index, target, record, e, eOpts) {
        var textContent = this.getTextContent();
        textContent.setValue(textContent.getValue() + "@" + record.get("username"));
        history.back();
    },

    searchAt: function (searchfield) {
        var keyValue = searchfield.getValue(),
            store = Ext.getStore("contact");
        store.load({
            params: {
                userId: "1",
                keyValue: keyValue
            }
        });

    },

    showForwardScope: function () {
        Global.setIsAdd(true);
        this.setIsBack(false);
        this.redirectTo("forwardGroup");
    },

    resetTextArea: function () {
        var textarea = this.getTextContent(),
            send = this.getSendView(),
            sheet = send.element.down("#picContainer");
        textarea.setHeight(textarea.getHeight() - sheet.getHeight());
    },

    doSend: function (button) {
        var length = this.getTextContent().getValue().length,
            sendView = this.getSendView(),
            type = sendView.getType();
        if (length) {
            if (type == "default") {
                console.log("default");
            }
            else if (type == "forward") {
                console.log("forward");
            }
        }
    },

    doCancel: function (button) {
        var that = this,
            defaultValue = this.getSendView().getDefaultText(),
            text = this.getTextContent().getValue();
        if (defaultValue != text) {
            Ext.Msg.confirm("提示信息", "取消操作将造成输入信息丢失，是否执行该操作", function (answer) {
                if (answer == 'yes') {
                    that.setIsBack(true);
                    history.back();
                } else {
                    return;
                }
            });
        }
        else {
            that.setIsBack(true);
            history.back();
        }
    }
});