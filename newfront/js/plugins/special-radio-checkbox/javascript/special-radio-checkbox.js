
    ( function( $ ){
        //构造special_radio_checkbox
        var special_radio_checkbox = function(){
            var that = this;

            //默认参数
            that.defaults = {
                isIE7: $.browser.msie && $.browser.version == "7.0",
                isIE8: $.browser.msie && $.browser.version == "8.0",
                match_mark: "special",
                container_class: "special-container",
                span_class: "special-span",
                input_class: "special-input",
                select_arrow_class: "special-select-arrow-div",
                select_list_class: "special-select-list-ul",
                close_flag: true
            };
            //页面中所有匹配的元素集合
            that.elements = null;
        };

        special_radio_checkbox.prototype = {
            //程序入口方法
            special: function(){
                var that = this;
                that._init();
                return that;
            },

            //初始化
            _init: function(){
                var that = this;
                that.elements = that._match_elements();
                that._rebuild_elements_structure();
            },

            //获取所有匹配的元素，该些元素通过defaults.match_mark作为匹配标志，且其值为true时才合法
            _match_elements: function(){
                var that = this;
                var def = that.defaults;
                var mark = def.match_mark;
                var match_elms = null;
                var all_elm = null;

                if( mark && mark.trim != "" ){
                    all_elm = $( "[" + mark + "]" );
                }

                if( all_elm && all_elm.length > 0 ){
                    match_elms = [];
                    all_elm.each( function(){
                        if( $( this ).attr( mark ) == "true" ){
                            match_elms.push( $( this ) );
                        }
                    } );
                }

                if( match_elms && match_elms.length > 0 ){
                    return match_elms;
                }
                else{
                    return null;
                }
            },

            //重构所有元素HTML结构
            _rebuild_elements_structure: function(){
                var that = this;
                if( that.elements && that.elements.length > 0 ){
                    $.each( that.elements, function(){
                        var tagName = this[ 0 ].tagName.toLowerCase();

                        if( tagName == "input" ){
                            var type = this.attr( "type" );
                            that._type = type;
                            var container = null;

                            if( type == "checkbox" ){
                                container = that._rebuild_checkbox_structure( this );
                            }

                            if( container ){
                                that._container = container;

                                var span = that._container.find( "span." + that.defaults.span_class );
                                var target = this;

                                that._change_checked_state( target, span );

                                this.bind( "click", function(){
                                    that._change_checked_state( target, span );
                                    $( this ).trigger( "value-change" );
                                } );
                            }
                        }
                        else if( tagName == "select" ){
                            var select_obj = $( this );
                            var options = select_obj.find( "option" );

                            var container = that._rebuild_select_structure( select_obj, options );
                        }
                    } );
                }
            },

            //重构select对象HTML结构
            _rebuild_select_structure: function( select_obj, options ){
                var that = this;
                var def = that.defaults;

                var input_obj = select_obj.prev();

                if( input_obj && input_obj.hasClass( def.input_class ) ){
                    return select_obj.parent( "div." + def.container_class );
                }
                else
                {
                    var container_obj = $( '<div class="' + def.container_class + ' for-select"></div>' );
                    input_obj = $( '<input type="button" value="" class="' + def.input_class + '" />' );

                    input_obj.appendTo( container_obj );

                    select_obj.before( container_obj );

                    var arrow_obj = $( "<div class='" + def.select_arrow_class + "'></div>" );

                    arrow_obj.appendTo( container_obj );

                    input_obj.bind( "mouseover", function(){
                        input_obj.css( "border-color", "#2Cb386" );
                        arrow_obj.addClass( "hover" );
                    } );
                    input_obj.bind( "mouseout", function(){
                        input_obj.css( "border-color", "#CCCCCC" );
                        arrow_obj.removeClass( "hover" );
                    } );
                    input_obj.bind( "blur", function(){
                        if( def.close_flag ){
                            container_obj.find( "ul" ).hide();
                        }
                    } );
                    input_obj.bind( "click", function(){
                        var ul_obj = container_obj.find( "ul" );
                        ul_obj.toggle();
                    } );
                    arrow_obj.bind( "click", function(){
                        var ul_obj = container_obj.find( "ul" );
                        ul_obj.toggle();
                    } );
                    arrow_obj.bind( "mouseover", function(){
                        input_obj.trigger( "mouseover");
                    } );

                    var all_style = null;
                    if( window.getComputedStyle ){
                        all_style = window.getComputedStyle( select_obj[ 0 ], null );
                    }
                    else{
                        all_style = select_obj[ 0 ].currentStyle;
                    }

                    if( options && options.length > 0 ){
                        var select_current_value = select_obj.attr( "select-value" );
                        if( !select_current_value ){
                            select_current_value = select_obj.find( "option:selected").val();
                        }
                        var ul_obj = $( '<ul class="' + def.select_list_class + '"></ul>' );
                        that._set_ul_style( ul_obj, all_style );

                        $.each( options, function( i, item ){
                            var opt = $( item );
                            var li_obj = $( '<li data-value="' + opt.val() + '">' + opt.text() + '</li>' );
                            that._set_li_style( li_obj, all_style );
                            li_obj.appendTo( ul_obj );

                            var option_value = opt.val();
                            var option_text = opt.text();

                            if( option_value == select_current_value ){
                                input_obj.val( option_text );
                            }

                            li_obj.bind( "click", function(){
                                var current_li = $( this );

                                input_obj.val( current_li.html() );
                                var choose_value = current_li.attr( "data-value" );
                                select_obj.attr( "select-value", choose_value );
                                select_obj.val( choose_value );
                                if( select_current_value != choose_value ){
                                    select_obj.trigger( "value-change" );
                                }
                                ul_obj.hide();
                            } );
                        } );

                        ul_obj.appendTo( container_obj );

                        ul_obj.bind( "mouseover", function(){
                            def.close_flag = false;
                            input_obj.trigger( "mouseover");
                        } );
                        ul_obj.bind( "mouseout", function(){
                            def.close_flag = true;
                            input_obj.trigger( "mouseout");
                        } );
                    }

                    select_obj.appendTo( container_obj );

                    that._set_container_style( container_obj, all_style );
                    that._set_element_style( input_obj, all_style );
                    that._set_arrow_style( arrow_obj, all_style );
                    that._set_target_style( select_obj );

                    return container_obj;
                }
            },

            //重构目标元素HTML结构
            _rebuild_checkbox_structure: function( target ){
                var that = this;
                var def = that.defaults;

                if( target ){
                    var container_obj = target.closest( def.container_class + ".for-checkbox" );

                    if( container_obj && container_obj.length > 0 ){
                        return container_obj;
                    }
                    else
                    {
                        container_obj = $( '<div class="' + def.container_class + ' for-checkbox"></div>' );
                        var span_obj = $( '<span class="' + def.span_class + '" />' );

                        span_obj.addClass( "checkbox" );

                        span_obj.appendTo( container_obj );
                        target.before( container_obj );
                        target.appendTo( container_obj );

                        var all_style = null;
                        if( window.getComputedStyle ){
                            all_style = window.getComputedStyle( target[ 0 ], null );
                        }
                        else{
                            all_style = target[ 0 ].currentStyle;
                        }

                        that._set_container_style( container_obj, all_style );
                        that._set_checkbox_style( target, all_style );


                        return container_obj;
                    }
                }
            },

            //改变选中状态
            _change_checked_state: function( target_obj, span_obj ){
                var state = target_obj.is(':checked');
                if( state ){
                    span_obj.addClass( "checked" );
                    target_obj.attr( "checked", "checked" );
                    target_obj.val( 1 );
                }
                else{
                    span_obj.removeClass( "checked" );
                    target_obj.removeAttr( "checked" );
                    target_obj.val( 0 );
                }
            },

            //设置容器样式
            _set_container_style: function( container_obj, target_all_style ){
                var that = this;
                var def = that.defaults;

                var top = target_all_style.top && target_all_style.top != "auto" ? that.parseNumber( target_all_style.top ) + "px" : "auto";
                var left = target_all_style.left && target_all_style.left != "auto" ? that.parseNumber( target_all_style.left ) + "px" : "auto";
                var display = target_all_style.display == "block" || target_all_style.display == "table" ? target_all_style.display : "inline-block";

                container_obj.css(
                    {
                        "display": display,
                        "position": "relative",
                        "float": target_all_style.float,
                        "top": top,
                        "left": left,
                        "bottom": target_all_style.bottom,
                        "right": target_all_style.right,
                        "width": target_all_style.width,
                        "height": target_all_style.height,
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

            //设置新元素样式
            _set_element_style: function( element_obj, target_all_style ){
                var that = this;
                var def = that.defaults;

                var paddingLeft = ( that.parseNumber( target_all_style.paddingLeft ) + that.parseNumber( target_all_style.borderLeftWidth ) );
                var paddingRight = ( that.parseNumber( target_all_style.paddingRight ) + that.parseNumber( target_all_style.borderRightWidth ) );

                var cursor = target_all_style.cursor && target_all_style.cursor != "auto" ? target_all_style.cursor : "default";

                element_obj.css(
                    {
                        "display": "inline",
                        "color": "#333333",
                        "background-color": "transparent",
                        "width": target_all_style.width,
                        "height": target_all_style.height,
                        "font-size": target_all_style.fontSize,
                        "font-family": target_all_style.fontFamily,
                        "text-align": target_all_style.textAlign,
                        "letter-spacing": target_all_style.letterSpacing,
                        "cursor": cursor,
                        "padding-top": "0px",
                        "padding-left": paddingLeft + "px",
                        "padding-bottom": "0px",
                        "padding-right": paddingRight + "px"
                    }
                );

                if( def.isIE7 || def.isIE8 ){
                    element_obj.css(
                        {
                            "line-height": target_all_style.height
                        }
                    );
                }
            },

            //设置select arrow样式
            _set_arrow_style: function( arrow_obj, target_all_style ){
                var that = this;
                var def = that.defaults;
                var marginTop = ( that.parseNumber( target_all_style.height ) - 6 ) / 2 - that.parseNumber( target_all_style.height );
                var marginLeft = ( that.parseNumber( target_all_style.width ) - 10 ) - ( that.parseNumber( target_all_style.width ) / 15 );

                arrow_obj.css(
                    {
                        "margin-top": marginTop + "px",
                        "margin-left": marginLeft + "px"
                    }
                );

                if( def.isIE7 ){
                    marginTop = ( that.parseNumber( target_all_style.height ) - 6 ) / 2;
                    marginLeft = ( that.parseNumber( target_all_style.width ) / 15 * -1 ) - 10;

                    arrow_obj.css(
                        {
                            "margin-top": marginTop + "px",
                            "margin-left": marginLeft + "px"
                        }
                    );
                }
            },

            //设置select ul样式
            _set_ul_style: function( ul_obj, target_all_style ){
                var that = this;
                var def = that.defaults;

                var marginTop = that.parseNumber( target_all_style.height );
                var marginLeft = that.parseNumber( target_all_style.width ) * -1;

                if( def.isIE7 ){
                    ul_obj.css(
                        {
                            "margin-top": marginTop + "px",
                            "margin-left": marginLeft + "px"
                        }
                    );
                }
            },

            //设置select li样式
            _set_li_style: function( li_obj, target_all_style ){
                var that = this;
                var width = that.parseNumber( target_all_style.width );
                width = target_all_style.borderLeftWidth ? width - that.parseNumber( target_all_style.borderLeftWidth ) : width;
                width = target_all_style.borderRightWidth ? width - that.parseNumber( target_all_style.borderRightWidth ) : width;
                width = target_all_style.paddingLeft ? width - that.parseNumber( target_all_style.paddingLeft ) : width;
                width = target_all_style.paddingRight ? width - that.parseNumber( target_all_style.paddingRight ) : width;
                var height = that.parseNumber( target_all_style.height );
                height = target_all_style.borderTopWidth ? height - that.parseNumber( target_all_style.borderTopWidth ) : height;
                height = target_all_style.borderBottomWidth ? height - that.parseNumber( target_all_style.borderBottomWidth ) : height;

                li_obj.css(
                    {
                        "width": width + "px",
                        "height": height + "px",
                        "line-height": height + "px",
                        "font-size": target_all_style.fontSize,
                        "padding-left": target_all_style.paddingLeft,
                        "padding-right": target_all_style.paddingRight
                    }
                );
            },

            //设置目标样式
            _set_target_style: function( target ){
                target.css(
                    {
                        "margin": "0px",
                        "position": "static",
                        "display": "none",
                        "float": "none"
                    }
                );
            },

            //设置目标样式
            _set_checkbox_style: function( target, target_all_style ){

                target.css(
                    {
                        "margin": "0px",
                        "position": "absolute",
                        "top": "0px",
                        "left": "0px"
                    }
                );
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
        $.special_radio_checkbox = function(){
            var special_radio_checkbox_obj = new special_radio_checkbox();
            return special_radio_checkbox_obj.special();
        };

    } )( jQuery );

    $( document).ready( function(){
        //默认加载后调用执行
        //$.special_radio_checkbox();
    } );
