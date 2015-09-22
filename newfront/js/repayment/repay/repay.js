
$( document ).ready( function(){
    var _repayment_repay = {

        parameter: {
            _alert_tip: $( "#J_alert_tip" ),
            _repayment_form: $( "#J_repayment_form" )
        },

        init: function () {
            var that = this;

            special_money();

            that.bind();

            load_tips( ".repayment-complete", function( obj ){
                _repayment_repay.parameter._repayment_repay_result_tips = obj;
            } );
        },

        bind: function(){
            var that = this;
            var para = that.parameter;

            para._repayment_form.bind( "submit", function(){
                that._change_tips_type();
                para._repayment_repay_result_tips.result_tips_obj.show();
            } );
        },

        //更改提示显示类型
        _change_tips_type: function(){
            var that = this;
            var para = that.parameter;

            if( para._alert_tip.hasClass( "show-this" ) ){
                $( ".recharge-complete" ).show().siblings().hide();
            }
            else{
                $( ".repayment-complete" ).show().siblings().hide();
            }
        }
    };
    _repayment_repay.init();
    // 修改 ycy 还款页点击取消时关闭当前页
    $("#close").click(function(){
    	window.close();
    });
 // 显示或隐藏账户余额不足的div (08/04 ycc 将相应jsp里的js添加到本js中)
	
	if( $("#mustPayMoney").length > 0 && $("#userMoney").length > 0 ){
		var mustPayMoney =Number($("#mustPayMoney").val().trim());
		var userMoney =Number($("#userMoney").val().trim());
		if(mustPayMoney>userMoney){
			$("#J_alert_tip").addClass("show-this").removeClass("hide-this");
			$("#repay-button").removeClass("repay-none");
			$("#repay-submit").addClass("repay-none");
		} else {
			$("#J_alert_tip").addClass("hide-this").removeClass("show-this");
			$("#repay-button").addClass("repay-none");
			$("#repay-submit").removeClass("repay-none");
		}
	}
});
