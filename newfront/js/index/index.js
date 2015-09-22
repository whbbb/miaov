
//首页操作部分
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
            //加载轮播图模块
            includePage( "#J_banner", "./banner/banner.html" );
            //加载choice模块
            includePage( "#J_choice", "./choice/choice.html" );
            //加载员工宝
            includePage("#J_staff","./staff/staff.html");
            //加载明星标的
            includePage("#J_star","./star/star.html");
            //加载新闻模块
            includePage( "#J_news", "./news/news.html" );
            //加载历程模块
            includePage( "#J_history", "./history/history.html" );
            //加载准备模块
            includePage( "#J_ready", "./ready/ready.html" );
        },

        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();

            window.alert = function(){

            }
        }

    };

    _index.init();
} );