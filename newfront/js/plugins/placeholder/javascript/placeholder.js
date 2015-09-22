
    ( function( $ ){
        //构造placeholder
        var placeholder = function(){
            var that = this;

            //默认参数
            that.defaults = {
                isIE7: $.browser.msie && $.browser.version == "7.0",
                support: "placeholder" in document.createElement( "input" )
            };

            that.elements = null;
        };

        placeholder.prototype = {

            //初始化
            init: function(){
                var that = this;

                that._match_elements();
                that.add_placeholder();
            },

            //匹配所有含有placeholder属性的元素
            _match_elements: function(){
                var that = this;

                var elements = $( 'input[ type="text" ][ placeholder ], input[ type="password" ][ placeholder ], textarea[ placeholder ]' );


                if( elements.length > 0 ){
                    that.elements = elements;
                }
            },

            //为IE6-9添加模拟的placeholder
            add_placeholder: function( elements ){
                var that = this;
                var def = that.defaults;

                if( !elements ){
                    elements = that.elements;
                }

                if( !def.support ){
                    if( elements && elements.length > 0 ){
                        $.each( elements, function(){
                            var target = $( this );
                            that._set_placeholder( target );
                        } );
                    }
                }
            },

            //设置placeholder
            _set_placeholder: function( target ){
                var that = this;
                var target_value = target.val().trim();
                if( target_value == "" ){
                    var placeholder_text = target.attr( "placeholder" );

                    var container_obj = target.closest( ".placeholder-container" );
                    if( container_obj.length > 0 ){
                        return container_obj;
                    }
                    else{
                        container_obj = $( "<div class='placeholder-container'></div>" );
                        var label_obj = $( "<label class='placeholder-label'></label>" );

                        var all_style = null;
                        if( window.getComputedStyle ){
                            all_style = window.getComputedStyle( target[ 0 ], null );
                        }
                        else{
                            all_style = target[ 0 ].currentStyle;
                        }

                        label_obj.html( placeholder_text );
                        target.before( container_obj );
                        target.appendTo( container_obj );
                        label_obj.appendTo( container_obj );

                        that._set_container_style( container_obj, all_style, target );
                        that._set_label_style( label_obj, all_style, target );
                        that._set_target_style( target, all_style );

                        that._bind( target, label_obj, all_style );

                        return container_obj;
                    }
                }
            },

            //事件绑定
            _bind: function( target, label_obj, target_all_style ){

                label_obj.bind( "click", function(){
                    target.focus();
                } );

                label_obj.bind( "hover", function(){

                } );

                target.bind( "input propertychange", function(){
                    if( $( this ).val() == "" ){
                        var display = target_all_style.display == "block" || target_all_style.display == "table" ? target_all_style.display : "inline-block";
                        label_obj.css( "display", display );
                    }
                    else{
                        label_obj.hide();
                    }
                } );
            },

            //设置容器样式
            _set_container_style: function( container_obj, target_all_style, target ){
                var that = this;
                var def = that.defaults;

                var width = that._get_target_width( target );
                var height = that._get_target_height( target );
               var display = target_all_style.display == "block" || target_all_style.display == "table" ? target_all_style.display : "inline-block";


                container_obj.css(
                    {
                        "display": display,
                        "position": target_all_style.position,
                        "float": target_all_style.float,
                        "z-index": target_all_style.zIndex,
                        "top": target_all_style.top,
                        "left": target_all_style.left,
                        "bottom": target_all_style.bottom,
                        "right": target_all_style.right,
                        "width": width + "px",
                        "height": height + "px",
                        "margin-top": target_all_style.marginTop,
                        "margin-left": target_all_style.marginLeft,
                        "margin-bottom": target_all_style.marginBottom,
                        "margin-right": target_all_style.marginRight
                    }
                );

                if( def.isIE7 && display == "inline-block" ){
                    container_obj.css(
                        {
                            "display": "inline",
                            "zoom": 1
                        }
                    );
                }
            },

            //设置提示label样式
            _set_label_style: function( label_obj, target_all_style, target ){
                var that = this;
                var marginLeft = that._get_target_width( target ) * -1;

                var paddingTop = ( that.parseNumber( target_all_style.paddingTop ) + that.parseNumber( target_all_style.borderTopWidth ) );
                var paddingLeft = ( that.parseNumber( target_all_style.paddingLeft ) + that.parseNumber( target_all_style.borderLeftWidth ) );
                var paddingBottom = ( that.parseNumber( target_all_style.paddingBottom ) + that.parseNumber( target_all_style.borderBottomWidth ) );
                var paddingRight = ( that.parseNumber( target_all_style.paddingRight ) + that.parseNumber( target_all_style.borderRightWidth ) );

                var cursor = target_all_style.cursor && target_all_style.cursor != "auto" ? target_all_style.cursor : "text";

                label_obj.css(
                    {
                        "display": "inline-block",
                        "position": "absolute",
                        "color": "#CCCCCC",
                        "width": target_all_style.width,
                        "height": target_all_style.height,
                        "line-height": target_all_style.lineHeight || target_all_style.height,
                        "font-size": target_all_style.fontSize,
                        "font-family": target_all_style.fontFamily,
                        "text-align": target_all_style.textAlign,
                        "letter-spacing": target_all_style.letterSpacing,
                        "cursor": cursor,
                        "padding-top": paddingTop + "px",
                        "padding-left": paddingLeft + "px",
                        "padding-bottom": paddingBottom + "px",
                        "padding-right": paddingRight + "px",
                        "margin-left": marginLeft + "px"
                    }
                );
            },

            //设置目标样式
            _set_target_style: function( target, target_all_style ){
                var that = this;
                var def = that.defaults;

                var display = target_all_style.display == "block" || target_all_style.display == "table" ? "inline" : target_all_style.display;

                target.css(
                    {
                        "margin": "0px",
                        "position": "static",
                        "display": display,
                        "float": "none"
                    }
                );

                if( def.isIE7 && display == "inline-block" ){
                    target.css(
                        {
                            "display": "inline",
                            "zoom": 1
                        }
                    );
                }
            },

            _get_target_width: function( target ){
                var that = this;
                var target_all_style = that.get_all_style( target );
                return ( that.parseNumber( target.width() ) +
                    that.parseNumber( target_all_style.borderLeftWidth ) + that.parseNumber( target_all_style.borderRightWidth ) +
                    that.parseNumber( target_all_style.paddingLeft ) + that.parseNumber( target_all_style.paddingRight ) );
            },

            _get_target_height: function( target ){
                var that = this;
                var target_all_style = that.get_all_style( target );
                return ( that.parseNumber( target.height() ) +
                    that.parseNumber( target_all_style.borderTopWidth ) + that.parseNumber( target_all_style.borderBottomWidth ) +
                    that.parseNumber( target_all_style.paddingTop ) + that.parseNumber( target_all_style.paddingBottom ) );
            },

            get_all_style: function( target ){
                var all_style = null;

                if( window.getComputedStyle ){
                    all_style = window.getComputedStyle( target[ 0 ], null );
                }
                else{
                    all_style = target[ 0 ].currentStyle;
                }
                return  all_style;
            },

            parseNumber: function( pixel_number ){
                if( pixel_number && typeof pixel_number === "string" && pixel_number.indexOf( "px" ) != -1 ){
                    return parseFloat( pixel_number.substring( 0, pixel_number.indexOf( "px" ) ) );
                }
                else if( typeof pixel_number === "number" ){
                    return pixel_number;
                }
                else{
                    return 0;
                }
            }
        };

        //定义全局jQuery方法
        $.placeholder = function(){
            var placeholder_obj = new placeholder();
            return placeholder_obj.init();
        };

    } )( jQuery );

    $( document).ready( function(){
        //默认加载后调用执行
        //$.placeholder();
    } );
