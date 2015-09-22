
    ( function( $ ){
        //构造mask_layer
        var mask_layer = function( _frame_targets, opt ){
            var that = this;

            //默认参数
            that.defaults = {
                //主框架对象
                frame_targets: _frame_targets,
                //主框架展示类型 默认：fixed
                position_type: opt.position_type ? opt.position_type : "fixed",
                //遮罩层样式名 用以标识和匹配遮罩层的class name， 默认： mask-layer-bg
                bg_class_name: opt.bg_class_name ? opt.bg_class_name : "mask-layer-bg",
                //遮罩层颜色 默认：#000000;
                bg_color: opt.bg_color ? opt.bg_color : "#000000",
                //用以触发展示事件的目标对象集
                open_elms: opt.open_elms,
                //用以触发关闭事件的目标对象集
                close_elms: opt.close_elms,
                //展示前的回调函数
                open_animate_before_callback: opt.open_animate_before_callback,
                //展示后的回调函数
                open_animate_end_callback: opt.open_animate_end_callback,
                //关闭前的回调函数
                close_animate_before_callback: opt.close_animate_before_callback,
                //关闭后的回调函数
                close_animate_end_callback: opt.close_animate_end_callback,
                //Z轴深度 默认：100
                z_index: opt.z_index ? opt.z_index : 100,
                //遮罩层透明度 默认：0.8
                opacity_value: opt.opacity_value ? opt.opacity_value : 0.8,
                //动画时间 默认：300
                animate_time: opt.animate_time ? opt.animate_time : 300,
                //默认关闭开关  默认值：true
                default_close_switch: ( opt.default_close_switch == true || opt.default_close_switch == false ) ? opt.default_close_switch : true
            };

            //过程参数
            that.parameter = {
                delay_play_flag : true,
                animate_play_flag: true
            };
        };

        mask_layer.prototype = {
            //程序入口方法
            mask: function(){
                var that = this;
                that._get_target_frame();
                return that;
            },

            _get_target_frame: function () {
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                if( opt.frame_targets && opt.frame_targets.length > 0 ){

                    $.each( opt.frame_targets, function( i ){
                        para.frame_target = $( this );

                        if( opt.open_elms && opt.open_elms.length == opt.frame_targets.length ){
                            para.open_elms = $( opt.open_elms[ i ] );
                        }
                        else{
                            para.open_elms = opt.open_elms;
                        }

                        if( opt.close_elms && opt.close_elms.length == opt.frame_targets.length ){
                            para.close_elms = $( opt.close_elms[ i ] );
                        }
                        else{
                            para.close_elms = opt.close_elms;
                        }

                        that._init();
                        that._bind();
                    } );
                }

                return true;
            },

            //初始化
            _init: function(){
                var that = this;
                that._create_mask_layer();
                that._adjust_mask_layer_bg();
                that._adjust_mask_layer_frame();
                that.auto_position_center( false );
            },


            /**
             * 获取或创建遮罩层对象
             * @private
             */
            _create_mask_layer: function(){
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                var bg_target = para.frame_target.prev();

                if( bg_target && bg_target.hasClass( opt.bg_class_name ) ){
                    para.bg_target = bg_target;
                }
                else{
                    bg_target = para.frame_target.next();

                    if( bg_target && bg_target.hasClass( opt.bg_class_name ) ){
                        para.bg_target = bg_target;
                    }
                    else {
                        bg_target = $('<div class="' + opt.bg_class_name + '" ></div>');
                        bg_target.hide();
                        para.frame_target.before(bg_target);
                        para.bg_target = bg_target;
                    }
                }

                if( !opt.close_elms ){
                    para.close_elms = para.bg_target;
                }
            },

            /**
             * 事件绑定
             * @private
             */
            _bind: function(){
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                $( window ).bind( "resize", function(){
                    that.auto_position_center( true );
                } );

                $( window ).bind( "scroll", function( event ){
                    var elm = $( event.target );
                } );

                $( document ).bind( "keyup", function( event ){
                    if( event.which == 27 && opt.default_close_switch ){
                        that.hide();
                    }
                } );

                //绑定open事件响应
                if( para.open_elms && para.open_elms.length > 0 ){
                    para.open_elms.each( function(){
                        $( this ).bind( "click", function(){
                            that.show();
                        } );
                    } );
                }

                //绑定close事件响应
                if( para.close_elms && para.close_elms.length > 0 ){
                    $.each( para.close_elms, function(){
                        var close_target = $( this );

                        close_target.bind( "click", function(){
                            that.hide();
                        } );
                    } );
                }
            },

            /**
             * 调整遮罩层的样式
             * @private
             */
            _adjust_mask_layer_bg: function() {
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                if( para.bg_target ){
                    var z_index = that.parse_number( para.frame_target.css( "z-product" ) );

                    if( !z_index || z_index == "auto" ){
                        z_index = 0;
                    }

                    para.bg_target.css(
                        {
                            "height": that._get_browser_height() + "px",
                            "background-color": opt.bg_color,
                            "width": "100%",
                            "position": "fixed",
                            "top": "0px",
                            "left": "0px",
                            "z-index": z_index + opt.z_index,
                            "display": "none",
                            "opacity": opt.opacity_value
                        }
                    );
                }
            },

            /**
             * 调整框架层的样式
             * @private
             */
            _adjust_mask_layer_frame: function() {
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                var z_index = that.parse_number( para.frame_target.css( "z-product" ) );

                if( !z_index || z_index == "auto" ){
                    z_index = 0;
                }

                if( para.frame_target ){
                    para.frame_target.css(
                        {
                            "position": opt.position_type,
                            "z-index": z_index + opt.z_index,
                            "over-flow": "hidden",
                            "display": "none"
                        }
                    );
                }

                para.target_width = para.frame_target.width();
                para.target_height = para.frame_target.height();

                if( para.target_width == 0 ){
                    para.target_width = that._get_browser_width() / 2;
                }
                if( para.target_height == 0 ){
                    para.target_height = that._get_browser_height() / 2;
                }

                if( para.frame_target.css( "background-color" ) == "transparent" || para.frame_target.css( "background-color" ) == "rgba(0, 0, 0, 0)" ){
                    para.frame_target.css( "background-color", "RGB( 255, 255, 255 )" );
                }
            },

            /**
             * 框架层对象自动屏幕居中
             */
            auto_position_center: function( is_resize ){
                var that = this;
                var para = that.parameter;
                var opt = that.defaults;

                if( para.frame_target ){
                    var scrollTopValue = $( document).scrollTop();
                    if( opt.position_type.toLowerCase() == "fixed" ){
                        scrollTopValue = 0;
                    }
                    var top_value = ( that._get_browser_height() / 2 ) - ( para.frame_target.height() / 2 ) + scrollTopValue;
                    top_value = top_value < 0 ? 40 : top_value;
                    var left_value = ( that._get_browser_width() / 2 ) - ( para.frame_target.width() / 2 );
                    left_value = left_value < 0 ? 0 : left_value;

                    if( is_resize ){

                        if( para.resize_timeout ){
                            clearTimeout( para.resize_timeout );
                        }
                        if( para.resize_animate ){
                            clearInterval( para.resize_animate );
                        }

                        para.resize_timeout = setTimeout( function(){

                            para.resize_animate = para.frame_target.animate(
                                {
                                    "top": top_value,
                                    "left": left_value
                                },
                                500,
                                "swing"
                            );
                        }, 100 );
                    }
                    else{
                        para.frame_target.css(
                            {
                                "top": top_value,
                                "left": left_value
                            }
                        );
                    }
                }

                if( para.bg_target ){
                    para.bg_target.css(
                        {
                            "height": that._get_browser_height() + "px"
                        }
                    );
                }
            },

            //开放 层展示方法
            show: function(){
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                para.target_width = para.frame_target.width();
                para.target_height = para.frame_target.height();

                var animate_before_callback = opt.open_animate_before_callback;
                var animate_end_callback = opt.open_animate_end_callback;

                that._layer_operate( true, animate_before_callback, animate_end_callback );
            },

            //开放 层关闭方法
            hide: function(){
                var that = this;
                var opt = that.defaults;

                var animate_before_callback = opt.close_animate_before_callback;
                var animate_end_callback = opt.close_animate_end_callback;

                that._layer_operate( false, animate_before_callback, animate_end_callback );
            },

            /**
             * 展示或关闭
             */
            _layer_operate: function( show_state, animate_before_callback, animate_end_callback ) {
                var that = this;
                var para = that.parameter;

                if( para.animate_play_flag ){
                    if( animate_before_callback ){
                        animate_before_callback( function(){
                            that._layer_animate( show_state, function(){
                                if( animate_end_callback ) {
                                    animate_end_callback();
                                }
                            } );
                        }, that );
                    }
                    else{
                        that._layer_animate( show_state, function(){
                            if( animate_end_callback ){
                                animate_end_callback();
                            }
                        } );
                    }
                }
            },

            _layer_animate: function( is_show, callback ){
                var that = this;
                var opt = that.defaults;
                var para = that.parameter;

                var target = para.frame_target;

                var width = 0;
                var height = 0;

                var target_width = 0;
                var target_height = 0;

                var scrollTopValue = $( document).scrollTop();
                if( opt.position_type.toLowerCase() == "fixed" ){
                    scrollTopValue = 0;
                }

                para.animate_play_flag = false;

                if( is_show ){

                    target.css(
                        {
                            "width": width,
                            "height": height
                        }
                    );

                    target_width = para.target_width;
                    target_height = para.target_height;

                    para.bg_target.show();
                    para.frame_target.show();

                    var top_value = ( that._get_browser_height() / 2 ) - ( target_height / 2 ) + scrollTopValue;
                    top_value = top_value < 0 ? 40 : top_value;
                    var left_value = ( that._get_browser_width() / 2 ) - ( target_width / 2 );
                    left_value = left_value < 0 ? 40 : left_value;

                    that.auto_position_center( false );

                    target.animate(
                        {
                            width: target_width + "px",
                            height: target_height + "px",
                            top: top_value,
                            left: left_value
                        },
                        opt.animate_time,
                        "swing",
                        function(){
                            target.css(
                                {
                                    "width": "",
                                    "height": ""
                                }
                            );
                            callback();
                            para.animate_play_flag = true;
                        }
                    );
                }
                else{
                    var top_value = ( that._get_browser_height() / 2 ) + scrollTopValue;
                    top_value = top_value < 0 ? 40 : top_value;
                    var left_value = ( that._get_browser_width() / 2 );
                    left_value = left_value < 0 ? 40 : left_value;

                    target.animate(
                        {
                            width: "0px",
                            height: "0px",
                            top: top_value,
                            left: left_value
                        },
                        opt.animate_time,
                        "swing",
                        function(){
                            para.bg_target.hide();
                            para.frame_target.hide();
                            para.frame_target.css( {
                                width: para.target_width + "px",
                                height: para.target_height + "px"
                            } );
                            target.css(
                                {
                                    "width": "",
                                    "height": ""
                                }
                            );
                            callback();
                            para.animate_play_flag = true;
                        }
                    );
                }
            },

            /**
             * 获取浏览器可视区域高度
             * @return 高度值
             */
            _get_browser_height: function(){
                var winHeight;

                if ( document.documentElement.clientHeight ){
                    winHeight = document.documentElement.clientHeight ;
                }
                else if ( ( document.body ) && ( document.body.clientHeight ) ){
                    winHeight = document.body.clientHeight;
                }
                else{
                    winHeight = 0
                }

                return winHeight;
            },

            set_new_size: function( size ){
                var that = this;
                var para = that.parameter;

                para.target_width = size.width;
                para.target_height = size.height;
            },

            /**
             * 获取浏览器可视区域宽度
             * @return 高度值
             */
            _get_browser_width: function(){
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
            },

            /**
             * 像素数值字符串转数字
             */
            parse_number: function( pixel_number ){
                if( pixel_number && typeof pixel_number === "string" && pixel_number.indexOf( "px" ) != -1 ){
                    return parseFloat( pixel_number.substring( 0, pixel_number.indexOf( "px" ) ) );
                }
                else{
                    return parseFloat( pixel_number );
                }
            }
        };

        $.mask_layer_load_finish = true;

        //定义全局jQuery方法
        $.fn.mask_layer = function( opt ){
            var mask_layer_obj = new mask_layer( this, opt );
            return mask_layer_obj.mask();
        };

    } )( jQuery );
