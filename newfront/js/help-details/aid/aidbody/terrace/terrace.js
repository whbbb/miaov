$(document).ready(function(){
    $(".terracetit li").click(function(){
        $(this).addClass("licurrent").siblings().removeClass("licurrent");
        $(".terbody").find(".terdiv").eq($(this).index()).show().siblings().hide();
    });
    staoclick( ".terdiv",".staol",".thisli",".statutedetails");
});
