/**
 * Created by admin on 2015/5/11.
 */
$( document ).ready( function() {

    var _pay = {
        parameter: {
            container: $( "#J_container" ),
            scroll_panel: $( "#J_scroll_panel" ),
            move_state: true,
            index: 0
        },

        run_parameter: {
            move_animate: null
        },

        init: function () {
            var that = this;
            var para = that.parameter;
            that.load_block();
            that._bind();
            that._page_show( para.index );
        },

        //加载模块
        load_block: function () {
            //加载banner 模块
            includePage("#J_page1", "./page1/page1.html");
            includePage("#J_page2", "./page2/page2.html");
            includePage("#J_page3", "./page3/page3.html");
            includePage("#J_page4", "./page4/page4.html");
            includePage("#J_page5", "./page5/page5.html");
            includePage("#J_page6", "./page6/page6.html");
        },

        //事件绑定
        _bind: function(){
            var that = this;
            var para = that.parameter;
            var run_para = that.run_parameter;

            //窗口缩放事件监听
            $( window ).bind( "resize", function(){

                if( run_para.move_animate ){
                    run_para.move_animate.stop();
                    para.move_state = true;
                }

                that._resize();
                that._auto_position();
            } );

            $( "html" ).bind( 'mousewheel', function( event, delta ){
                var delta = delta ? delta : event.originalEvent.wheelDelta;
                var is_up = delta > 0 ? true : false;
                var min = 0;
                var max = 5;

                if( para.move_state ){
                    para.move_state = false;

                    var target_index = para.index;
                    if( is_up ){
                        target_index--;
                    }
                    else{
                        target_index++;
                    }

                    if( target_index >= min && target_index <= max ){
                        that._page_show( target_index );
                    }
                    else{
                        para.move_state = true;
                    }
                    return false;
                }
                else{
                    return false;
                }
            });
        },

        //窗口缩放事件处理
        _resize: function(){
            var that = this;
            var para = that.parameter;
            var height = $.getBrowserHeight();

            para.move_state = true;

            para.container.css(
                {
                    height: height + "px"
                }
            );
        },

        //窗口重新定位
        _auto_position: function(){
            var that = this;
            var para = that.parameter;
            var height = $.getBrowserHeight() * para.index * -1;

            para.scroll_panel.css(
                {
                    marginTop: height + "px"
                }
            );
        },

        //分页展示
        _page_show: function( target_index ){
            var that = this;
            var para = that.parameter;

            that._page_control( para, target_index );
        },

        //page控制
        _page_control: function( para, target_index ){
            var that = this;

            var height = $.getBrowserHeight() * target_index * -1;

            if( target_index == para.index ){
                para.move_state = true;

                that._load_target_page( target_index, function( target_page ){
                    if( target_page ){
                        that._resize();
                        that._auto_position();
                        target_page.init();
                    }
                } );
            }
            else{
                that._load_target_page( target_index, function( target_page ){
                    if( target_page ){
                        that._page_animate( para, target_index, height, function(){
                            target_page.init();
                        } );
                    }
                } );
            }
        },

        //加载目标页
        _load_target_page: function( target_index, callback ){
            var target_page = null;

            $.delay_load(
                function(){
                    if( target_index == 0 ){
                        target_page = $._page_1;
                        return target_page;
                    }
                    else if( target_index == 1 ){
                        target_page = $._page_2;
                        return target_page;
                    }
                    else if( target_index == 2 ){
                        target_page = $._page_3;
                        return target_page;
                    }
                    else if( target_index == 3 ){
                        target_page = $._page_4;
                        return target_page;
                    }
                    else if( target_index == 4 ){
                        target_page = $._page_5;
                        return target_page;
                    }
                    else if( target_index == 5 ){
                        target_page = $._page_6;
                        return target_page;
                    }
                    else{
                        return null;
                    }
                },
                function(){
                    target_page._init_elements();
                    callback( target_page );
                }
            );
        },

        //分页动画
        _page_animate: function( para, target_index, height, callback ){
            var scroll_time = 1000;
            var that = this;
            var run_para = that.run_parameter;

            run_para.move_animate = para.scroll_panel.animate(
                {
                    marginTop: height + "px"
                },
                scroll_time,
                "swing",
                function(){
                    para.index = target_index;
                    para.move_state = true;
                    callback();
                }
            );
        }

    };

    _pay.init();
});