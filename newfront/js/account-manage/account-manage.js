
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

            //加载  左侧
            includePage("#J_account_left","../account-common/account_left.html");
            //加载  顶部提示
            includePage("#J_mp_top_dredge","../account-common/mp_top_dredge.html");

            //加载 我的账户右侧   我的理财    top
            includePage( "#J_my_man_top", "./my_manage_right/my_manage/my_man_top/my_man_top.html" );
            //加载 我的账户右侧   我的理财    下面列表部分
            includePage( "#J_my_man_footlist", "./my_manage_right/my_manage/my_man_footlist/my_man_footlist.html" );

        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
