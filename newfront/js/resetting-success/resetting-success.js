
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {
            /*加载  左侧*/
            includePage("#J_reset_success","./reset_success/reset_success.html");
        }

    };
    _index.init();

} );
