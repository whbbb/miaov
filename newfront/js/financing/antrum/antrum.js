$(document).ready(function(){
    /*头像鼠标经过浮层的更换*/
    /*优房宝*/
    $("#J_antrum").find(".pow-list>li").mouseenter(function(){
        $(this).find(".module").addClass("pic-antrum");
    });
    $("#J_antrum").find(".pow-list>li").mouseleave(function(){
        $(this).find(".module").removeClass("pic-antrum");
    });
    /*优车宝*/
    $("#J_machine").find(".pow-list>li").mouseenter(function(){
        $(this).find(".module").addClass("pic-machine");
    });
    $("#J_machine").find(".pow-list>li").mouseleave(function(){
        $(this).find(".module").removeClass("pic-machine");
    });
    /*优选计划*/
    $("#J_arranged").find(".pow-list>li").mouseenter(function(){
        $(this).find(".module").addClass("pic-arranged");
    });
    $("#J_arranged").find(".pow-list>li").mouseleave(function(){
        $(this).find(".module").removeClass("pic-arranged");
    });
    /*薪金宝*/
    $("#J_metals").find(".pow-list>li").mouseenter(function(){
        $(this).find(".module").addClass("pic-metals");
    });
    $("#J_metals").find(".pow-list>li").mouseleave(function(){
        $(this).find(".module").removeClass("pic-metals");
    });

    /*投资散标  右侧 筛选部分   点击选择的条件 改变相应的背景色及其文字颜色*/
    $(".o-detail li").click(function(){
        $(this).addClass("o-d-all").siblings().removeClass("o-d-all");
    });
    /*点击重新筛选按钮   恢复筛选条件的默认状态  */
    $(".again").click(function(){
        $(".all").addClass("o-d-all").siblings().removeClass("o-d-all");
    });

    /* 金额格式化    添加金钱中的逗号（ ， ）*/
    $(".sum").each(function(){
        var  val = forMoney($(this).find(".sum-Money").val(),0);
        $(this).find(".sum-money").html(val+"元");
    });
    $(".plr-balance").each(function(){
        var V = forMoney($(this).find(".plrb").val());
        $(".plr-balance-mon").html(V+"元");
    });
    /*时间格式化    添加时间中的  ： （间隔符号）  当 状态为放款审核 (  0  ) 的时候   倒计时置为---：--：--*/
    time( ".plb-time" , ".p-timer" , ".p-time" );


    /*打开页面时动画*/
    anim(".plr-progress-3dbox_1.1",".plr-progress-val",".plr-progress-bar",".plr-val");

    /*调用函数    限制文字显示长度  28    多出部分用省略号代替*/
    /*astrict(".plt-de1",28);*/

/*        *//*我要理财的动画调用*//*
    anim(".clr-progress-3dbox_1.1",".clr-progress-val",".clr-progress-bar",".clr-val",2000);

    *//* 金额格式化    添加金钱中的逗号（ ， ）*//*
    $(".mark").each(function(){
        var  val = forMoney($(this).find(".bMoney").val(),0);
        $(this).find(".money").html(val+"元");
    });

    $(".balance").each(function(){
        var V = forMoney($(this).find(".ymoney").val());
        $(".balance-mon").html(V+"元");
    })

    *//*时间格式化    添加时间中的  ： （间隔符号） *//*
    time( ".cdthree" , ".h-timer" , ".three-timer" );


*/

    /*时间倒计时*/
//    $( ".cdthree" ).each(function(){
//        var threetimer=$(this).find(".three-timer")
//        var timerC = null;
//        var $key=threetimer.html();
//        var hour = Number($key.slice( 0 , 3 ));
//        var minute = Number($key.slice( 4 , 6 ));
//        var second = Number($key.slice( 7 , 9 ));
//        function showtime(){
//
//            if (second==0)
//            {
//                second+=59;
//                if (minute==0)
//                {
//                    minute+=59;
//                    hour--;
//                }
//                else{
//                    minute--;
//                }
//            }
//            else{
//                second--;
//            }
//            if(hour>10 && minute>10 && second>10){
//                var Temp = hour+':'+ minute +':'+ second ;
//                threetimer.html(Temp);
//            }
//            if(hour<10){
//                var Temp = "0"+hour+':'+ minute +':'+ second ;
//                threetimer.html(Temp);
//            }
//            if(minute<10){
//                var Temp = hour+':'+ "0"+minute +':'+ second ;
//                threetimer.html(Temp);
//            }
//            if(second<10){
//                var Temp = hour+':'+ minute +':'+ "0"+ second ;
//                threetimer.html(Temp);
//            }
//            if(hour<10 && minute<10){
//                var Temp = "0"+hour+':'+ "0"+minute +':'+ second ;
//                threetimer.html(Temp);
//            }
//            if(hour<10 && minute<10 && second<10){
//                var Temp = "0"+ hour +":"+ "0"+ minute +":"+ "0"+second;
//                threetimer.html(Temp);
//            }
//            if( hour == 0 && minute == 0 && second == 0 ){
//                clearInterval(timerC);
//            }
//        }
//
//        timerC = setInterval( showtime,1000 );
//    });

});
