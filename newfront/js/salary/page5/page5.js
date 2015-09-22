

$( document ).ready( function(){
    $._page_5 = {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            page5: $("#J_page5"),
            page_5: $("#J_page5").find(".page5"),
            text_5_1: $("#J_page5").find("#J_text_5_1"),
            text_5_2: $("#J_page5").find("#J_text_5_2"),
            umbrella: $("#J_page5").find("#J_umbrella"),
            lightning: $("#J_page5").find("#J_lightning"),
            lightning_img: $("#J_page5").find("#J_lightning_img"),
            lightning_cover: $("#J_page5").find("#J_lightning_cover"),
            rain: $("#J_page5").find("#J_rain")
        },

        run_parameter: {
            begin_play_state: true,
            first_state: true,
            all_play_state: true
        },

        init: function () {
            var that = this;
            if (that.parameter.page_5.is(":visible") && that.run_parameter.begin_play_state) {
                that.run_parameter.begin_play_state = false;
                that._animate();
                that._bind();
            }
        },

        //初始化当前页元素
        _init_elements: function () {
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;

            if (para.is_ie7 != true && para.is_ie8 != true && run_para.first_state) {
                para.text_5_1.css("opacity", "0");
                para.text_5_2.css("opacity", "0");
                para.umbrella.css("opacity", "0");
                para.rain.css("opacity", "0");
            }
            run_para.first_state = false;

            that._resize();
            that._auto_position();
        },

        //窗口缩放事件处理
        _resize: function () {
            var that = this;
            var para = that.parameter;

            var width = $.getBrowserWidth();
            var height = $.getBrowserHeight();

            para.page_5.css({ width: width, height: height });
            para.page5.css({ width: width, height: height });
        },

        //事件绑定
        _bind: function () {
            var that = this;
            //窗口缩放事件监听
            $( window ).bind("resize", function () {
                that._resize();
                that._auto_position();
            });
        },

        //自动定位
        _auto_position: function () {
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;
            var height = $.getBrowserHeight();
            var top;
            var left = 0;

            //text_5_1定位
            if (run_para.text_5_1_animate) {
                run_para.text_5_1_animate.stop();
            }
            top = height * 0.2 - para.text_5_1.height();
            that._set_position(para.text_5_1, top, left);
            if (run_para.text_5_1_animate) {
                that._text_5_1_animate(height, para, run_para);
            }

            //text_5_2定位
            if (run_para.text_5_2_animate) {
                run_para.text_5_2_animate.stop();
            }
            top = height * 0.2 - para.text_5_1.height() / 4 - para.text_5_2.height();
            that._set_position(para.text_5_2, top, left);
            if (run_para.text_5_2_animate) {
                that._text_5_2_animate(height, para, run_para);
            }

            //umbrella定位
            if ( run_para.umbrella_animate ) {
                run_para.umbrella_animate.stop();
                para.umbrella_play_state = false;
            }
            if( run_para.umbrella_play_state ){
                top = height * 0.9 - para.text_5_1.height() - para.text_5_2.height() - para.umbrella.height();
            }
            else{
                top = height - para.text_5_1.height() - para.text_5_2.height() - para.umbrella.height();
            }
            that._set_position( para.umbrella, top, left);
            if (run_para.umbrella_animate) {
                that._umbrella_animate( height, para, run_para );
            }

            //lightning定位
            if (run_para.lightning_animate) {
                run_para.lightning_animate.stop();
            }
            top = height * 0.9 - para.text_5_1.height() - para.text_5_2.height() - para.umbrella.height() - para.lightning.height() * 3;
            that._set_position( para.lightning, top, left);
            if (run_para.lightning_animate) {
                that._lightning_animate( height, para, run_para );
            }

            //rain定位
            if (run_para.rain_animate) {
                run_para.rain_animate.stop();
            }
            top = height * 0.9 - para.text_5_1.height() - para.text_5_2.height() - para.umbrella.height() - para.lightning.height() * 2.5 - para.rain.height();
            that._set_position( para.rain, top, left );
            if (run_para.rain_animate) {
                that._rain_animate( height, para, run_para );
            }
        },

        _set_position: function (target, top, left) {
            target.css(
                {
                    top: top + "px",
                    left: left + "px"
                }
            );
        },

        //顺序动画
        _animate: function () {
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;

            var height = $.getBrowserHeight();

            that._text_5_1_animate(height, para, run_para);
        },

        //text_5_1动画
        _text_5_1_animate: function (height, para, run_para) {
            var that = this;

            if (para.is_ie7 || para.is_ie8) {
                setTimeout(function () {
                    para.text_5_1.show();
                    that._text_5_2_animate(height, para, run_para);
                }, 1000 );
            }
            else {
                para.text_5_1.show();
                run_para.text_5_1_animate = para.text_5_1.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.text_5_1_animate = null;
                        that._text_5_2_animate(height, para, run_para);
                    }
                );
            }
        },

        //text_5_2动画
        _text_5_2_animate: function (height, para, run_para) {
            var that = this;

            if (para.is_ie7 || para.is_ie8) {
                setTimeout(function () {
                    para.text_5_2.show();
                    that._umbrella_animate(height, para, run_para);
                }, 1000);
            }
            else {
                para.text_5_2.show();
                run_para.text_5_2_animate = para.text_5_2.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.text_5_2_animate = null;
                        that._umbrella_animate(height, para, run_para);
                    }
                );
            }
        },

        //umbrella动画
        _umbrella_animate: function ( height, para, run_para ) {
            var that = this;

            var target_top = height * 0.9 - para.text_5_1.height() - para.text_5_2.height() - para.umbrella.height();
            para.umbrella.show();
            run_para.umbrella_animate = para.umbrella.animate(
                {
                    top: target_top,
                    opacity: 1
                },
                1000,
                "swing",
                function () {
                    run_para.umbrella_animate = null;
                    run_para.umbrella_play_state = true;
                    that._lightning_animate(height, para, run_para);
                }
            );
        },

        //lightning动画
        _lightning_animate: function ( height, para, run_para ) {
            var that = this;

            para.lightning.show();

            run_para.lightning_animate = para.lightning_cover.animate(
                {
                    height: "0px",
                    top:  "0px"
                },
                500,
                "swing",
                function () {
                    run_para.lightning_animate = null;

                    if( para.is_ie7 || para.is_ie8 ){
                        setTimeout( function(){
                            para.lightning.hide();
                            setTimeout( function(){
                                para.lightning.show();
                                that._rain_animate(height, para, run_para);
                            }, 200 );
                        }, 200 );
                    }
                    else{
                        run_para.lightning_animate = para.lightning.animate(
                            {
                                opacity: 0.3
                            },
                            400,
                            "swing",
                            function(){
                                run_para.lightning_animate = para.lightning.animate(
                                    {
                                        opacity: 1
                                    },
                                    200,
                                    "swing",
                                    function(){
                                        run_para.lightning_animate = null;
                                        that._rain_animate(height, para, run_para);
                                    }
                                );
                            }
                        );
                    }
                }
            );
        },

        //rain动画
        _rain_animate: function ( height, para, run_para ) {
            para.rain.show();

            if (para.is_ie7 || para.is_ie8) {
                setTimeout(function () {
                    para.rain.show();
                }, 1000);
            }
            else {
                para.rain.show();
                run_para.rain_animate = para.rain.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.rain_animate = null;
                    }
                );
            }
        }
    };
});
