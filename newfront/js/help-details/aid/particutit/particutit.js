$(document).ready(function(){

    $.delay_load( function(){ return $.cookie }, function(){
        var index = $.cookie("index");
        $("#J_aidbody>div").eq(index).show().siblings().hide();
        $(".particutit li").eq(index).addClass("current").siblings().removeClass("current");
    } );
//
	$(".particutit li").click(function(){
		var index2 = $(this).index();
		$.cookie("index", index2);
		$(this).addClass("current").siblings().removeClass("current");
		$("#J_aidbody>div").eq(index2).show().siblings().hide();
	});
});