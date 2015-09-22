$(document).ready(function(){
    var _resetp2 ={
        parameter:{
            _resetp2_obj:$("#J_resetp2-form"),
            _code_validate_result:$("#J_resetp2-form #J_code_validate_result"),
            _resetp2_button:$("#J_resetp2-form #resetp2-next"),
            _resetp2_input1:$("#J_resetp2-form input[data-name='code']"),
            _resend:$("#J_resetp2-form #J_resend"),
            _mobile_number:$("#J_resetp2-form .mobilenumber"),
            _mobile_number_hidden:$("#J_resetp2-form #J_mobile_hidden"),
            _get_code_state:true
        },

        init: function () {
            var that = this;
            var para = that.parameter;
            that._count_down( para._resend );
            that.check_validate_result();
            that.init_verify( that.parameter._resetp2_obj );
            that.bind();
            mask_mobile( para._mobile_number_hidden, para._mobile_number );
        },

        init_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish; }, function () {
                para.verify_obj = target_form.verify();
                //para.verify_obj.add_remote_verify( "code", that._verify_mobile_code );
                para.verify_obj.init();
            } );
        },

        check_validate_result: function(){
            var that = this;
            var para = that.parameter;

            if( para._code_validate_result.length == 1 ){
                var result = para._code_validate_result.val().trim();

                if( result != "" ){
                    $.delay_load( function(){ return $.fn.tip }, function(){
                        para._resetp2_input1.tip( result ).show();
                    } );
                }
            }
        },

        bind: function(){
            var that = this;
            var para = that.parameter;

            //提现按钮click事件绑定
            para._resetp2_button.bind( "click", function(){
                para._resetp2_obj.submit();
            } );
            //错误提示位置调整
            para._resetp2_input1.bind("init-tip", function ( event, tip_obj ) {
                var outer_obj = $( tip_obj).closest( ".tip-message-outer" );
                $(tip_obj).css({ "margin-left": "434px" });
            });
            //错误提示位置调整
            para._resend.bind("click", function () {
                that._get_phone_code();
            });
        },

        //验证手机验证码
        _verify_mobile_code: function( target_value, callback ){
            var that = _resetp2;
            var para = that.parameter;

            var mobile_value = $.get_trim_value( para._mobile_number_hidden );

            callBLogicSync("resetPassCheck", {"macCode" : target_value,"userPhone": mobile_value}, function(element){
                if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    that._count_down( para._resend );
                    callback( true );
                }
                else if(!($.isEmptyObject(element)) && element['resultCode']=="1007" && element['detailCode']=="0001"){
                    callback( false, "验证码已失效" );
                }
                else if(!($.isEmptyObject(element)) && element['resultCode']=="1007" && element['detailCode']=="0003"){
                    callback( false, "验证码不正确" );
                }
                else {
                    callback( false, "请刷新验证码后重试" );
                }
            })
        },

        //获取手机验证码
        _get_phone_code: function(){
            var that = this;
            var para = that.parameter;

            if( para._get_code_state == false ){
                return false;
            }

            var mobile_value = $.get_trim_value( para._mobile_number_hidden );

            that._count_down( para._resend );

            callBLogicSync("sendMobileNotice", {"msgType" : "03","userPhone" : mobile_value }, function(element){
                    if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    }
                    else {
                        if( element['resultCode']=="7001" && element['detailCode']=="0605" ){
                            para._resetp2_button.tip( "验证码发送失败: 发送短信频率过快。").show();
                        }
                        else{
                            para._resetp2_button.tip( "验证码发送失败。").show();
                        }
                    }
                },
                function(){
                    window.location.href = $.GlobalConfig.ajax_error_url;
                });
        },

        //倒计时
        _count_down: function( target, tip_target ){
            var that = this;
            var para = that.parameter;
            var time = 60;
            para._get_code_state = false;

            if( target && target.length > 0 ){
                if( !tip_target && target ){
                    tip_target = target;
                }
            }
            else{
                para._get_code_state = true;
            }

            target.attr( "disabled", true );
            target.addClass( "disable" );
            target.css( {
                "background-color": "#CCCCCC",
                "border-color": "#CCCCCC",
                "color": "#FFFFFF"
            } );
            tip_target.html( ( time ) + "秒后重新获取" );
            var inv = window.setInterval( function(){
                tip_target.html( ( --time ) + "秒后重新获取" );
                if( time <= 0 ){
                    window.clearInterval( inv );
                    target.removeAttr( "disabled" );
                    target.css( {
                        "background-color": "",
                        "border-color": "",
                        "color": ""
                    } );
                    target.removeClass( "disable" );
                    tip_target.html( "重新获取验证码" );
                    para._get_code_state = true;
                }
            }, 1000 );
        }
    };
    _resetp2.init();
});