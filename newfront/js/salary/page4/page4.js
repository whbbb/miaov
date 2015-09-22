
$( document ).ready( function(){
    $._page_4 = {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            page4: $("#J_page4"),
            page_4: $("#J_page4").find(".page4"),
            text_4_1: $("#J_page4").find("#J_text_4_1"),
            text_4_2: $("#J_page4").find("#J_text_4_2"),
            sand_glass: $("#J_page4").find("#J_sand_glass"),
            bg: $("#J_page4").find("#J_bg"),
            bg_img: $("#J_page4").find("#J_bg_img"),
            bg_cover: $("#J_page4").find("#J_bg_cover"),
            spread: $("#J_page4").find("#J_spread")
        },

        run_parameter: {
            begin_play_state: true,
            first_state: true,
            all_play_state: true
        },

        init: function () {
            var that = this;
            if (that.parameter.page_4.is(":visible") && that.run_parameter.begin_play_state) {
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
                para.text_4_1.css("opacity", "0");
                para.text_4_2.css("opacity", "0");
                para.sand_glass.css("opacity", "0");
                para.spread.css("opacity", "0");
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

            para.page_4.css({ width: width, height: height });
            para.page4.css({ width: width, height: height });

            that._element_resize( para.bg, "height", height );
            that._element_resize( para.bg_img, "height", height );
            that._element_resize( para.bg_cover, "width", para.bg_img.width() );
        },

        //bg图缩放
        _element_resize: function( target, type, size ){
            var that = this;

            if( type == "height" ){
                var width = that._resize_by_height( target, size );
                target.css({ width: width, height: size });
                return width;
            }
            else if( type == "width" ){
                var height = that._resize_by_width( target, size );
                target.css({ width: size, height: height });
                return height;
            }
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

            //text_4_1定位
            if (run_para.text_4_1_animate) {
                run_para.text_4_1_animate.stop();
            }
            top = height * 0.2 - para.text_4_1.height();
            that._set_position(para.text_4_1, top, left);
            if (run_para.text_4_1_animate) {
                that._text_4_1_animate(height, para, run_para);
            }

            //text_4_2定位
            if (run_para.text_4_2_animate) {
                run_para.text_4_2_animate.stop();
            }
            top = height * 0.2 - para.text_4_1.height() / 4 - para.text_4_2.height();
            that._set_position(para.text_4_2, top, left);
            if (run_para.text_4_2_animate) {
                that._text_4_2_animate(height, para, run_para);
            }

            //sand_glass定位
            if ( run_para.sand_glass_animate ) {
                run_para.sand_glass_animate.stop();
            }
            top = height - para.text_4_1.height() - para.text_4_2.height() - para.sand_glass.height();
            that._set_position( para.sand_glass, top, left);
            if (run_para.sand_glass_animate) {
                that._sand_glass_animate( height, para, run_para );
            }

            //bg定位
            if (run_para.bg_animate) {
                run_para.bg_animate.stop();
                run_para.bg_play_state = false;
            }
            top = -para.text_4_1.height() - para.text_4_2.height() - para.sand_glass.height();
            that._set_position( para.bg, top, left);
            if( run_para.bg_play_state ){
                top = $.parseNumber( para.bg_cover.css( "top" ) ) - para.bg_cover.height();
            }
            else{
                top = para.bg_img.height() * -1;
            }
            that._set_position( para.bg_cover, top, left );
            if (run_para.bg_animate) {
                that._bg_animate( height, para, run_para );
            }

            //spread定位
            if (run_para.spread_animate) {
                run_para.spread_animate.stop();
                run_para.spread_play_state = false;
            }
            if( run_para.spread_play_state ){
                top = height - para.text_4_1.height() - para.text_4_2.height() - para.sand_glass.height() * 2 - para.bg.height() - para.spread.height() - 30;
            }
            else{
                top = height - para.text_4_1.height() - para.text_4_2.height() - para.sand_glass.height() * 2 - para.bg.height() - para.spread.height() + 60;
            }
            that._set_position( para.spread, top, left );
            if (run_para.spread_animate) {
                that._spread_animate( height, para, run_para );
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

            that._text_4_1_animate(height, para, run_para);
        },

        //text_4_1动画
        _text_4_1_animate: function (height, para, run_para) {
            var that = this;

            if (para.is_ie7 || para.is_ie8) {
                setTimeout(function () {
                    para.text_4_1.show();
                    that._text_4_2_animate(height, para, run_para);
                }, 1000 );
            }
            else {
                para.text_4_1.show();
                run_para.text_4_1_animate = para.text_4_1.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.text_4_1_animate = null;
                        that._text_4_2_animate(height, para, run_para);
                    }
                );
            }
        },

        //text_4_2动画
        _text_4_2_animate: function (height, para, run_para) {
            var that = this;

            if (para.is_ie7 || para.is_ie8) {
                setTimeout(function () {
                    para.text_4_2.show();
                    that._sand_glass_animate(height, para, run_para);
                }, 1000);
            }
            else {
                para.text_4_2.show();
                run_para.text_4_2_animate = para.text_4_2.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.text_4_2_animate = null;
                        that._sand_glass_animate(height, para, run_para);
                    }
                );
            }
        },

        //sand_glass动画
        _sand_glass_animate: function ( height, para, run_para ) {
            var that = this;

            if ( para.is_ie7 || para.is_ie8 ) {
                setTimeout(function () {
                    para.sand_glass.show();
                    that._bg_animate(height, para, run_para);
                }, 1000);
            }
            else {
                para.sand_glass.show();
                run_para.sand_glass_animate = para.sand_glass.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.sand_glass_animate = null;
                        that._bg_animate(height, para, run_para);
                    }
                );
            }
        },

        //bg动画
        _bg_animate: function ( height, para, run_para ) {
            var that = this;

            para.bg.show();
            var target_top = $.parseNumber( para.bg_cover.css( "top" ) ) - para.bg_cover.height();

            setTimeout( function(){
                para.text_4_2.css( "background-color", "#A0D7C3" );
            }, 600 );

            run_para.bg_animate = para.bg_cover.animate(
                {
                    top: target_top
                },
                1000,
                "swing",
                function () {
                    run_para.bg_animate = null;
                    run_para.bg_play_state = true;
                    that._spread_animate(height, para, run_para);
                }
            );
        },

        //spread动画
        _spread_animate: function ( height, para, run_para ) {
            para.spread.show();
            var target_top = height - para.text_4_1.height() - para.text_4_2.height() - para.sand_glass.height() * 2 - para.bg.height() - para.spread.height() - 30;
            run_para.spread_animate = para.spread.animate(
                {
                    top: target_top,
                    opacity: 1
                },
                1000,
                "swing",
                function () {
                    run_para.spread_animate = null;
                    run_para.spread_play_state = true;
                }
            );
        },

        //根据屏幕高度缩放图片
        _resize_by_height: function( target, height ){
            var old_height = target.height();
            var rate = old_height / height;
            var old_width = target.width();
            return old_width / rate;
        },

        //根据对象宽度缩放图片
        _resize_by_width: function( target, width ){
            var old_width = target.width();
            var rate = old_width / width;
            var old_height = target.height();
            return old_height / rate;
        }
    };
});
