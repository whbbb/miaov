
    ( function( $ ){
        //构造animate_button
        var animate_button = function( opt ){
            var that = this;

            //默认参数
            that.defaults = {
                theme: opt.theme ? opt.theme : "green",
                flag_name: opt.flag_name ? opt.flag_name : "animate-button"
            };

            //过程参数
            that.parameter = {
            };
        };

        animate_button.prototype = {
            //程序入口方法
            init: function(){
                var that = this;

                that.get_targets();
                that._construct_animate_button();
                //that.action_button();

                return that;
            },

            //获取符合条件的对象集
            get_targets: function(){
                var that = this;
                var def = that.defaults;
                var para = that.parameter;

                para.targets = $( "[" + def.flag_name + "='true']" );
            },

            //构造动画按钮结构
            _construct_animate_button: function(){
                var that = this;
                var para = that.parameter;

                if( para.targets && para.targets.length > 0 ){
                    $.each( para.targets, function(){
                        var target = $( this );
                        that._create_target_animate_button( target );
                    } );
                }
            },

            //创建目标结构
            _create_target_animate_button: function( target ){
                var that = this;



                var target_box_model = that.get_target_box_model( target );
                //console.log( target_box_model );
            },

            //获取目标盒模型参数
            get_target_box_model: function( target ){
                function parseNumber( pixel_number ){
                    if( pixel_number && typeof pixel_number === "string" && pixel_number.indexOf( "px" ) != -1 ){
                        return parseFloat( pixel_number.substring( 0, pixel_number.indexOf( "px" ) ) );
                    }
                    else{
                        return pixel_number;
                    }
                }

                return {
                    width: parseNumber( target.css( "width" ) ),
                    height: parseNumber( target.css( "height" ) ),
                    top: parseNumber( target.css( "top" ) ),
                    right: parseNumber( target.css( "right" ) ),
                    bottom: parseNumber( target.css( "bottom" ) ),
                    left: parseNumber( target.css( "left" ) ),
                    borderTop: parseNumber( target.css( "border-top-width" ) ),
                    borderRight: parseNumber( target.css( "border-right-width" ) ),
                    borderBottom: parseNumber( target.css( "border-bottom-width" ) ),
                    borderLeft: parseNumber( target.css( "border-left-width" ) ),
                    marginTop: parseNumber( target.css( "margin-top" ) ),
                    marginRight: parseNumber( target.css( "margin-right" ) ),
                    marginBottom: parseNumber( target.css( "margin-bottom" ) ),
                    marginLeft: parseNumber( target.css( "margin-left" ) ),
                    paddingTop: parseNumber( target.css( "padding-top" ) ),
                    paddingRight: parseNumber( target.css( "padding-right" ) ),
                    paddingBottom: parseNumber( target.css( "padding-bottom" ) ),
                    paddingLeft: parseNumber( target.css( "padding-left" ) )
                };
            },

            action_button: function(){
                var buttons = $( ".animate-button" );
                if( buttons.length > 0 ){
                    $.each( buttons, function(){
                        var button = $( this );
                        var width = button.width();
                        var height = button.height();
                        var text_top = height * -1;
                        var img_margin_top = "";
                        if( button.attr( "button-border" ) != "has" ){
                            height = height - 2;
                            text_top = height * -1 - 1;
                            img_margin_top = "1px";
                        }
                        var src_path = button.attr( "src-path" );
                        var img_obj = $( "<img class='animate-button' />" );
                        img_obj.attr( "src", src_path );
                        img_obj.css( { "width": "0px", "height": height + "px", "margin-top": img_margin_top } );
                        var text_obj = $( "<div class='animate-button'></div>" );
                        text_obj.html( button.val() );
                        text_obj.css( { "position": "relative", "top": text_top + "px" } );
                        button.val( "" );
                        img_obj.appendTo( button );
                        text_obj.appendTo( button );

                        var animate_time = 200;
                        var bet = 3;

                        button.bind( "mouseover", function(){
                            var target = $( this );
                            var current_img_obj = target.find( ".active-img" );
                            var current_text_obj = target.find( ".active-text" );
                            var change_color = target.attr( "text-change-color" );

                            if( current_img_obj.length == 1 && current_text_obj.length == 1 ){
                                current_img_obj.stop().animate(
                                    {
                                        width: target.width()
                                    },
                                    animate_time,
                                    "swing"
                                );

                                window.setTimeout(
                                    function(){
                                        current_text_obj.css( "color", change_color );
                                    },
                                    animate_time / bet
                                );
                            }
                        } );

                        button.bind( "mouseout", function(){
                            var target = $( this );
                            var current_img_obj = target.find( ".active-img" );
                            var current_text_obj = target.find( ".active-text" );
                            var text_color = target.attr( "text-color" );

                            if( current_img_obj.length == 1 && current_text_obj.length == 1 ){
                                current_img_obj.stop().animate(
                                    {
                                        width: 0
                                    },
                                    animate_time,
                                    "swing"
                                );

                                window.setTimeout(
                                    function(){
                                        current_text_obj.css( "color", text_color );
                                    },
                                    animate_time / bet
                                );
                            }
                        } );
                    } );
                }
            }
        };

        $.animate_button_load_finish = true;

        //定义全局jQuery方法
        $.animate_button = function( opt ){
            var animate_button_obj = new animate_button( opt );
            return animate_button_obj.init();
        };

    } )( jQuery );