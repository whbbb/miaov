$(document).ready(function(){
    /* 鼠标经过问号显示文字*/
    /*$(".inquirebg").css("display","none");
    $(".inquire").hover(function(){
        $(".inquirebg").toggle();
    });*/
    var _cash ={
        parameter:{
            _cash_obj:$("#J_cash_form"),
            cash_button:$("#J_cash_form #J_cash_button")
        },

        init: function () {
            var that = this;
            var para = that.parameter;

            load_tips( ".get-cash-complete", function( obj ){
                _cash.parameter._wdcash_result_tips = obj;
            } );

            that.init_verify( para._cash_obj );

            that.bind();
        },

        init_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish && _cash.parameter._wdcash_result_tips }, function () {
                para.verify_obj = target_form.verify();
                para.verify_obj.add_custom_function_verify( "get_cash", that.check_user_state );
                para.verify_obj.init( function(){
                    _cash.parameter._wdcash_result_tips._ajax_tips_operate( para.verify_obj );
                } );
            } );
        },


        bind: function(){
            var that = this;
            var para = that.parameter;

            //提现按钮click事件绑定
            para.cash_button.bind( "click", function(){
                para._cash_obj.submit();
            } );
        },

        check_user_state: function(){
            var result = get_user_all_state()[ 8 ];

            if( result ){
                return { result: false, msg: "账户提现功能被锁定" };
            }
            else{
                return { result: true };
            }
        }
    };
    _cash.init();
});