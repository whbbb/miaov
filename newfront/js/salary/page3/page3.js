
$( document ).ready( function(){
    $._page_3 = {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            page3: $( "#J_page3" ),
            page_3: $("#J_page3").find(".page3" ),
            text_3_1: $("#J_page3").find("#J_text_3_1" ),
            text_3_2: $("#J_page3").find("#J_text_3_2" ),
            low: $("#J_page3").find("#J_low" ),
            low_info: $("#J_page3").find("#J_low_info" ),
            high: $("#J_page3").find("#J_high" ),
            per_20: $("#J_page3").find("#J_per_20" ),
            line: $("#J_page3").find("#J_line" ),
            line_img: $("#J_page3").find("#J_line_img" ),
            line_cover: $("#J_page3").find("#J_line_cover" ),
            per_40: $("#J_page3").find("#J_per_40" ),
            high_info: $("#J_page3").find("#J_high_info" )
        },

        run_parameter: {
            begin_play_state: true,
            first_state: true,
            all_play_state: true
        },

        init: function () {
            var that = this;
            if (that.parameter.page_3.is(":visible") && that.run_parameter.begin_play_state) {
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
                para.text_3_1.css( "opacity", "0" );
                para.text_3_2.css( "opacity", "0" );
                para.low.css( "opacity", "0" );
                para.low_info.css( "opacity", "0" );
                para.high.css( "opacity", "0" );
                para.per_20.css( "opacity", "0" );
                para.per_40.css( "opacity", "0" );
                para.high_info.css( "opacity", "0" );
            }
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

            para.page_3.css( { width: width, height: height } );
            para.page3.css( { width: width, height: height } );
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
            var height = $.getBrowserHeight();
            var top;
            var left;

            //text_3_1定位
            if( run_para.text_3_1_animate ){
                run_para.text_3_1_animate.stop();
            }
            top = height * 0.2  - para.text_3_1.height();
            left = 0;
            that._set_position( para.text_3_1, top, left );
            if( run_para.text_3_1_animate ){
                that._text_3_1_animate( height, para, run_para );
            }

            //text_3_2定位
            if( run_para.text_3_2_animate ){
                run_para.text_3_2_animate.stop();
            }
            top = height * 0.2  - para.text_3_1.height() / 4 - para.text_3_2.height();
            left = 0;
            that._set_position( para.text_3_2, top, left );
            if( run_para.text_3_2_animate ){
                that._text_3_2_animate( height, para, run_para );
            }

            //low定位
            if( run_para.low_animate ){
                run_para.low_animate.stop();
                run_para.low_play_state = false;
            }
            if( run_para.low_play_state ){
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height();
            }
            else{
                top = height  - para.text_3_1.height() - para.text_3_2.height();
            }
            that._set_position( para.low, top, left );
            if( run_para.low_animate ){
                that._low_animate( height, para, run_para );
            }

            //low_info定位
            if( run_para.low_info_animate ){
                run_para.low_info_animate.stop();
                run_para.low_info_play_state = false;
            }
            if( run_para.low_info_play_state ){
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() * 2 - para.low_info.height() - 10;
            }
            else{
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height();
            }
            that._set_position( para.low_info, top, 370 );
            if( run_para.low_info_animate ){
                that._low_info_animate( height, para, run_para );
            }

            //high定位
            if( run_para.high_animate ){
                run_para.high_animate.stop();
                run_para.high_play_state = false;
            }
            if( run_para.high_play_state ){
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height();
            }
            else{
                top = height  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height();
            }
            that._set_position( para.high, top, left );
            if( run_para.high_animate ){
                that._high_animate( height, para, run_para );
            }

            //per_20定位
            if( run_para.per_20_animate ){
                run_para.per_20_animate.stop();
                run_para.per_20_play_state = false;
            }
            if( run_para.per_20_play_state ){
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height() - 80;
            }
            else{
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height();
            }
            that._set_position( para.per_20, top, ( para.high.width() / -2 ) );
            if( run_para.per_20_animate ){
                that._per_20_animate( height, para, run_para );
            }

            //line定位
            if( run_para.line_animate ){
                run_para.line_animate.stop();
            }
            top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height();
            top = top - para.line.height() - para.high.height() / 2;
            that._set_position( para.line, top, left );
            if( run_para.line_animate ){
                that._line_animate( height, para, run_para );
            }

            //per_40定位
            if( run_para.per_40_animate ){
                run_para.per_40_animate.stop();
                run_para.per_40_play_state = false;
            }
            if( run_para.per_40_play_state ){
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height() ;
                top = top - para.line.height() - para.per_40.height() - para.high.height() + 10;
            }
            else{
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height();
                top = top - para.line.height() - para.per_40.height() - para.high.height() / 2;
            }
            that._set_position( para.per_40, top, ( para.high.width() / 2 ) );
            if( run_para.per_40_animate ){
                that._per_40_animate( height, para, run_para );
            }

            //high_info定位
            if( run_para.high_info_animate ){
                run_para.high_info_animate.stop();
                run_para.high_info_play_state = false;
            }
            if( run_para.high_info_play_state ){
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height() ;
                top = top - para.line.height() - para.per_40.height() - para.high.height() / 2 - para.high_info.height() * 2 - 10;
            }
            else{
                top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height();
                top = top - para.line.height() - para.per_40.height() - para.high.height() / 2;
            }
            that._set_position( para.high_info, top, para.high_info.width() / -2 - 22 );
            if( run_para.high_info_animate ){
                that._high_info_animate( height, para, run_para );
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

            that._text_3_1_animate( height, para, run_para );
        },

        //text_3_1动画
        _text_3_1_animate: function( height, para, run_para ){
            var that = this;

            if( para.is_ie7 || para.is_ie8 ){
                setTimeout( function(){
                    para.text_3_1.show();
                    that._text_3_2_animate( height, para, run_para );
                }, 1000 );
            }
            else {
                para.text_3_1.show();
                run_para.text_3_1_animate = para.text_3_1.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.text_3_1_animate = null;
                        that._text_3_2_animate(  height, para, run_para );
                    }
                );
            }
        },

        //text_3_2动画
        _text_3_2_animate: function( height, para, run_para ){
            var that = this;

            if( para.is_ie7 || para.is_ie8 ){
                setTimeout( function(){
                    para.text_3_2.show();
                    that._low_animate( height, para, run_para );
                }, 1000 );
            }
            else {
                para.text_3_2.show();
                run_para.text_3_2_animate = para.text_3_2.animate(
                    {
                        opacity: 1
                    },
                    1000,
                    "swing",
                    function () {
                        run_para.text_3_2_animate = null;
                        that._low_animate(  height, para, run_para );
                    }
                );
            }
        },

        //low动画
        _low_animate: function( height, para, run_para ){
            var that = this;

            var target_top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height();
            para.low.show();
            run_para.low_animate = para.low.animate(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                1500,
                "swing",
                function () {
                    run_para.low_animate = null;
                    run_para.low_play_state = true;
                    that._low_info_animate(  height, para, run_para );
                }
            );
        },

        //low_info动画
        _low_info_animate: function( height, para, run_para ){
            var that = this;

            var target_top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() * 2 - para.low_info.height() - 10;
            para.low_info.show();
            run_para.low_info_animate = para.low_info.animate(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                1000,
                "swing",
                function () {
                    run_para.low_info_animate = null;
                    run_para.low_info_play_state = true;
                    that._high_animate(  height, para, run_para );
                }
            );
        },

        //high动画
        _high_animate: function( height, para, run_para ){
            var that = this;

            var target_top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height();
            para.high.show();
            run_para.high_animate = para.high.animate(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                1500,
                "swing",
                function () {
                    run_para.high_animate = null;
                    run_para.high_play_state = true;
                    that._per_20_animate(  height, para, run_para );
                }
            );
        },

        //per_20动画
        _per_20_animate: function( height, para, run_para ){
            var that = this;

            var target_top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height() - 80;
            para.per_20.show();
            run_para.per_20_animate = para.per_20.animate(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                1000,
                "swing",
                function () {
                    run_para.per_20_animate = null;
                    run_para.per_20_play_state = true;
                    that._line_animate(  height, para, run_para );
                }
            );
        },

        //line动画
        _line_animate: function( height, para, run_para ){
            var that = this;

            para.line.show();
            run_para.line_animate = para.line_cover.animate(
                {
                    width: "0px"
                },
                1500,
                "swing",
                function () {
                    run_para.line_animate = null;
                    that._per_40_animate(  height, para, run_para );
                }
            );
        },

        //per_40动画
        _per_40_animate: function( height, para, run_para ){
            var that = this;

            var target_top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height();
            target_top = target_top - para.line.height() - para.per_40.height() - para.high.height() + 10;
            para.per_40.show();
            run_para.per_40_animate = para.per_40.animate(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                1000,
                "swing",
                function () {
                    run_para.per_40_animate = null;
                    run_para.per_40_play_state = true;
                    that._high_info_animate(  height, para, run_para );
                }
            );
        },

        //high_info动画
        _high_info_animate: function( height, para, run_para ){

            var target_top = height * 0.9  - para.text_3_1.height() - para.text_3_2.height() - para.low.height() - para.low_info.height() - para.high.height() - para.per_20.height();
            target_top = target_top - para.line.height() - para.per_40.height() - para.high.height() / 2 - para.high_info.height() * 2 - 10;
            para.high_info.show();
            run_para.high_info_animate = para.high_info.animate(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                1000,
                "swing",
                function () {
                    run_para.high_info_animate = null;
                    run_para.high_info_play_state = true;
                }
            );
        }
    };
});