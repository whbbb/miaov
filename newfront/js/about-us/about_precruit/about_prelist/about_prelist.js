$(document).ready(function(){

    /*招聘类别切换*/
    $(".list-button li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(".apc-list").find(".list-1").eq($(this).index()).show().siblings().hide();
    });
    /*招聘信息点击展开详细信息*/
    $(".ban-1").each(function(){
        $(this).find(".next").click(function(){
            if($(this).hasClass("next-up")){
                $(this).removeClass("next-up");
            }else{
                $(".ban-1").find(".next").removeClass("next-up");
                $(this).addClass("next-up");
            }
            $(this).siblings(".require").toggle();
            $(this).parents().siblings().find(".require").hide();
        });
    });

});
