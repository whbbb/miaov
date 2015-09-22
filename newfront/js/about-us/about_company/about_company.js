
$(document).ready(function(){
    ab_company();
});
function ab_company(){
    /*初始化透明度*/
    var sHeight=$(".history").position().top - $(".history").height()*5;
    var maxHeight=$(".history").position().top;
    var onOff = true;
    var company_obj = {
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            company: $( "#J_about_company" ),
            yun:$("#J_about_company").find(".yun"),
            photo1:$("#J_about_company").find(".photo1"),
            photo2:$("#J_about_company").find(".photo2"),
            photo3:$("#J_about_company").find(".photo3"),
            photo4:$("#J_about_company").find(".photo4"),
            photo5:$("#J_about_company").find(".photo5"),
            photo6:$("#J_about_company").find(".photo6"),
            hui:$("#J_about_company").find(".hui"),
            his:$("#J_about_company").find(".history"),
            dream:$("#J_about_company").find(".dream"),
            hisbg:$("#J_about_company").find(".his-bg"),
            his1:$("#J_about_company").find(".his-1"),
            his2:$("#J_about_company").find(".his-2"),
            his3:$("#J_about_company").find(".his-3")
        },
        init: function() {
            var that = this;
            that._init_company();
            that.bind();
        },
        bind: function(){
            var that = this;
            $(window).scroll(function(){
                if(onOff){
                    that.course();
                }
            });
        },
        _init_company:function(){
            var that = this;
            var para = that.parameter;
            if( para.is_ie7 != true && para.is_ie8 != true ){
                para.yun.css({"opacity":"0","left":"-150px"});
                para.photo1.css( { " opacity" : "0", "top":"-350px"});
                para.photo2.css( { " opacity" : "0", "top":"-350px"});
                para.photo3.css( { " opacity" : "0", "top":"-350px"});
                para.photo4.css( { " opacity" : "0", "top":"-350px"});
                para.photo5.css( { " opacity" : "0", "top":"-350px"});
                para.photo6.css( { " opacity" : "0", "top":"-350px"});
                para.hui.css({"opacity":"0","right":"-50px"});
                para.dream.css({"opacity":"0","right":"-50px"} );
                para.hisbg.css( "opacity", 0 );
                para.his1.css( "opacity", 0 );
                para.his2.css( "opacity", 0 );
                para.his3.css( "opacity", 0 );

                that.company();
            }
            else{
                para.yun.css( {"display":"none","left":"-150px"});
                para.photo1.css( {"display":"none","top":"-350px"});
                para.photo2.css( {"display":"none","top":"-350px"});
                para.photo3.css( {"display":"none","top":"-350px"});
                para.photo4.css( {"display":"none","top":"-350px"});
                para.photo5.css( {"display":"none","top":"-350px"});
                para.photo6.css( {"display":"none","top":"-350px"} );
                para.hui.css( {"display":"none","right":"-100px"});
                para.dream.css( {"display":"none","right":"-100px"});
                para.hisbg.css( {"display":"none","width":"1000px"} );
                para.his1.css( {"display":"none","left":"60px"} );
                para.his2.css( {"display":"none","left":"370px"} );
                para.his3.css( {"display":"none","left":"680px"});
                setTimeout(function(){
                    /*ie7  ie8 动画*/
                    para.yun.show();
                    para.yun.animate({"left":"-20px"},600);
                },700);
                setTimeout(function(){
                    para.hui.show();
                    para.hui.animate({"right":"275px"},300,function(){
                        para.hui.animate({"right":"235px"},250,function(){
                            para.hui.animate({"right":"260px"},200,function(){
                                para.hui.animate({"right":"250px"},150);
                            });
                        });
                    });
                },700);
                setTimeout(function(){
                    para.dream.show();
                    para.dream.animate({"right":"155px"},300,function(){
                        para.dream.animate({"right":"115px"},250,function(){
                            para.dream.animate({"right":"140px"},200,function(){
                                para.dream.animate({"right":"130px"},150);
                            });
                        });
                    });
                },700);
                /*ie7  ie8  树上的图片*/
                setTimeout( function(){
                    para.photo1.show();
                    para.photo1.animate({"top":"175px"},600,function(){
                        para.photo1.animate({"top":"185px"},100,function(){
                            para.photo1.animate({"top":"178px"},100,function(){
                                para.photo1.animate({"top":"182px"},100);
                            });
                        });
                    });
                    setTimeout( function(){
                        para.photo2.show();
                        para.photo2.animate({"top":"109px"},500,function(){
                            para.photo2.animate({"top":"118px"},100,function(){
                                para.photo2.animate({"top":"112px"},100,function(){
                                    para.photo2.animate({"top":"115px"},100);
                                });
                            });
                        });
                        setTimeout( function(){
                            para.photo3.show();
                            para.photo3.animate({"top":"-2px"},400,function(){
                                para.photo3.animate({"top":"8px"},100,function(){
                                    para.photo3.animate({"top":"1px"},100,function(){
                                        para.photo3.animate({"top":"5px"},100);
                                    });
                                });
                            });
                            setTimeout( function(){
                                para.photo4.show();
                                para.photo4.animate({"top":"-69px"},300,function(){
                                    para.photo4.animate({"top":"-59px"},100,function(){
                                        para.photo4.animate({"top":"-66px"},100,function(){
                                            para.photo4.animate({"top":"-62px"},100);
                                        });
                                    });
                                });
                                setTimeout( function(){
                                    para.photo5.show();
                                    para.photo5.animate({"top":"-147px"},200,function(){
                                        para.photo5.animate({"top":"-137px"},100,function(){
                                            para.photo5.animate({"top":"-144px"},100,function(){
                                                para.photo5.animate({"top":"-140px"},100);
                                            });
                                        });
                                    });
                                    setTimeout( function(){
                                        para.photo6.show();
                                        para.photo6.animate({"top":"-242px"},100,function(){
                                            para.photo6.animate({"top":"-232px"},100,function(){
                                                para.photo6.animate({"top":"-239px"},100,function(){
                                                    para.photo6.animate({"top":"-235px"},100);
                                                });
                                            });
                                        });
                                    }, 500 );
                                }, 500 );
                            }, 500 );
                        }, 500 );
                    }, 500 );
                },1000 );
                /*ie7  ie8 底部优金客历程动画*/
                ie_course();
                function ie_course(){
                    var that = this;
                    $(window).scroll(function(){
                        if(onOff){
                            if($(window).scrollTop()>sHeight && $(window).scrollTop()< maxHeight){
                                setTimeout(function(){
                                    para.hisbg.show();
                                    setTimeout(function(){
                                        para.his1.show();
                                        setTimeout(function(){
                                            para.his2.show();
                                            setTimeout(function(){
                                                para.his3.show();
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            }
                        }
                    });
                }
            }
        },
        company: function(){
            var that = this;
            /*banner动画*/
            $(".yun").animate({
                "opacity": 1,
                "left": "-20px"
            }, 1000);
            /*文字左右回弹的动画*/
            $(".hui").animate({ "opacity": 1, "right": "275px"}, 300, function () {
                $(this).animate({ "right": "235px" }, 250, function () {
                    $(this).animate({"right": "260px" }, 200, function () {
                        $(this).animate({"right": "250px" }, 150);
                    });
                });
            });
            $(".dream").animate({ "opacity": "1", "right": "155px"}, 300, function () {
                that.photo();
                $(this).animate({"right": "115px" }, 250, function () {
                    $(this).animate({"right": "140px" }, 200, function () {
                        $(this).animate({"right": "130px" }, 150);
                    });
                });
            });
        },
        /*树上的图片*/
        photo: function(){
            $(".photo1").animate({"opacity":"1", "top":"175px" },600,function(){
                $(this).animate({"top":"185"},100,function(){
                    $(this).animate({"top":"178px"},100,function(){
                        $(this).animate({"top":"182px"},100);
                    })
                });
                $(".photo2").animate({"opacity":"1", "top":"109px" },500,function(){
                    $(this).animate({"top":"118px"},100,function(){
                        $(this).animate({"top":"112px"},100,function(){
                            $(this).animate({"top":"115px"},100);
                        });
                    });
                    $(".photo3").animate({ "opacity":"1", "top":"-2px"},400,function(){
                        $(this).animate({"top":"8px"},100,function(){
                            $(this).animate({"top":"1px"},100,function(){
                                $(this).animate({ "top":"5px"},100);
                            });
                        });
                        $(".photo4").animate({ "opacity":"1", "top":"-69px" },300,function(){
                            $(this).animate({"top":"-59px"},100,function(){
                                $(this).animate({ "top":"-66px"},100,function(){
                                    $(this).animate({"top":"-62px"},100);
                                });
                            });
                            $(".photo5").animate({"opacity":"1","top":"-147px"},200,function(){
                                $(this).animate({"top":"-137px"},100,function(){
                                    $(this).animate({"top":"-144px"},100,function(){
                                        $(this).animate({"top":"-140px"},100);
                                    });
                                });
                                $(".photo6").animate({ "opacity":"1","top":"-242px"},100,function(){
                                    $(this).animate({"top":"-232px"},100,function(){
                                        $(this).animate({"top":"-239px"},100,function(){
                                            $(this).animate({"top":"-235px"},100);
                                        })
                                    });
                                });
                            });
                        });
                    });
                });
            });
        },

        /*底部优金客历程动画*/
        course: function(){
            if($(window).scrollTop()>sHeight && $(window).scrollTop()< maxHeight){
                $(".his-bg").animate({ "width":"1000px","opacity":1 },1000,function(){
                    $(".his-1").animate({ "left":"60px","opacity":"1"},800,function(){
                        $(".his-2").animate({ "left":"370px","opacity":"1" },800,function(){
                            $(".his-3").animate({  "left":"680px", "opacity":"1" },800);
                        });
                    });
                });
            }
        }
    };
    company_obj.init();
}