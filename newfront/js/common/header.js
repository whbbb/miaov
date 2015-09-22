
    //公共页头部分
    $( document ).ready( function(){
        var _header;

        _header = {
            parameter: {
                isIE7: $.browser.msie && $.browser.version == "7.0",
                loginFrameObj: $('#J_login_frame'),
                loginPanelObj: $('#J_login_frame #J_login_panel'),
                loginOutObj: $('#J_user #J_login_out'),
                userLoginLinkObj: $('.header #J_login #J_user_login_link'),
                userLoginCloseObj: $('#J_login_frame #J_user_login_close'),
                userLoginButtonObj: $('#J_login_frame #J_user_login_button'),
                _mobile: $('#J_login_frame input[ data-name = "mobile" ]'),
                _password: $('#J_login_frame input[ data-name = "password" ]'),
                _code_container: $('#J_login_frame .code-container'),
                _code: $('#J_login_frame input[ data-name = "code" ]'),
                _remember_me: $('#J_login_frame input#J_remember_me'),
                innerNavObj: $('div.nav-container div.inner-nav'),
                navCurrentValue: 0,
                intervalObj: null,
                timeoutObj: null,
                timeoutFlag: true,
                animateTime: 200,
                loginErrorCountObj: $('#J_login_error_count'),
                errorTipObj: null,
                lockTipObj: null
            },

            //初始化加载
            init: function () {
                var that = this;
                var para = that.parameter;

                that.load_block();

                that.init_login_mask_layer();
                that.init_verify( para.loginFrameObj );

                that.nav_change();
                that.navAnimateInit();
                that.bind();

                that.changeLoginState();

                load_tips( ".logout-complete", function( obj ){
                    _header.parameter._header_logout_tips = obj;
                } );
            },

            //加载模块
            load_block: function () {
                //加载 提现
                includePage( "#J_result_tips", "../common/tips.html" );
            },

            init_login_mask_layer: function () {
                var that = this;
                var para = that.parameter;

                $.delay_load(
                    function () {
                        return $.mask_layer_load_finish;
                    },
                    function () {
                        para.header_ml_obj = para.loginFrameObj.mask_layer(
                            {
                                open_elms: para.userLoginLinkObj,
                                close_elms: para.userLoginCloseObj,
                                open_animate_end_callback: that.showLoginFrame,
                                close_animate_before_callback: that.hideLoginFrame
                            }
                        );
                    }
                );
            },

            init_verify: function( target_form ){
                var that = this;
                var para = that.parameter;

                $.delay_load( function () { return $.verify_load_finish; }, function () {
                    para.verify_obj = target_form.verify( { submit_by_key_up: false } );
                    para.verify_obj.add_remote_verify( "code", that.verifyCode );
                    para.verify_obj.init( that.ajaxLogin );
                } );
            },

            //事件绑定
            bind: function () {
                var that = this;
                var para = that.parameter;

                //用户登录按钮点击事件绑定
                para.userLoginLinkObj.bind("click", function () {
                    $.clear_all_tip();
                });

                //用户登录层关闭事件绑定
                para.userLoginCloseObj.bind("click", function () {
                    $.clear_all_tip();
                });

                //用户登出事件绑定
                para.loginOutObj.bind("click", function ( event ) {
                    event.preventDefault();
                    $.cookie("loginHash", null, { expires : new Date(), path: "/" } );
                    para._header_logout_tips.parameter._current_type_obj.closest( "#J_result_tips_frame_container").css( "background-color", "" );
                    para._header_logout_tips._show_type();
                    para._header_logout_tips.result_tips_obj.show();
                });

                //用户登录
                para.userLoginButtonObj.bind("click", function (event) {
                    that.user_login( event );
                });

                para.userLoginButtonObj.closest( "form" ).delegate( "input[ type = 'text' ], input[ type = 'password' ]", "keyup", function (event) {
                    if( event.which == 13 ){
                        that.user_login( event );
                    }
                });

                //导航条鼠标移动效果
                para.innerNavObj.bind("mousemove", function (event) {
                    if (that.parameter.timeoutFlag) {
                        that.parameter.timeoutFlag = false;

                        that.parameter.timeoutObj = setTimeout(function () {
                            that.parameter.timeoutFlag = true;
                            that.navAnimate(event, "move");
                        }, 60);
                    }
                });

                //导航条移出效果
                para.innerNavObj.bind("mouseleave", function (event) {
                    that.navAnimate(event, "leave");
                });

                //验证码更换
                $("#J_login_frame .code-container a").bind("click", function () {
                    refreshCode( para._code_container );
                });

                //验证码错误提示位置调整
                $("#J_login_frame .code-container input").bind("init-tip", function (event, tip_obj) {
                    $(tip_obj).css({ "margin-left": "274px" });
                });

                //记住用户名状态改变事件绑定
                para._remember_me.bind( "value-change", function(){
                    that.remember_me_state_record();
                    that.remember_me_state_change();
                } );
            },

            user_login: function( event ){
                var that = this;
                var para = that.parameter;

                that.remember_me_state_change();

                var loginErrorCount = that.getLoginErrorCount();

                if (loginErrorCount > 4 || loginErrorCount < 0) {
                    return false;
                }
                else{
                    $.clear_all_tip();
                }

                var elm = $( event.currentTarget );
                var target_form = elm.parent("form");
                target_form.submit();
            },

            //检查记录用户名
            remember_me_state_change: function(){
                var that = this;
                var para = that.parameter;

                var rmt =  para._remember_me && para._remember_me.val();

                if( rmt == 0 ){
                    $.cookie("remember_me_mobile", null, { expires : new Date(), path: "/" } );
                }
                else if( $.get_trim_value( para._mobile ) ){
                    $.cookie("remember_me_mobile", $.get_trim_value( para._mobile ), { expires : 2000, path: "/" } );
                }
            },

            //记录复选框状态
            remember_me_state_record: function(){
                var that = this;
                var para = that.parameter;

                var rmt =  para._remember_me &&  para._remember_me.val();

                $.cookie("remember_me_state", null, { expires : new Date(), path: "/" } );
                $.cookie( "remember_me_state", rmt, { expires : 2000, path: "/" } );
            },

            //初始化复选框状态
            remember_me_state_init: function(){
                var that = this;
                var para = that.parameter;

                var rmt = $.cookie("remember_me_state" );

                var input_obj = para._remember_me;
                var span_obj = input_obj.siblings( ".special-span" );

                input_obj.val( rmt );
                if( rmt == 0 ){
                    input_obj.removeAttr( "checked" );
                    input_obj.val( 0 );
                    span_obj.removeClass( "checked" );
                }
                else{
                    input_obj.attr( "checked", "checked" );
                    input_obj.val( 1 );
                    span_obj.addClass( "checked" );
                }
            },

            //ajax登录
            ajaxLogin: function(){
                var that = _header;
                var para = that.parameter;

                var data = {
                    "loginName": $.get_trim_value( para._mobile ),
                    "userPassword": $.sha1( $.get_trim_value( para._password ) ),
                    "macCodeHash": para._code.attr( "sha-code" ),
                    "macCode": $.get_trim_value( para._code )
                };

                if( para._code_container.is(":hidden") ){
                    data = {
                        "loginName": $.get_trim_value( para._mobile ),
                        "userPassword": $.sha1( $.get_trim_value( para._password ) )
                    };
                }

                callBLogicSync("login", data, function( element ) {
                        if(!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                            $.cookie("loginHash", element['loginHash'],{ expires : new Date( new Date().getTime() + $.GlobalConfig.cookie_time ), path: "/" } );
                            $( "#J_login_state").val( 1 );
                            that.changeLoginState();
                            para.userLoginCloseObj.click();
                            if( $.GlobalConfig.page_load_switch != true ){
                                window.location.reload();
                            }
                        }
                        else{
                            var mobile = para._mobile;
                            var password = para._password;
                            var code = para._code;
                            var target = null;
                            var error_msg = "";

                            $( "#J_login_error_count" ).val( element['loginCount'] );

                            if(element['detailCode']=="0201"){
                                error_msg = "用户名或密码输入错误。";
                                target = mobile;
                            }
                            else if(element['detailCode']=="0203" && element['resultCode']==7001){
                                $( "#J_login_error_count" ).val( 5 );
                            }
                            else if(element['detailCode']=="0205" && element['resultCode']==7001){
                                error_msg = "用户名或密码输入错误。";
                                target = password;
                            }
                            else if( element['detailCode']=="0209" && element['resultCode']==7001){
                                error_msg = "用户登录验证码验证错误。";
                                target = code;
                            }
                            else if(element['detailCode']=="0009"){
                                error_msg = "手机号码不能为空";
                                target = mobile;
                            }
                            else if(element['detailCode']=="0007"){
                                that.showOrHideCodeContainer( true );
                                error_msg = "验证码不能为空";
                                target = code;
                            }

                            var error_count = that.getLoginErrorCount();
                            that.loginCheck( error_count );

                            if( target && error_msg ){
                                if( error_count >= 4 && error_msg == "用户名或密码输入错误。" ){
                                    return;
                                }
                                target.tip( error_msg ).show();
                            }
                        }
                    }
                );
            },

            //ajax验证码验证
            verifyCode: function( target_value, callback ){
                var that = _header;
                var para = that.parameter;

                var macCodeHash = para._code.attr( "sha-code" );

                var data = {
                    "macCodeHash" : macCodeHash,
                    "macCode" : target_value
                };

                callBLogicSync( "changeEmailCheck", data, function( element ) {
                    if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                        callback( true, "" );
                    }
                    else {
                        callback( false, "验证码不正确" );
                        refreshCode( para._code_container );
                    }
                });
            },

            //获取登录错误次数
            getLoginErrorCount: function () {
                var that = this;

                if (that.parameter.loginErrorCountObj) {
                    return Number(that.parameter.loginErrorCountObj.val());
                }
                else {
                    if( typeof console !== "undefined" ){
                        console.log && console.log( "登录错误计数器对象未找到。" );
                    }
                    return -1;
                }
            },

            /**
             * 用户名及密码匹配验证
             * @param loginErrorCount 当前登录错误次数
             */
            loginCheck: function ( loginErrorCount ) {
                var that = this;
                var para = that.parameter;

                if( loginErrorCount > 2 ){
                    that.showOrHideCodeContainer( true );

                    if( loginErrorCount == 4 ){
                        that.parameter.errorTipObj = that.showErrorMsg(loginErrorCount);
                        if (that.parameter.errorTipObj) {
                            that.parameter.errorTipObj.show();
                            refreshCode( para._code_container );
                        }
                    }
                    else if( loginErrorCount == 5 ){
                        that.parameter.lockTipObj = that.showErrorMsg(loginErrorCount);
                        if (that.parameter.lockTipObj) {
                            that.parameter.lockTipObj.show();
                        }
                    }
                }
            },

            showErrorMsg: function (loginErrorCount) {
                var that = this;
                var target_elm = null;
                var error_msg = null;

                if (loginErrorCount == 4) {
                    target_elm = $("#J_login_frame [ type = 'password' ]");
                }
                else if (loginErrorCount == 5) {
                    target_elm = that.parameter.userLoginButtonObj;
                }
                else {
                    return null;
                }

                if (target_elm) {
                    error_msg = target_elm.attr("error-msg");
                }
                else {
                    return null;
                }

                return target_elm.tip( { msg: error_msg, type: "error", pos: "left-top" } );
            },

            /**
             * 展示或隐藏验证码区域
             */
            showOrHideCodeContainer: function ( state ) {
                var that = this;
                var para = that.parameter;

                var container_obj = para._code_container;
                if (container_obj) {
                    var forget_obj = $(".forget");
                    var login_button_obj = $("#J_user_login_button");

                    if ( state ) {
                        container_obj.show();
                        forget_obj.css("margin-top", "14px");
                        login_button_obj.css("margin-top", "0px");

                        refreshCode(container_obj);
                    }
                    else {
                        container_obj.hide();
                        forget_obj.css("margin-top", "10px");
                        login_button_obj.css("margin-top", "36px");
                    }
                }
            },

            /**
             * 通过J_login_state隐藏域的值更改用户登录显示状态
             */
            changeLoginState: function () {
                var that = this;
                var para = that.parameter;

                var loginStateObj = $("#J_login_state");
                var loginStateVal = loginStateObj.val();
                var loginObj = $("#J_login");
                var userObj = $("#J_user");

                if (loginStateVal == "1" || loginStateVal == 1) {
                    userObj.show();
                    loginObj.hide();

                    $.delay_load( function(){ return $(".welcome-3dbox_1.1 .login").length > 0 }, function(){
                        $(".welcome-3dbox_1.1 .login").show();
                    } );
                    $.delay_load( function(){ return $(".welcome-3dbox_1.1 .not-login").length > 0 }, function(){
                         $(".welcome-3dbox_1.1 .not-login").hide();
                    } );
                }
                else if( ( loginStateVal == "2" || loginStateVal == 2 )  ){
                    $.delay_load( function(){ return $.cookie }, function(){
                        if(  $("#J_login_state_user").val() && $.cookie( "loginHash" ) && $.cookie( "loginHash" ).length > 0 ){
                            loginStateObj.val( 1 );
                        }
                        else{
                            $.delay_load( function(){ return $.mask_layer_load_finish; }, function(){
                                para.userLoginLinkObj.click();
                                loginStateObj.val( 0 );
                            });
                        }

                        that.changeLoginState();
                    } );
                }
                else {
                    userObj.hide();
                    loginObj.show();
                    $.delay_load( function(){ return $(".welcome-3dbox_1.1 .login").length > 0 }, function(){
                        $(".welcome-3dbox_1.1 .login").hide();
                    } );
                    $.delay_load( function(){ return $(".welcome-3dbox_1.1 .not-login").length > 0 }, function(){
                        $(".welcome-3dbox_1.1 .not-login").show();
                    } );
                }
            },

            /**
             * 登录框架展示
             */
            showLoginFrame: function () {
                var that = _header;
                var para = that.parameter;

                that.remember_me_state_init();

                if( $.get_trim_value( para._remember_me ) == "1" ){
                    para._mobile.val( $.cookie("remember_me_mobile" ) );
                }

                that.parameter.loginPanelObj.css("opacity", 0);
                that.parameter.loginPanelObj.css("display", "block");

                that.parameter.loginPanelObj.animate({
                    opacity: 1
                }, 200, "swing");

                that.loginCheck( that.getLoginErrorCount() );
            },

            /**
             * 登录框架隐藏
             */
            hideLoginFrame: function (callback) {
                _header.parameter.loginPanelObj.css("display", "none");
                callback();
            },

            //导航位切换
            nav_change: function () {
                var targets = $("div.inner-nav a");
                var cur = $("#J_cur_nav");
                var cur_value = null;
                if (cur) {
                    cur_value = cur.val();
                }

                if (targets && cur_value) {
                    $.each(targets, function () {
                        if ($(this).attr("data-value") == cur_value) {
                            $(this).addClass("cur");
                        }
                    });
                }
            },

            /**
             * 导航条初始化效果
             */
            navAnimateInit: function () {
                var that = this;

                var elements = that.parameter.innerNavObj.find("a");
                var line = that.parameter.innerNavObj.find("span");

                elements.each(function () {
                    var elm = $(this);

                    if (elm.hasClass("cur")) {
                        that.parameter.navCurrentValue = elm.attr("data-value");
                        var currentPos = $.parseNumber(line.css("margin-left"));
                        var targetPos = currentPos + 100 * that.parameter.navCurrentValue;
                        line.css("display", "block");
                        line.css("margin-left", targetPos);
                        elm.css("background-color", "#FAFAFA");
                        return false;
                    }
                });
            },

            /**
             * 导航条动画
             */
            navAnimate: function (event, type) {
                var that = this;

                var mousePagePos = event.clientX;
                var containerPagePos = event.currentTarget.offsetLeft;
                var mousePos = mousePagePos - containerPagePos;

                clearInterval(that.parameter.intervalObj);

                var line = that.parameter.innerNavObj.find("span");
                var currentPos = $.parseNumber(line.css("margin-left"));

                var targetPos = 0;


                if (type == "leave") {
                    clearTimeout(that.parameter.timeoutObj);
                    var elements = that.parameter.innerNavObj.find(".cur");
                    targetPos = 100 * elements.attr("data-value");
                }
                else if (mousePos > 0 && mousePos < 101) {
                    targetPos = 0;
                }
                else if (mousePos > 100 && mousePos < 201) {
                    targetPos = 100;
                }
                else if (mousePos > 200 && mousePos < 301) {
                    targetPos = 200;
                }
                else if (mousePos > 300 && mousePos < 401) {
                    targetPos = 300;
                }
                else if (mousePos > 400 && mousePos < 501) {
                    targetPos = 400;
                }
                else {

                }

                if ($.browser.msie && $.browser.version == "7.0") {
                    targetPos = targetPos - 500;
                }

                var moveTime = 10;
                var moveDis = 0;

                if (type == "leave") {
                    that.parameter.timeoutFlag = true;
                    moveTime = moveTime * 1.5;
                }

                if (targetPos > currentPos) {
                    moveDis = ( targetPos - currentPos ) / moveTime;
                }
                else {
                    moveDis = ( currentPos - targetPos ) / moveTime;
                }

                that.parameter.intervalObj = setInterval(function () {
                    var moveLinePos;
                    if (targetPos > currentPos) {
                        moveLinePos = $.parseNumber(line.css("margin-left")) + moveDis;
                        line.css("margin-left", moveLinePos + "px");

                        if (moveLinePos >= targetPos) {
                            clearInterval(that.parameter.intervalObj);
                            line.css("margin-left", targetPos + "px");
                        }
                    }
                    else {
                        moveLinePos = $.parseNumber(line.css("margin-left")) - moveDis;
                        line.css("margin-left", moveLinePos + "px");

                        if (moveLinePos <= targetPos) {
                            clearInterval(that.parameter.intervalObj);
                            line.css("margin-left", targetPos + "px");
                        }
                    }

                }, moveTime);
            }
        };

        _header.init();
    } );