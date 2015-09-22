$(document).ready(function(){

    //倒计时
   function count_down(){
       var time = 15;
       $( "#skipgreen").html( time );
       var inv = window.setInterval( function(){
           $( "#skipgreen").html( --time );
           if( time==0 ){
               window.clearInterval(inv);
               $( "#skipgreen").html( time );
               /*跳转到首页*/
               window.location.href= "product.do";
           }
       }, 1000 );
   };
    count_down();
});