//借款协议-本息一次性还款

$(document).ready(function(){
    var pro_show=$("#J_pro_hidden").val();
    if(pro_show==""){
        /*单击切换内容*/
        $(".proloantit li").click(function(){
            var nav_index=$(this).val();
            $("#J_pro_hidden").val(nav_index);
            var pro_val=$("#J_pro_hidden").val()-1;
            $(this).addClass("por-current").siblings().removeClass("por-current");
            $(".proclass").find(".loan-show").eq(pro_val).show().siblings().hide();
        });
    }else{
        /*  默认有显示的时候不执行点击事件*/
        var  pro_val=$("#J_pro_hidden").val()-1;
        $(".proloantit li").eq(pro_val).addClass("por-current").siblings().removeClass("por-current");
        $(".proloantit li").eq(pro_val).siblings().css("cursor","default");
        $(".proclass").find(".loan-show").eq(pro_val).show().siblings().hide();
    }
});



