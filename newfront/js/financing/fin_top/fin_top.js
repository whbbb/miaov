

$(document).ready(function(){
    /*标题点击事件切换内容*/
   $(".antrum").click(function(){
       if( $( this).hasClass( "fc-a" ) ){
           return false;
       }
       $(this).addClass("fc-a").siblings().removeClass("fc-a");
       $("#J_antrum").show().siblings().hide();
       $("#J_fin_top").show();
       $("#J_financing_choose").show();
       $(".clear-both").show();
       anim("#J_antrum",".plr-progress-val",".plr-progress-bar",".plr-val");
   });
    $(".machine").click(function(){
        if( $( this).hasClass( "fc-a" ) ){
            return false;
        }
        $(this).addClass("fc-a").siblings().removeClass("fc-a");
        $("#J_machine").show().siblings().hide();
        $("#J_fin_top").show();
        $("#J_financing_choose").show();
        $(".clear-both").show();
        anim("#J_machine",".plr-progress-val",".plr-progress-bar",".plr-val");
    });
    $(".arranged").click(function(){
        if( $( this).hasClass( "fc-a" ) ){
            return false;
        }
        $(this).addClass("fc-a").siblings().removeClass("fc-a");
        $("#J_arranged").show().siblings().hide();
        $("#J_fin_top").show();
        $("#J_financing_choose").show();
        $(".clear-both").show();
        anim("#J_arranged",".plr-progress-val",".plr-progress-bar",".plr-val");
    });
    $(".metals").click(function(){
        if( $( this).hasClass( "fc-a" ) ){
            return false;
        }
        $(this).addClass("fc-a").siblings().removeClass("fc-a");
        $("#J_metals").show().siblings().hide();
        $("#J_fin_top").show();
        $("#J_financing_choose").show();
        $(".clear-both").show();
        anim("#J_metals",".plr-progress-val",".plr-progress-bar",".plr-val");
    });






});

