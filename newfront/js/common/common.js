
//公共操作部分
$( document ).ready( function(){

    $.custom_common = {};

    var _common = {

        init: function () {
            var that = this;

            that.parameter_init();

            that.load();

            that.plugins();

            $.input_blur();
        },

        //后台配置项初始化
        parameter_init: function(){
            $.GlobalConfig = {
                //异步加载页面开关初始化
                page_load_switch: true,
                //前端表单验证开关初始化
                verify_switch: true,
                //Ajax请求地址前缀
                ajax_url: "http://192.168.1.167/",
                //Ajax请求同源地址前缀
                ajax_local_url: "/",
                //Ajax请求方法
                ajax_fun: "blogic.do",
                //Ajax请求错误，转向地址
                ajax_error_url: "/error.do",
                //验证码获取方法
                get_code_fun: "account/imgCode.do?abcdefg=",
                //cookie保存时间
                cookie_time: 1000 * 60 * 60 * 2
            };
//                $.GlobalConfig = {
//                    //异步加载页面开关初始化
//                    page_load_switch: true,
//                    //前端表单验证开关初始化
//                    verify_switch: true,
//                    //Ajax请求地址前缀
//                    ajax_url: "../../../Ajax_Test/",
//                    //Ajax请求同源地址前缀
//                    ajax_local_url: "../../../Ajax_Test/",
//                    //Ajax请求方法
//                    ajax_fun: "JSONP_Test.html",
//                    //Ajax请求错误，转向地址
//                    ajax_error_url: "/error.do",
//                    //验证码获取方法
//                    get_code_fun: "account/imgCode.do?abcdefg=",
//                    //cookie保存时间
//                    cookie_time: 1000 * 60 * 60 * 2
//                };

            $.extend( $.GlobalConfig, getGlobalConfigFormServer() );
        },

        //include页头及页脚
        load: function () {
            includePage( "#J_header", "../common/header.html" );
            includePage( "#J_footer", "../common/footer.html" );

            $( "head" ).append( "<meta name='renderer' content='webkit'>" );
        },

        //加载公共插件
        plugins: function() {
            includePage( "head", "../../../js/plugins/plugins.html" );
        }

    };

    _common.init();
} );

//获取后台公共配置
function getGlobalConfigFormServer(){
    var _global_config = {};
    if( typeof GlobalConfigFromServer !== "undefined" ) {
        _global_config = GlobalConfigFromServer;
    }
    return _global_config;
}

//公共方法部分

/**
 * jQuery实现include方法
 * @param id 目标元素ID
 * @param path include文件路径
 */
var includePage = function( id, path ){
    if( $.GlobalConfig.page_load_switch ){
        $.get( path, function( data ){
            var target = $( id );
            var include_flag = false;
            if( target && data ){
                if( target.html() ){
                    if( id == "head" ){
                        include_flag = true;
                    }
                    else if( target.html().trim().length == 0 ){
                        include_flag = true;
                    }
                }
                else{
                    include_flag = true;
                }
            }

            if( include_flag && $.GlobalConfig.page_load_switch ){
                ( $( data ) ).appendTo( $( id ) );
            }
        });
    }
};

$.get_trim_value = function( target, value_type ){
    var type = typeof target;
    var target_obj = null;
    var target_value = "";

    if( type == "string" ){
        if( ( ( ( target.indexOf( "." ) == 0 ) || ( target.lastIndexOf( "." ) == 0 ) ) && target.indexOf( "#" ) == -1 )
            || ( ( ( target.indexOf( "#" ) == 0 ) || ( target.lastIndexOf( "#" ) == 0 ) ) && target.indexOf( "." ) == -1 ) ){
            target_obj = $( target );
        }
        else if( target.indexOf( "." ) == -1 && target.indexOf( "#" ) == -1 ){
            target_obj = $( "." + target );
            if( target_obj && target_obj.length == 0 ){
                target_obj = $( "#" + target );
                if( target_obj && target_obj.length == 0 ) {
                    target_obj = null;
                }
            }
            else if( target_obj && target_obj.length > 1 ){
                target_obj = null;
                console.error( "通过." + target + "获取到的对象数量大于1，无法取值。" );
            }
        }
    }
    else if( type == "object" ){
        target_obj = target;
    }

    if( target_obj && target_obj.length == 1 ){
        if( value_type == "html" ){
            target_value = target_obj.html().trim();
        }
        else{
            target_value = target_obj.val().trim();
        }
    }

    return target_value
};


/**
 * 判定异步加载对象判定是否有效
 * @param target_element 用以判定是否加载完成的目标对象
 * @param callback 加载后执行的回调
 * @param 延迟加载时间 默认10毫秒
 * @param 加载失败重试次数 默认10次
 * return boolean 返回加载结果；
 */
$.delay_load = function( target, callback, delay_time, retry ){
    var load = function( target, callback, delay_time, retry ){
        var that = this;
        that.opt = {
            target: target,
            callback: callback,
            delay_time: ( delay_time && isNaN( delay_time ) && delay_time > 0 ) ? delay_time : 10,
            retry: ( delay_time && isNaN( delay_time ) && retry > 0 ) ? retry : 10,
            count: 0
        };

        that._delay_load = function(){
            var opt = that.opt;

            setTimeout( function(){
                if( opt.target() ){
                    opt.callback();
                    return true;
                }
                else{
                    if( opt.count < opt.retry ){
                        opt.count++;
                        that._delay_load();
                    }
                    else{
                        return false;
                    }
                }
            }, opt.delay_time );
        }
    };

    var load_obj = new load( target, callback, delay_time, retry );
    return load_obj._delay_load();
};

/**
 * 获取浏览器可视区域高度
 * @return 高度值
 */
$.getBrowserHeight = function(){
    var winHeight;

    if ( document.documentElement.clientHeight ){
        winHeight = document.documentElement.clientHeight;
    }
    else if ( ( document.body ) && ( document.body.clientHeight ) ){
        winHeight = document.body.clientHeight;
    }
    else{
        winHeight = 0
    }

    return winHeight;
};


/**
 * 获取浏览器可视区域宽度
 * @return 高度值
 */
$.getBrowserWidth = function(){
    var winWidth;

    if ( document.documentElement.clientWidth ){
        winWidth = document.documentElement.clientWidth ;
    }
    else if ( ( document.body ) && ( document.body.clientWidth ) ){
        winWidth = document.body.clientWidth;
    }
    else{
        winWidth = 0
    }

    return winWidth;
};

/**
 * 像素数值字符串转数字
 */
$.parseNumber = function( pixel_number ){
    if( pixel_number && typeof pixel_number === "string" && pixel_number.indexOf( "px" ) != -1 ){
        return parseFloat( pixel_number.substring( 0, pixel_number.indexOf( "px" ) ) );
    }
    else{
        return pixel_number;
    }
};



/**
 *鼠标移入移出 显示阴影
 *@param tClass 目标元素的class
 *@param tShadow 阴影区域
 */
var boxShadow = function(tClass,tShadow){
    $(tClass).bind({
        mouseenter:function(){
            $(this).siblings(tShadow).animate({left:'4px',top:'4px'},10);
        },
        mouseleave:function(){
            $(this).siblings(tShadow).animate({left:'0px',top:'0px'},10);
        }
    });
};

$.input_blur = function(){
    $( 'body' ).delegate( "input[ type = 'text' ], input[ type = 'password' ], textarea", "input propertychange", function(){
        var elm = $( this );
        var val = elm.val();
        if( val && val.trim() != "" ){
            elm.css( { "color": "#333333" } );
        }
        else{
            elm.css( { "color": "" } );
        }
    } );
};

/**
 * 金额格式变化
 *@param s 金额
 */
function formatMoney(s) {
    var len;
    var n = s.toString().length;
    n = n > 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];
    if(String(l).indexOf("-")!=-1){
        len = l.length-1
    }else{
        len = l.length
    }
    var t = "";
    for (q = 0; q < len; q++) {
        t += l[q] + ((q + 1) % 3 == 0 && (q + 1) != len ? "," : "");
    }
    return t.split("").reverse().join("") ;
}

/**
 * 将数值四舍五入(保留2位小数)后格式化成金额形式
 *
 * @param num 数值(Number或者String)
 * @return 金额格式的字符串,如'1,234,567.45'
 * @type String
 */
function formatCurrency( num ) {
    num = num.toString().replace( /\$|\,/g,'');
    if( isNaN( num ) ){
        num = "0";
    }
    var sign = ( num == ( num = Math.abs( num ) ) );
    num = Math.floor( num * 100 + 0.50000000001 );
    var cents = num % 100;
    num = Math.floor( num / 100 ).toString();
    if(cents < 10 ){
        cents = "0" + cents;
    }
    for ( var i = 0; i < Math.floor( ( num.length - ( 1 + i ) ) / 3 ); i++)
        num = num.substring( 0, num.length - ( 4 * i + 3 ) ) + ',' +
            num.substring( num.length - ( 4 * i + 3 ) );
    return ( ( ( sign ) ? '' : '-' ) + num + '.' + cents);
}

/**
 * 回到顶部
 * */

function scrollToTop(){
    var topName = $(".scroll_to_top");
    topName.hide();
    var onOff = true;
    var upOff;
    $(window).scroll(function(){
        if(onOff) {
            if ($(window).scrollTop() > 300) {
                $(".scroll_to_top").fadeIn(1000);
                onOff = false;
                upOff = true;
            }
        }
        if(upOff){
            if ($(window).scrollTop() < 300) {
                $(".scroll_to_top").fadeOut(1000);
                onOff = true;
                upOff = false;
            }
        }
    });
    topName.click(function(){
        $("body,html").animate({
                scrollTop:0
            },
            1000);
    })
}

/**
 *
 * @param target 传入目标对象或目标ID 必须
 * @returns target: 获取到的目标对象，如未获取到则返回null
 */
var get_target = function( target ){
    target = typeof target == "object" ? target :
        ( typeof target == "string" ?
            ( target.indexOf( "#" ) == -1 ? $( "#" + target ) : $( target ) ) : null );

    return target;
};

/**
 *
 * @param target 传入目标对象或目标ID 必须
 * @returns target: 获取到的目标对象，如未获取到则返回null
 */
function is_mobile(){
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");

    var browser = navigator.userAgent.toLowerCase();

    $.is_mobile = false;

    for (var i=0; i<mobileAgent.length; i++){
        if (browser.indexOf(mobileAgent[i])!=-1){
            $.is_mobile = true;
            break;
        }
    }
}

is_mobile();

//金额格式变化
//s:金额
//n:位数
function forMoney(s, n) {
    var len;
    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];

    if(String(l).indexOf("-")!=-1){
        len = l.length-1
    }else{
        len = l.length
    }
    var t = "";
    for (var q = 0; q < len; q++) {
        t += l[q] + ((q + 1) % 3 == 0 && (q + 1) != len ? "," : "");
    }
    if(r == undefined){
        r = "00";
    }else if(r.length<2){
        r = r + "0";
    }
    if(String(l).indexOf("-") != -1){
        if(n == 0){
            return "-" + t.split("").reverse().join("")
        } else {
            return "-" + t.split("").reverse().join("") + "." + r
        }
    } else{
        if(n == 0){
            return t.split("").reverse().join("");
        } else {
            return t.split("").reverse().join("") + "." + r;
        }
    }
}

/*时间格式化    添加时间中的  ： （间隔符号） */
function time( aClass , bClass , cClass ){
    $( aClass ).each(function(){
        var value = $(this).find( bClass ).val().trim();
        if( value == null || value =="" || value.length == 0){
            $(this).html("--")
        } else {
            var date = value.slice(0,3) + ":" + value.slice(3,5)+":"+ value.slice(5,7);
        }
        $(this).find( cClass ).html(date);
    })
}

/*时间格式化    添加时间中的  - （间隔符号） */
function timer( dClass , eClass ,fClass){
    $(dClass).each(function(){
        var value = $(this).find(eClass).val().trim();
        if( value == null || value =="" || value.length == 0){
            $(this).html("--")
        } else {
            var date = value.slice(0,3) + "-" + value.slice(3,5)+"-"+ value.slice(5,7);
        }
        $(this).find(fClass).html(date);
    })
}

/*限制文字长度   后面变成省略号*/
function  astrict (needClass,needLength){
    var content_obj =$(needClass);
    $.each( content_obj, function(){
        var target = $( this );
        var content = target.html();
        var con=null;
        if(content.length > needLength){
            con=content.substr(0,needLength-1)+"...";
        }
        else if( content.length == needLength ){
            con=content;
        }
        else{
            return true;
        }
        target.html(con);
    } );
}
//特殊金额形式
function special_money( para ){
    var size_1 = "font-size: 18px";
    var size_2 = "font-size: 12px";
    var color_1 = "";
    var color_2 = "";

    if( para ){
        size_1 = para.size_1 ? "font-size:" + para.size_1 : size_1;
        size_2 = para.size_2 ? "font-size:" + para.size_2 : size_2;
        color_1 = para.color_1 ? "color:" + para.color_1 : color_1;
        color_2 = para.color_2 ? "color:" + para.color_2 : color_2;
    }

    var targets = $( ".special-money" );
    if( targets ){
        $.each( targets, function(){
            var target = $( this );
            var value = target.html();
            var first = "";
            var last = "";
            if( value.indexOf( "." ) == -1 ){
                first = value;
            }
            else{
                first = value.substring( 0, value.indexOf( "." ) );
                last = value.substring( value.indexOf( "." ) );
            }
            var html_content = "<span style='"+ size_1 + " " + color_1 + "'>";
            html_content += first;
            html_content += "</span>";
            html_content += "<span style='"+ size_2 + " " + color_2 + "'>";
            html_content += last;
            html_content += "</span>";
            target.html( html_content );
        } );
    }
}

//图标
function ico(){
    $("head").append("<link rel='shortcut icon' href='../../../img/common/ico/favicon.ico'/>");
    $("head").append("<link rel='icon' href='../../../img/common/ico/favicon.ico'/>");
}

ico();


//调用Blogic通用方法
function callBLogic(reqName, data, success, error) {
    callBLogicInternal(reqName, data, success, error, true);
}
function callBLogicSync(reqName, data, success, error) {
    callBLogicInternal(reqName, data, success, error, false);
}
function callBLogicInternal(reqName, data, success, error, async) {
    var newData = {
        loginHash : $.cookie("loginHash")
    };
    newData = $.extend(newData, data);

    var errorFunc = function( xhr, txt, err ) {
        alert( "请求异常,错误信息如下：\n" + err );
    };

    if ( typeof error != "function" ) {
        error = errorFunc;
    }

    var url = $.GlobalConfig.ajax_url + $.GlobalConfig.ajax_fun;
    $.ajax({
        type : "post",
        url : url,
        async : async,
        dataType : "json",
        data : newData,
        headers : {
            "requestName" : reqName
        },
        success : success,
        error : error
    });
}

//直接action请求
function ajax_request( url, data, async, success, error ) {
    var newData = {
        loginHash : $.cookie("loginHash")
    };
    newData = $.extend( newData, data );

    var errorFunc = function( xhr, txt, err ) {
        alert( "请求异常,错误信息如下：\n" + err );
    };

    if ( typeof error != "function" ) {
        error = errorFunc;
    }

    url = $.GlobalConfig.ajax_local_url + url;

    $.ajax({
        type: "post",
        url: url,
        async: async,
        dataType: "json",
        data: newData,
        success: success,
        error: error
    });
}

//刷新验证码
function refreshCode( container_obj ) {
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
            var src_url = $.GlobalConfig.ajax_url + $.GlobalConfig.get_code_fun;
            target_obj.ready( function(){
                src_url += random_sha;
                target_obj.attr("src", src_url);
                input_obj.attr("sha-code", random_sha);
                if( hidden_obj.length > 0 ){
                    hidden_obj.val( random_sha );
                }
            } );
        }
    );
}

//遮挡手机号
function mask_mobile( origin, target ){
    if( origin && origin.length > 0 && target && target.length > 0 ){
        var mobile = $.get_trim_value( origin );
        if( mobile.length == 11 ){
            var front = mobile.substring( 0, 3 );
            var last = mobile.substring( 7 );
            target.html( front + "****" + last );
        }
    }
}


//加载通用提示
function load_tips( show_type, callback ){
    $.delay_load(
        function(){
            return $.result_tips;
        },
        function(){
            var obj = $.result_tips( show_type, false );
            callback( obj );
        }
    );
}


//获取用户状态
function get_user_all_state(){
    var values = null;

    var user_state_target = $( "#J_user_all_state" );
    if( user_state_target && user_state_target.length > 0 ){
        var value = $.get_trim_value( user_state_target );

        if( value && value != "" ){
            values = {};
            var length = value.length;

            for( var i = 0; i < length; i++ ){
                var char = value.charAt( i );
                if( char == 1 || char == "1" )
                {
                    values[ i + 1 ] = true;
                }
                else if( char == 0 || char == "0" )
                {
                    values[ i + 1 ] = false;
                }
                else{
                    values[ i + 1 ] = null;
                }
            }
        }
    }

    return values;
}


