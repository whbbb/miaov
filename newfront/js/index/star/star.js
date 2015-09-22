/**
 * Created by admin on 2015/4/15.
 */
$().ready(function(){

    var onOff = true;
    var elmStar = $("#J_star");
    var sHeight = elmStar.position().top - elmStar.height()*0.5;
    var sMaxHeight = elmStar.position().top + elmStar.height()*0.2;
    var starLi = $(".star-ul li");


    $(window).scroll(function(){
        if(onOff){
            elmInit();
        }
    });

    function elmInit() {
        if ($(window).scrollTop() >= sHeight && $(window).scrollTop() <= sMaxHeight) {
            onOff = false;
            starLi.each(function () {
                var remainMoney = Number($(this).find(".remainMoney").val().trim());
                var raiseMoney = Number($(this).find(".raiseMoney").val().trim());
                var scoreline = Math.floor(((raiseMoney - remainMoney) / raiseMoney)*100);

                var countA = 0;
                var countB = 0;
                var count = 0;

                var rateStr = $(this).find(".rateYear").val().trim();
                var rateInt, rateFloat;
                var position = rateStr.indexOf( "." );
                if( position == -1 ){
                    rateInt = Number( rateStr );
                    rateFloat = 0;
                }
                else{
                    rateInt = Number( rateStr.substring( 0, position ) );
                    rateFloat = rateStr.substring( position + 1 );

                    if( rateFloat.length < 2 ){
                        rateFloat = Number( rateFloat + "0" );
                    }
                }

                var sInt = $(this).find(".rate-int");
                var sFloat = $(this).find(".rate-float");
                var percent = $(this).find(".val");

                var tRate = Math.round(150 / rateInt);

                $(this).find(".bid-bar").animate({width: scoreline + '%'},2000);
                $(this).find(".progress-val").animate({left: scoreline + '%'}, 2000);

                $(this).find(".raise-money").html(formatMoney(raiseMoney));
                $(this).find(".remain-money").html(formatMoney(remainMoney));

                var counterUp = setInterval(function () {

                    if (count < scoreline) {
                        count++;
                        percent.html(count + '%');
                    } else {
                        percent.html(scoreline + '%');
                    }

                    countA+= 11;
                    if (countA > 99) {
                        sFloat.html("00");
                        countB++;
                        countA = 0;
                        sInt.html(countB);
                    } else {
                        sFloat.html(countA);

                        if (countB >= rateInt && countA >= rateFloat ) {
                            sInt.html(rateInt);
                            sFloat.html(rateFloat);
                            clearInterval(counterUp);
                        }
                    }

                },tRate);
            });
        }
    }

    boxShadow(".star-bid-3dbox_1.1",".star-shadow");
    elmInit();
    countDownFinancing(".star-bid-3dbox_1.1",0);
});

/**
 * 精选理财  投资散标 的剩余时间
 * nowTime 获取当前服务器系统时间毫秒数
 * 精选的 num = 0 end为下架时间
 * 投资散标  小微企业 num = 14  消费标 num = 7 end为上架时间
 * 特殊标的 根据上下架时间   只需更改 num的数值
 * **/
function countDownFinancing(elm,num) {
    $(elm).each(function () {
        var that = this;
        //标的上架(下架)时间
        var end = $(that).children(".endTime").val().trim();
        var year = end.slice(0, 4);
        var month = end.slice(4, 6) - 1;
        var day = end.slice(6, 8);
        var hour = end.slice(8, 10);
        var minute = end.slice(10, 12);
        var second = end.slice(12, 14);
        /*//当前系统时间
        var systemTime  = Number($("#systemTime").val().trim());*/
        //结束时间 毫秒数
        var endTime = new Date(year, month, day, hour, minute, second).getTime();
        //当前系统时间 毫秒数
        var nowTime = Number($("#systemTime").val().trim());

        //开始倒计时的总时间
        var soldOutTime = endTime + num * 86400000;
        setInterval(function () {
            nowTime = nowTime+1000;
            //剩余时间 毫秒数
            var surplusTime = soldOutTime - nowTime;
            if (surplusTime > 0) {
                //剩余小时
                int_hour = Math.floor(surplusTime / 3600000);
                surplusTime -= int_hour * 3600000;
                int_minute = Math.floor(surplusTime / 60000);
                surplusTime -= int_minute * 60000;
                int_second = Math.floor(surplusTime / 1000);

                if (int_hour < 10) {
                    int_hour = "00" + int_hour;
                }
                else if (int_hour < 100) {
                    int_hour = "0" + int_hour;
                }

                if (int_minute < 10) {
                    int_minute = "0" + int_minute;
                }
                if (int_second < 10) {
                    int_second = "0" + int_second;
                }
                $(that).find(".hour").html(int_hour);
                $(that).find(".minute").html(int_minute);
                $(that).find(".second").html(int_second);
            } else {
                $(that).find(".hour").html("000");
                $(that).find(".minute").html("00");
                $(that).find(".second").html("00");
            }
        }, 1000);
    });
}

