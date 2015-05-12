/**
 * Created by Jacky.Wang on 2015/5/12.
 */

/**
 *首页画布动画效果模块
 */
$().ready(function(){
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    var cav1 = document.getElementById("cav1");
    var img1 = document.getElementById("img1");
    var cxt1 = cav1.getContext("2d");
    var i = 0;
    var onOff = true;

    $(window).resize(function(){
        pageHeight = $(window).height();
        pageWidth = $(window).width();
        animateFirst();
    });
    function animateFirst(){
        cav1.width = pageWidth;
        cav1.height = pageHeight;
        setInterval(function(){
            if(onOff) {
                i += 0.1;
                if (i > 100) {
                    onOff = false;
                }
            }
            _init();
            console.log(i);
        },50);
    }


    _init();
    animateFirst();


    function _init(){
        cxt1.drawImage(img1,i,i,1000,700,0,0,pageWidth,pageHeight);
    }

});
function firsePage(par){

}