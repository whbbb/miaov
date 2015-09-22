/**
 * Created by admin on 2015/7/15.
 */
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
            //加载  第三方实名认证  成功  页面
            includePage("#J_success","./success/success.html");
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
