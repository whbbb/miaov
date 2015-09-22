$(document).ready(function(){
    ap_top();
});

function ap_top(){
    var aptop_obj= {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            aptop: $("#J_ap_top"),
            banner_bg: $("#J_ap_top").find(".banner-bg"),
            meng: $("#J_ap_top").find(".meng"),
            resume: $("#J_ap_top").find(".resume"),
            mailbox:$("#J_ap_top").find(".mailbox")
        },
        _init_aptop: function () {
            var that = this;
            var para = that.parameter;
            if (para.is_ie7 != true && para.is_ie8 != true) {
                para.banner_bg.css("opacity", 0);
                para.meng.css({"width":"351px","height":"255px","top":"0px","left":"72px"});
                para.resume.css({"opacity":"0","right":"0"});
                para.mailbox.css({"opacity":"0","right":"0"});
                that.about_aptop();
            } else {
                para.banner_bg.css("display", "none");
                para.meng.css("display","none");
                para.resume.css({"display":"none","right":"-100px"});
                para.mailbox.css({"display":"none","right":"-200px"});
                setTimeout(function(){
                    para.banner_bg.show();
                    para.resume.show();
                    para.mailbox.show();
                    para.resume.animate({"right":"165px"},300,function(){
                        para.resume.animate({"right":"125px"},250,function(){
                            para.resume.animate({"right":"150px"},200,function(){
                                para.resume.animate({"right":"140px"},150);
                            });
                        });
                    });
                    para.mailbox.animate({"right":"100px"},300,function(){
                        para.mailbox.animate({"right":"60px"},250,function(){
                            para.mailbox.animate({"right":"85px"},200,function(){
                                para.mailbox.animate({"right":"75px"},150);
                            });
                        });
                    });
                },700)
            }
        },
        about_aptop : function(){
            /*动画--------banner的左侧部分*/
            $(".meng").css({"width":"351px","height":"255px","top":"0px","left":"72px"});
            $(".banner-bg").css("opacity","0");
            $(".banner-bg").animate({"opacity":"1"},500);
            $(".meng").animate({"width":"8000px","height":"4500px","top":"-2000px","left":"-3720px"},1000);
            $()
            /*动画--------banner的右侧文字部分*/
            $(".resume").animate({"opacity":"1","right":"165px"},300,function(){
                $(this).animate({"right":"125px"},250,function(){
                    $(this).animate({"right":"150px"},200,function(){
                        $(this).animate({"right":"140px"},150);
                    });
                });
            });
            $(".mailbox").animate({"opacity":"1","right":"100px"},300,function(){
                $(this).animate({"right":"60px"},250,function(){
                    $(this).animate({"right":"85px"},200,function(){
                        $(this).animate({"right":"75px"},150);
                    });
                });
            });
        },
        init:function() {
            var that=this;
            that._init_aptop();
        }
    }
    aptop_obj.init();
}