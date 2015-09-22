
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {

            /*加载  左侧*/
            includePage("#J_particulars","./aid/particulars/particulars.html");
            /* 加载右侧   平台介绍详情*/
            includePage("#J_terrace","./aid/aidbody/terrace/terrace.html");
            /*  加载右侧   平台费用  详情*/
            includePage("#J_outlay","./aid/aidbody/outlay/outlay.html");
           /*  加载右侧  我要理财    详情*/
            includePage("#J_supervise","./aid/aidbody/supervise/supervise.html");
            /*  加载右侧  我要借款   详情*/
            includePage("#J_wantloan","./aid/aidbody/wantloan/wantloan.html");
            /* 加载右侧  优金客账户  详情*/
            includePage("#J_yjkaccount","./aid/aidbody/yjkaccount/yjkaccount.html");
            /*加载 右侧   名词解释  详情*/
            includePage("#J_interpret",'./aid/aidbody/interpret/interpret.html');
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );


function staoclick( eachthat,thisol,clickobj,thislidetails){
    $(eachthat).each(function(){
        var staol=$(this).find(thisol);
        var staoli=staol.find("li");
        staoli.find(clickobj).click(function(){
            var currentli=$(this).parent();
            if(currentli.find(".statutenext").hasClass("retract")){
                currentli.find(".statutenext").removeClass("retract");
                currentli.find(".imgbg").removeClass("imgfafa");
            }else{
                staoli.find(".statutenext").removeClass("retract");
                currentli.find(".statutenext").addClass("retract");
                currentli.find(".imgbg").addClass("imgfafa");
            }
            currentli.find(thislidetails).toggle();
            currentli.siblings().find(thislidetails).hide();
        });
    });
}

