$(document).ready(function(){
    $(".outlaytit li").click(function(){
        $(this).addClass("licurrent").siblings().removeClass("licurrent");
        $(".outlaybody").find(".outlaydiv").eq($(this).index()).show().siblings().hide();
    });
    staoclick( ".outlaydiv",".staol",".thisli",".statutedetails");
});