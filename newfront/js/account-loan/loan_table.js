/**
 * 我的借款 列表数据异步加载 
 * 暂时提出单独的JS,功能完善后需整合到account-loan.js
 * @author: yangchunyan
 */
var px_account_loan ={};

//标的类型
var orderState;

// 我的借款 列表数据异步加载
px_account_loan.search = function(param){
	$("#J_loan_list").load("../../../account/accountLoanTable.do", param ,function(){
		px_account_loan.anim();
	});
};

//表格数字格式化
px_account_loan.anim = function(){
	 /* 金额格式化    添加金钱中的逗号（ ， ）*/
	$(".money").each(function(){
		var  val = forMoney($(this).html().trim(),0);
		$(this).html(val);
	});
}
// 详情格式化
px_account_loan.detailAnim =function(){
	$(".detail-money").each(function(){
		$(this).html(forMoney($(this).html().trim(),2))
	})
	$(".detail-money-no").each(function(){
		$(this).html(forMoney($(this).html().trim(),0))
	})
	$(".minute-details").each(function(){
		var str = $(this).find(".day").html().trim();
		var day;
		// 修改ycy 防止二次格式化 08/06
		if(str.substr(4,1) != "-"){
			day = str.substr(0,4) + "-" + str.substr(4,2) + "-" + str.substr(6,2);
		} else {
			day = str;
		}
		$(this).find(".day").html(day);
	})
}
//倒计时
px_account_loan.updateEndTime = function(){
	
	var tmp,hour,min,sec;
	tmp = $(".timer").html().trim().split(":");
	hour = Number(tmp[0].trim());
	min = Number(tmp[1].trim());
	sec = Number(tmp[2].trim());
	
		--sec;
	if(Number(sec) < 0){
		sec = 0;
		
		if(min >0){
			sec = 59;
			min--;
		
		}else{
			if(hour > 0){
				hour--;
				min = 59;
				sec = 59;
			}
		
		}
	}
	
	if(sec.toString().length ==1 ){
		sec = "0"+ sec;
	}
	
	if(min.toString().length == 1){
		min = "0"+ min;
	}
	
	if(hour.toString().length == 1){
		hour = "00"+ hour;
	}
	if(hour.toString().length == 2){
		hour = "0"+ hour;
	}
			
	if(Number(sec) <=0 && Number(hour) <=0 && Number(min) <=0){
		$(".timer").html("000:00:00");
	}else{
		$(".timer").html(hour+":"+min+":"+sec);
	}	
	clearInterval(timer);
	timer = setInterval("px_account_loan.updateEndTime()",1000);
}
