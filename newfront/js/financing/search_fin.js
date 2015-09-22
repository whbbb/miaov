/**
 * 我要理财 列表数据异步加载
 * 暂时提出单独的JS,功能完善后需整合到financing.js
 * @author: Alex Liu
 */
var px_financing ={};

//借款周期, 还款方式, 标的年利率, 标的信用等级
var orderCycle,orderRefund,orderApr,orderIssuerFradem,orderType;

px_financing.search = function(param){
	$("#J_"+px_financing.getTypeToId()).load("../../../financing/financing_list.do", param ,function(){
		px_financing.anim();
	});
};


px_financing.getTypeToId = function(){
	switch($(".fc-a").index()){
	case 0:
		return "antrum";
	case 1:
		return "machine";
	case 2:
		return "arranged";
	case 3:
		return "metals";
	}
};

px_financing.anim = function(){
	/*打开页面时动画*/
	anim(".plr-progress-3dbox_1.1",".plr-progress-val",".plr-progress-bar",".plr-val");
	 /* 金额格式化    添加金钱中的逗号（ ， ）*/
	$(".sum").each(function(){
		var  val = forMoney($(this).find(".sum-Money").val(),0);
		$(this).find(".sum-money").html(val+"元");
	});
	$(".plr-balance").each(function(){
		var V = forMoney($(this).find(".plrb").val());
		//修改BUG 0000437 AlexLiu
		$(this).find(" .plr-balance-mon").html(V+"元");
	});
	/*时间格式化    添加时间中的  ： （间隔符号） */
	time( ".plb-time" , ".p-timer" , ".p-time" );
};

px_financing.getSearchParm = function(type,val){
	switch (type) {
		case (0):
			orderCycle = val;
			break;
		case (1):
			orderRefund = val;
			break;
		case (2):
			orderApr = val;
			break;
		case (3):
			orderIssuerFrade = val;
		case (4):
			// 01:优选计划,02:优房贷03:优车贷04:薪金宝
			switch(val){
				case (0):
					orderType = "02";
					break;
				case (1):
					orderType = "03";
					break;
				case (2):
					orderType = "01";
					break;
				case (3):
					orderType = "04";
					break;
				default:
					break
			}
		default:
			break;
		}
};

//倒计时
px_financing.updateEndTime = function(){
	var tmp,hour,min,sec,tmp1;
	
	$(".p-l-bottom").each(function(i){
		group = $(this);
		tmp = group.find(".p-time").html().trim().split(":");
		tmp1 = group.find(".p-time").html().trim();

		if(tmp.length > 1){
			hour = Number(tmp[0].trim());
			min = Number(tmp[1].trim());
			sec = Number(tmp[2].trim());
		}else{
			//增加对我的理财倒计时样式支持 alex
			hour = Number(tmp1.slice(0,3));
			min = Number(tmp1.slice(3,5));
			sec = Number(tmp1.slice(5,7));
		}
		
		
		
		
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
			group.find(".p-timer").val("0000000");
			group.find(".p-time").html("000:00:00");
		}else{
			group.find(".p-timer").val(hour+""+min+""+sec);
			group.find(".p-time").html(hour+":"+min+":"+sec);
		}	
		
	});
	clearInterval(timer);
	timer = setInterval("px_financing.updateEndTime()",1000);
	//setTimeout("px_financing.updateEndTime()",1000);
}