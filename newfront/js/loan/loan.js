
//借款操作部分
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
        },

        //加载模块
        load_block: function () {
            //加载banner 模块
            includePage( "#J_banner", "./banner/banner.html" );

            //加载apply 申请模块
            includePage( "#J_apply", "./apply/apply.html" );

            //加载step 四部曲模块
            includePage( "#J_step", "./step/step.html" );

            //加载type 类型模块
            includePage( "#J_type", "./type/type.html" );

            //加载type 说明模块
            includePage( "#J_info", "./info/info.html" );
        }
    };

    _index.init();
} );