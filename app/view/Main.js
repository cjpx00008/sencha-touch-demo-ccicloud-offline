Ext.define('CCICloud.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.main",
    config: {
        isAdd: false,
        id: "main",
        layout: {
            type: "card",
            animation: "slide"
        },
        items: [
            {
                xtype: "login"
            }
        ]
    },

    doResetActiveItem: function(innerIndex) {
        var me = this,
            innerItems = me.getInnerItems(),
            animation = me.getLayout().getAnimation();

        if (innerIndex > 0) {
            if (animation && animation.isAnimation) {
                animation.setReverse(true);
            }
            me.setActiveItem(innerIndex - 1);
        }
    }

});
