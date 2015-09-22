$(document).ready(function(){
	//添加一个标志位，my_loan_top.js 也要用 必须为全局变量 用于不重复刷新 08/03 ycy 
	tag = "0";
    $(".fl-select").bind( "value-change", function(){
        var target = $( this );
        var url = target.attr( "submit-url" );
        var value = target.attr( "select-value" );
        window.location.href = url + value;
    });

    /*底部列表  定位 */
    $(".loanlist-detail .ldtr").each(function(){
        var l_detailtr=$(this);
        var trindex=l_detailtr.index()*35+"px";
        l_detailtr.css("top",trindex);
    });
    /*  底部列表 点击动画*/
    var speed=600;
    var state_flag = true;
    var _click_flag= true;
    $(".loanlist-detail .ldtr").click(function(){
        var ldtr=$(this);
        // 修改ycy  下拉框取值应该是取属性的值来做判断  08/05
        var select_val=$(".fl-select").attr("select-value");
        if(_click_flag){
        	// 修改ycy 值得判断条件需要跟后台相对应 08/05
            if(select_val== "4" || select_val== "1" || select_val== "8" ||select_val== "9")
            {
                return false;
            }else{
                if( state_flag ){
                    ldtr.siblings().hide();
                    ldtr.addClass("fafa").siblings().removeClass("fafa");
                    ldtr.animate({"top":"0"},speed,function(){
                        ldtr.find(".dnone-detail").show();
                        state_flag = false;
                    });
                    ldtr.css("cursor","default");
                    ldtr.find(".flremarks").css("cursor","pointer");
                }
            }
        }
    });
    $( "table.loanlist-detail").delegate(".recordoff", "click", function(){
    	tag ="0";
        var ldtr = $( this).closest( ".ldtr" );
        var trindex=ldtr.index()*35+"px";
        ldtr.find(".dnone-detail").addClass( "disnone" );
        ldtr.find(".dnone-detail").hide();
        ldtr.removeClass("fafa");
        ldtr.animate({"top":trindex},speed,function(){
            ldtr.siblings().show();
        });
        state_flag = true;
    });

    /*底部列表字数限制*/
    astrict(".maxeight",8);
//
//    // 修改 ycy  （相应jsp里的js合并到该js里）
    if( typeof px_account_loan != "undefined" ){
        px_account_loan.anim();

        $(".ldtr").click(function(){
            if(tag == "0"){
                tag = 1;
                var userOrderCode = $(this).find(".userOrderCode").val().trim();
                var orderState = $(this).find(".orderState").val().trim();
                $(this).find(".dnone-detail").load("../../../account/accountLoanDetail.do?",{"userOrderCode":userOrderCode,"orderState":orderState},function(){
                    px_account_loan.detailAnim();
                })
            }
        })
    }
});