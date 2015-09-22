
    $( document ).ready( function(){
        $._page_2 = {
            parameter: {
                is_ie7: $.browser.msie && $.browser.version == "7.0",
                is_ie8: $.browser.msie && $.browser.version == "8.0",
                page2: $( "#J_page2" ),
                page_2: $("#J_page2").find(".page2" ),
                circle: $("#J_page2").find("#J_circle" ),
                title: $("#J_page2").find("#J_title" ),
                title_span_left: $("#J_page2").find("#J_title span.left" ),
                title_span_right: $("#J_page2").find("#J_title span.right" ),
                line_1: $("#J_page2").find("#J_line_1" ),
                line_2: $("#J_page2").find("#J_line_2" ),
                text_2_1: $("#J_page2").find("#J_text_2_1" ),
                text_2_2: $("#J_page2").find("#J_text_2_2" ),
                text_2_3: $("#J_page2").find("#J_text_2_3" )
            },

            run_parameter: {
                begin_play_state: true,
                all_play_state: true,
                first_state: true,
                line_1_play_state: false,
                text_2_1_play_state: false,
                text_2_2_play_state: false,
                text_2_3_play_state: false
            },

            init: function () {
                var that = this;
                if (that.parameter.page_2.is(":visible") && that.run_parameter.begin_play_state) {
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

                run_para.circle_width = para.circle.width();
                run_para.circle_height = para.circle.height();

                that._resize();
                that._auto_position();
            },

            //窗口缩放事件处理
            _resize: function(){
                var that = this;
                var para = that.parameter;

                var width = $.getBrowserWidth();
                var height = $.getBrowserHeight();

                para.page_2.css( { width: width, height: height } );
                para.page2.css( { width: width, height: height } );
            },


            //事件绑定
            _bind: function(){
                var that = this;
                //窗口缩放事件监听
                $( window ).bind( "resize", function(){
                    that._resize();
                    that._auto_position();
                } );
            },

            //自动定位
            _auto_position: function(){
                var that = this;
                var para = that.parameter;
                var run_para = that.run_parameter;
                var width = $.getBrowserWidth();
                var height = $.getBrowserHeight();
                var top;
                var left;

                //circle定位
                if( run_para.circle_animate ){
                    run_para.circle_animate.stop();
                }
                top = height * 0.5  - ( run_para.circle_height / 2 );
                left = 0;
                that._set_position( para.circle, top, left );
                if( run_para.circle_animate ){
                    that._circle_animate( height, para, run_para, top );
                }

                //title定位
                if( run_para.title_left_animate || run_para.title_right_animate ){
                    run_para.title_left_animate.stop();
                    run_para.title_right_animate.stop();
                }
                top = top - ( run_para.circle_height / 2 ) - para.title.height();
                left = 0;
                that._set_position( para.title, top, left );
                if( run_para.title_left_animate && run_para.title_right_animate ){
                    that._title_animate( height, para, run_para );
                }

                //line_1定位
                if( run_para.line_1_play_state ){
                    top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height();
                    left = -100;
                }
                else{
                    top = -run_para.circle_height - para.title.height() - para.line_1.height();
                    left = width / 2;
                }
                that._set_position( para.line_1, top, left );

                //line_2定位
                if( run_para.line_1_animate || run_para.line_2_animate ){
                    run_para.line_1_animate.stop();
                    run_para.line_2_animate.stop();
                    run_para.line_1_play_state = false;
                    run_para.line_2_play_state = false;
                }
                if( run_para.line_2_play_state ){
                    top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height() - 210;
                    left = -220;
                }
                else{
                    top = height - run_para.circle_height - para.title.height() - para.line_1.height();
                    left = width * -0.5 - ( para.line_2.width() / 2 );
                }
                that._set_position( para.line_2, top, left );
                if(  run_para.line_1_animate || run_para.line_2_animate ){
                    that._line_animate( height, para, run_para );
                }

                //text_2_1定位
                if( run_para.text_2_1_animate ){
                    run_para.text_2_1_animate.stop();
                    run_para.text_2_1_play_state = false;
                }
                top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height() - para.line_2.height() + 20;
                if( run_para.text_2_1_play_state ){
                    left = -70;
                }
                else{
                    left = width / 2;
                }
                that._set_position( para.text_2_1, top, left );
                if( run_para.text_2_1_animate ){
                    that._text_2_1_animate( para, run_para );
                }

                //text_2_2定位
                if( run_para.text_2_2_animate ){
                    run_para.text_2_2_animate.stop();
                    run_para.text_2_2_play_state = false;
                }
                top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height() - para.line_2.height() + 35;
                if( run_para.text_2_2_play_state ){
                    left = 0;
                }
                else{
                    left = width / 2;
                }
                that._set_position( para.text_2_2, top, left );
                if( run_para.text_2_2_animate ){
                    that._text_2_2_animate( para, run_para );
                }

                //text_2_3定位
                if( run_para.text_2_3_animate ){
                    run_para.text_2_3_animate.stop();
                    run_para.text_2_3_play_state = false;
                }
                top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height() - para.line_2.height() + 50;
                if( run_para.text_2_3_play_state ){
                    left = 70;
                }
                else{
                    left = width / 2;
                }
                that._set_position( para.text_2_3, top, left );
                if( run_para.text_2_3_animate ){
                    that._text_2_3_animate( para, run_para );
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

                that._circle_animate( height, para, run_para );
            },

            //circle动画
            _circle_animate: function( height, para, run_para ){
                var that = this;

                var target_width = run_para.circle_width;
                var target_height = run_para.circle_height;

                var circle_top = height * 0.5  - run_para.circle_height / 2;


                para.circle.css( { width: "0px", height: "0px", top: height * 0.5 } );
                para.circle.show();

                run_para.circle_animate = para.circle.animations( {
                        top: circle_top + "px",
                        width: target_width + "px",
                        height: target_height + "px"
                    },
                    1000,
                    "swing",
                    function(){
                        run_para.circle_animate = null;
                        that._title_animate(  height, para, run_para );
                    }
                );
//                run_para.circle_animate = para.circle.animate(
//                    {
//                        top: circle_top + "px",
//                        width: 100 + "%",
//                        height: target_height + "px"
//                    },
//                    1000,
//                    "swing",
//                    function(){
//                        run_para.circle_animate = null;
//                        that._title_animate(  height, para, run_para );
//                    }
//                );
            },

            //title动画
            _title_animate: function( height, para, run_para ){
                var that = this;

                var target_width = 0;
                para.title.show();
                run_para.title_left_animate = para.title_span_left.animate(
                    {
                        width: target_width + "px"
                    },
                    700,
                    "swing",
                    function(){
                        run_para.title_left_animate = null;
                    }
                );
                run_para.title_right_animate = para.title_span_right.animate(
                    {
                        width: target_width + "px"
                    },
                    700,
                    "swing",
                    function(){
                        run_para.title_right_animate = null;
                        that._line_animate(  height, para, run_para );
                        that._line_animate(  height, para, run_para );
                    }
                );
            },

            //line动画
            _line_animate: function( height, para, run_para ){
                var that = this;

                para.line_1.show();
                var target_1_top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height();
                var target_1_left = -100;
                run_para.line_1_animate = para.line_1.animate(
                    {
                        top: target_1_top + "px",
                        left: target_1_left + "px"
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.line_1_animate = null;
                        run_para.line_1_play_state = true;
                    }
                );

                para.line_2.show();
                var target_top = height * 0.5 - run_para.circle_height - para.title.height() - para.line_1.height() - 210;
                var target_left = -220;
                run_para.line_2_animate = para.line_2.animate(
                    {
                        top: target_top + "px",
                        left: target_left + "px"
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.line_2_animate = null;
                        run_para.line_2_play_state = true;
                        that._text_2_1_animate( para, run_para );
//                        setTimeout( function(){
//                            that._text_2_2_animate( para, run_para );
//                            setTimeout( function(){
//                                that._text_2_3_animate( para, run_para );
//                            },250 );
//                        },250 );
                    }
                );
            },

            //text_2_1动画
            _text_2_1_animate: function( para, run_para ){
                var that = this;
                para.text_2_1.show();
                run_para.text_2_1_animate = para.text_2_1.animations(
                    {
                        left: "-70px"
                    },
                    500,
                    "swing",
                    function () {
                        run_para.text_2_1_animate = null;
                        run_para.text_2_1_play_state = true;
                    },
                    "half",
                    function(){
                        that._text_2_2_animate( para, run_para );
                    }
                );
            },

            //text_2_2动画
            _text_2_2_animate: function( para, run_para ){
                var that = this;
                para.text_2_2.show();
                run_para.text_2_2_animate = para.text_2_2.animations(
                    {
                        left: "0px"
                    },
                    500,
                    "swing",
                    function () {
                        run_para.text_2_2_animate = null;
                        run_para.text_2_2_play_state = true;
                    },
                    "half",
                    function(){
                        that._text_2_3_animate( para, run_para );
                    }
                );
            },

            //text_2_3动画
            _text_2_3_animate: function( para, run_para ){
                var that = this;
                para.text_2_3.show();
                run_para.text_2_3_animate = para.text_2_3.animations(
                    {
                        left: "70px"
                    },
                    500,
                    "swing",
                    function () {
                        run_para.text_2_3_animate = null;
                        run_para.text_2_3_play_state = true;
                    }
                );
            }
        };
    });
