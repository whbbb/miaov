
$(document).ready(function(){

    $.custom_common._my_top_dredge = {
        parameter: {
        },

        init: function(){
            var that = this;
            var para = that.parameter;

            that.set_parameter();

            if( para._target_tds.length > 0 ){
                that.create_calendar();
                that.bind();
            }
            that.init_detail_data_tip( "请选择些相关日期查看详情" );
        },

        set_parameter: function(){
            var that = this;
            var para = that.parameter;

            para._payment_days = $( "#J_payment_days" );
            para._current_day = $( "#J_current_day" );
            para._target_tds = $( "table tr.day td" );
            para._detail_data_tip = $( "[detail-data-count='0']" );
            para._detail_data_arr = $( "[detail-data-count='1']" );
        },

        bind: function(){
            var that = this;
            var para = that.parameter;

            //还款日td点击事件绑定
            if( para._payment_day_tds && para._payment_day_tds.length > 0 ){
                $.each( para._payment_day_tds, function( i, item ){
                    var target = $( item );
                    target.bind( "click", function(){
                        that.change_payment_detail( i );
                    } );
                } );
            }

            //还款日详情翻页点击事件绑定
            if( para._detail_data_arr && para._detail_data_arr.length > 0 ){
                $.each( para._detail_data_arr, function( i, item ){
                    var target = $( item );

                    target.find( ".the-last" ).bind( "click", function(){
                        that.change_detail_page( target, "left" );
                    } );

                    target.find( ".next" ).bind( "click", function(){
                        that.change_detail_page( target, "right" );
                    } );
                } );
            }
        },

        //初始化还款详情显示页
        init_detail_data_tip: function( msg ){
            var that = this;
            var para = that.parameter;

            if( !para._payment_day_tds || para._payment_day_tds.length == 0 ){
                msg = "亲，您还没有交易记录哟~";
            }

            para._detail_data_tip.find( "p" ).html( msg );
            para._detail_data_tip.show().siblings( "[detail-data-count]" ).hide();

            return para._detail_data_tip;
        },

        //切换还款详情中每一页
        change_detail_page: function( container, type ){
            var that = this;

            var left = container.find( ".the-last" );
            var right = container.find( ".next" );
            var ul = container.find( ".dl-a ul" );
            var lis = ul.find( "li" );
            var current_li = ul.find( "li.current" );

            var current = 0;

            if( current_li.length == 1 ){
                current = current_li.index();
            }

            var target;

            left.hide();
            right.hide();

            if( type == "left" ){
                target = current - 1;
            }
            else if( type == "right" ){
                target = current + 1;
            }
            else{
                target = 0;
                if( lis.length > 1 ){
                    right.show();
                }
            }

            if( target >= 0 && target < lis.length ){
                that.detail_page_animate( current, target, ul, lis, type, left, right );
            }
        },

        detail_page_animate: function( current, target, ul, lis, type, left, right ){
            var time = 200;
            var target_li = $( lis[ target ]);

            target_li.addClass( "current").siblings().removeClass( "current" );

            ul.stop().animate( { "left": -target * target_li.width() }, time, function(){
                if( target > 0 ){
                    left.show();
                }
                if( target < lis.length - 1 ){
                    right.show();
                }
            } );
        },

        //切换还款详情显示状态
        change_payment_detail: function( index ){
            var that = this;
            var para = that.parameter;

            if( para._detail_data_arr && para._detail_data_arr.length > 0 && para._detail_data_arr[ index ]  ){
                var container = $( para._detail_data_arr[ index ] );
                that.change_detail_page( container );
                container.show().siblings( "[detail-data-count]" ).hide();
            }
            else{
                that.init_detail_data_tip( "还款详情获取失败" ).siblings( "[detail-data-count]" ).hide();
            }
        },

        //创建还款表
        create_calendar: function(){
            var that = this;
            var para = that.parameter;

            var payment_days = that._set_date( $.get_trim_value( para._payment_days ) );
            var current_day = that._set_date( $.get_trim_value( para._current_day ) );

            if( current_day && current_day.length == 1 ){
                current_day = current_day[ 0 ];
                $(".date-l-years").html( current_day.year + "年" + current_day.month + "月" );

                para._payment_day_tds = [];
                var last_day_count = current_day.last_max_day - current_day.first_week + 1;
                var current_day_count = 1;
                var next_day_count = 1;
                $.each( para._target_tds, function( i, item ) {
                    var td = $( item );

                    if( i >= current_day.first_week ){

                        if( current_day_count <= current_day.max_day ){
                            var payment_day_flag = false;
                            if( payment_days ){
                                $.each( payment_days, function(){
                                    var payment_day = this;
                                    if( ( current_day.month == payment_day.month ) && ( current_day_count == payment_day.day ) ){
                                        if( current_day_count == current_day.day ){
                                            td.addClass("thisHuan thisDay");
                                        }
                                        else{
                                            td.addClass( "thisBighuan bigShou" );
                                        }
                                        payment_day_flag = true;
                                        para._payment_day_tds.push( td );
                                    }
                                } );
                            }
                            if( current_day_count == current_day.day ){
                                td.html( current_day_count++ + "<div style='font-size:10px;color:#d3d3d3;'>今天</div>" );
                            }
                            else{
                                td.html( current_day_count++ );
                            }

                            td.css( { "color": "#333333", "cursor": "default" } );
                            if( payment_day_flag ){
                                td.css( { "color": "#333333", "cursor": "pointer" } );
                            }
                        }
                        else{
                            td.html( next_day_count++ );
                            td.css( { "color": "#dbdbdd", "cursor": "default" } );
                        }
                    }
                    else{
                        td.html( last_day_count++ );
                        td.css( { "color": "#dbdbdd", "cursor": "default" } );
                    }
                } );
            }
            else{
                if( typeof console !== "undefined" ){
                    console.log && console.log( "当前日期获取失败" );
                }
            }
        },


        //设置日期格式化对象
        _set_date: function( date ){
            var new_date = null;

            if( date && date.length > 0 ){
                var date_array = date.split( "|" );
                if( date_array && date_array.length > 0 ){
                    new_date = [];
                    for( var i = 0; i < date_array.length; i++ ){
                        var year = date_array[ i ].substring( 0, 4 ),  month = date_array[ i ].substring( 4, 6 ), day = date_array[ i ].substring( 6, 8 );

                        if( year.length == 4 && month.length == 2 && day.length == 2 ){
                            var n_year = parseInt( year), n_month = parseInt( month), n_day = parseInt( day );

                            if( isNaN( n_year ) == false && isNaN( n_month ) == false && isNaN( n_day ) == false ){
                                var n_last_month = n_month - 1, n_next_month = n_month + 1 ,n_last_year = n_year, n_next_year = n_year;

                                if( n_last_month < 0 || n_next_month > 13 ){
                                    if( typeof console !== "undefined" ){
                                        console.log && console.log( "月份" + n_month + "格式错误" );
                                    }
                                    break;
                                }

                                var n_last_max_date = ( new Date( new Date( n_year + "/" + n_month + "/1" ).getTime() - 1000 * 60 * 60 * 24 ) ).getDate();

                                if( n_last_month == 0 ){
                                    n_last_month = 12;
                                    n_last_year--;
                                    n_last_max_date = ( new Date( new Date( n_last_year + "/" + n_month + "/1" ).getTime() - 1000 * 60 * 60 * 24 ) ).getDate();
                                }
                                if( n_next_month == 13 ){
                                    n_next_month = 1;
                                    n_next_year++;
                                }

                                var n_max_date = ( new Date( new Date( n_year + "/" + n_next_month + "/1" ).getTime() - 1000 * 60 * 60 * 24 ) ).getDate();

                                if( n_day < 1 || n_day > n_max_date ){
                                    if( typeof console !== "undefined" ){
                                        console.log && console.log( "日期" + n_day + "格式错误" );
                                    }
                                    break;
                                }

                                var n_date = new Date( n_year + "/" + n_month + "/" + n_day );
                                var first_date = new Date( n_year + "/" + n_month + "/1" );
                                var week = n_date.getDay();
                                var first_week = first_date.getDay();

                                new_date.push( {
                                    date: n_date,
                                    week: week,
                                    first_week: first_week,
                                    year: n_year,
                                    month: n_month,
                                    day: n_day,
                                    max_day: n_max_date,
                                    last_max_day: n_last_max_date
                                } );
                            }
                            else{
                                new_date = null;
                                if( typeof console !== "undefined" ){
                                    console.log && console.log( "日期" + date_array[ i ] + "格式错误" );
                                }
                            }
                        }
                        else{
                            new_date = null;
                            if( typeof console !== "undefined" ){
                                console.log && console.log( "日期" + date_array[ i ] + "长度错误" );
                            }
                        }
                    }
                }
                else{
                    new_date = null;
                    if( typeof console !== "undefined" ){
                        console.log && console.log( "日期数组获取错误" );
                    }
                }
            }
            else{
                new_date = null;
                if( typeof console !== "undefined" ){
                    console.log && console.log( "所选日期为空" );
                }
            }

            return new_date;
        }
    };




    /*头部开通按钮*/
    var flag = 0;
    function chon(){
        $(".m-dre").stop().animate({"margin-left":"40px"},67,function(){
            $(this).stop().animate({"margin-left":"30px"},67,function(){
                $(this).stop().animate({"margin-left":"40px"},67,function(){
                    $(this).stop().animate({"margin-left":"30px"},67,function(){
                        $(this).stop().animate({"margin-left":"35px"},67, function(){
                            if( flag < 3 ){
                                flag++;
                                chon();
                            }
                        });
                    });
                });
            });
        });
    }

    $(".mp-top-dredge").animate({"margin-left":"0"},1000,function(){
        setTimeout(chon,1000);
    });
    setInterval(function(){
        flag = 0;
        chon();
    },10000);


    //2015/7/16 高景恒加入
    var userState = get_user_all_state()[3];
    if(userState == 1){
        $("#mp-top-dredge").hide();
    }
});