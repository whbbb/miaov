
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
            includePage( "#J_my_fin_top", "./my_financing_right/my_financing/my_fin_top/my_fin_top.html" );
            //加载 我的账户右侧   我的理财    优房宝  优车宝  优选计划   薪金宝
            includePage( "#J_invest", "./my_financing_right/my_financing/my_fin_footlist/invest/invest.html" );
            //加载 我的账户右侧   我的理财    优房宝   导航选项
            includePage( "#J_navigation", "./my_financing_right/my_financing/my_fin_footlist/content/house/navigation/navigation.html" );
            //加载 我的账户右侧   我的理财    优房宝   还款中
            includePage( "#J_yeting", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/yeting/yeting.html" );
            //加载 我的账户右侧   我的理财    优房宝   投标中
            includePage( "#J_tender", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/tender/tender.html" );
            //加载 我的账户右侧   我的理财    优房宝   投标中
            includePage( "#J_bespoke", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/bespoke/bespoke.html" );
            //加载 我的账户右侧   我的理财    优房宝  放款审核
            includePage( "#J_audit", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/audit/audit.html" );
            //加载 我的账户右侧   我的理财    优房宝  放款审核
            includePage( "#J_intact", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/intact/intact.html" );
            //加载 我的账户右侧   我的理财    优房宝  流标
            includePage( "#J_sichuan", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/sichuan/sichuan.html" );
            //加载 我的账户右侧   我的理财    优房宝  流标
            includePage( "#J_awfully", "./my_financing_right/my_financing/my_fin_footlist/content/house/house_body/awfully/awfully.html" );


        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();
} );
