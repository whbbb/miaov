$(document).ready(function(){
    $(".step-material .divfleft").click(function(){
        $(this).addClass("step-current").siblings().removeClass("step-current");
        $(".stuff>.proce-stuff ").eq($(this).index()).show().siblings().hide();
    });
    $(".individual").click(function(){
        $(".step-selected").stop().animate({"left":"50px"},400);
    });
    $(".business").click(function(){
        $(".step-selected").stop().animate({"left":"210px"},400);
    });
    $(".mortgage").click(function(){
        $(".step-selected").stop().animate({"left":"375px"},400);
    });
    $(".warrant").click(function(){
        $(".step-selected").stop().animate({"left":"530px"},400);
    });
});
