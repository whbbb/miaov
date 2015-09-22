$(document).ready( function(){

    var _my_man_top = {
        parameter: {
            _modify_password_form: $( "#J_modify_password_form" ),
            _origin_password: $( "#J_modify_password_form input[ data-name='origin_password' ]" ),
            _password_strong: $( "#J_modify_password_form div#J_password_strong" ),
            _password_panel: $( "#J_modify_password_form #J_password_panel" ),
            _password_result_success: $( "#J_modify_password_form #J_password_result_success" ),
            _password_result_fail: $( "#J_modify_password_form #J_password_result_fail" ),
            _password_result_buttons: $( "#J_modify_password_form .re-off" ),
            _password_strong_spans: $( "#J_modify_password_form div#J_password_strong span" ),
            _password: $( "#J_modify_password_form input[ data-name='password' ]" ),
            _re_password: $( "#J_modify_password_form input[ data-name='re_password' ]" ),
            _password_modify_submit: $( "#J_modify_password_form input[ type='submit' ]" ),
            _modify_mobile_form: $( "#J_modify_mobile_form" ),
            _user_current_mobile_hidden: $( "#J_modify_mobile_form #J_user_current_mobile_hidden" ),
            _user_current_mobile: $( "#J_modify_mobile_form #J_user_current_mobile" ),
            _mobile: $( "#J_modify_mobile_form input[ data-name='mobile' ]" ),
            _code: $( "#J_modify_mobile_form input[ data-name='code' ]" ),
            _get_code: $( "#J_modify_mobile_form #J_get_code" ),
            _mobile_panel: $( "#J_modify_mobile_form #J_mobile_panel" ),
            _mobile_result_success: $( "#J_modify_mobile_form #J_mobile_result_success" ),
            _mobile_result_fail: $( "#J_modify_mobile_form #J_mobile_result_fail" ),
            _mobile_result_buttons: $( "#J_modify_mobile_form .re-off" ),
            _modify_email_form: $( "#J_modify_email_form" ),
            _email: $( "#J_modify_email_form input[ data-name='e_mail' ]" ),
            _code_for_email: $( "#J_modify_email_form input[ data-name='code' ]" ),
            _code_container: $( "#J_modify_email_form .code-container" ),
            _code_change: $( "#J_modify_email_form #J_code_change" ),
            _user_current_email: $( "#J_modify_email_form #J_user_current_email" ),
            _email_panel: $( "#J_modify_email_form #J_email_panel" ),
            _email_result_success: $( "#J_modify_email_form #J_email_result_success" ),
            _email_result_fail: $( "#J_modify_email_form #J_email_result_fail" ),
            _email_result_buttons: $( "#J_modify_email_form .re-off" )
        },

        init: function(){
            var that = this;
            var para = that.parameter;

            mask_mobile( para._user_current_mobile_hidden, para._user_current_mobile );

            that.init_password_verify( para._modify_password_form );
            that.init_mobile_verify( para._modify_mobile_form );
            that.init_email_verify( para._modify_email_form );

            that.bind();
        },

        init_password_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish; }, function () {
                para.verify_modify_password_obj = target_form.verify();
                para.verify_modify_password_obj.init( that._ajax_modify_password );
            } );
        },

        init_mobile_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish; }, function () {
                para.verify_modify_mobile_obj = target_form.verify();
                para.verify_modify_mobile_obj.add_remote_verify( "mobile", that.verifyMobile );
                para.verify_modify_mobile_obj.init( that._ajax_modify_mobile );
            } );
        },

        init_email_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish; }, function () {
                para.verify_modify_email_obj = target_form.verify();
                para.verify_modify_email_obj.add_remote_verify( "code", that.verifyCode );
                para.verify_modify_email_obj.init( that._ajax_modify_email );
            } );
        },

        bind: function(){
            var that = this;
            var para = that.parameter;

            //密码框change事件绑定
            para._password.bind( "keyup change", function(){
                that._check_verify_strong();
            } );

            //修改密码结果关闭按钮事件绑定
            para._password_result_buttons.bind( "click", function(){
                if( $( this ).attr( "data-value" )  === "success" ){
                    that._change_result_panel( para._password_panel, true );
                }
                else{
                    that._change_result_panel( para._password_panel );
                }
            } );

            //修改手机结果关闭按钮事件绑定
            para._mobile_result_buttons.bind( "click", function(){
                if( $( this ).attr( "data-value" )  === "success" ){
                    that._change_result_panel( para._mobile_panel, true );
                }
                else{
                    that._change_result_panel( para._mobile_panel );
                }
            } );

            //修改邮箱结果关闭按钮事件绑定
            para._email_result_buttons.bind( "click", function(){
                if( $( this ).attr( "data-value" )  === "success" ){
                    that._change_result_panel( para._email_panel, true );
                }
                else{
                    that._change_result_panel( para._email_panel );
                }
            } );

            //获取验证码链接click事件绑定
            para._get_code.bind( "click", function(){
                that._get_phone_code();
            } );

            //邮箱修改panel状态改变事件绑定
            para._code_change.bind( "click", function(){
                refreshCode( para._code_container );
            } );

            //刷新图形验证码
            para._code_container.find( "span" ).bind( "click", function(){
                refreshCode( para._code_container );
            } );
        },

        _change_result_panel: function( target_obj, all_close ){
            target_obj.show().siblings().hide();
            var title = $( target_obj.siblings()[ 0 ] );
            title.show();
            if( all_close ){
                title.find( ".revisethree").removeClass( "quxiao").html( "修改" );
                target_obj.hide();
            }
        },

        _ajax_modify_password: function(){
            var that = _my_man_top;
            var para = that.parameter;

            var data={
                "oldPassword" : $.sha1( $.get_trim_value( para._origin_password ) ),
                "userPassword" : $.sha1( $.get_trim_value( para._password ) )
            };
            // 后台验证
            callBLogicSync("changePassword", data, function(element){
                if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    that._change_result_panel( para._password_result_success );
                    para._origin_password.val( "" );
                    para._password.val( "" );
                    para._re_password.val( "" );
                    para._password_strong.hide();
                }
                else{
                    if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="1042"){
                        para._origin_password.tip("原密码错误，请重新输入").show();
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="1003" && element['detailCode']=="0043"){
                        para._password_modify_submit.tip("登录状态失效，请重新登录").show();
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="1004" && element['detailCode']=="0003"){
                        para._password_modify_submit.tip("用户登录信息已过期，请重新登录").show();
                    }
                    else {
                        that._change_result_panel( para._password_result_fail );
                    }
                }
            })
        },

        //验证手机
        verifyMobile: function( target_value, callback ){
            callBLogicSync("getPhone", {"userPhone" : target_value },function(element){
                if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    callback( true );
                } else if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="0102"){
                    callback( false, "手机号码已存在" );
                } else {
                    callback( false, "手机号码格式不符" );
                }
            })
        },

        //获取手机验证码
        _get_phone_code: function(){
            var that = this;
            var para = that.parameter;

            if( para.verify_modify_mobile_obj.verify_target( para._mobile ) == false ){
                return;
            }

            if( para._get_code_state == false ){
                return;
            }

            var mobile_value = $.get_trim_value( para._mobile );
            that._count_down( para._get_code );

            callBLogicSync("sendMobileMessage", {"msgType" : "02","userPhone" : mobile_value }, function(element){
                    if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){

                    }
                    else {
                        if( element['resultCode']=="7001" && element['detailCode']=="0605" ){
                            para._get_code.tip( "验证码发送失败: 发送短信频率过快。").show();
                        }
                        else{
                            para._get_code.tip( "验证码发送失败。").show();
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
            tip_target.html( ( time ) + "秒后重新获取" );
            var inv = window.setInterval( function(){
                tip_target.html( ( --time ) + "秒后重新获取" );
                if( time <= 0 ){
                    window.clearInterval( inv );
                    target.removeAttr( "disabled", true );
                    target.addClass( "disable" );
                    tip_target.html( "重新获取验证码" );
                    para._get_code_state = true;
                }
            }, 1000 );
        },

        _ajax_modify_mobile: function(){
            var that = _my_man_top;
            var para = that.parameter;

            var data ={
                "userPhone" : $.get_trim_value( para._mobile ),
                "macCode" : $.get_trim_value( para._code )
            };

            callBLogicSync("changePhone", data, function(element){
                if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    para._user_current_mobile_hidden.val( element['userPhone'] );
                    mask_mobile( para._user_current_mobile_hidden, para._user_current_mobile );
                    that._change_result_panel( para._mobile_result_success );
                    para._mobile.val( "" );
                    para._code.val( "" );
                }
                else if(!($.isEmptyObject(element)) && element['resultCode']=="1007" && element['detailCode']=="0001") {
                    para._code.tip( "验证码已失效，请重新修改").show();
                }
                else if(!($.isEmptyObject(element)) && element['resultCode']=="1007" && element['detailCode']=="0003") {
                    para._code.tip( "验证码错误，请重新输入").show();
                }
                else if(!($.isEmptyObject(element)) && element['resultCode']=="1004" ) {
                    para._code.tip( "登录状态错误，请先登录").show();
                }
                else if(!($.isEmptyObject(element)) && element['resultCode']=="1007" && element['detailCode']=="0004") {
                    para._mobile.tip( "修改未成功，请重新修改").show();
                }
                else {
                    that._change_result_panel( para._mobile_result_fail );
                }
            });
        },

        //ajax验证码验证
        verifyCode: function( target_value, callback ){
            var that = _my_man_top;
            var para = that.parameter;

            var macCodeHash = para._code_for_email.attr( "sha-code" );

            var data = {
                "macCodeHash" : macCodeHash,
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

        _ajax_modify_email: function(){
            var that = _my_man_top;
            var para = that.parameter;

            var data = {
                "userEmail" : $.get_trim_value( para._email ),
                "macCode" : $.get_trim_value( para._code_for_email )
            };
            callBLogicSync("changeEmail", data, function(element){
                if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                    para._user_current_email.html( element['userEmail'] );
                    that._change_result_panel( para._email_result_success );
                    para._email.val( "" );
                    para._code_for_email.val( "" );
                } else {
                    refreshCode( para._code_container );
                    that._change_result_panel( para._email_result_fail );
                }
            })
        },

        //密码强度
        _check_verify_strong: function(){
            var that = this;
            var para = that.parameter;

            var value = $.get_trim_value( para._password );
            if( value ){
                value = value.trim();
                var length = value.length;

                var count = 0;

                if (/[A-Z]/.test( value )) {
                    count++;
                }
                if (/[a-z]/.test( value )) {
                    count++;
                }
                if (/[0-9]/.test( value )) {
                    count++;
                }
                if (/[\W_]/.test( value )) {
                    count++;
                }
                var result;
                if( count >= 3 && ( length >= 14 && length <= 18 ) ){
                    // 强
                    result = 3;
                }
                else if( ( count >= 3 && ( length >= 6 && length <= 13 ) ) || ( count == 2 && ( length >= 10 && length <= 18 ) ) ){
                    // 中
                    result = 2;
                }
                else if( count == 2 && ( length >= 6 && length <= 9 ) ){
                    // 弱
                    result = 1;
                }
                else{
                    // 错
                    result = 0;
                }

                $.each( para._password_strong_spans, function( i, item ){
                    $( item ).css( "background-color", "#CCCCCC" );
                } );

                if( result == 0 ){
                    para._password_strong.hide();
                }
                else{
                    if( result > 0 ){
                        $( para._password_strong_spans[ 0 ] ).css( "background-color", "#ff0000" );
                    }
                    if( result > 1 ){
                        $( para._password_strong_spans[ 1 ] ).css( "background-color", "#ff9900" );
                    }
                    if( result > 2 ){
                        $( para._password_strong_spans[ 2 ] ).css( "background-color", "#66cc00" );
                    }
                    para._password_strong.show();
                }

            }
            else{
                para._password_strong.hide();
            }
        }
    };

    _my_man_top.init();

    var speed=600;
    $(".supervise-tit h3").click(function(){
        $(this).addClass("currentgreen").siblings().removeClass("currentgreen");
    });
    $(".news-super").click(function(){
        $(".triangle").stop().animate({"left":"175px"},speed);
        $(".revise").show();
        $(".deposit").hide();
    });
    $(".money-super").click(function(){
        $(".triangle").stop().animate({"left":"545px"},speed);
        $(".revise").hide();
        $(".deposit").show();
    });
    /*修改样式 手风琴样式切换*/
    $(".reviseli").each(function(){
        var reviseli_obg=$(this);
        reviseli_obg.find(".revisethree").click(function(){
            var revise=$(this);
            if(revise.hasClass("quxiao")){
                revise.removeClass("quxiao").html("修改");
            }
            else{
                revise.html("取消").addClass("quxiao");
            }
            revise.parent().siblings(".reviselishow").toggle();
            reviseli_obg.siblings().find(".revisethree").html("修改").removeClass("quxiao");
            reviseli_obg.siblings().find(".reviselishow").hide();
        });
    });
});