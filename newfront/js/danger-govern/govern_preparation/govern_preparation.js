$(document).ready(function(){
    $(".gr-option>li").each(function(){
        $(this).click(function(){
            $(this).addClass("go-current").siblings().removeClass("go-current");
            $(this).parents().siblings(".option").find(".option-content").eq($(this).index()).show().siblings().hide();
            if( $( this).hasClass( "condition" ) ){
                $(this).find(".selected").stop().animate({"left":"50px"},400);
            }
            else if( $( this).hasClass( "keynote" ) ){
                $(this).siblings(".condition").find(".selected").stop().animate({"left":"175px"},400);
            }
        });
    })
});