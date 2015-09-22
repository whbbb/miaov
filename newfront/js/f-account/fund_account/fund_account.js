
    $(document).ready(function(){
        var _fund ={
            parameter:{
                _fund_obj: $("#J_fund_form"),
                _fund_button: $("#J_fund_form #fbotton")
            },

            init: function () {
                var that = this;
                var para = that.parameter;
                that.init_verify( para._fund_obj );
                that.bind();

                load_tips( ".f-account-complete", function( obj ){
                    _fund.parameter._fund_result_tips = obj;
                } );

            },

            init_verify: function( target_form ){
                var that = this;
                var para = that.parameter;

                $.delay_load( function () { return $.verify_load_finish && _fund.parameter._fund_result_tips; }, function () {
                    para.verify_obj = target_form.verify();
                    para.verify_obj.add_remote_verify( "e_mail", that.e_mail_verify );
                    para.verify_obj.init( function(){
                        _fund.parameter._fund_result_tips._ajax_tips_operate( para.verify_obj );
                    } );
                } );
            },

            bind: function(){
                var that = this;
                var para = that.parameter;

                //提现按钮click事件绑定
                para._fund_button.bind( "click", function(){
                    para._fund_obj.submit();
                } );
            },

            //verify
            e_mail_verify: function( target_value, callback ){
                callBLogicSync( "getEmailEx", {"userEmail" : target_value }, function( element ) {
                    if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
                        callback( true );
                    }else if (!($.isEmptyObject(element)) && element['resultCode']=="7001" && element['detailCode']=="0109"){
                        callback( false, "您的邮箱已存在" );
                    } else {
                        callback( false, "邮箱验证错误,可能由于您的登录状态已失效" );
                    }
                });
            }
        };
        _fund.init();
    });