
    $( document ).ready( function(){
        var _apply = {
            parameter: {
                fastApplyButtonObj: $( "#J_fast_apply_button" ),
                computerImg: $( "#J_computer" ),
                computerFrameContainer: $( "#J_computer_frame_container" ),
                closeComputer: $( "#J_close_computer" ),
                computerButton: $( "#J_computer_button" ),
                computerResult: $( "#J_computer_result" ),
                computerDetail: $( "#J_computer_detail" ),
                computerReset: $( "#J_computer_reset" ),
                computerDetailState: $( "#J_computer_detail_state" ),
                loanAmount: $( "#J_loan_amount" ),
                loanDataLimit: $( "#J_loan_data_limit" ),
                annualRate: $( "#J_annual_rate" ),
                _loan_amount: $( "#J_apply_form input[data-name='loan_amount']" ),
                _loan_use: $( "#J_apply_form textarea[data-name='loan_use']" ),
                refundWay: $( "#J_refund_way" ),
                allPrincipalAndInterest: $( "#J_all_principal_and_interest" ),
                allInterest: $( "#J_all_interest" ),
                detailTable: $( "#J_detail_table" )
            },

            init: function() {
                var that = this;
                var para = that.parameter;

                that.init_verify( para.fastApplyButtonObj.closest( "form" ), that.ajax_apply );
                that.init_verify( para.computerButton.closest( "form" ), that.computer );

                that.init_computer();
                that.bind();

                load_tips( ".loan-success, .loan-fail", function( obj ){
                    _apply.parameter._apply_result_tips = obj;
                } );
            },

            init_verify: function( target_form, user_callback ){
                var that = this;
                var para = that.parameter;

                $.delay_load( function () { return $.verify_load_finish; }, function () {
                    para.verify_obj = target_form.verify();
                    para.verify_obj.init( user_callback );
                } );
            },

            init_computer: function(){
                var that = this;
                var para = that.parameter;

                $.delay_load(
                    function(){
                        return $.mask_layer_load_finish;
                    },
                    function(){
                        para.computer_ml_obj = para.computerFrameContainer.mask_layer(
                            {
                                open_elms: para.computerImg,
                                close_elms: para.closeComputer,
                                position_type: "absolute",
                                open_animate_end_callback: function(){
                                    para.computerFrameContainer.css( "height", "auto" );
                                }
                            }
                        );
                    }
                );
            },

            bind: function() {
                var that = this;
                var para = that.parameter;

                //一键申请按钮click事件响应
                para.fastApplyButtonObj.bind( "click", function( event ){
                    var elm = $( event.currentTarget );
                    var target_form = elm.closest( "form" );
                    target_form.submit();
                } );

                //开始计算按钮click事件响应
                para.computerButton.bind( "click", function( event ){
                    var elm = $( event.currentTarget );
                    var target_form = elm.closest( "form" );
                    target_form.submit();
                } );

                //计算器打开按钮click事件响应
                para.computerImg.bind( "click", function( event ){
                    para.computerReset.click();
                    para.computerResult.hide();
                    para.computerDetail.hide();
                    $.clear_all_tip();
                } );

                //计算器关闭按钮click事件响应
                para.closeComputer.bind( "click", function( event ){
                    $.clear_all_tip();
                } );
            },

            ajax_apply: function(){
                var that = _apply;
                var para = that.parameter;

                var url = this.form.attr( "action" );
                //url = $.GlobalConfig.ajax_fun;

                var data = {
                    loan_amount: $.get_trim_value( para._loan_amount ),
                    loan_use: $.get_trim_value( para._loan_use )
                };

                ajax_request( url, data, true,
                    function( result ){
                        if( !( $.isEmptyObject( result ) ) && result[ 'resultCode' ] == "0000" ){
                            that.tip_show( true );
                            para._apply_result_tips.result_tips_obj.show();
                        }
                        else{
                            para._loan_amount.val( "" );
                            para._loan_use.val( "" );
                            that.tip_show( false );
                            para._apply_result_tips.result_tips_obj.show();
                        }
                    }
                );
            },

            tip_show: function( result ){
                var that = this;

                var success_obj = $( ".loan-success" );
                var fail_obj = $( ".loan-fail" );

                if( success_obj.length == 1 && fail_obj.length == 1 ){
                    if( result ){
                        success_obj.show().siblings().hide();
                    }
                    else{
                        fail_obj.show().siblings().hide();
                    }
                }
            },

            computer: function(){
                var that = _apply;
                var para = that.parameter;

                para.computerResult.show();
                para.detailTable.empty();

                var th = $( '<tr><th>还款期限（期）</th><th>应还本金（元）</th><th>应还利息（元）</th><th>应还本息（元）</th></tr>' );
                para.detailTable.append( th );

                //借款金额
                var amount = parseInt( para.loanAmount.val() );
                //借款期限
                var dateLimit = parseInt( para.loanDataLimit.val() );
                //年利率
                var rate = parseFloat( para.annualRate.val() );
                //还款方式
                var way = para.refundWay.find( "option:selected" ).attr( "data-value" );

                //本息合计
                var allCapital = 0;
                //总利息
                var allInterest = 0;

                //每期总还款额
                var allRefund = 0;
                //每期本金
                var capital = 0;
                //每期利息
                var interest = 0;


                //月利率
                var monthRate = rate / 12 * 0.01;
                //等额本息 乘方部分
                var tempRate = Math.pow( ( 1 + monthRate ), dateLimit );

                //剩余应还本金
                var surplusAmount = amount;

                //已还本息
                var paidCapital = 0;

                //已还利息
                var paidInterest = 0;

                for( var i = 1; i <= dateLimit; i++ ){
                    var isLast = ( i == dateLimit );

                    surplusAmount = surplusAmount - capital;
                    paidCapital = paidCapital + that.formatDecimals( allRefund );
                    paidInterest += that.formatDecimals( interest );

                    switch( way ){
                        case "1":

                            if( isLast ){
                                allCapital = that.formatDecimals( dateLimit * amount * monthRate * tempRate / ( tempRate - 1 ) );
                                allInterest = that.formatDecimals( allCapital - amount );

                                allRefund = allCapital - paidCapital;
                                interest = allInterest - paidInterest;
                                capital = allRefund - interest;
                            }
                            else{
                                allRefund = amount * monthRate * tempRate / ( tempRate - 1 );
                                interest = surplusAmount * monthRate;
                                capital = that.formatDecimals( allRefund ) - that.formatDecimals( interest );
                            }

                            break;
                        case "2":
                            if( isLast ) {
                                allCapital = amount * monthRate * dateLimit + amount;
                                allInterest = amount * monthRate * dateLimit;

                                capital = amount;
                                interest = allInterest - paidInterest;
                                allRefund = capital + interest;
                            }
                            else{
                                allRefund = interest = amount * monthRate;
                            }

                            break;
                        case "3":
                            if( isLast ){
                                allCapital = amount * monthRate * dateLimit + amount;
                                allInterest = amount * monthRate * dateLimit;

                                allRefund = allCapital;
                                interest = allInterest;
                                capital = allCapital - allInterest;
                            }

                            break;
                    }

                    var trObj = $( '<tr>' +
                        '<td>' + i + '</td>' +
                        '<td>' + formatCurrency( that.formatDecimals( capital ) ) + '</td>' +
                        '<td>' + formatCurrency( that.formatDecimals( interest ) ) + '</td>' +
                        '<td>' + formatCurrency( that.formatDecimals( allRefund ) ) + '</td>' +
                        '</tr>' );

                    if( i % 2 == 0 ){
                        trObj.addClass( "gray" );
                    }

                    para.detailTable.append( trObj );
                }

                var tf = $( '<tr><td class="bottom" colspan="4"></td></tr>' );
                para.detailTable.append( tf );

                para.allPrincipalAndInterest.html( formatCurrency( that.formatDecimals( allCapital ) ) );
                para.allInterest.html( formatCurrency( that.formatDecimals( allInterest ) ) );


                if( para.computerDetailState.is(':checked') ){
                    para.computerDetail.show();
                }
                else{
                    para.computerDetail.hide();
                }
                if( para.computer_ml_obj ){
                    para.computer_ml_obj.auto_position_center( true );
                }
            },

            formatDecimals: function( number, is_drop ){
                if( is_drop ){
                    return parseFloat( ( number + "" ).replace( /([0-9]+\.[0-9]{2})[0-9]*/, "$1" ) );
                }
                else{
                    return parseFloat( number.toFixed( 2 ) );
                }
            }
        };

        _apply.init();
    } );