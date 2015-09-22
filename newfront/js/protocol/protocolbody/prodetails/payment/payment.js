//借款协议-按月付息，到期还本
$(document).ready(function(){
    var pay_show=$("#J_pay_hidden").val();
    // 切换内容   点击事件
    if(pay_show==""){
        $(".paytit li").click(function(){
            var nav_index=$(this).val();
            $("#J_pay_hidden").val(nav_index);
            var pay_val= $("#J_pay_hidden").val()-1;
            $(this).addClass("pay-current").siblings().removeClass("pay-current");
            $(".payment").find(".ment-show").eq(pay_val).show().siblings().hide();
        });
    }else{
        /*  默认有显示的时候不执行点击事件*/
        var pay_val=$("#J_pay_hidden").val()-1;
        $(".paytit li").eq(pay_val).addClass("pay-current").siblings().removeClass("pay-current");
        $(".paytit li").eq(pay_val).siblings().css("cursor","default");
        $(".payment").find(".ment-show").eq(pay_val).show().siblings().hide();
    }
});


