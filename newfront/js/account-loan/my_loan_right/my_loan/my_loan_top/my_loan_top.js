$(document).ready(function(){
    var speed=500;
    /*鼠标经过  and  离开 事件*/
    $(".loanbigbox").mouseenter(function(){
        $(this).find(".yet").hide();
        $(this).find(".loan-no-accord").show();
    });
    $(".loanbigbox").mouseleave(function(){
        $(this).find(".yet").show();
    });

    $.delay_load( function(){ return $.custom_common._my_top_dredge; }, function(){
        $.custom_common._my_top_dredge.init();
    });

// 修改（将对应jsp中的js添加到本js中） ycy2015/08/03
	//控制页面模块金额大于0时显示什么
    if( $("#less_money").length > 0 && $("#month_less_money").length > 0 ){
        var less_money = Number($("#less_money").val().trim());
        if(less_money > 0){
            $(".oranbg1").addClass("loan-no-accord");
            $(".oranbg2").removeClass("loan-no-accord");
        } else {
            $(".oranbg1").removeClass("loan-no-accord");
            $(".oranbg2").addClass("loan-no-accord");
        }
        var month_less_money = Number($("#month_less_money").val().trim());
        if(month_less_money > 0){
            $(".yellbg1").addClass("loan-no-accord");
            $(".yellbg2").removeClass("loan-no-accord");
        } else {
            $(".yellbg1").removeClass("loan-no-accord");
            $(".yellbg2").addClass("loan-no-accord");
        }
    }
	// 金额格式化
	$(".detail-money").each(function(){
		$(this).html(forMoney($(this).html().trim(),2))
	})
	// 点击日期右边的按钮时，打开下面列表该标的的详情 08/03
	// 是否刷新表格
	var tag3 = "true";
	$(".nowul").find(".nowaday").each(function(){
		$(this).find(".repay-money").find(".code_butt").click(function(){
			//取本列的点击按钮时，月表 标的的userOrderCode
			userOrderCode1 = $(this).prev(".userOrderCode").val();
			//点击的按钮对应的标的表的列码
			var i =0;
			tag3 ="true";
//			var retVal = loadDetail(userOrderCode1,tag3,"0")
//			tag3 = retVal.tag3;
			var page = 0;
			while(tag3 == "true"){
				
				page1 =page.toString();
				tag = $("#loan-tag").val().trim();
				
				$.ajax({
					type : "post",
					url : "../../../account/accountLoanTable.do",
					dataType : "text",
					data : {
						"pageNo" : page1,
						"tag" :tag
					},
					async: false,
					success : function(htmlStr) {
						$(".my_loan").parent().next().html(htmlStr);
						i = 0;
						tag3 = $("#loan-tag").val().trim();
						var retVal = loadDetail(userOrderCode1,"true",page1)
						$("#loan-tag").val(retVal.tag3);
						px_account_loan.detailAnim();
					}
				})
				tag3 = tag = $("#loan-tag").val().trim();
				page = page+1;
			}
		})
	})
});
// 需要加载标的号 userOrderCode1
// 第几行index值是否加1 tag2
// 是否需要重新加载表格为还款中 tag3

function loadDetail(userOrderCode1,tag3,pageNo){
	
	var i = 0;
	var page= pageNo;
	var tag2 = true;
	var tag3 = tag3;
	$(".loanlist-detail").find(".ldtr").each(function(){
		var userOrederCode2 = $(this).find(".userOrderCode").val();
		
		if(userOrderCode1 != userOrederCode2&& tag2){
			i++;
		}
		if(userOrderCode1 == userOrederCode2 && tag2){
			tag3 ="false";
			tag2 = false;
			$.ajax({
				type : "post",
				url : "../../../account/accountLoanTable.do",
				dataType : "text",
				data : {
					"pageNo" : page,
					"tag" :tag3
				},
				async: false,
				success : function(htmlStr) {
					tag = "0";
					$.special_radio_checkbox();
					$(".loanlist-detail").find(".ldtr").eq(i).trigger("click");
					px_account_loan.detailAnim();
				}
			})
			document.getElementById("J_my_loan_footlist").scrollIntoView();
		}
	});
	$("#loan-tag").val(tag3);
	return {
		tag3:tag3
	}
}
