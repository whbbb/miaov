$(document).ready(function(){
    $(".helpli").mouseenter(function(){
        $(this).find(".presenteenter").show().siblings().hide();
    });
    $(".helpli").mouseleave(function(){
        $(this).find(".present-regular").show().siblings().hide();
    });
    $(".helpli").click(function(){
    	var nav= $(this).find(".nav").val().trim();
    	$.cookie("index",nav);
    })
});