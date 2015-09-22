
    ( function( $ ){

        $.verify_rules = {
            mobile: {
                _name: "手机号",
                _type: "mobile",
                _rules: {
                    _required: true,
                    _number: true,
                    _length: 11,
                    _mobile: /^((13[0-9])|(14[57])|(15[0-9])|(17[0678])|(18[0-9]))\d{8}$/
                },
                _tip_msg: {
                    _required: "手机号不能为空",
                    _number: "手机号只能输入数字",
                    _length: "手机号必须为11位",
                    _mobile: "请输入正确的手机号"
                }
            },
            nick_name: {
                _name: "昵称",
                _type: "nick_name",
                _rules: {
                    _required: true,
                    _min_length: 4,
                    _max_length: 16,
                    _patten: /^[\u4E00-\u9FA5\w]+$/
                },
                _tip_msg: {
                    _required: "昵称不能为空",
                    _min_length: "昵称最短4位",
                    _max_length: "昵称最长16位",
                    _patten: "昵称只能输入中文、英文或字母"
                }
            },
            origin_password: {
                _name: "登录密码",
                _type: "origin_password",
                _rules: {
                    _required: true,
                    _min_length: 6,
                    _max_length: 18,
                    _patten: /^((?=.*?[\W_]+.*?)((.*[A-z]+.*)|(.*\d+.*)))|((?=.*?\d+.*?)((.*[A-z]+.*)|(.*\[\W_]+.*)))|((?=.*?[A-z]+.*?)((.*[\W_]+.*)|(.*\d+.*)))$/
                },
                _tip_msg: {
                    _required: "原密码不能为空",
                    _min_length: "原密码最短6位",
                    _max_length: "原密码最长18位",
                    _patten: "原密码只能包含英文字母、数字及符号，且包含2种以上"
                }
            },
            password: {
                _name: "登录密码",
                _type: "password",
                _rules: {
                    _required: true,
                    _min_length: 6,
                    _max_length: 18,
                    _patten: /^((?=.*?[\W_]+.*?)((.*[A-z]+.*)|(.*\d+.*)))|((?=.*?\d+.*?)((.*[A-z]+.*)|(.*\[\W_]+.*)))|((?=.*?[A-z]+.*?)((.*[\W_]+.*)|(.*\d+.*)))$/
                },
                _tip_msg: {
                    _required: "密码不能为空",
                    _min_length: "密码最短6位",
                    _max_length: "密码最长18位",
                    _patten: "密码只能包含英文字母、数字及符号，且包含2种以上"
                }
            },
            re_password: {
                _name: "确认密码",
                _type: "re_password",
                _rules: {
                    _required: true,
                    _min_length: 6,
                    _max_length: 18,
                    _compareTo: "password"
                },
                _tip_msg: {
                    _required: "确认密码不能为空",
                    _min_length: "确认密码最短6位",
                    _max_length: "确认密码最长18位",
                    _compareTo: "确认密码需与登录密码一致"
                }
            },
            code: {
                _name: "验证码",
                _type: "code",
                _rules: {
                    _required: true,
                    _length: 6
                },
                _tip_msg: {
                    _required: "验证码不能为空",
                    _length: "验证码必须为6位"
                }
            },
            img_code: {
                _name: "图形验证码",
                _type: "img_code",
                _rules: {
                    _required: true,
                    _length: 4
                },
                _tip_msg: {
                    _required: "图形验证码不能为空",
                    _length: "图形验证码必须为4位"
                }
            },
            mobile_code: {
                _name: "手机验证码",
                _type: "mobile_code",
                _rules: {
                    _required: true,
                    _length: 6
                },
                _tip_msg: {
                    _required: "手机验证码不能为空",
                    _length: "手机验证码必须为6位"
                }
            },
            real_name: {
                _name: "真实姓名",
                _type: "real_name",
                _rules: {
                    _required: true,
                    _patten: /^[\u4E00-\u9FA5]+$/i,
                    _min_length: 2,
                    _max_length: 20
                },
                _tip_msg: {
                    _required: "真实姓名不能为空",
                    _patten: "真实姓名只能输入中文",
                    _min_length: "真实姓名最少2个字",
                    _max_length: "真实姓名最多20个字"
                }
            },
            id_card: {
                _name: "身份证号",
                _type: "id_card",
                _rules: {
                    _required: true,
                    _patten: /^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|201[0-4])(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i,
                    _id_card_city: true,
                    _id_card_last_validate: true
                },
                _tip_msg: {
                    _required: "身份证号不能为空",
                    _patten: "身份证号格式错误",
                    _id_card_city: "身份证号码地址编码错误",
                    _id_card_last_validate: "身份证号码校验位错误"
                }
            },
            e_mail: {
                _name: "电子邮箱",
                _type: "e_mail",
                _rules: {
                    _required: true,
                    _patten: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/
                },
                _tip_msg: {
                    _required: "电子邮箱不能为空",
                    _patten: "电子邮箱格式错误"
                }
            },
            get_cash: {
                _name: "提现金额",
                _type: "get_cash",
                _rules: {
                    _required: true,
                    _decimals: true,
                    _max: "{{max-cash}}",
                    _range: {
                        min: 1,
                        max: 500000
                    }
                },
                _tip_msg: {
                    _required: "提现金额不能为空",
                    _decimals: "提现金额只能输入非负数字，且最多2位小数",
                    _max: "提现金额过大",
                    _range: "单笔提现金额介于1元~50万元之间"
                }
            },
            loan_amount: {
                _name: "借款金额",
                _type: "loan_amount",
                _rules: {
                    _required: true,
                    _number: true,
                    _range: {
                        min: 3000,
                        max: 5000000
                    },
                    _rate: 50
                },
                _tip_msg: {
                    _required: "借款金额不能为空",
                    _number: "借款金额只能输入正整数",
                    _range: "借款金额介于3000-500万元之间",
                    _rate: "借款金额必须是50的整倍数"
                }
            },
            recharge_money: {
                _name: "充值金额",
                _type: "recharge_money",
                _rules: {
                    _required: true,
                    _number: true,
                    _range: {
                        min: 1,
                        max: 20000
                    }
                },
                _tip_msg: {
                    _required: "充值金额不能为空",
                    _number: "充值金额只能输入正整数",
                    _range: "充值金额介于1-20,000元之间"
                }
            },
            financing_money: {
                _name: "投资金额",
                _type: "financing_money",
                _rules: {
                    _required: true,
                    _number: true,
                    _rate: "{{min_money}}",
                    _range: {
                        min: "{{min_money}}",
                        max: "{{max_money}}"
                    },
                    _max: "{{account-balance}}"
                },
                _tip_msg: {
                    _required: "投资金额不能为空",
                    _number: "投资金额必须是数字，且必须是正整数",
                    _rate: "投资金额必须是{{min_money}}的整倍数",
                    _range: "投资金额必须为介于{{min_money}}——{{max_money}}之间的整数",
                    _max: "账户余额不足,请先充值"
                }
            },
            loan_use: {
                _name: "借款用途",
                _type: "loan_use",
                _rules: {
                    _required: true,
                    _min_length: 20,
                    _max_length: 120
                },
                _tip_msg: {
                    _required: "借款用途不能为空",
                    _min_length: "借款用途至少20个字符",
                    _max_length: "借款用途最多120个字符"
                }
            },
            loan_date_limit: {
                _name: "借款期限",
                _type: "loan_date_limit",
                _rules: {
                    _required: true,
                    _number: true,
                    _range: {
                        min: 1,
                        max: 24
                    }
                },
                _tip_msg: {
                    _required: "借款期限不能为空",
                    _number: "借款期限只能输入正整数",
                    _range: "借款期限介于1-24个月之间"
                }
            },
            annual_rate: {
                _name: "年利率",
                _type: "annual_rate",
                _rules: {
                    _required: true,
                    _decimals: true,
                    _range: {
                        min: 1,
                        max: 23
                    }
                },
                _tip_msg: {
                    _required: "年利率不能为空",
                    _decimals: "年利率只能输入非负数字，且最多2位小数",
                    _range: "年利率介于1%-23%之间"
                }
            },
            agree_protocol: {
                _name: "单选",
                _type: "agree_protocol",
                _rules: {
                    _must_check: true
                },
                _tip_msg: {
                    _must_check: "请同意我们的协议条款"
                }
            }
        };

        var verify_obj = function( opt, rules, tip_parameter ){
            var that = this;
            //表单对象
            that.form = null;
            that.match_type = {};
            that.match_type.match_all = "input[ type = 'text' ], input[ type = 'password' ], input[ type = 'checkbox' ], textarea, select";
            that.match_type.match_focus = "input[ type = 'text' ], input[ type = 'password' ], textarea";
            that.match_type.match_blur = "input[ type = 'text' ], input[ type = 'password' ], textarea, select";
            that.match_type.match_change = "select input[ type = 'checkbox' ]";
            that.match_type.match_click = "input[ type = 'checkbox' ]";
            that.match_type.match_key_up = "input[ type = 'text' ], input[ type = 'password' ]";
            that.$targets = null;
            that.all_targets_rules = [];
            that.all_user_targets_rules = [];
            that.parameters = opt;
            that.rules = rules;
            that.tip_paramter = tip_parameter;
            that.auto_submit = true;
            that.verify_result = null;
            that.callback = null;
        };

        verify_obj.prototype = {

            //入口
            verify: function(){
                var that = this;
                that._bind();
                return that;
            },

            //初始化
            init: function( callback ){
                var that = this;
                that.set_callback( callback );
                return that;
            },

            //设置回调
            set_callback: function( callback ){
                var that = this;

                if( typeof callback === "function" ){
                    that.callback = callback;
                }
            },

            //重构需要验证对象的结构
            _construct_tip_elements: function( user_targets ){
                var that = this;
                var target_form = that.form;

                that.all_targets_rules = null;
                that.all_targets_rules = [];
                that.all_user_targets_rules = null;
                that.all_user_targets_rules = [];

                if( target_form && target_form.length == 1 ){
                    var targets = target_form.find( that.match_type.match_all );
                    var user_flag = false;
                    if( user_targets && user_targets.length > 0 ){
                        targets = user_targets;
                        user_flag = true;
                    }

                    if( targets && targets.length > 0 ){

                        that.$targets = [];

                        $.each( targets, function(){
                            var target = $( this );
                            var need_verify_target = that._match_need_verify_target( target, user_flag );
                            if( need_verify_target ){
                                that.$targets.push( need_verify_target );
                            }
                        } );
                    }
                    else{
                        that.$targets = null;
                        return false;
                    }
                }
                else{
                    that.form = null;
                    return false;
                }
            },

            _match_need_verify_target: function( target, user_flag ){
                var that = this;
                var target_data_name = target.attr( "data-name" );
                var target_name = target.attr( "name" );

                var need_verify_target = null;

                $.each( that.rules, function( rules_name, match_rules ){
                    if( target_data_name == rules_name ){
                        need_verify_target = that._set_match_target_parameters( target, rules_name, match_rules, user_flag );
                        return false;
                    }
                    else{
                        need_verify_target = null;
                    }
                } );

                if( need_verify_target == null ){
                    $.each( that.rules, function( rules_name, match_rules ){
                        if( target.hasClass( rules_name ) ){
                            need_verify_target = that._set_match_target_parameters( target, rules_name, match_rules, user_flag );
                            return false;
                        }
                        else{
                            need_verify_target = null;
                        }
                    } );
                }

                if( need_verify_target == null ){
                    $.each( that.rules, function( rules_name, match_rules ){
                        if( target_name == rules_name ){
                            need_verify_target = that._set_match_target_parameters( target, rules_name, match_rules );
                            return false;
                        }
                        else{
                            need_verify_target = null;
                        }
                    } );
                }

                return need_verify_target;
            },

            //设置当前匹配对象的所有属性
            _set_match_target_parameters: function( target, rules_name, match_rules, user_flag ){
                var that = this;

                $.each( match_rules._rules, function( rule_type, rule_value ){
                    var rule_message = "此项存在错误，请检查";
                    $.each( match_rules._tip_msg, function( msg_type, msg_value ) {
                        if( rule_type == msg_type ){
                            rule_message = msg_value;
                            return false;
                        }
                    });

                    var new_rule_value = that.set_active_parameter( rule_value );
                    var new_rule_message = that.set_active_parameter( rule_message );

                    var item = {
                        _current_target: target,
                        _rules_name: rules_name,
                        _rule_type: rule_type,
                        _rule_value: new_rule_value,
                        _rule_msg: new_rule_message,
                        _result: null
                    };

                    if( user_flag ){
                        that.all_user_targets_rules.push( item );
                    }
                    else{
                        that.all_targets_rules.push( item );
                    }
                } );

                return {
                    _currentTarget: target,
                    _rules_name: rules_name,
                    _match_rules: match_rules,
                    _tip_element: target.tip( that.tip_paramter )
                };
            },

            _bind: function(){
                var that = this;
                var para = that.parameters;

                that.form.bind( "submit", function( event ){
                    $.clear_all_tip();
                    event.preventDefault();
                    that.verify_form( true );
                } );

                that.form.delegate( that.match_type.match_focus, "focus", function(){
                    $.clear_all_tip();
                } );

                that.form.delegate( that.match_type.match_blur, "blur", function(){
                    $.clear_all_tip();
                    that.verify_form( false );
                } );

                that.form.delegate( that.match_type.match_change, "change", function(){
                    $.clear_all_tip();
                } );

                that.form.delegate( that.match_type.match_click, "click", function(){
                    $.clear_all_tip();
                } );

                that.form.delegate( that.match_type.match_key_up, "keyup", function( event ){
                    $.clear_all_tip();
                    if( event.which == 13 && para.submit_by_key_up == true ){
                        that.verify_form( true );
                    }
                } );
            },

            _form_submit: function( only_verify ){
                var that = this;
                var form = that.form;

                if( only_verify ){
                    if( that.callback == null ){
                        form.unbind( "submit" );
                        if( that.auto_submit ){
                            if( typeof console !== "undefined" ){
                                console.log && console.log( "submit" );
                            }
                            form.submit();
                        }
                    }
                    else{
                        if( typeof console !== "undefined" ){
                            console.log && console.log( "callback" );
                        }
                        that.callback();
                    }
                }
            },

            get_verify_result: function( all_targets_rules ){
                var that = this;
                var result = true;

                $.each( all_targets_rules, function(){
                    if( this._result != true ){
                        result = false;
                        return false;
                    }
                } );

                return result;
            },

            verify_target: function( user_targets ){
                var that = this;

                that._construct_tip_elements( user_targets );

                var all_rules_array = that.all_user_targets_rules;

                $.clear_all_tip();

                if( $.GlobalConfig.verify_switch == false ){
                    that.verify_result = true;
                    return true;
                }

                if( all_rules_array && all_rules_array.length > 0 ){
                    var all_length = all_rules_array.length;
                    that._verify( all_rules_array, all_length, -1, true, true );
                    return that.get_verify_result( all_rules_array );
                }
                else{
                    return false;
                }
            },

            verify_form: function( required_flag ){
                var that = this;

                that._construct_tip_elements();

                if( $.GlobalConfig.verify_switch == false ){
                    that.verify_result = true;
                    that._form_submit( required_flag );
                    return true;
                }

                var all_rules_array = that.all_targets_rules;

                if( all_rules_array && all_rules_array.length > 0 ){
                    var all_length = all_rules_array.length;
                    that._verify( all_rules_array, all_length, -1, required_flag, false );
                    return that.get_verify_result( all_rules_array );
                }
                else{
                    return false;
                }
            },

            _verify: function( all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                current_index++;

                var current_rules = all_rules_array[ current_index ];

                if( current_rules ){
                    var current_target = current_rules._current_target;
                    that.verify_result = false;

                    if( current_target.is(":hidden") ){
                        that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag  );
                    }
                    else{
                        var current_target_value = current_target ? current_target.val().trim() : "";
                        current_target.val( current_target_value );

                        var rule_type = current_rules._rule_type;
                        var rule_value = current_rules._rule_value;
                        var rule_msg = current_rules._rule_msg;

                        switch( rule_type ){
                            case "_required":
                                that._verify_required( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_length":
                            case "_min_length":
                            case "_max_length":
                                return that._verify_length( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_number":
                                return that._verify_number( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_decimals":
                                return that._verify_decimals( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_min":
                            case "_max":
                            case "_range":
                                return that._verify_range( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_rate":
                                return that._verify_rate( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_compareTo":
                                return that._verify_compare_to( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_must_check":
                                return that._verify_must_check( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_id_card_city":
                                return that._verify_id_card_city( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_id_card_last_validate":
                                return that._verify_id_card_last_validate( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_function":
                                return that._verify_function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            case "_remote":
                                return that._verify_remote( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                            default:
                                return that._verify_type( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                                break;
                        }
                    }
                }
                else{
                    if( user_flag == false ){
                        that.verify_result = true;
                        that._form_submit( required_flag );
                    }
                    return true;
                }
            },

            _success: function( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;
                that._verify( all_rules_array, all_length, current_index, required_flag, user_flag );
                that.verify_result = null;
                current_rules._result = true;
                return true;
            },

            _fail: function( current_target, rule_msg, current_rules ){
                var that = this;
                that._set_msg_and_show( current_target, rule_msg );
                that.verify_result = false;
                current_rules._result = false;
                return false;
            },

            _verify_required: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( required_flag || ( typeof rule_value === "boolean" && rule_value == false ) ) {
                    if( current_target_value.length > 0 ){
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }
                    else{
                        return that._fail( current_target, rule_msg, current_rules );
                    }
                }
                else{
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
            },

            _verify_length: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                if( rule_type == "_max_length" ){
                    if( current_target_value && current_target_value.length > rule_value ){
                        return that._fail( current_target, rule_msg, current_rules );
                    }
                    else{
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }
                }
                else if( rule_type == "_min_length" ){
                    if( current_target_value && current_target_value.length < rule_value ){
                        return that._fail( current_target, rule_msg, current_rules );
                    }
                    else{
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }
                }
                else{
                    if( current_target_value && current_target_value.length != rule_value ){
                        return that._fail( current_target, rule_msg, current_rules );
                    }
                    else{
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }
                }
            },

            _verify_number: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var rule = /^[0-9]*$/;

                if( rule.test( current_target_value ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
                else{
                    return that._fail( current_target, rule_msg, current_rules );
                }
            },

            _verify_decimals: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var rule = /^[0-9]+([.]{1}[0-9]{1,2})?$/;

                if( rule.test( current_target_value ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
                else{
                    return that._fail( current_target, rule_msg, current_rules );
                }
            },

            _verify_range: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var number_value;
                try{
                    number_value = Number( current_target_value )
                }
                catch ( ex ){
                    return that._fail( current_target, rule_msg, current_rules );
                }

                switch( rule_type ){
                    case "_min":
                        if( typeof rule_value === "number" ){
                            if( number_value < rule_value ){
                                return that._fail( current_target, rule_msg, current_rules );
                            }
                        }
                        break;
                    case "_max":
                        if( typeof rule_value === "number" ){
                            if( number_value > rule_value ){
                                return that._fail( current_target, rule_msg, current_rules );
                            }
                        }
                        break;
                    case "_range":
                        if( typeof rule_value.min === "number" ){
                            if( number_value < rule_value.min ){
                                return that._fail( current_target, rule_msg, current_rules );
                            }
                        }

                        if( typeof rule_value.max === "number" ){
                            if( number_value > rule_value.max ){
                                return that._fail( current_target, rule_msg, current_rules );
                            }
                        }
                        break;
                }

                return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
            },

            _verify_rate: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var number_value;
                try{
                    number_value = Number( current_target_value )
                }
                catch ( ex ){
                    return that._fail( current_target, rule_msg, current_rules );
                }

                if( number_value % rule_value == 0  ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
                else{
                    return that._fail( current_target, rule_msg, current_rules );
                }
            },

            _verify_compare_to: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var compare_to_obj = that.find_target( rule_value, current_target );

                if( compare_to_obj && compare_to_obj.length == 1 ){
                    var compare_value = compare_to_obj.val().trim();

                    if( compare_value == "" ){
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }

                    if( compare_value && current_target_value ){
                        if( compare_value == current_target_value ){
                            return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                        }
                        else{
                            return that._fail( current_target, rule_msg, current_rules );
                        }
                    }
                    else{
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }
                }
                else{
                    if( typeof console !== "undefined" ){
                        console.log && console.log( "对象" + rule_value + "未找到，或未处于相同form表单中。" );
                    }
                    return that._fail( current_target, "对象" + rule_value + "未找到，或未处于相同form表单中。", current_rules , user_flag);
                }
            },

            _verify_must_check: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;
                var state = current_target.is(':checked');

                if( rule_value && state == false ){
                    return that._fail( current_target, rule_msg, current_rules );
                }
                else{
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
            },

            _verify_id_card_city: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var city = { 11 : "北京", 12 : "天津", 13 : "河北", 14 : "山西", 15 : "内蒙古", 21 : "辽宁",
                    22 : "吉林", 23 : "黑龙江", 31 : "上海", 32 : "江苏", 33 : "浙江", 34 : "安徽", 35 : "福建",
                    36 : "江西", 37 : "山东", 41 : "河南", 42 : "湖北", 43 : "湖南", 44 : "广东", 45 : "广西",
                    46 : "海南", 50 : "重庆", 51 : "四川", 52 : "贵州", 53 : "云南", 54 : "西藏", 61 : "陕西",
                    62 : "甘肃", 63 : "青海", 64 : "宁夏", 65 : "新疆", 71 : "台湾", 81 : "香港", 82 : "澳门",
                    91 : "国外" };

                if( rule_value && ( !city[ current_target_value.substr( 0, 2 ) ] ) ){
                    return that._fail( current_target, rule_msg, current_rules );
                }
                else{
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
            },

            _verify_id_card_last_validate: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                // 18位身份证需要验证最后一位校验位
                if ( current_target_value.length == 18) {
                    current_target_value = current_target_value.split('');
                    // ∑(ai×Wi)(mod 11)
                    // 加权因子
                    var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
                    // 校验位
                    var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
                    var sum = 0;
                    var ai = 0;
                    var wi = 0;
                    for ( var i = 0; i < 17; i++ ) {
                        ai = current_target_value[ i ];
                        if (ai == 'x') {
                            ai = 'X';
                        }
                        wi = factor[ i ];
                        sum += ai * wi;
                    }
                    var code18 = current_target_value[ 17 ];
                    if ( code18 == 'x' ) {
                        code18 = 'X';
                    }
                    if ( parity[ sum % 11 ] != code18 ) {
                        return that._fail( current_target, rule_msg, current_rules );
                    }
                    else{
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }
                }
                else{
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
            },

            _verify_function: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                var result = rule_value( current_target_value );

                if( result.result ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
                else{
                    return that._fail( current_target, result.msg, current_rules );
                }
            },

            _verify_remote: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( required_flag ){
                    if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                        return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                    }

                    rule_value( current_target_value, function( result, msg ){
                        if( result ){
                            return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                        }
                        else{
                            return that._fail( current_target, msg, current_rules );
                        }
                    } );
                }
                else{
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
            },

            _verify_type: function( current_target, current_target_value, rule_type, rule_value, rule_msg, current_rules, all_rules_array, all_length, current_index, required_flag, user_flag ){
                var that = this;

                if( current_target_value == "" || ( typeof rule_value === "boolean" && rule_value == false ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }

                if( rule_value.test( current_target_value ) ){
                    return that._success( current_rules, all_rules_array, all_length, current_index, required_flag, user_flag );
                }
                else{
                    return that._fail( current_target, rule_msg, current_rules );
                }
            },

            _set_msg_and_show: function( target, msg ){
                var that = this;
                that.show_tip( target, msg );
            },

            show_tip: function( target, msg ){
                if( target && msg ){
                    target.tip( msg ).show();
                }
            },

            find_target: function( target_flag, current_target ){
                var target_obj = null;
                if( target_flag ){
                    if( current_target && current_target.length > 0 ){
                        var current_form = current_target.closest( "form");
                        if( current_form && current_form.length == 1 ){
                            target_obj = current_form.find( "[data-name='" + target_flag + "']" );
                            if( target_obj.length == 0 ){
                                target_obj = current_form.find( "#" + target_flag );
                                if( target_obj.length == 0 ){
                                    target_obj = current_form.find( "." + target_flag );
                                }
                            }
                        }
                    }
                    else{
                        target_obj = $( "[data-name='" + target_flag + "']" );
                        if( target_obj.length == 0 ){
                            target_obj = $( "#" + target_flag );
                            if( target_obj.length == 0 ){
                                target_obj = $( "." + target_flag );
                            }
                        }
                    }
                }

                return target_obj;
            },

            set_active_parameter: function( target_value ){
                var that = this;

                if( typeof target_value === "string" ){
                    target_value = that.set_active_parameter_value( target_value );
                }
                else if( typeof target_value === "object" ){
                    $.each( target_value, function( key, value ){
                        target_value[ key ] = that.set_active_parameter_value( value );
                    } );
                }

                return target_value;
            },

            set_active_parameter_value: function( value ){
                var that = this;
                var begin_flag = "{{";
                var end_flag = "}}";

                var new_value = value;

                if( typeof new_value === "string" ){

                    while( ( typeof new_value === "string" ) && ( new_value.indexOf( begin_flag ) != -1 ) && ( new_value.indexOf( end_flag ) != -1 ) )
                    {
                        var begin_position = new_value.indexOf( begin_flag );
                        var end_position = new_value.indexOf( end_flag );

                        if( begin_position > -1 && end_position > -1 ){
                            var begin = new_value.substring( 0, begin_position );
                            var target_name = new_value.substring( begin_position + 2, end_position );
                            var end = new_value.substring( end_position + 2 );

                            var target = that.find_target( target_name );
                            var target_value = "";
                            if( target && target.length > 0 ){
                                target_value = target.val();
                            }

                            var _value = begin + target_value + end;

                            new_value = Number( _value );
                            if( isNaN( new_value ) ){
                                new_value = _value;
                            }
                        }
                    }
                }

                return new_value;
            },

            add_rules: function( rules ){
                var that = this;
                if( rules ){
                    $.extend ( that.rules, rules );
                }
            },

            add_custom_function_verify: function( rules_name, function_obj ){
                var that = this;
                var attr = {};
                attr[ rules_name ] = { _rules:{ _function: function_obj }, _tip_msg: { _function: "" } };
                that._add_custom( attr, rules_name, function_obj );
            },

            add_remote_verify: function( rules_name, function_obj ){
                var that = this;
                var attr = {};
                attr[ rules_name ] = { _rules:{ _remote: function_obj }, _tip_msg: { _remote: "" } };
                that._add_custom( attr, rules_name, function_obj );
            },

            _add_custom: function( new_rules, rules_name, function_obj ){
                var that = this;
                if( typeof function_obj == "function" ){
                    $.extend ( that.rules[ rules_name ]._rules, new_rules[ rules_name ]._rules );
                    $.extend ( that.rules[ rules_name ]._tip_msg, new_rules[ rules_name ]._tip_msg );
                }
            }
        };

        $.fn.verify = function( opt, rules, tip_para ){

            opt = opt && opt.length > 0 ? opt : { submit_by_key_up: true };

            var new_rules;
            if( rules && rules.length > 0 ){
                new_rules = rules;
            }
            else{
                new_rules = $.extend( true, {}, $.verify_rules );
            }

            tip_para = tip_para && tip_para.length > 0 ? tip_para : { msg: "" };

            var verifyObj = new verify_obj( opt, new_rules, tip_para );
            verifyObj.form = $( this );
            var result = verifyObj.verify();
            return result;
        };

        $.clear_all_tip = function(){
            var targets = $( ".tip-message-container" );
            targets.each( function(){
                $( this ).hide();
            } );
        };

        $.verify_load_finish = true;

    } )( jQuery );