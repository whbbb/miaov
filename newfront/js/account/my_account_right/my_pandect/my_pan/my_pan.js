$(document).ready(function(){

    var interval_obj = null;
    /*鼠标经过账户总资产*/
    var speed=500;
    var play_state = true;
    $(".oscillation").mouseenter(function(){
        var curr=$(this);
        curr.find(".pro-current").hide();
        curr.find(".osciCurren").show();
    });
    $(".oscillation").mouseleave(function(){
        var curr=$(this);
        curr.find(".pro-current").show();
        curr.find(".osciCurren").hide();
    });


    $.delay_load( function(){ return $.custom_common._my_top_dredge; }, function(){
        $.custom_common._my_top_dredge.init();
    } );



    /*金额格式化  去掉元*/
    function amount_format (amount){
        $(amount).each(function(){
            var amountFormat=$(this);
            var format= amountFormat.html();
            if( format && typeof format === "string" && format.indexOf( "元" ) != -1 ){
                var  format_current=parseFloat( format.substring( 0, format.indexOf( "元" ) ) );
                var current_val = forMoney(format_current ,0 );
                amountFormat.html(current_val+"<span style='font-size:14px;color:#333;'>元</span>");
            }
            else{
                var format_current= format;
                var current_val = forMoney(format_current.trim(),0 );
                amountFormat.html(current_val);
            }
        });
    }
    amount_format(".amount-format");

});