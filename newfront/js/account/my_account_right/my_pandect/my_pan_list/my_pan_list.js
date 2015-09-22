$(document).ready(function(){

    $(".fl-select").bind( "value-change", function(){
        var target = $( this );
        var url = target.attr( "submit-url" );
        var value = target.attr( "select-value" );
        window.location.href = url + value;
    });

   $(".takeoff").css("display","none");
//   点击底部列表 小导航  收支明细  充值记录  提现记录
    $(".fltit li").click(function(){
         var current_val =$(this).val();
         var hidden_val=$("#nav_hidden").val( current_val );
         if( hidden_val.val()){
             var val_show=$("#nav_hidden").val();
             $(".fltit li").eq(val_show).addClass("greenfont").siblings().removeClass("greenfont");
         }
    });

    function change_state(){
        var val_show=$("#nav_hidden").val();
        $(".fltit li").eq(val_show).addClass("greenfont").siblings().removeClass("greenfont");
    }

    change_state();

    var record_index = -1;
/*点击列表 出现详情信息 以及动画*/
    var speed=600;
    /*nav_number  分页class   date_takeoff  对应table下的.takeoff   this_tr 当前的tr  显示详细信息的外div*/
    function thistr_animate ( nav_number , date_takeoff , this_tr , list_div){
        $(nav_number).hide();
        $(list_div).hide();
        this_tr.css("top",record_index*this_tr.height());
        var thistakeoff=$(date_takeoff).eq(record_index);
        this_tr.addClass("fafa").siblings().hide();
        thistakeoff.show().siblings().hide();
        this_tr.animate({"top":"0"},speed, function(){
            $( list_div).show();
        });
    }
    /*点击小标题*/
    function click_acctit( nav_num ,this_table ){
        $(".takeoff").css("display","none");
        $(this_table).find("tr").show().removeClass("fafa");
        $(this_table).show().siblings().hide();
        $(nav_num).show();
    }
    /*点击记录详情之后的 X  X的效果*/
    $(".recordoff").click(function(){
        $(".takeoff").hide();
        var retop=record_index*35+"px";
        var lasttable=$(this).parent().parent().prev();
        lasttable.find("tr").eq(record_index).animate({"top":retop},speed,function(){
            lasttable.find("tr").eq(record_index).css("top",0);
            $(this).removeClass("fafa").siblings().show();
            $(".pagination").show();
        });
    });
    /*获取index值*/
    function index_obj_num( current_tr , thistr , index){
        $.each( $(current_tr), function( i, item ){
            if( thistr[0] == item ){
                index = i;
                return false;
            }
        } );
        record_index = index;
    }
    //    点击收支明细
    $(".income-pay-detail").click(function(){
        click_acctit(".pagination",".re-date");
    });
    /*$(".re-date tr").click(function(){
        var thistr=$(this);
        var product = -1;
        if($(".record tr").hasClass("fafa")){
            return false;
        }else{
            index_obj_num(".re-date tr",thistr,product);
            thistr_animate(".pagination",".de-date .takeoff",thistr,".de-date" );
        }

    });*/
//   点击  充值记录
    $(".recharge-record").click( function(){
        click_acctit(".pagination",".remold");
    });
    /*$(".remold tr").click(function(){
        var thistr=$(this);
        var product = -1;
        if($(".remold tr").hasClass("fafa")){
            return false;
        }else {
            index_obj_num(".remold tr", thistr, product);
            thistr_animate(".pagination", ".de-remold .takeoff", thistr, ".de-remold");
        }
    });*/
//   点击提现记录
    $(".draw-record").click(function(){
        click_acctit(".pagination",".remarks");
    });
   /* $(".remarks tr").click(function(){
        var thistr=$(this);
        var product = -1;
        if($(".remarks tr").hasClass("fafa")){
            return false;
        }else {
            index_obj_num(".remarks tr", thistr, product);
            thistr_animate(".pagination", ".de-remarks .takeoff", thistr, ".de-remarks");
        }
    });*/
    /*列表中的黄色字和绿色字*/
   function orgreen(){
       $(".third").each(function(){
           var third=$(this);
           /* var date = value.slice(0,3) + ":" + value.slice(3,5)+":"+ value.slice(5,7);*/
           var thsli=third.html().slice(0,1);
           if(thsli =="+"){
               third.addClass("orangefont");
           }else if(thsli=="-"){
               third.addClass("greenfont");
           }
       });
   }
    orgreen();

    /*分页文字点击换颜色*/
    $(".pagination li").click(function(){
        $(this).addClass("current-page").siblings().removeClass("current-page");
    });
    //刷新后页面仍是之前的选中状态



});