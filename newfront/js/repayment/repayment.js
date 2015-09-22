
$( document ).ready( function(){
    var _repayment = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {
            /*加载  左侧*/
            includePage("#J_repay","./repay/repay.html");
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _repayment.init();

} );
