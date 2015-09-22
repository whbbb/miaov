/**
 * Created by admin on 2015/5/8.
 */


//借款  企业介绍操作部分
$( document ).ready( function(){
    var _detail = {

        parameter : {
            tip: $( "#J_tip" ),
            imgFrame: $( "#J_img_frame" ),
            index: -1,
            all_count: 0,
            close_state: false
        },

        init: function () {
            var that = this;

            that._init_tip();
            that._init_images_show();
            that._bind();
        },

        _init_tip: function(){
            var that = this;
            var para = that.parameter;
            $.delay_load(
                function(){
                    return $.fn.tip;
                },
                function(){
                    para.tip_obj = para.tip.tip( "上传可选申请资料可以提升您的信用积分与等级，降低借款成本及快速筹集资金。" );
                    para.tip_obj.css( "margin-top", "-8px" );
                }
            );
        },

        _init_images_show: function(){
            var that = this;
            var para = that.parameter;

            if( ( ! para.prev_button ) ){
                var prev_button = $( '<div class="prev"></div> ' );
                para.imgFrame.before( prev_button );
                para.prev_button = prev_button;

                para.prev_button.hide();
            }
            if( ( ! para.next_button ) ){
                var next_button = $( '<div class="next"></div> ' );
                para.imgFrame.before( next_button );
                para.next_button = next_button;

                para.next_button.hide();
            }

            $.delay_load(
                function(){
                    return $.mask_layer_load_finish;
                },
                function(){

                    para.mask_layer_obj = para.imgFrame.mask_layer(
                        {
                            open_elms: $( ".de-pic" ),
                            close_elms: null,
                            open_animate_before_callback: that._show_image,
                            open_animate_end_callback: that._auto_position,
                            close_animate_before_callback: that._close_image
                        }
                    );
                }
            );
        },

        _bind: function(){
            var that = this;
            var para = that.parameter;

            para.tip.bind( "mouseover", function(){
                para.tip_obj.show();
            } );

            para.tip.bind( "mouseout", function(){
                para.tip_obj.hide();
            } );

            $( ".detail .de-center").delegate( ".de-pic", "click", function( event ){
                var elm = event.target;
                para.index_state = false;

                that._find_current_index( elm );

                para.index_state = true;
            } );

            $( window ).bind( "resize", function(){
                that._resize();
                that._auto_position( true );
            } );

            para.prev_button.bind( "click", function(){
                that._change_img( "prev" );
            } );

            para.next_button.bind( "click", function(){
                that._change_img( "next" );
            } );
        },

        _change_img: function( type ){
            var that = this;
            var para = that.parameter;

            var count = $( ".de-pic").length;

            if( type == "prev" ){
                para.index--;
                if( para.index < 1 ){
                    para.index = count;
                }
            }
            else if( type == "next" ){
                para.index++;
                if( para.index > count ){
                    para.index = 1;
                }
            }
            else{
                para.index = 1;
            }

            var frame_obj = para.imgFrame;

            if( frame_obj ){
                var img_obj = para.img_obj = frame_obj.find( "img" );

                if( img_obj ){
                    var img_path = "../../../img/explicit-present/detail/img/" + para.index + ".jpg";
                    img_obj.attr( "src", img_path );
                }
            }
        },

        _find_current_index: function( elm ){
            var that = this;
            var para = that.parameter;

            var elms = $( ".de-pic" );
            if( elms && elms.length > 0 ){
                for( var i = 0; i < elms.length; i++ ){
                    var item = elms[ i ];
                    if( item == elm ){
                        para.index =  i + 1;
                    }
                }

                para.all_count = elms.length;
            }
        },

        _show_image: function( callback ){
            var that = _detail;
            var para = that.parameter;

            para.close_state = false;

            $.delay_load(
                function(){
                    return para.index_state;
                },
                function(){
                    var index = para.index;
                    var frame_obj = para.imgFrame;

                    if( frame_obj ){
                        var img_obj = para.img_obj = frame_obj.find( "img" );

                        if( img_obj ){
                            var img_path = "../../../img/explicit-present/detail/img/" + index + ".jpg";
                            img_obj.attr( "src", img_path );

                            frame_obj.css( "opacity", 0 );
                            img_obj.hide();

                            img_obj.load( function(){

                                img_obj.show();
                                frame_obj.show();

                                var img_width = para.img_width = img_obj.width();
                                var img_height = para.img_height = img_obj.height();

                                para.frame_width = img_width + 40;
                                para.frame_height = img_height + 40;

                                para.frame_obj = frame_obj;

                                that._resize();
                                that._auto_position( false );
                                frame_obj.css( "opacity", 1 );

                                callback();
                            } );
                        }
                    }
                }
            );
        },

        _close_image: function( callback ){
            var that = _detail;
            var para = that.parameter;
            para.close_state = true;

            if( para.prev_button && para.next_button ){
                para.prev_button.hide();
                para.next_button.hide();
            }

            callback();
        },

        _resize: function(){
            var that = _detail;
            var para = that.parameter;

            if( para.frame_obj && ( para.frame_width > 0 ) && ( para.frame_height > 0 ) ){
                var frame_obj = para.frame_obj;
                var frame_width = para.frame_width;
                var frame_height = para.frame_height;

                var browser_height = $.getBrowserHeight();

                frame_obj.css( "overflow", "hidden" );

                if( frame_width > 900 ){
                    frame_width = 900;
                    frame_obj.css( "overflow", "auto" );
                }
                if( frame_height > ( browser_height - 100 ) ){
                    frame_height = browser_height - 100;
                    frame_obj.css( "overflow", "auto" );
                    para.img_obj.css( "margin-right", "0px" );
                }

                para.frame_obj.css(
                    {
                        width: frame_width + "px",
                        height: frame_height + "px"
                    }
                );

                para.mask_layer_obj.set_new_size(
                    {
                        width: frame_width,
                        height: frame_height
                    }
                );
            }
        },

        _auto_position: function( is_resize ){
            var that = _detail;
            var para = that.parameter;

            if( para.frame_obj ){
                var target_width = para.frame_obj.width();
                var prev_button_width = para.prev_button.width();
                var prev_button_height = para.prev_button.width();

                var next_button_height = para.next_button.width();

                var margin_dis = 40;
                var browser_height = $.getBrowserHeight();
                var prev_top = ( browser_height / 2 ) - ( prev_button_height / 2 );
                var next_top = ( browser_height / 2 ) - ( next_button_height / 2 );
                var browser_width = $.getBrowserWidth();
                var prev_left = ( browser_width / 2 ) - ( target_width / 2 ) - prev_button_width - margin_dis;
                var next_left = ( browser_width / 2 ) + ( target_width / 2 ) + margin_dis;

                if( is_resize ){
                    if( para.resize_timeout_obj ){
                        clearTimeout( para.resize_timeout_obj );
                    }
                    if( para.resize_animate_prev_obj ){
                        clearInterval( para.resize_animate_prev_obj );
                    }
                    if( para.resize_animate_next_obj ){
                        clearInterval( para.resize_animate_next_obj );
                    }

                    para.resize_timeout_obj = setTimeout( function(){
                        para.resize_animate_prev_obj = para.prev_button.animate( {
                                "left": prev_left + "px",
                                "top": prev_top + "px"
                            },
                            500,
                            "swing",
                            function(){
                                if( para.close_state == false ){
                                    para.prev_button.show();
                                }
                            }
                        );
                        para.resize_animate_next_obj = para.next_button.animate(
                            {
                                "left": next_left + "px",
                                "top": next_top + "px"
                            },
                            500,
                            "swing",
                            function(){
                                if( para.close_state == false ) {
                                    para.next_button.show();
                                }
                            }
                        );
                    }, 100 );
                }
                else{
                    para.prev_button.css( {
                            "left": prev_left + "px",
                            "top": prev_top + "px"
                        }
                    );
                    para.next_button.css(
                        {
                            "left": next_left + "px",
                            "top": next_top + "px"
                        }
                    );
                    if( para.close_state == false ) {
                        para.prev_button.show();
                        para.next_button.show();
                    }
                }
            }
        }
    };

    _detail.init();
} );