/**
 * Created by admin on 2015/5/8.
 */


//借款  介绍操作部分
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
        },

        //加载模块
        load_block: function () {
            //加载banner 模块
            includePage( "#J_detail", "./detail/detail.html" );
        }
    };

    _index.init();
} );
