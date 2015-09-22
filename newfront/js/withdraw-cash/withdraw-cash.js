
$( document ).ready( function(){
    var _withdraw_cash = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {
            //加载 提现
            includePage( "#J_wdcash", "./wdcash/wdcash.html" );
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }
    };
    _withdraw_cash.init();

} );
