
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
            //加载头部选项模块
            includePage( "#J_about_top", "./about_top/about_top.html" );
            /*加载   公司简介  页面*/
            includePage( "#J_about_company", "./about_company/about_company.html" );
            /*加载 总经理致辞页面*/
            includePage( "#J_about_oration", "./about_oration/about_oration.html" );
            /*加载 安全保障页面*/
            includePage( "#J_about_ensure", "./about_ensure/about_ensure.html" );
            /*加载 管理团队页面*/
            includePage( "#J_about_team", "./about_team/about_team.html" );
            /*加载  招贤纳士 顶部*/
            includePage( "#J_ap_top", "./about_precruit/ap_top/ap_top.html" );
            /*加载  招贤纳士 底部列表*/
            includePage( "#J_about_prelist", "./about_precruit/about_prelist/about_prelist.html" );



            /*加载   联系我们 页面*/
            includePage( "#J_about_contact", "./about_contact/about_contact.html" );

        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
