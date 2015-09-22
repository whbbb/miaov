/**
 * Created by admin on 2015/6/25.
 */

$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {
            //加载  错误页面404  页面
            includePage("#J_mfour","./mfour/mfour.html");
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
