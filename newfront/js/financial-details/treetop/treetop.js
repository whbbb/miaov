$(document).ready(function(){
    /*点击表弟详情等选项   下面三角动画*/
    var speed=500;
    $(".t-treetop").click(function(){
        $(".current").stop().animate({"left":"98px"},speed);
    });
    $(".t-about").click(function(){
        $(".current").stop().animate({"left":"308px"},speed);
    });
    $(".t-tender").click(function(){
        $(".current").stop().animate({"left":"520px"},speed);
    });
    $(".t-discuss").click(function(){
        $(".current").stop().animate({"left":"745px"},speed);
    });
    /*点击标的详情 显示页面 */
    $(".t-treetop").click(function(){
        $(".tree-content").show();
        //Alex Liu 未登录状态时不隐藏提示页面
        $("#J_about").hide();
        $("#J_tender").hide();
        $("#J_discuss").hide();
    });
    /*点击相关文件 显示页面 */
    $(".t-about").click(function(){
        $(".tree-content").hide();
        $("#J_about").show();
        $("#J_tender").hide();
        $("#J_discuss").hide();
    });
    /*点击投标详情 显示页面 */
    $(".t-tender").click(function(){
        $(".tree-content").hide();
        $("#J_about").hide();
        $("#J_tender").show();
        $("#J_discuss").hide();
    });
    /*点击评论 显示页面 */
    $(".t-discuss").click(function(){
        $(".tree-content").hide();
        $("#J_about").hide();
        $("#J_tender").hide();
        $("#J_discuss").show();
    });


});