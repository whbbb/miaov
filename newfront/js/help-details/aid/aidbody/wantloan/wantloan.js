$(document).ready(function(){
    $(".wantloantit li").click(function(){
        $(this).addClass("licurrent").siblings().removeClass("licurrent");
        $(".wantloanbody").find(".wantloandiv").eq($(this).index()).show().siblings().hide();
    });
    staoclick(".wantloandiv",".staol",".thisli",".statutedetails");
});