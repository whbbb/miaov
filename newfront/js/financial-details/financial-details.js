
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
        },

        //加载模块
        load_block: function () {
            //加载  头部信息  模块
            includePage("#J_detailtop","./detailtop/detailtop.html");
            /*加载标的详情 模块*/
            includePage( "#J_treetop", "./treetop/treetop.html" );
            /*加载 相关文件  模块*/
            includePage( "#J_about", "./about/about.html" );
            /*加载投标详情  模块*/
            includePage( "#J_tender", "./tender/tender.html" );
            /*加载 评论  模块*/
            includePage( "#J_discuss", "./discuss/discuss.html" );
            /*加载 评论  未登录状态显示*/
            includePage( "#J_unlogin", "./unlogin/unlogin.html" );
        },
        load_common: function(){
            //回到顶部
            scrollToTop();
        }
    };

    _index.init();
} );