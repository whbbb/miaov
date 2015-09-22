
    ( function( $ ){
        //构造mask_layer
        var animations = function( target, opts, speed, easing, callback, midway_time, midway_call ){
            var that = this;

            //默认参数
            that.defaults = {
                //目标对象
                target: target,
                //动画参数
                opts: opts,
                //动画时间
                speed: speed,
                //动画类型
                easing: easing,
                //回调函数
                callback: callback,
                //过程中调用时机（ 允许使用“half”、百分比数字、及运行毫秒数 ）
                midway_time: midway_time,
                //过程中调用
                midway_call: midway_call
            };

            //过程参数
            that.parameter = {
                //间隔时间 默认13毫秒
                interval_time: 13,
                //当前值
                current_opts: {},
                //缓动项
                easing: {},
                //过程中调用是否可执行
                midway_run_flag: true
            };
        };

        animations.prototype = {
            //程序入口方法
            _init: function(){
                var that = this;
                that._verify_parameter( that );
                that._execute( that );
                return that;
            },

            //验证参数
            _verify_parameter: function( that ){
                var def = that.defaults;
                var para = that.parameter;

                para.target = def.target;
                para.opts = typeof def.opts === "object" ? def.opts : null;
                para.speed = typeof def.speed === "number" ? def.speed : null;
                that._set_easing();
                para.callback = typeof def.callback === "function" ? def.callback : null;
                that._computer_midway_time();
                para.midway_call = typeof def.midway_call === "function" ? def.midway_call : null;
            },

            //开始执行
            _execute: function(){
                var that = this;
                var para = that.parameter;

                if( para.target ){
                    if( para.opts ){
                        that._get_target_init_value( para );
                        if( para.speed && para.speed > 0 ){
                            para.step_opts = para.target_opts && para.origin_opts
                                ? that._computer_step_value( para ) : null;
                            if( para.step_opts ){
                                that._run( para );
                            }
                        }
                    }
                }
            },

            //动画
            _run: function( para ){
                var that = this;
                var time = 0;
                var count = 0;

                para.animate_objs = window.setInterval( function(){
                    if( para.midway_run_flag && para.midway_time && time >= para.midway_time ){
                        para.midway_run_flag = false;
                        if( para.midway_call ){
                            para.midway_call();
                        }
                    }
                    if( count >= para.animate_count ){
                        that._set_last_value( para );
                        that.stop();
                        that._execute_callback();
                    }
                    else{
                        that._set_target_value( para, count );
                        count++;
                        time += para.interval_time;
                    }
                }, para.interval_time );
            },

            //停止
            stop: function(){
                var that = this;
                var def = that.defaults;
                var para = that.parameter;

                if( para.animate_objs ){
                    clearInterval( para.animate_objs );
                    para.animate_objs = null;
                    return def.target;
                }
            },

            //执行回调
            _execute_callback: function(){
                var that = this;
                var para = that.parameter;

                if( para.kick_back ){
                    that._kick_back_animate();
                }
                else{
                    para.callback();
                }
            },

            //回弹动画
            _kick_back_animate: function(){
                var that = this;
                var run_para = that.run_parameter;

//                run_para.kick_back_interval = window.setInterval( function(){
//
//                }, 200 );
            },

            //设置新的目标值
            _set_target_value: function( para, count ){
                var that = this;

                $.each( para.step_opts,function( key, values ){
                    var current_value = para.current_opts[ key ] ? para.current_opts[ key ] : that._parse_to_number( para.target.css( key ) ).value;
                    var unit = para.target_opts[ key ].unit;
                    var target_value = para.current_opts[ key ] = current_value + values[ count ];

                    if( ( para.origin_opts[ key ].value > para.target_opts[ key ].value && target_value > para.target_opts[ key ].value )
                        || ( para.origin_opts[ key ].value < para.target_opts[ key ].value && target_value < para.target_opts[ key ].value ) ){
                        para.target.css( key, target_value + unit );
                    }
                    else{
                        para.target.css( key, para.target_opts[ key ].value + unit );
                    }
                } );
            },

            //设置最终目标值
            _set_last_value: function( para ){
                $.each( para.step_opts,function( key ) {
                    var unit = para.target_opts[ key ].unit;
                    para.target.css( key, para.target_opts[ key ].value + unit );
                } );
            },

            //获取动画对象初始值
            _get_target_init_value: function( para ){
                var that = this;
                var count = 0;

                para.origin_opts = {};
                para.target_opts = {};

                $.each( para.opts, function( key, value ){
                    if( value != para.target.css( key ) ){
                        para.target_opts[ key ] = that._parse_to_number( value );
                        para.origin_opts[ key ] = that._parse_to_number( para.target.css( key ) );
                        count++;
                    }
                } );

                if( count == 0 ){
                    para.origin_opts = null;
                    para.target_opts = null;
                }
            },

            //计算中间调用时间点
            _computer_midway_time: function(){
                var that = this;
                var def = that.defaults;
                var para  = that.parameter;

                if( def.midway_time == "half" ){
                    para.midway_time = def.speed / 2;
                }
                else if( typeof def.midway_time === "string" && def.midway_time.indexOf( "%" ) ){
                    para.midway_time = def.speed * that._parse_to_number( para.midway_time ).value / 100;
                }
                else if( typeof def.midway_time === "number" ){
                    para.midway_time = def.midway_time;
                }
                else{
                    para.midway_time = null;
                }
            },

            //设置动画方式
            _set_easing: function(){
                var that = this;
                var def = that.defaults;
                var para = that.parameter;

                if( typeof def.easing === "string" ){
                    var easing = def.easing.toLowerCase();

                    if( easing === "liner" ){
                        para.easing.liner = true;
                    }
                    else if( easing === "kick-back" ){
                        para.easing.kick_back = true;
                    }
                    else if( easing === "ease-in" ){
                        para.easing.ease_in = true;
                    }
                    else if( easing === "ease-out" ){
                        para.easing.ease_out = true;
                    }
                    else{
                        para.easing.swing = true;
                    }
                }
                else{
                    para.easing.swing = true;
                }
            },

            //计算各参数步长值
            _computer_step_value: function( para ){
                var that = this;
                var step_opts = {};

                $.each( para.target_opts, function( key, target_para ){
                    var origin_para = para.origin_opts[ key ];
                    if( origin_para ){
                        var origin_value = origin_para.value;
                        var target_value = target_para.value;

                        para.animate_count = para.speed / para.interval_time;
                        var values = new Array();
                        for( var i = 1 ; i < para.animate_count; i++ ){
                            var value = ( target_value - origin_value ) / para.animate_count;
                            values.push( value );
                        }
                        if( para.easing.swing ){
                            values = that._adjust_by_swing( values, Math.ceil( para.animate_count ), para.speed ) || values;
                        }
                        step_opts[ key ] = values;
                    }
                } );

                return step_opts;
            },

            //swing方式步长调整
            _adjust_by_swing: function( values, count, speed ){
                var new_values = values;
                var half_count = Math.ceil( count / 2 );
                var ease_rate = 1 / half_count;

                for( var i = 0; i < half_count; i++ ){
                    var value = values[ i ];
                    new_values[ i ] = new_values[ count - i - 1 ] = value * ease_rate;
                    ease_rate = ease_rate + ( 1 / half_count ) * 2;
                }

                return new_values;
            },

            //带单位字符串数值转化为数字
            _parse_to_number: function( pixel_number ){
                if( typeof pixel_number === "string" ){
                    var value = parseFloat( pixel_number.replace( /[^0-9|\-|\.]/ig, "" ) );
                    var unit = pixel_number.replace( /[0-9|\-|\.]/ig, "" );

                    if( typeof value === "number" ){
                        return { "value": value, "unit": unit };
                    }
                    else{
                        return null;
                    }
                }
                else if( typeof pixel_number === "number" ){
                    return { "value": pixel_number, "unit": "" };
                }
                else{
                    return null;
                }
            }
        };

        $.animations_load_finish = true;

        //定义全局jQuery方法
        $.fn.animations = function( opts, speed, easing, callback, midway_time, midway_call ){
            var animations_obj = new animations( this, opts, speed, easing, callback, midway_time, midway_call );
            return animations_obj._init();
        };

    } )( jQuery );
