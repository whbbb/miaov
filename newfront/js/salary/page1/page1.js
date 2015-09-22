

$(document).ready(function(){
    $._page_1 = {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            page1: $( "#J_page1" ),
            page_1: $("#J_page1").find(".page1" ),
            bg_img: $("#J_page1").find("#J_bg_img" ),
            logo_img: $("#J_page1").find("#J_logo_img" ),
            crown_img: $("#J_page1").find("#J_crown_img" ),
            star_img: $("#J_page1").find("#J_star_img" ),
            text_div: $("#J_page1").find("#J_text_div" ),
            next_img: $("#J_page1").find("#J_next_img" )
        },

        run_parameter: {
            logo_play_state: false,
            text_play_state: false,
            next_play_state: false,
            begin_play_state: true,
            first_state: true,
            all_play_state: true
        },

        init: function () {
            var that = this;
            if( that.parameter.page_1.is( ":visible" ) && that.run_parameter.begin_play_state ){
                that.run_parameter.begin_play_state = false;
                that._animate();
                that._bind();
            }
        },

        //初始化当前页元素
        _init_elements: function(){
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;

            if( para.is_ie7 != true && para.is_ie8 != true && run_para.first_state ){
                para.logo_img.css( "opacity", "0" );
                para.crown_img.css( "opacity", "0" );
                para.star_img.css( "opacity", "0" );
                para.text_div.css( "opacity", "0" );
                para.next_img.css( "opacity", "0" );

            }
            para.bg_img.show();

            run_para.first_state = false;

            that._resize();
            that._auto_position();
        },

        //窗口缩放事件处理
        _resize: function(){
            var that = this;
            var para = that.parameter;

            var width = $.getBrowserWidth();
            var height = $.getBrowserHeight();

            para.bg_img.css( { width: width, height: height } );
            para.page_1.css( { width: width, height: height } );
            para.page1.css( { width: width, height: height } );
        },

        //事件绑定
        _bind: function(){
            var that = this;
            //窗口缩放事件监听
            $( window ).bind( "resize", function(){
                that._resize();
                that._auto_position();
            } );
            //窗口失去焦点事件监听
            $( window ).bind( "blur", function(){
                var para = that.parameter;
                var run_para = that.run_parameter;

                window.clearInterval( run_para.jump_interval );
                if( para.jump_animate ){
                    para.jump_animate.stop();
                }
            } );
            //窗口获得焦点事件监听
            $( window ).bind( "focus", function(){
                that._auto_position();
            } );
        },

        //自动定位
        _auto_position: function(){
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;
            var height = $.getBrowserHeight();
            var offset_height = 0;
            var top = 0;
            var left = 0;

            //logo定位
            if( run_para.logo_img_animate ){
                run_para.logo_img_animate.stop();
                run_para.logo_play_state = false;
            }
            offset_height = offset_height + para.logo_img.height();
            if( run_para.logo_play_state ){
                top = height * -0.5  - offset_height;
            }
            else{
                top = height * -1 - offset_height;
            }
            that._set_position( para.logo_img, top, left );
            if( run_para.logo_img_animate ){
                para.logo_img.css( "opacity", "0" );
                that._logo_animate( height, para, run_para, offset_height );
            }

            //crown定位
            if( run_para.crown_img_animate ){
                run_para.crown_img_animate.stop();
            }
            offset_height = offset_height + para.crown_img.height();
            top =  ( height * -0.76 ) - offset_height;
            that._set_position( para.crown_img, top, left );
            if( run_para.crown_img_animate ){
                para.crown_img.css( "opacity", "0" );
                that._crown_animate( height, para, run_para, offset_height );
            }

            //star定位
            if( run_para.star_img_animate ){
                run_para.star_img_animate.stop();
            }
            offset_height = offset_height + para.star_img.height();
            top =  top - para.star_img.height() - 38;
            that._set_position( para.star_img, top, left - 3 );
            if( run_para.star_img_animate ){
                para.star_img.css( "opacity", "0" );
                that._star_animate( height, para, run_para, offset_height );
            }

            //text定位
            if( run_para.text_div_animate ){
                run_para.text_div_animate.stop();
                run_para.text_play_state = false;
            }
            offset_height = offset_height + para.text_div.height();
            if( run_para.text_play_state ){
                top = ( height * -0.3 ) - offset_height;
            }
            else{
                top = offset_height * -1;
            }
            that._set_position( para.text_div, top, left );
            if( run_para.text_div_animate ){
                para.text_div.css( "opacity", "0" );
                that._text_animate( height, para, run_para, offset_height );
            }

            //next定位
            window.clearInterval( run_para.jump_interval );
            if( para.jump_animate ){
                para.jump_animate.stop();
                para.jump_animate = null;
            }
            if( run_para.next_play_state ){
                that._next_animate( height, para, run_para, offset_height, true );
            }
            if( run_para.next_img_animate ){
                run_para.next_img_animate.stop();
                run_para.next_play_state = false;
            }
            offset_height = offset_height + para.next_img.height();
            if( run_para.next_play_state ){
                top = height * -0.1  - offset_height;
            }
            else{
                top = offset_height * -1;
            }
            that._set_position( para.next_img, top, left );
            if( run_para.next_img_animate ){
                para.next_img.css( "opacity", "0" );
                that._next_animate( height, para, run_para, offset_height, true );
            }
        },

        _set_position: function( target, top, left ){
            target.css(
                {
                    top: top + "px",
                    left: left + "px"
                }
            );
        },

        //顺序动画
        _animate: function(){
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;

            var height = $.getBrowserHeight();

            that._logo_animate( height, para, run_para, para.logo_img.height() );
        },

        //logo动画
        _logo_animate: function( height, para, run_para, offset_height ){
            var that = this;

            var logo_img_top = height * -0.5  - offset_height;
            para.logo_img.show();
            run_para.logo_img_animate = para.logo_img.animations(
                {
                    top: logo_img_top + "px",
                    opacity: 1
                },
                1000,
                "swing",
                function(){
                    run_para.logo_play_state = true;
                    run_para.logo_img_animate = null;
                    that._crown_animate(  height, para, run_para, offset_height + para.crown_img.height() );
                }
            );
        },

        //crown动画
        _crown_animate: function( height, para, run_para, offset_height ){
            var that = this;
            if( para.is_ie7 || para.is_ie8 ){
                setTimeout( function(){
                    para.crown_img.show();
                    setTimeout( function(){
                        that._star_animate( height, para, run_para, offset_height + para.star_img.height() );
                    }, 800 );
                }, 700 );
            }
            else {
                para.crown_img.show();
                run_para.crown_img_animate = para.crown_img.animate(
                    {
                        opacity: 1
                    },
                    500,
                    "swing",
                    function () {
                        run_para.crown_img_animate = null;
                        that._star_animate( height, para, run_para, offset_height + para.star_img.height() );
                    }
                );
            }
        },

        //star动画
        _star_animate: function( height, para, run_para, offset_height ){
            var that = this;
            var time = 500;

            if( para.is_ie7 || para.is_ie8 ){
                time = 600;
            }

            para.star_img.show();
            run_para.star_img_animate = para.star_img.animate(
                {
                    opacity: 1
                },
                time,
                "swing",
                function(){
                    run_para.star_img_animate = null;
                    var top = $.parseNumber( para.star_img.css( "top" ) );
                    var left = $.parseNumber( para.star_img.css( "left" ) );
                    var move_time = 100;
                    var top_change = 3;
                    var left_change = 16;

                    that._text_animate( height, para, run_para, offset_height + para.text_div.height() );

//                    //右晃第1次
//                    run_para.star_img_animate = para.star_img.animate( { top: top + top_change + "px", left: left + left_change + "px" }, move_time, "swing", function(){
//                            //重置位置
//                            run_para.star_img_animate = para.star_img.animate( { top: top + "px", left: left + "px" }, move_time, "swing", function(){
//                                    //右晃第2次
//                                    run_para.star_img_animate = para.star_img.animate( { top: top + top_change + "px", left: left + left_change + "px" }, move_time, "swing", function(){
//                                            //重置位置
//                                            run_para.star_img_animate = para.star_img.animate( { top: top + "px", left: left + "px" }, move_time, "swing", function(){
//                                                    //右晃第3次
//                                                    run_para.star_img_animate = para.star_img.animate( { top: top + top_change + "px", left: left + left_change + "px" }, move_time, "swing", function(){
//                                                            //重置位置
//                                                            run_para.star_img_animate = para.star_img.animate( { top: top + "px", left: left + "px" }, move_time, "swing", function(){
//                                                                    run_para.star_img_animate = null;
//                                                                    that._text_animate( height, para, run_para, offset_height + para.text_div.height() );
//                                                                }
//                                                            );
//                                                        }
//                                                    );
//                                                }
//                                            );
//                                        }
//                                    );
//                                }
//                            );
//                        }
//                    );
                }
            );
        },

        //text动画
        _text_animate: function( height, para, run_para, offset_height ){
            var that = this;

            var text_img_top = height * -0.3 - offset_height;
            para.text_div.show();
            run_para.text_div_animate = para.text_div.animate(
                {
                    top: text_img_top + "px",
                    opacity: 1
                },
                1200,
                "swing",
                function () {
                    run_para.text_play_state = true;
                    run_para.text_div_animate = null;
                    that._next_animate( height, para, run_para, offset_height + para.next_img.height() );
                }
            );
        },

        //next动画
        _next_animate: function( height, para, run_para, offset_height, is_resize ){
            var that = this;

            clearInterval( run_para.jump_interval );

            if( is_resize ){
                run_para.next_play_state = true;
                run_para.jump_interval = setInterval( function(){
                    that._jump( para, run_para );
                }, 1800 );
            }
            else{
                var next_img_top = height * -0.1 - offset_height;
                para.next_img.show();
                run_para.next_img_animate = para.next_img.animate(
                    {
                        top: next_img_top + "px",
                        opacity: 1
                    },
                    700,
                    "swing",
                    function () {
                        run_para.next_play_state = true;
                        run_para.next_img_animate = null;
                        run_para.all_play_state = false;

                        run_para.jump_interval = setInterval( function(){
                            that._jump( para, run_para );
                        }, 1800 );
                    }
                );
            }
        },

        //next图标跳动
        _jump: function( para ){
            var top = $.parseNumber( para.next_img.css( "top" ) );
            var jump_dis = 10;
            var jump_time = 120;
            para.jump_animate = para.next_img.animate( { top: top - jump_dis + "px" }, jump_time, "swing", function(){
                para.jump_animate = para.next_img.animate( { top: top + "px" }, jump_time, "swing", function(){
                    para.jump_animate = para.next_img.animate( { top: top - jump_dis + "px" }, jump_time, "swing", function(){
                        para.jump_animate = para.next_img.animate( { top: top + "px" }, jump_time, "swing" );
                        para.jump_animate = null;
                    } );
                } );
            } );
        }
    };
});