
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
            //加载 banner 模块
            includePage( "#J_govern_banner", "./govern_banner/govern_banner.html" );
            /*加载  客户筛选 部分 */
            includePage( "#J_govern_preparation", "./govern_preparation/govern_preparation.html" );
            /*加载 审批流程简述 部分*/
            includePage( "#J_govern_procedure", "./govern_procedure/govern_procedure.html" );
            /*加载 风险预警机制 部分*/
            includePage( "#J_govern_warning", "./govern_warning/govern_warning.html" );
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
