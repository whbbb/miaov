$(document).ready(function(){
    about_con();
});

function about_con(){
    var contact_obj= {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            contact: $("#J_about_contact"),
            acban_bg: $("#J_about_contact").find(".acban-bg"),
            yinying: $("#J_about_contact").find(".yinying"),
            zuobiao: $("#J_about_contact").find(".zuobiao"),
            cen_1: $("#J_about_contact").find(".cen-1"),
            cen_2:$("#J_about_contact").find(".cen-2")
        },
        _init_contact: function () {
            var that = this;
            var para = that.parameter;
            if (para.is_ie7 != true && para.is_ie8 != true) {
                para.acban_bg .css("opacity","0");
                para.yinying .css({"opacity":"0"});
                para.zuobiao .css({"opacity":"0","top":"-40px"});
                para.cen_1.css({"opacity":"0","right":"-50px"});
                para.cen_2.css({"opacity":"0","right":"-50px"});
                that.about_contact();
            } else {
                para.acban_bg.css("display", "none");
                para.cen_1.css({"display":"none","right":"-100px"});
                para.cen_2.css({"display":"none","right":"-200px"});
                para.yinying.css({"display":"none","height":"255px","width":"0px"});
                para.zuobiao.css({"display":"none","top":"-100px"});
                setTimeout(function(){
                    /*ie7 ie8 动画*/
                    para.acban_bg.show();
                    para.cen_1.show();
                    para.cen_2.show();
                    para.cen_1.animate({"right":"265px"},300,function(){
                        para.cen_1.animate({"right":"225px"},250,function(){
                            para.cen_1.animate({"right":"250px"},200,function(){
                                para.cen_1.animate({"right":"240px"},150);
                            });
                        });
                    });
                    para.cen_2.animate({"right":"115px"},300,function(){
                        para.cen_2.animate({"right":"75px"},250,function(){
                            para.cen_2.animate({"right":"100px"},200,function(){
                                para.cen_2.animate({"right":"90px"},150);
                            });
                        });
                    });
                    setTimeout(function(){
                        para.zuobiao.show();
                        para.zuobiao.animate({"top":"15px"},500,function(){
                            para.zuobiao.animate({"top":"5px"},100,function(){
                                para.zuobiao.animate({"top":"13px"},100,function(){
                                    para.zuobiao.animate({"top":"8px"},50,function(){
                                        para.zuobiao.animate({"top":"10px"},50,function(){
                                            para.yinying.show();
                                            para.yinying.animate({"width":"500px"},100);
                                        });
                                    });
                                });
                            });
                        });
                    });
                },700);
            }
        },
        /*banner 左侧图动画*/
        about_contact:function(){
            $(".acban-bg").animate({"opacity":"1"},2000,function(){
                $(".zuobiao").animate({"opacity":"1","top":"25px"},200,function(){
                    $(this).animate({"top":"5"},100,function(){
                        $(this).animate({"top":"20px"},100,function(){
                            $(this).animate({"top":"10px"},100,function(){
                                $(this).animate({"top":"15px"},50,function(){
                                    $(".yinying").animate({"opacity":"1","width":"500px","height":"255px"},500);
                                });
                            });
                        });
                    });
                });
            });
            /*banner文字动画*/
            $(".cen-1").animate({"opacity":"1","right":"265px"},300,function(){
                $(".cen-1").animate({"right":"225px"},250,function(){
                    $(".cen-1").animate({"right":"250px"},200,function(){
                        $(".cen-1").animate({"right":"240px"},150);
                    });
                });
            });
           $(".cen-2").animate({"opacity":"1","right":"115px"},300,function(){
              $(this).animate({"right":"75px"},250,function(){
                   $(this).animate({"right":"100px"},200,function(){
                      $(this).animate({"right":"90px"},150);
                   });
                });
          });
        },
        init:function() {
            var that=this;
            that._init_contact();
        }
    }
    contact_obj.init();
}