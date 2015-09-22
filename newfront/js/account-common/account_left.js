
$(document).ready(function(){

    $(".mal-navigation li").click(function(){
        var that=$(this);
        that.addClass("mal-current").siblings().removeClass("mal-current");
    });
    var curentAccount=$(".account").val();
    if(curentAccount==0){
        $(".acc-pandect").addClass("mal-current").siblings().removeClass("mal-current");
    }
    else if(curentAccount==1){
        $(".mm-matters").addClass("mal-current").siblings().removeClass("mal-current");
    }
    else if(curentAccount==2){
        $(".lend-money").addClass("mal-current").siblings().removeClass("mal-current");
    }
    else if(curentAccount==3){
        $(".supervise").addClass("mal-current").siblings().removeClass("mal-current");
    }
    //2015/7/16 高景恒加入
    var userState = get_user_all_state();
    if( userState && userState[ 3 ] == 1){
    	$("#noOpen").hide();
    }else{
    	$("#open").hide();
    }
    //2015/7/28 高景恒加入
    $.delay_load( function(){ return typeof ZeroClipboard !== "undefined" }, function(){
        var clip = null;

        ZeroClipboard.setMoviePath("../../../js/plugins/ZeroClipboard/swf/ZeroClipboard.swf");

        var login = $("#login").val();
        if(login != "0"){
            var inviteCodeSuccess = getInviteCode();
            var inviteLink = $("#inviteLink").val();
            clip = new ZeroClipboard.Client();
            clip.setHandCursor(true);
            clip.setText(inviteLink);
            clip.glue("copy-button");
            clip.addEventListener("complete", function(){
                if (inviteCodeSuccess) {
                    alert("邀请码已复制到剪贴板！");
                }else {
                    alert("复制错误，请按F5刷新页面重试！");
                }
            });
        }else {
            $("#copy-button" ).click(function(e){
                e.preventDefault();
                window.location.href = "../account/my_account.do";
            });
        }
    } );
});

//后台取邀请码--2015-7-28高景恒加入 
function getInviteCode(){
	var success = false;
	var loginHash = $.cookie("loginHash");
	var inviteCode = "";
	if(loginHash != null){
		callBLogicSync("getInviteCode", {"loginHash" : loginHash},function(element){
			if (!($.isEmptyObject(element)) && element['resultCode']=="0000" && element['detailCode']=="0000"){
				inviteCode = element['inviteCode'];
				var url = "http://www.youjinke.com/account/regist.do?inviteCode=" + inviteCode;
				$("#inviteLink").val(url);
				success = true;
			};
		});
	};
	return success;
};