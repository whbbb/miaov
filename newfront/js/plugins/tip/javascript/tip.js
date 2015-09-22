
    ( function( $ ){

        var tip_obj = function( elm, opt ) {
            this.target = elm;
            this.tipOuter = null;
            this.tipObj = null;
            this.tipArrow = null;
            this.tipType = null;
            this.tipMessage = null;

            this.defaults = {
                isIE7: $.browser.msie && $.browser.version == "7.0",
                outer_class: "tip-message-outer",
                container_class: "tip-message-container",
                arrow_class: "tip-message-arrow",
                type_class: "tip-message-type",
                msg_class: "tip-message-msg",
                msg: null,
                dis: 4,
                type: "alert",
                pos: "right"
            };
            this.options = opt;
            this.origin_pos = null;
            this.origin_tip_width = null;
        };

        tip_obj.prototype = {
            tip: function() {
                var that = this;

                that._init();

                return that;
            },

            _init: function(){
                var that = this;

                that.initParameter();
                that.initTipElement();
            },

            initElementsAttr: function(){
                var that = this;
                var def = that.defaults;

                def.target_all_style = that.get_all_style( that.target );
            },

            initParameter: function(){
                var that = this;
                var def = that.defaults;
                var op = that.options;

                def.msg = op.msg ? op.msg : def.msg;
                def.type = op.type ? op.type : def.type;
                def.type += "-type";
                that.origin_pos = def.pos = op.pos ? op.pos : def.pos;
                def.pos += "-pos";
                def.dis = op.dis && typeof op.dis == "number" ? op.dis : def.dis;

                return def;
            },

            initTipElement: function(){
                var that = this;

                that.initElementsAttr();
                that._init_tip_outer();
                that._init_tip_container();
                that._init_tip_arrow();
                that._init_tip_type();
                that._init_tip_message();

                that.position_tip();
                that._add_bind();
            },

            _init_tip_outer: function(){
                var that = this;
                var def = that.defaults;

                var tipOuter = that.target.closest( "." + def.outer_class );

                if( tipOuter.length == 0 ){
                    tipOuter = $(  '<div class = "' + def.outer_class + '" ></div>' );
                    that.target.before( tipOuter );
                }

                that.tipOuter = tipOuter;
            },

            _init_tip_container: function(){
                var that = this;
                var def = that.defaults;

                var tipObj = that.tipOuter.find( "." + def.container_class );

                if( tipObj.length > 0 ){
                    tipObj.attr( "class", def.container_class );
                }
                else{
                    tipObj = $( '<div class = "' + def.container_class + '" ></div>' );
                    tipObj.appendTo( that.tipOuter );
                    that.target.appendTo( that.tipOuter );
                    that._position_container();
                }

                tipObj.addClass( "container-" + def.type );
                tipObj.addClass( "container-" + def.pos );
                that.tipObj = tipObj;
            },

            _init_tip_arrow: function(){
                var that = this;
                var def = that.defaults;

                var tipArrow = that.tipObj.find( "." + def.arrow_class );

                if( tipArrow.length > 0 ){
                    tipArrow.attr( "class", def.arrow_class );
                }
                else{
                    tipArrow = $( '<span class = "' + def.arrow_class + '" ></span>' );
                    tipArrow.appendTo( that.tipObj );
                }

                tipArrow.addClass( "arrow-" + def.type );
                tipArrow.addClass( "arrow-" + def.pos );
                that.tipArrow = tipArrow;
            },

            _init_tip_type: function(){
                var that = this;
                var def = that.defaults;

                var tipType = that.tipObj.find( "." + def.type_class );

                if( tipType.length > 0 ){
                    tipType.attr( "class", def.type_class );
                }
                else{
                    tipType = $( '<div class = "' + def.type_class + '" ></div>' );
                    tipType.appendTo( that.tipObj );
                }

                tipType.addClass( def.type );
                tipType.addClass( def.pos );
                that.tipType = tipType;
            },

            _init_tip_message: function(){
                var that = this;
                var def = that.defaults;

                var tipMessage = that.tipObj.find( "." + def.msg_class );

                if( tipMessage.length > 0 ){
                    tipMessage.attr( "class", def.msg_class );
                }
                else{
                    tipMessage = $( '<div class = "' + def.msg_class + '" ></div>' );
                    tipMessage.appendTo( that.tipObj );
                }

                tipMessage.addClass( "message-" + def.type );
                tipMessage.addClass( "message-" + def.pos );

                if( def.msg && def.msg.trim() != "" ){
                    tipMessage.html( def.msg );
                }
                that.tipMessage = tipMessage;
            },

            _add_bind: function(){
                var that = this;
                that.target.trigger( "init-tip", that.tipObj );

                $( window ).bind( "resize", function(){
                    that._auto_pos_change();
                } );

                that.tipObj.bind( "click", function(){
                    that.tipObj.hide();
                } );
            },

            _auto_pos_change: function(){
                var that = this;
                var def = that.defaults;

                var tipObj = that.tipObj;
                var window_width = that.getBrowserWidth();
                var target_left = that.target.offset().left;
                var tip_left = 0;

                if( that.origin_tip_width == null ){
                    if( that.origin_pos == "right" || that.origin_pos == "right-top" || that.origin_pos == "right-bottom" ){
                        that.origin_tip_width = that._get_target_width( that.target ) + that._get_target_width( tipObj ) + that._get_target_width( that.tipArrow ) + def.dis;
                    }
                    else if( that.origin_pos == "left" || that.origin_pos == "left-top" || that.origin_pos == "left-bottom"
                        || that.origin_pos == "top-left" || that.origin_pos == "bottom-left" ){
                        that.origin_tip_width = that._get_target_width( tipObj ) + that._get_target_width( that.tipArrow ) + def.dis;
                    }
                    else if( that.origin_pos == "top-right" || that.origin_pos == "bottom-right" ){
                        that.origin_tip_width = that._get_target_width( tipObj ) + that._get_target_width( that.tipArrow ) + def.dis - that._get_target_width( that.target );
                    }
                }

                if( that.origin_pos == "right" || that.origin_pos == "right-top" || that.origin_pos == "right-bottom"
                    || that.origin_pos == "top-left" || that.origin_pos == "bottom-left" ){
                    tip_left = target_left + that.origin_tip_width;

                    if( def.pos == "right-pos" || def.pos == "right-top-pos" || def.pos == "right-bottom-pos"
                        || def.pos == "top-left-pos" || def.pos == "bottom-left-pos" ){
                        if( tip_left > window_width ){
                            if( def.pos == "right-bottom-pos" || def.pos == "bottom-left-pos" ){
                                def.pos = "bottom-pos";
                            }
                            else{
                                def.pos = "top-pos";
                            }
                            that.initTipElement();
                        }
                    }
                    else{
                        if( tip_left <= window_width ){
                            def.pos = that.origin_pos + "-pos";
                            that.initTipElement();
                        }
                    }
                }
                else if( that.origin_pos == "left" || that.origin_pos == "left-top" || that.origin_pos == "left-bottom"
                    || that.origin_pos == "top-right" || that.origin_pos == "bottom-right" ){
                    tip_left = target_left - that.origin_tip_width;

                    if( def.pos == "left-pos" || def.pos == "left-top-pos" || def.pos == "left-bottom-pos"
                        || def.pos == "top-right-pos" || def.pos == "bottom-right-pos" ){
                        if( tip_left < 0 ){
                            if( def.pos == "left-top-pos" || def.pos == "top-right-pos" ){
                                def.pos = "top-pos";
                            }
                            else{
                                def.pos = "bottom-pos";
                            }
                            that.initTipElement();
                        }
                    }
                    else{
                        if( tip_left >= 0 ){
                            def.pos = that.origin_pos + "-pos";
                            that.initTipElement();
                        }
                    }
                }
            },

            _position_container: function(){
                var that = this;
                var def = that.defaults;

                that._set_container_style( that.tipOuter, def.target_all_style );
                that._set_target_style( that.target, def.target_all_style );
            },

            position_tip: function(){
                var that = this;
                var def = that.defaults;
                var need_hide = false;

                if( that.tipObj.is( ":hidden" ) ){
                    need_hide = true;
                    that.tipObj.show();
                }

                that.tipObj.css( { width: "" } );
                that.tipMessage.css( { width: "" } );

                var target_width = that._get_target_width( that.target );
                var target_height = that._get_target_height( that.target );

                var arrow_width = that._get_target_width( that.tipArrow );
                var arrow_height = that._get_target_height( that.tipArrow );

                var tip_width = that._get_target_width( that.tipObj );
                var tip_height = that._get_target_height( that.tipObj );

                that.tipMessage.css( {
                    "white-space": "",
                    "word-wrap": "",
                    "word-break": ""
                } );

                if( def.pos == "top-pos" ){
                    that._set_top_or_bottom_pos( "top", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "top-left-pos" ){
                    that._set_top_left_or_right_pos( "left", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "top-right-pos" ){
                    that._set_top_left_or_right_pos( "right", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "left-pos" ){
                    that._set_left_or_right_pos( "left", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "left-top-pos" ){
                    that._set_left_top_or_bottom_pos( "top", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "left-bottom-pos" ){
                    that._set_left_top_or_bottom_pos( "bottom", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "bottom-pos" ){
                    that._set_top_or_bottom_pos( "bottom", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "bottom-left-pos" ){
                    that._set_bottom_left_or_right_pos( "left", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "bottom-right-pos" ){
                    that._set_bottom_left_or_right_pos( "right", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "right-top-pos" ){
                    that._set_right_top_or_bottom_pos( "top", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else if( def.pos == "right-bottom-pos" ){
                    that._set_right_top_or_bottom_pos( "bottom", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }
                else{
                    that._set_left_or_right_pos( "right", target_width, target_height, tip_width, tip_height, arrow_width, arrow_height );
                }

                if( need_hide ){
                    that.tipObj.hide();
                }
            },

            _set_top_or_bottom_pos: function( pos, target_width, target_height, tip_width, tip_height, arrow_width, arrow_height ){
                var that = this;
                var def = that.defaults;
                var new_tip_width = 0;
                if( tip_width > target_width ){
                    new_tip_width = target_width -
                        that.parseNumber( that.tipObj.css( "border-left-width" ) ) - that.parseNumber( that.tipObj.css( "border-right-width" ) ) -
                        that.parseNumber( that.tipObj.css( "padding-left" ) ) - that.parseNumber( that.tipObj.css( "padding-right" ) );

                    if( that.tipMessage.hasClass( "message-top-pos" ) || that.tipMessage.hasClass( "message-bottom-pos" ) ){
                        that.tipMessage.css( {
                            "white-space": "normal",
                            "word-wrap": "break-word",
                            "word-break": "break-all"
                        } );
                    }

                    tip_width = target_width;
                }
                else{
                    new_tip_width = tip_width -
                        that.parseNumber( that.tipObj.css( "border-left-width" ) ) - that.parseNumber( that.tipObj.css( "border-right-width" ) ) -
                        that.parseNumber( that.tipObj.css( "padding-left" ) ) - that.parseNumber( that.tipObj.css( "padding-right" ) );
                }

                that.tipObj.css( {
                    width: new_tip_width + "px"
                } );

                var new_tip_message_width =  that.tipMessage.width() -
                    that.parseNumber( that.tipMessage.css( "border-left-width" ) ) - that.parseNumber( that.tipMessage.css( "border-right-width" ) ) -
                    that.parseNumber( that.tipMessage.css( "padding-left" ) ) - that.parseNumber( that.tipMessage.css( "padding-right" ) ) -
                    that.parseNumber( that.tipMessage.css( "margin-left" ) ) - that.parseNumber( that.tipMessage.css( "margin-right" ) );

                that.tipMessage.css( {
                    width: new_tip_message_width + "px"
                } );

                tip_height = that._get_target_height( that.tipObj );

                var margin_left = ( target_width - tip_width ) / 2;
                var arrow_margin_left = ( tip_width - arrow_width ) / 2;

                var margin_top = 0;
                var arrow_margin_top = 0;
                if( pos == "top" ){
                    margin_top = ( tip_height + arrow_height + def.dis / 5 ) * -1;
                    arrow_margin_top = tip_height - 2;
                }
                else if( pos == "bottom" ){
                    margin_top = target_height + arrow_height + def.dis / 5;
                    arrow_margin_top = arrow_height * -1;
                }

                that._set_obj_style( that.tipObj,  margin_top + "px " + "0px " + "0px " + margin_left + "px" );
                that._set_obj_style( that.tipArrow,  arrow_margin_top + "px " + "0px " + "0px " + arrow_margin_left + "px" );
            },

            _set_left_or_right_pos: function( pos, target_width, target_height, tip_width, tip_height, arrow_width, arrow_height ){
                var that = this;
                var def = that.defaults;

                var margin_top = ( target_height - tip_height ) / 2;
                var arrow_margin_top = ( tip_height - arrow_height ) / 2;

                var margin_left = 0;
                var arrow_margin_left = 0;
                if( pos == "left" ){
                    margin_left = ( tip_width + arrow_width + def.dis ) * -1;
                    arrow_margin_left = tip_width - 2;
                }
                else if( pos == "right" ){
                    margin_left = target_width + arrow_width + def.dis;
                    arrow_margin_left = arrow_width * -1;
                }

                that._set_obj_style( that.tipObj,  margin_top + "px " +"0px " + "0px " + margin_left + "px" );
                that._set_obj_style( that.tipArrow,  arrow_margin_top + "px " + "0px " + "0px " + arrow_margin_left + "px" );
            },

            _set_top_left_or_right_pos: function( pos, target_width, target_height, tip_width, tip_height, arrow_width, arrow_height ){
                var that = this;
                var def = that.defaults;

                var margin_top = ( tip_height + arrow_height ) * -1 - def.dis / 5;
                var arrow_margin_top = tip_height - 2;

                var margin_left = 0;
                var arrow_margin_left = 0;
                if( pos == "left" ){
                    arrow_margin_left = def.dis * 2.5;
                }
                else if( pos == "right" ){
                    margin_left = target_width - tip_width;
                    arrow_margin_left = tip_width - arrow_width - def.dis * 2.5;
                }

                that._set_obj_style( that.tipObj,  margin_top + "px " +"0px " + "0px " + margin_left + "px" );
                that._set_obj_style( that.tipArrow,  arrow_margin_top + "px " + "0px " + "0px " + arrow_margin_left + "px" );
            },

            _set_bottom_left_or_right_pos: function( pos, target_width, target_height, tip_width, tip_height, arrow_width, arrow_height ){
                var that = this;
                var def = that.defaults;

                var margin_top = target_height + arrow_height + def.dis / 5;
                var arrow_margin_top = arrow_height * -1;

                var margin_left = 0;
                var arrow_margin_left = 0;
                if( pos == "left" ){
                    arrow_margin_left = def.dis * 2.5;
                }
                else if( pos == "right" ){
                    margin_left = target_width - tip_width;
                    arrow_margin_left = tip_width - arrow_width - def.dis * 2.5;
                }

                that._set_obj_style( that.tipObj,  margin_top + "px " +"0px " + "0px " + margin_left + "px" );
                that._set_obj_style( that.tipArrow,  arrow_margin_top + "px " + "0px " + "0px " + arrow_margin_left + "px" );
            },

            _set_left_top_or_bottom_pos: function( pos, target_width, target_height, tip_width, tip_height, arrow_width, arrow_height ){
                var that = this;

                var margin_left = tip_width * -1;
                var arrow_margin_left = tip_width - arrow_width;

                var margin_top = 0;
                var arrow_margin_top = 0;
                if( pos == "top" ){
                    margin_top = ( tip_height + arrow_height ) * -1 + 2;
                    arrow_margin_top = tip_height - 2;
                }
                else if( pos == "bottom" ){
                    margin_top = target_height + arrow_height - 1;
                    arrow_margin_top = arrow_height * -1;
                }

                that._set_obj_style( that.tipObj,  margin_top + "px " +"0px " + "0px " + margin_left + "px" );
                that._set_obj_style( that.tipArrow,  arrow_margin_top + "px " + "0px " + "0px " + arrow_margin_left + "px" );
            },

            _set_right_top_or_bottom_pos: function( pos, target_width, target_height, tip_width, tip_height, arrow_width, arrow_height ){
                var that = this;

                var margin_left = target_width;
                var arrow_margin_left = 0;

                var margin_top = 0;
                var arrow_margin_top = 0;
                if( pos == "top" ){
                    margin_top = ( tip_height + arrow_height ) * -1 + 2;
                    arrow_margin_top = tip_height - 2;
                }
                else if( pos == "bottom" ){
                    margin_top = target_height + arrow_height - 1;
                    arrow_margin_top = arrow_height * -1;
                }

                that._set_obj_style( that.tipObj,  margin_top + "px " +"0px " + "0px " + margin_left + "px" );
                that._set_obj_style( that.tipArrow,  arrow_margin_top + "px " + "0px " + "0px " + arrow_margin_left + "px" );
            },

            //设置提示样式
            _set_obj_style: function( target, margin ){
                target.css(
                    {
                        "margin": margin
                    }
                );
            },

            //设置容器样式
            _set_container_style: function( container_obj, target_all_style ){
                var that = this;
                var def = that.defaults;

                var width = that._get_target_width( that.target );
                var height = that._get_target_height(  that.target );
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

            _get_target_width: function( target, is_outer ){
                var that = this;
                var target_all_style = that.get_all_style( target );
                var width = ( that.parseNumber( target.width() ) +
                    that.parseNumber( target_all_style.borderLeftWidth ) + that.parseNumber( target_all_style.borderRightWidth ) +
                    that.parseNumber( target_all_style.paddingLeft ) + that.parseNumber( target_all_style.paddingRight ) );

                if( is_outer == true ){
                    width += that.parseNumber( target_all_style.marginLeft ) + that.parseNumber( target_all_style.marginRight );
                }

                return width;
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

            show: function(){
                var that = this;
                if( that.tipObj && that.tipObj.length == 1 ){
                    that.tipObj.show();
                    that._auto_pos_change();
                }
            },

            hide: function(){
                var that = this;
                if( that.tipObj && that.tipObj.length == 1 ){
                    that.tipObj.hide();
                }
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
            },

            getBrowserWidth: function(){
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
            }
        };

        $.fn.tip = function( options ) {
            if( typeof options == "string" ){
                options = { msg: options, type: "alert", pos: "right" };
            }
            //创建tip_obj的实体
            var tipObj = new tip_obj( this, options );
            //调用其方法
            return tipObj.tip();
        };
    })( jQuery );
