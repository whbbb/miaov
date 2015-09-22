    $( document ).ready( function(){

        var _detail_top = {
            parameter: {
                _fin_detail_form: $( "#J_findetail_form" )
            },

            init: function(){
                var that = this;
                var para = that.parameter;

                that.init_verify( para._fin_detail_form );
                /*时间格式化    添加时间中的  : （间隔符号） */
                time( ".sub-d3" , ".stimer" , ".stime" );

                /*时间格式化    添加时间中的  - （间隔符号） */
                timer( ".sd" , ".ytimer" , ".ytime" );

                that.bind();

                load_tips( ".financial-complete", function( obj ){
                    _detail_top.parameter._detail_top_result_tips = obj;
                } );
            },

            init_verify: function( target_form ){
                var that = this;
                var para = that.parameter;

                $.delay_load( function () { return $.verify_load_finish && _detail_top.parameter._detail_top_result_tips; }, function () {
                    para.verify_obj = target_form.verify();
                    para.verify_obj.init( function(){
                        _detail_top.parameter._detail_top_result_tips._ajax_tips_operate( para.verify_obj );
                    } );
                } );
            },

            bind: function(){
                var that = this;
                var para = that.parameter;

                /*头部 鼠标经过头像显示相应的内容*/
                $(".head-portrait").hover(function(){
                    $(".prompt").toggle();
                });

                /*顶部标题的点击事件*/
                $(".fc-title li").click(function(){
                    $(this).addClass("fc-a").siblings().removeClass("fc-a");
                });

                /*绑定立即投资按钮点击事件*/
                $("#resetp3-next").bind( "click", function(){
                    para._fin_detail_form.submit();
                });
            }
        };

        _detail_top.init();
    });
