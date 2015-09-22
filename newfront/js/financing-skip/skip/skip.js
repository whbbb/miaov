$(document).ready(function(){
    $(".skipli").mouseenter(function(){
        $(this).find(".skipbgf").css("background","none");
    });
    $(".skipli").mouseleave(function(){
        $(this).find(".skipbgf").css("background","#FFF");
    });
});