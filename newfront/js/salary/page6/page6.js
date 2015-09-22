

$( document ).ready( function(){
    $._page_6 = {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            page6: $("#J_page6"),
            page_6: $("#J_page6").find(".page6"),
            paper_1: $("#J_page6").find("#J_paper_1"),
            paper_2: $("#J_page6").find("#J_paper_2"),
            paper_3: $("#J_page6").find("#J_paper_3"),
            paper_4: $("#J_page6").find("#J_paper_4"),
            paper_5: $("#J_page6").find("#J_paper_5"),
            let_go: $("#J_page6").find("#J_let_go"),
            let_go_img: $("#J_page6").find("#J_let_go").find( "img" ),
            let_go_text: $("#J_page6").find("#J_let_go").find( "div" )
        },

        run_parameter: {
            begin_play_state: true,
            first_state: true,
            all_play_state: true
        },

        init: function () {
            var that = this;
            if (that.parameter.page_6.is(":visible") && that.run_parameter.begin_play_state) {
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
                para.paper_1.css("opacity", "0");
                para.paper_2.css("opacity", "0");
                para.paper_3.css("opacity", "0");
                para.paper_4.css("opacity", "0");
                para.paper_5.css("opacity", "0");
            }
            run_para.first_state = false;

            run_para.let_go_width = para.let_go.width();
            run_para.let_go_height = para.let_go.height();

            that._resize();
            that._auto_position();
        },

        //窗口缩放事件处理
        _resize: function () {
            var that = this;
            var para = that.parameter;

            var width = $.getBrowserWidth();
            var height = $.getBrowserHeight();

            para.page_6.css({ width: width, height: height });
            para.page6.css({ width: width, height: height });
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
            var left;

            //paper_1定位
            if (run_para.paper_1_animate) {
                run_para.paper_1_animate.stop();
                run_para.paper_1_play_state = false;
            }
            if( run_para.paper_1_play_state ){
                top = height * 0.8 - para.paper_1.height();
            }
            else{
                top =  height - para.paper_1.height();
            }
            left = para.paper_1.width() * -2 - 40;
            that._set_position( para.paper_1, top, left );
            if (run_para.paper_1_animate) {
                that._paper_1_animate( height, para, run_para );
            }

            //paper_2定位
            if (run_para.paper_2_animate) {
                run_para.paper_2_animate.stop();
                run_para.paper_2_play_state = false;
            }
            if( run_para.paper_2_play_state ){
                top = height * 0.8 - para.paper_1.height() - para.paper_2.height();
            }
            else{
                top =  height - para.paper_1.height() - para.paper_2.height();
            }
            left = para.paper_2.width() * -1 - 20;
            that._set_position( para.paper_2, top, left );
            if (run_para.paper_2_animate) {
                that._paper_2_animate( height, para, run_para );
            }

            //paper_3定位
            if (run_para.paper_3_animate) {
                run_para.paper_3_animate.stop();
                run_para.paper_3_play_state = false;
            }
            if( run_para.paper_3_play_state ){
                top = height * 0.8 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height();
            }
            else{
                top =  height - para.paper_1.height() - para.paper_2.height() - para.paper_3.height();
            }
            left = 0;
            that._set_position( para.paper_3, top, left );
            if (run_para.paper_3_animate) {
                that._paper_3_animate( height, para, run_para );
            }

            //paper_4定位
            if (run_para.paper_4_animate) {
                run_para.paper_4_animate.stop();
                run_para.paper_4_play_state = false;
            }
            if( run_para.paper_4_play_state ){
                top = height * 0.8 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height();
            }
            else{
                top = height - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height();
            }
            left = para.paper_4.width() + 20;
            that._set_position( para.paper_4, top, left );
            if (run_para.paper_4_animate) {
                that._paper_4_animate( height, para, run_para );
            }

            //paper_5定位
            if (run_para.paper_5_animate) {
                run_para.paper_5_animate.stop();
                run_para.paper_5_play_state = false;
            }
            if( run_para.paper_5_play_state ){
                top = height * 0.8 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height() - para.paper_5.height();
            }
            else{
                top = height - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height() - para.paper_5.height();
            }
            left = para.paper_5.width() * 2 + 40;
            that._set_position( para.paper_5, top, left );
            if (run_para.paper_5_animate) {
                that._paper_5_animate( height, para, run_para );
            }

            //let_go定位
            if( run_para.let_go_animate ){
                run_para.let_go_animate.stop();
                if( run_para.let_go_text_animate ){
                    run_para.let_go_text_animate.stop();
                }
            }
            top = height * 0.2 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height() - para.paper_5.height() - ( run_para.let_go_height / 2 );
            left = 0;
            that._set_position( para.let_go, top, left );
            if( run_para.let_go_animate ){
                that._let_go_animate( height, para, run_para );
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

            that._paper_1_animate(height, para, run_para);
        },

        //paper_1动画
        _paper_1_animate: function (height, para, run_para) {
            var that = this;

            var target_top = height * 0.8 - para.paper_1.height();
            para.paper_1.show();
            run_para.paper_1_animate = para.paper_1.animations(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                500,
                "swing",
                function () {
                    run_para.paper_1_animate = null;
                    run_para.paper_1_play_state = true;
                },
                "half",
                function(){
                    that._paper_2_animate( height, para, run_para);
                }
            );
        },

        //paper_2动画
        _paper_2_animate: function (height, para, run_para) {
            var that = this;
            var target_top = height * 0.8 - para.paper_1.height() - para.paper_2.height();
            para.paper_2.show();
            run_para.paper_2_animate = para.paper_2.animations(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                500,
                "swing",
                function () {
                    run_para.paper_2_animate = null;
                    run_para.paper_2_play_state = true;
                },
                "half",
                function(){
                    that._paper_3_animate( height, para, run_para);
                }
            );
        },

        //paper_3动画
        _paper_3_animate: function (height, para, run_para) {
            var that = this;
            var target_top = height * 0.8 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height();
            para.paper_3.show();
            run_para.paper_3_animate = para.paper_3.animations(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                500,
                "swing",
                function () {
                    run_para.paper_3_animate = null;
                    run_para.paper_3_play_state = true;
                },
                "half",
                function(){
                    that._paper_4_animate( height, para, run_para);
                }
            );
        },

        //paper_4动画
        _paper_4_animate: function (height, para, run_para) {
            var that = this;
            var target_top = height * 0.8 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height();
            para.paper_4.show();
            run_para.paper_4_animate = para.paper_4.animations(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                500,
                "swing",
                function () {
                    run_para.paper_4_animate = null;
                    run_para.paper_4_play_state = true;
                },
                "half",
                function(){
                    that._paper_5_animate( height, para, run_para);
                }
            );
        },

        //paper_5动画
        _paper_5_animate: function (height, para, run_para) {
            var that = this;

            var target_top = height * 0.8 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height() - para.paper_5.height();;
            para.paper_5.show();
            run_para.paper_5_animate = para.paper_5.animations(
                {
                    top: target_top + "px",
                    opacity: 1
                },
                500,
                "swing",
                function () {
                    run_para.paper_5_animate = null;
                    run_para.paper_5_play_state = true;
                    that._let_go_animate( height, para, run_para);
                }
            );
        },

        //let_go动画
        _let_go_animate: function( height, para, run_para ){
            var target_width = run_para.let_go_width;
            var target_height = run_para.let_go_height;
            var time = 800;

            var let_go_top = height * 0.2 - para.paper_1.height() - para.paper_2.height() - para.paper_3.height() - para.paper_4.height() - para.paper_5.height() - ( run_para.let_go_height / 2 );

            para.let_go.css( { width: "0px", height: "0px", top: let_go_top + ( run_para.let_go_height / 2 ) } );
            para.let_go_img.css( { width: "0px" } );
            para.let_go_text.css( { width: "0px", height: "0px", top: run_para.let_go_height / -2 } );
            para.let_go.show();

            para.let_go.unbind( "mouseover" );
            para.let_go.unbind( "mouseout" );

            function img_animate( width ){
                run_para.let_go_img_animate = para.let_go_img.animate(
                    {
                        width: width + "px"
                    },
                    300,
                    "swing",
                    function(){
                        run_para.let_go_img_animate = null;
                    }
                );
            }

            function text_change( color ){
                if( run_para.let_go_text_timeout ){
                    clearTimeout( run_para.let_go_text_timeout );
                    run_para.let_go_text_timeout = null;
                }
                run_para.let_go_text_timeout = setTimeout( function(){
                    para.let_go_text.css( "color", color );
                }, 150 );
            }

            run_para.let_go_animate = para.let_go.animate(
                {
                    top: let_go_top + "px",
                    width: target_width + "px",
                    height: target_height + "px"
                },
                time,
                "swing",
                function(){
                    run_para.let_go_animate = null;

                    para.let_go.bind( "mouseover", function(){
                        if( run_para.let_go_img_animate ){
                            run_para.let_go_img_animate.stop();
                        }
                        img_animate( target_width );
                        text_change( "#35b488" );
                    } );
                    para.let_go.bind( "mouseout", function(){
                        if( run_para.let_go_img_animate ){
                            run_para.let_go_img_animate.stop();
                        }
                        img_animate( 0 );
                        text_change( "#FFFFFF" );
                    } );
                }
            );
            run_para.let_go_text_animate = para.let_go_text.animate(
                {
                    top: run_para.let_go_height * -1  + "px",
                    width: target_width + "px",
                    height: target_height + "px"
                },
                time,
                "swing",
                function(){
                    run_para.let_go_text_animate = null;
                }
            );
        }
    };
});
