

//公共页头部分
$( document ).ready( function(){
    var _footer;

    _footer = {
        parameter: {
            isIE7: $.browser.msie && $.browser.version == "7.0",
            _online_service: $( "#J_online_service" )
        },

        //初始化加载
        init: function () {
            var that = this;

            that.bind();

            that.change_to_disable();

            $.delay_load( function(){ return $.placeholder }, function(){
                $.placeholder();
            } );
            $.delay_load( function(){ return $.special_radio_checkbox }, function(){
                $.special_radio_checkbox();
            } );
            $.delay_load( function(){ return $.input_blur }, function(){
                $.input_blur();
            } );
        },

        //事件绑定
        bind: function () {
            var that = this;
            var para = that.parameter;

            //非link跳转请求事件监听
            $( "body").delegate( "[ request-url ]", "click", function(){
                var target = $( this );
                var target_value = target.attr( "request-url").trim();
                var target_type = target.attr( "target") ? target.attr( "target").trim() : "";
                if( target_value && target_value != "" ){
                    if( target_value == "#" ){
                        window.location.reload();
                    }
                    else{
                        if( target_type == "_blank" ){
                            window.open( target_value );
                        }
                        else{
                            window.location.href = target_value;
                        }
                    }
                }
            } );

            //打开客服事件绑定
            para._online_service.bind( "click", function(){
                that.online_service( $( this ) )
            } );
        },

        //改变disable样式的按钮背景色
        change_to_disable: function(){
            var targets = $( ".disable" );

            if( targets.length > 0 ){
                $.each( targets, function(){
                    var target = $( this );
                    target.css( {
                        "background-color": "#CCCCCC",
                        "border-color": "#CCCCCC",
                        "color": "#FFFFFF"
                    } );
                } );
            }
        },

        /***************** 乐语在线客服 ******************/
        online_service: function( target ){
            if( target && target.length > 0 ){
                var url = target.attr( "service-url" );
                if( url && url.trim() != "" ){
                    var iTop = (window.screen.availHeight-30-544)/2;
                    var iLeft = (window.screen.availWidth-10-644)/2;
                    window.open( url, '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no'+',top='+iTop+',left='+iLeft);
                }
            }
        }
    };

    _footer.init();
} );