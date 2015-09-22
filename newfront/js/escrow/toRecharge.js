$().ready(function(){
	if($("#change").val()=='a_bank'){
		$("#rechargeSubmit").attr("action",toRecharge);
	}else{
		$("#rechargeSubmit").attr("action",toWithholdingRecharge);
	}
	$("#rechargeSubmit").submit();
});