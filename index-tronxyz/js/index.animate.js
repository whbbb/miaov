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
    });
    function animateBg(){
        cav1.width = pageWidth;
        cav1.height = pageHeight;
        var animateTime = setInterval(function(){
            if(onOff) {
                i += 0.1;
                if (i > 100) {
                    onOff = false;
                }
            }else{
                i-=0.1;
                if(i < 1){
                    onOff = true;
                }
            }
            _init();
        },60);
    }


    _init();
    animateBg();


    function _init(){
        cxt1.drawImage(img1,i,i,1820,1100,0,0,pageWidth,pageHeight);
    }

});
function firsePage(par){

}