$(document).ready(function(){
	var order = $(".order").val().trim();
	// 时间格式化
	if(order == "06" || order == "07"){
		var tmp = $(".p-timer").val().trim();
		hour =tmp.substr(0,3);
		min =tmp.substr(3,2);
		sec =tmp.substr(5,2	);
		// 添加时间格式化，ycy
		$(".timer").html(hour + ":" + min + ":"+sec)
	}
	// 投标中和预约中的时候显示倒计时
	if(order == "06" || order == "07"){
		px_account_loan.updateEndTime();
	}
})