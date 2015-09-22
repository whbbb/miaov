
    $( document ).ready( function(){
        var _register_main = {
            parameter: {
                register_button: $( "#J_register_form #J_register" ),
                form_obj: $( "#J_register_form" ),
                _invite_code: $( "#J_register_form input#J_invite_code" ),
                _nick_name: $( "#J_register_form input[data-name='nick_name']" ),
                _password: $( "#J_register_form input[data-name='password']" ),
                _re_password: $( "#J_register_form input[data-name='re_password']" ),
                _password_strong: $( "#J_register_form div#J_password_strong" ),
                _password_strong_spans: $( "#J_register_form div#J_password_strong span" ),
                _mobile: $( "#J_register_form input[data-name='mobile']" ),
                _img_code: $( "#J_register_form input[data-name='img_code']" ),
                _mobile_code: $( "#J_register_form input[data-name='mobile_code']" ),
                _img_code_container: $( "#J_register_form .code-container" ),
                _get_img_code: $( "#J_register_form #J_get_img_code" ),
                _get_code: $( "#J_register_form #J_get_code" ),
                _agree_protocol: $( "#J_register_form input[data-name='agree_protocol']" ),
                _get_code_state: true
            },

            init: function () {
                var that = this;
                var para = that.parameter;

                that.refreshImgCode( para._img_code_container );
                that.init_verify( para.form_obj );
                that.bind();
            },

            init_verify: function( target_form ){
                var that = this;
                var para = that.parameter;

                $.delay_load( function () { return $.verify_load_finish; }, function () {
                    para.verify_obj = target_form.verify();
                    para.verify_obj.add_remote_verify( "nick_name", that.verifyNickName );
                    para.verify_obj.add_remote_verify( "mobile", that.verifyMobile );
                    para.verify_obj.add_custom_function_verify( "img_code", that.verifyImgCode );
                    para.verify_obj.init( that._ajax_verify );
                } );
            },

            bind: function(){
                var that = this;
                var para = that.parameter;

                //登录按钮click事件绑定
                para.register_button.bind( "click", function(){
                    para.form_obj.submit();
                } );

                //密码框change事件绑定
                para._password.bind( "keyup change", function(){
                    that._check_verify_strong();
                } );

                //获取验证码链接click事件绑定
                para._get_code.bind( "click", function(){
                    that._get_phone_code();
                } );

                //刷新图形验证码链接click事件绑定
                para._get_img_code.bind( "click", function(){
                    that.refreshImgCode( para._img_code_container );
                } );

                //选择协议错误提示位置调整
                para._agree_protocol.bind("init-tip", function ( event, tip_obj ) {
                    $( tip_obj ).css( { "margin-left": "274px", "margin-top": "-10px" } );
                });
            },

            //验证手机
            verifyMobile: function( target_value, callback ){
                var that = _register_main;
                var para = that.parameter;
                var code_verify_result = para.verify_obj.verify_target( para._img_code );

                if( code_verify_result ) {
                    callBLogicSync("getPhone", {"userPhone": target_value }, function (element) {
                        if (!($.isEmptyObject(element)) && element['resultCode'] == "0000" && element['detailCode'] == "0000") {
                            callback(true);
                        }
                        else if (!($.isEmptyObject(element)) && element['resultCode'] == "7001" && element['detailCode'] == "0102") {
                            callback(false, "手机号码已注册");
                        }
                        else {
                            callback(false, "手机号码格式不符");
                        }
                    });
                }
                else{
                    callback( false );
                }
            },

            //验证昵称
            verifyNickName: function( target_value, callback ){
                callBLogicSync("getName", {"userName" : target_value },function(element){
                    if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                        callback( true );
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="0101") {
                        callback( false, "该昵称已存在" );
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="1003" && element['detailCode']=="0003") {
                        callback( false, "昵称不能为空" );
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="1003" && element['detailCode']=="2003") {
                        callback( false, "输入中文、字母或数字，长度为4-16个字符" );
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="1003" && element['detailCode']=="1003") {
                        callback( false, "输入中文、字母或数字，长度为4-16个字符" );
                    }
                    else {
                        callback( false, "昵称验证失败" );
                    }
                })
            },

            //验证图形验证码
            verifyImgCode: function( target_value, callback ){
                var that = _register_main;
                var para = that.parameter;

                var code = target_value;

                if( code == para._current_img_code ){
                    return { "result": true };
                }
                else{
                    that.refreshImgCode( para._img_code_container );
                    return { "result": false, "msg": "图形验证码不正确" };
                }
            },

            //刷新验证码
            refreshImgCode: function( container_obj ) {
                var that = _register_main;
                var para = that.parameter;

                $.delay_load(
                    function () {
                        return $.sha1;
                    },
                    function () {
                        var random_sha = $.sha1( Math.random().toString() );
                        var target_obj = container_obj.find("img");
                        var input_obj = container_obj.find("input[ type='text' ]");
                        var target_form = container_obj.closest("form");
                        var hidden_obj;
                        if( target_form.length > 0 ){
                            hidden_obj = target_form.find( "#J_macCodeHash" );
                        }
                        var code = random_sha.substring( 0,4 );

                        para._current_img_code = code;

                        var src_url = "/account/imgCode2.do?code=" + code;
                        target_obj.ready( function(){
                            //src_url += random_sha;
                            target_obj.attr("src", src_url);
                            input_obj.attr("sha-code", random_sha);
                            if( hidden_obj.length > 0 ){
                                hidden_obj.val( random_sha );
                            }
                        } );
                    }
                );
            },

            //ajax验证
            _ajax_verify: function(){
                var that = _register_main;
                var para = that.parameter;

                var nick_name = para._nick_name.val();
                var password = $.sha1( para._password.val() );
                var mobile = para._mobile.val();
                var invite_code = para._invite_code.val();
                var code = para._mobile_code.val();

                var date = {
                    "userName" : nick_name,
                    "userPassword" : password,
                    "userPhone" : mobile,
                    "inviteCode" : invite_code,
                    "macCode" : code
                };

                callBLogicSync("register", date, function(element){
                    if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                        var userName = element['userName'];
                        var loginHash = element['loginHash'];
                        $.cookie("loginHash", loginHash, { expires : new Date( new Date().getTime() + $.GlobalConfig.cookie_time ), path: "/" } );
                        var url = para.form_obj.attr( "action" );
                        window.location.href = url;
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="0101"){
                        // 用户名已存在
                        para._nick_name.tip("用户名已存在").show();
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="0102"){
                        // 手机已存在
                        para._mobile.tip("手机号码已注册").show();
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="1007" && ( element['detailCode']=="0001" || element['detailCode']=="0003" ) ){
                        // 手机验证码不正确
                        para._mobile_code.tip("手机验证码不正确").show();
                    }
                    else if(!($.isEmptyObject(element)) && element['resultCode']=="7001" && ( element['detailCode']=="0001" || element['detailCode']=="0114" ) ){
                        // 邀请码不正确
                        para.register_button.tip("邀请码错误").show();
                    }
                    else {
                        para.register_button.tip("其它错误，请检查后重试。").show();
                    }
                },
                function(){
                    window.location.href = $.GlobalConfig.ajax_error_url;
                });
            },

            //获取手机验证码
            _get_phone_code: function(){
                var that = this;
                var para = that.parameter;

                if( para._get_code_state == false ){
                    return;
                }

                var mobile_verify_result = para.verify_obj.verify_target( para._mobile );

                if( mobile_verify_result != true ){
                    return false;
                }
                var mobile_value = para._mobile.val();
                that._count_down( para._get_code );

                callBLogicSync("sendMobileMessage", {"msgType" : "01","userPhone" : mobile_value}, function(element){
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

            //密码强度
            _check_verify_strong: function(){
                var that = this;
                var para = that.parameter;

                var value = para._password.val();
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

        _register_main.init();
    } );