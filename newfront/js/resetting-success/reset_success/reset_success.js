$(document).ready(function(){
    //倒计时
    function count_down(){
        var time = 3;
        var target = $( "#threetime");
        target.html( time );
        var inv = window.setInterval( function(){
            target.html( --time );
            if( time==0 ){
                window.clearInterval(inv);
                target.html( time );
                /*跳转到首页*/
                var url = target.attr( "target-url").trim();
                if( url == "" ){
                    url = "/product.do";
                }

                window.location.href= url;
            }
        }, 1000 );
    }

    count_down();
});