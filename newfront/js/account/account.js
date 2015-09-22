
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
        },


        //加载模块
        load_block: function () {

            //加载  左侧
            includePage("#J_account_left","../account-common/account_left.html");
            //加载  顶部提示
            includePage("#J_mp_top_dredge","../account-common/mp_top_dredge.html");
            //加载 我的账户右侧  账户总览   主页面   顶部
            includePage( "#J_my_pan", "./my_account_right/my_pandect/my_pan/my_pan.html" );
            //加载 我的账户右侧   账户总览   主页面   底部列表
            includePage( "#J_my_pan_list", "./my_account_right/my_pandect/my_pan_list/my_pan_list.html" );
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
