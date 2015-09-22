$(document).ready(function(){
    var _resetp1 = {
        parameter:{
            _resetp1_obj:$("#J_resetp1_form"),
            _resetp1_button:$("#J_resetp1_form #J_resetp1_next"),
            _resetp1_input1:$("#J_resetp1_form input[data-name='mobile']"),
            _resetp1_input2:$("#J_resetp1_form input[data-name='code']"),
            _code_container:$(".code-container"),
            _get_code_state:true,
            _reset_code_refresh:$("#J_reset_code_refresh")
        },

        init: function () {
            var that = this;
            var para = that.parameter;
            that.init_verify( para._resetp1_obj );
            that.bind();
            refreshCode( para._code_container );
        },

        init_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish; }, function () {
                para.verify_obj = target_form.verify();
                para.verify_obj.add_remote_verify( "mobile", that.verifyMobile );
                para.verify_obj.add_remote_verify( "code", that.verifyCode );
                para.verify_obj.init( that._get_phone_code );
            } );
        },

        bind: function(){
            var that = this;
            var para = that.parameter;

            //下一步按钮click事件绑定
            para._resetp1_button.bind( "click", function(){
                if( para._get_code_state == false ){
                    return false
                }
                else{
                    para._resetp1_obj.submit();
                }
            } );

            //刷新验证码
            para._reset_code_refresh.bind( "click", function(){
                refreshCode( para._code_container );
            } );


            //错误提示位置调整
            para._resetp1_input2.bind("init-tip", function ( event, tip_obj ) {
                $(tip_obj).css({ "margin-left": "411px" });
            });
        },

        //验证手机
        verifyMobile: function( target_value, callback ){
            var that = _resetp1;
            var para = that.parameter;

            var code_verify_result = para.verify_obj.verify_target( para._resetp1_obj.find( "input[ data-name='code' ]" ) );

            if( code_verify_result ){
                callBLogicSync("getPhone", {"userPhone" : target_value },function(element){
                    if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                        callback( false, "手机号码不存在" );
                    } else if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="0102"){
                        callback( true );
                    } else {
                        callback( false, "手机号码格式不符" );
                    }
                })
            }
            else{
                callback( false );
            }
        },

        //ajax验证码验证
        verifyCode: function( target_value, callback ){
            var that = _resetp1;
            var para = that.parameter;

            var macCodeHash = para._resetp1_input2.attr( "sha-code" );
            var loginHash = $.cookie( "loginHash" );

            var data = {
                "macCodeHash" : macCodeHash,
                "loginHash" : loginHash,
                "macCode" : target_value
            };

            callBLogicSync( "changeEmailCheck", data, function( element ) {
                if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    callback( true );
                }
                else {
                    refreshCode( para._code_container );
                    callback( false, "验证码不正确" );
                }
            });
        },

        //获取手机验证码
        _get_phone_code: function(){
            var that = _resetp1;
            var para = that.parameter;

            if( para._get_code_state == false ){
                return false;
            }

            var mobile_value = para._resetp1_input1.val();

            that._count_down( para._resetp1_button );
         // 更改ycc 07/29	
            callBLogicSync("sendMobileNotice", {"msgType" : "03","userPhone" : mobile_value }, function(element){
                if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    para._resetp1_obj.unbind( "submit" );
                    para._resetp1_obj.submit();
                }
                else {
                    refreshCode( para._code_container );
                    if( element['resultCode']=="7001" && element['detailCode']=="0605" ){
                        para._resetp1_button.tip( "验证码发送失败: 发送短信频率过快。").show();
                    }
                    else{
                        para._resetp1_button.tip( "验证码发送失败。").show();
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
            tip_target.val( ( time ) + "秒后重新获取" );
            var inv = window.setInterval( function(){
                tip_target.val( ( --time ) + "秒后重新获取" );
                if( time <= 0 ){
                    window.clearInterval( inv );
                    target.removeAttr( "disabled", true );
                    target.addClass( "disable" );
                    tip_target.val( "重新获取验证码" );
                    para._get_code_state = true;
                }
            }, 1000 );
        }
    };
    _resetp1.init();
});