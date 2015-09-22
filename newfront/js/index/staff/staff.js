/**
 * Created by admin on 2015/4/15.
 */
$().ready(function(){

    var onOff = true;
    var elmStaff = $("#J_staff");
    var staffHeight = elmStaff.position().top - elmStaff.height()*0.8;
    var staffMaxHeight = elmStaff.position().top + elmStaff.height()*0.1;
    var staffBox = $(".staff-box");

    $(window).scroll(function(){
        if(onOff){
            elmInit();
        }
    });

    function elmInit(){
        if ($(window).scrollTop() >= staffHeight && $(window).scrollTop() <= staffMaxHeight ) {
            onOff = false;
            staffBox.each(function () {
                var remainMoney = Number($(this).find(".remainMoney").val().trim());
                var raiseMoney = Number($(this).find(".raiseMoney").val().trim());
                var remainMoneyPer = Math.floor((raiseMoney - remainMoney) / raiseMoney * 100);

                var count = 0;
                var percent = $(this).find(".val");

                var tPer = Math.round(1500 / remainMoneyPer);
                var scoreline = Math.floor(100 * ((raiseMoney - remainMoney) / raiseMoney));
                $(this).find(".progress-bar").animate({width: scoreline + '%'}, 2000);
                $(this).find(".progress-val").animate({left: scoreline + '%'}, 2000);
                var showRaiseMoney = raiseMoney / 10000;

                $(this).find(".raise-money").html(formatMoney(showRaiseMoney));
                var counterUp = setInterval(function () {
                    if (count < remainMoneyPer) {
                        count++;
                        percent.html(count + '%');
                    } else {
                        percent.html(remainMoneyPer + '%');
                        clearInterval(counterUp);
                    }
                },tPer);
            });
        }
    }

    boxShadow(".staff-3dbox_1.1",".shadow");
    elmInit();
});


