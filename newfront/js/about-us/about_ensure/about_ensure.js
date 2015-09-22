$(document).ready(function(){

});
function ensure(){
    var ensure_obj= {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            aptop: $("#J_about_ensure"),
            major: $("#J_about_ensure").find(".major"),
            depend: $("#J_about_ensure").find(".depend"),
            huan1: $("#J_about_ensure").find(".huan1"),
            huan1_1: $("#J_about_ensure").find(".huan1-1"),
            huan2: $("#J_about_ensure").find(".huan2"),
            huan2_2: $("#J_about_ensure").find(".huan2-2"),
            pao: $("#J_about_ensure").find(".pao")
        },
        _init_ensure: function () {
            var that = this;
            var para = that.parameter;
            if (para.is_ie7 != true && para.is_ie8 != true) {
                para.major.css({"opacity":"0","right":"-50px"});
                para.depend.css({"opacity":"0","right":"-90px"});
                para.pao.css({"left":"405px","top":"105px","width":"85px","height":"70px"});
                that.about_ensure();
            } else {
                para.huan1.css({"display":"none","height":"205px","top":"20px"});
                para.huan1_1.css({"display":"none"});
                para.huan2.css({"display":"none" ,"height":"200px","top":"20px"});
                para.huan2_2.css({"display":"none"});
                para.major.css({"display":"none","right":"-100px"});
                para.depend.css({"display":"none","right":"-200px"});
                /*ie 7   ie  8  动画*/
                setTimeout(function(){
                    var that=this;
                    para.huan1.show();
                    para.huan2.show();
                    para.major.show();
                    para.depend.show();
                    para.major.animate({"right":"165px"},300,function(){
                        para.major.animate({"right":"125px"},250,function(){
                            para.major.animate({"right":"150px"},200,function(){
                                para.major.animate({"right":"140px"},150);
                            });
                        });
                    });
                    para.depend.animate({"right":"70px"},300,function(){
                         para.depend.animate({"right":"30px"},250,function(){
                            para.depend.animate({"right":"55px"},200,function(){
                                para.depend.animate({"right":"45px"},150);
                            });
                        });
                    });

                },700)
            }
        },

        /*  左圆环旋转*/
        about_ensure : function(){
            var that=this;
            that.reset1_1();
            that.reset1_2();
            that.reset2_1();
            that.reset2_2();
            var time = 250;
            /*圆环动画  01*/
            $(".huan1").animate({"opacity":"1"},250,function(){
                $(".huan1").animate({"height":"0px","top":"120px"},time,function(){
                    $(".huan1-1").animate({"height":"210px","top":"20px"},time,function(){
                        that.huan2();
                        $(".huan1-1").animate({"height":"0","top":"120px"},time,function(){
                            $(".huan1").animate({"height":"210px","top":"20px"},time,function(){
                                /*第二圈*/
                                $(".huan1").animate({"height":"0","top":"120px"},time,function(){
                                    $(".huan1-1").animate({"height":"210px","top":"20"},time,function(){
                                        $(".huan1-1").animate({"height":"0","top":"120px"},time,function(){
                                            $(".huan1").animate({"height":"210px","top":"20px"},time,function(){
                                                that.paopao();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
            /* 文字回弹动画*/
            $(".major").animate({"opacity":"1","right":"165px"},300,function(){
                $(this).animate({"right":"125px"},250,function(){
                    $(this).animate({"right":"150px"},200,function(){
                        $(this).animate({"right":"140px"},150);
                        });
                    });
                });
            $(".depend").animate({"opacity":"1","right":"70px"},300,function(){
                $(this).animate({"right":"30px"},250,function(){
                    $(this).animate({"right":"55px"},200,function(){
                        $(this).animate({"right":"45px"},150);
                    });

                });
            });
        },
        /*圆环 位置高度 初始化*/
        reset1_1: function (){
            $(".huan1").css({"height":"210px","top":"20px","opacity":"1"});
        },
        reset1_2: function (){
            $(".huan1-1").css({"height":"0px","top":"120px"});
        },
        reset2_1: function (){
            $(".huan2").css({"height":"210px","top":"20px","opacity":"1"});
        },
        reset2_2: function (){
            $(".huan2-2").css({"height":"0px","top":"120px"});
        },
        /*圆环动画  02*/
        huan2 : function (){
            var time = 250;
            $(".huan2").animate({"opacity":"1"},250,function(){
                $(".huan2").animate({"height":"0px","top":"120px"},time,function(){
                    $(".huan2-2").animate({"height":"210px","top":"20px"},time,function(){
                        $(".huan2-2").animate({"height":"0","top":"120px"},time,function(){
                            $(".huan2").animate({"height":"210px","top":"20px"},time,function(){
                                /*第二圈*/
                                $(".huan2").animate({"height":"0","top":"120px"},time,function(){
                                    $(".huan2-2").animate({"height":"210px","top":"20"},time,function(){
                                        $(".huan2-2").animate({"height":"0","top":"120px"},time,function(){
                                            $(".huan2").animate({"height":"210px","top":"20px"},time);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        },
        /*泡泡的动画*/
        paopao:function(){
            var time=180;
            $(".pao").animate({"width":"70px","height":"65px","left":"410px","top":"120px"},time,function(){
                $(".pao").animate({"width":"85px","height":"70px","left":"405px","top":"110px"},time,function(){
                    $(".pao").animate({"width":"70px","height":"65px","left":"410px","top":"120px"},time,function(){
                        $(".pao").animate({"width":"85px","height":"70px","left":"405px","top":"110px"},time);
                    });
                });
            });
        },
        init:function() {
            var that=this;
            that._init_ensure();
        }
    };
    ensure_obj.init();
}