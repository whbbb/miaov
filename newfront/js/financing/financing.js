
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
            //加载  头部  选项模块
            includePage( "#J_fin_top", "./fin_top/fin_top.html" );
            /*加载  优房宝 页面*/
            includePage( "#J_antrum", "./antrum/antrum.html" );
            /*加载  优车宝 页面*/
            includePage( "#J_machine", "./machine/machine.html" );
            /*加载  优选计划  页面*/
            includePage( "#J_arranged", "./arranged/arranged.html" );
            /*加载  薪金宝 页面*/
            /*includePage( "#J_metals", "./metals/metals.html" );*/
            /*加载  公共右侧选择 页面*/
            includePage( "#J_financing_choose", "./financing_choose/financing_choose.html" );
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );


/*理财投标动画*/
/*anClass  车 房 优选计划 薪金宝 外面的div的名*/
/*hint     提示的class名*/
/*bar     绿色条的class名*/
/*num      百分比  class名*/
function  anim(anClass,hint,bar,num){
    var cpBox = $(anClass);
    $.each(cpBox ,function(){
        $(this).find( hint ).css({left:"0"});
        $(this).find( bar ).css({width:"0"});
        /*总额*/
        var zongMoney = Number($(this).find(".zongMoney").val().trim());
        /*余额*/
        var yuMoney = Number($(this).find(".yuMoney").val().trim());
        /* 已投金额所占百分比的数值（不带百分号）   （百分号之前的数值） （总-余）/  总 *100 */
        var MoneyPer = Math.floor((zongMoney - yuMoney) / zongMoney * 100);
        var val = $(this).find(num);
        var tPer = Math.round(800 / MoneyPer);
        var count = 0;

        var target_1 = $( this).find( hint );
        var target_2 = $(this).find( bar );

        var target_left =  - 11;
        var target_width = 0;

        var cpUp = setInterval(function () {
            target_left += 1;
            target_width += 1;

            target_1.css( "left", target_left + "%" );
            target_2.css( "width", target_width + "%" );

            if (count < MoneyPer) {
                count++;
                val.html(count + '%');
            } else {
                val.html(MoneyPer + '%');
                clearInterval(cpUp);
            }
        },tPer);
    });
}

