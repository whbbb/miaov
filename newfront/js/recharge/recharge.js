/**
 * Created by admin on 2015/6/25.
 */

$( document ).ready( function(){
    var _recharge = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
        },

        //加载模块
        load_block: function () {
            //加载   提示层
            //includePage("#J_my_rech_tips","../common/tips.html");
            //加载  左侧
            includePage("#J_account_left","../account-common/account_left.html");
            //加载   一键充值
            includePage("#J_my_rech_onetouch","./my_recharge/my_rech_onetouch/my_rech_onetouch.html");
            //加载   网银充值
            includePage("#J_my_rech_cyber","./my_recharge/my_rech_cyber/my_rech_cyber.html");
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }
    };
    _recharge.init();

} );
