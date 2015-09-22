$(document).ready(function(){
    $(".supertit li").click(function(){
        $(this).addClass("licurrent").siblings().removeClass("licurrent");
        $(".superbody").find(".superdiv").eq($(this).index()).show().siblings().hide();
    });
    staoclick(".superdiv",".staol",".thisli",".statutedetails");
});