// 借款协议-等额本息
$(document).ready(function(){
    var deg_show=$("#J_dgee_hidden").val();
    if( deg_show=="" ){
        $(".dgeetit li").click(function(){

            // 切换内容   点击事件
            var dgee_index=$(this).val();
            $("#J_dgee_hidden").val(dgee_index);
            var dgee_val=$("#J_dgee_hidden").val()-1;
            $(this).addClass("dgee-current").siblings().removeClass("dgee-current");
            $(".dgee").find(".dgee-show").eq(dgee_val).show().siblings().hide();
        });
    }
    else{
        /*  默认有显示的时候不执行点击事件*/
        var dgee_val=$("#J_dgee_hidden").val()-1;
        $(".dgeetit li").eq(dgee_val).addClass("dgee-current").siblings().removeClass("dgee-current");
        $(".dgeetit li").eq(dgee_val).siblings().css("cursor","default");
        $(".dgee").find(".dgee-show").eq(dgee_val).show().siblings().hide();
    }
});


