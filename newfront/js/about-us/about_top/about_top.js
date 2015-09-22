$(document).ready(function(){


    /*点击切换文字颜色*/
    $(".a-top li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        defaultCss();
    });
    /*点击公司简介*/
    $(".about-company").click(function(){
        $(this).find(".a-com").css("backgroundPosition","0 -51px");
        $("#J_about_company").show().siblings().hide();
        if($(this).hasClass("a-current")){
            return false;
        }
        ab_company();
        $(this).addClass("a-current").siblings().removeClass("a-current");
    });
    /*点击总经理致辞*/
    $(".about-oration").click(function(){
        $(this).find(".a-ora").css("backgroundPosition","-28px -51px");
        $("#J_about_oration").show().siblings().hide();
        if($(this).hasClass("a-current")){
            return false;
        }
        /*总经理致辞js*/
        oration();
        $(this).addClass("a-current").siblings().removeClass("a-current");
    });
    /*点击安全保障*/
    $(".about-ensure").click(function(){
        $(this).find(".a-ens").css("backgroundPosition","-60px -51px");
        $("#J_about_ensure").show().siblings().hide();
        if($(this).hasClass("a-current")){
            return false;
        }
        ensure();
        $(this).addClass("a-current").siblings().removeClass("a-current");

    });
    /*点击管理团队*/
    $(".about-team").click(function(){
        $(this).find(".a-team").css("backgroundPosition","-89px -51px");
        $("#J_about_team").show().siblings().hide();
        if($(this).hasClass("a-current")){
            return false;
        }
        team();
        $(this).addClass("a-current").siblings().removeClass("a-current");
    });
    /*点击招贤纳士*/
    $(".about-precruit").click(function(){
        $(this).find(".a-pre").css("backgroundPosition","-131px -51px");
        $("#J_about_precruit").show().siblings().hide();
        if($(this).hasClass("a-current")){
            return false;
        }
        ap_top();
        $(this).addClass("a-current").siblings().removeClass("a-current");
    });
    /*点击联系我们*/
    $(".about-contact").click(function(){
        $(this).find(".a-con").css("backgroundPosition","-168px -51px");
        $("#J_about_contact").show().siblings().hide();
        if($(this).hasClass("a-current")){
            return false;
        }
        about_con();
        $(this).addClass("a-current").siblings().removeClass("a-current");
    });


    /*  顶部图片初始化*/
        function  defaultCss(){
            $(".a-com").css("backgroundPosition","0 0");
            $(".a-ora").css("backgroundPosition","-28px 0");
            $(".a-ens").css("backgroundPosition","-60px 0");
            $(".a-team").css("backgroundPosition","-89px 0");
            $(".a-pre").css("backgroundPosition","-130px 0");
            $(".a-con").css("backgroundPosition","-168px 0");
        }



});
