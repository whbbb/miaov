
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
            //加载页面内容
            includePage( "#J_ins_substance", "./ins_substance/ins_substance.html" );
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
