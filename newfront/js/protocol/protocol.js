
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {
            //加载 左侧导航
            includePage( "#J_protocoltit", "./protocolbody/protocoltit/protocoltit.html");
            //加载  网站服务协议
            includePage( "#J_serve", "./protocolbody/prodetails/serve/serve.html");
            //加载  借款协议，本息一次性还款
            includePage( "#J_proloan", "./protocolbody/prodetails/proloan/proloan.html");
            //加载  借款协议，  等额本息
            includePage( "#J_dgee", "./protocolbody/prodetails/dgee/dgee.html");
            //加载  借款协议，按月付息
            includePage( "#J_payment", "./protocolbody/prodetails/payment/payment.html");
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();
    //gjh加入 2015-7-23
    $(".date").each(function(){
		var date = $(this).val().trim();
		var year =date .substring(0,4);
		var month =date .substring(4,6);
		var day = date.substring(6,8);
		$(this).next().html(year);
		$(this).next().next().html(month);
		$(this).next().next().next().html(day);
	});
    
    var day = $(".day").val();
    if(day != undefined){
    	day = day.trim().substring(6,8);
    	$(".day").next().html(day);
    }
	//结束时间
	$(".list").each(function(){
		// 月截至还款日
		var refundPlanTimeLast = $("#refundPlanTimeLast").val();
		// 借款到期日
		var refundPlanTime = $("#refundPlanTime").val();
		if(refundPlanTimeLast != "" && refundPlanTimeLast != undefined){
			var y = refundPlanTimeLast.substring(0,4);
			var m = refundPlanTimeLast.substring(4,6);
			var d = refundPlanTimeLast.substring(6,8);
		}
		$(this).find(".orderCode").next().html(y);
		$(this).find(".orderCode").next().next().html(m);
		$(this).find(".orderCode").next().next().next().html(d);
		if(refundPlanTime != "" && refundPlanTime != undefined){
			$(".day").html(refundPlanTime.substring(6,8));
		}
	});
} );
