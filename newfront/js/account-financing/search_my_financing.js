/**
 * 我的账户--我的理财 列表数据异步加载
 * 暂时提出单独的JS,功能完善后需整合到account-financing.js
 * @author: Alex Liu
 */

var search_fin = {};

search_fin.search = function(param){
	//增加参数
	$("#J_"+search_fin.getTypeToId(param.orderState)).load("../../../account/account-financing-details.do", param ,function(){
		var _index = $("#details-nav").val();
		$("#details-nav").parent().find("li").eq(param.orderState);
	});
};


//增加参数 type
search_fin.getTypeToId = function(type){
	switch(type){
	case 0:
		return "yeting";
	case 1:
		return "tender";
	case 2:
		return "bespoke";
	case 3:
		return "audit";
	case 4:
		return "intact";
	case 5:
		return "sichuan";
	case 6:
		return "awfully";
	}
};

//5:还款中3:投标中2:预约中4:放款审核6:已还完8:流标7:坏账还款中						
//01:优选计划,02:优房贷03:优车贷04:薪金宝						
