    function oration(){
        var oration_obj = {
            parameter: {
                is_ie7: $.browser.msie && $.browser.version == "7.0",
                is_ie8: $.browser.msie && $.browser.version == "8.0",
                oration: $("#J_about_oration"),
                genheader: $("#J_about_oration").find(".gen-header"),
                genhead: $("#J_about_oration").find(".gen-head"),
                present: $("#J_about_oration").find(".present")
            },
            _init_oration:function() {
                var that = this;
                var para = that.parameter;
                if (para.is_ie7 != true && para.is_ie8 != true) {
                    para.genheader.css("opacity", 0);
                    para.genhead.css({"opacity":"0","height":"0px"});
                    para.present.css("opacity", 0);
                    that.ora_tion();
                }else{
                    para.genheader.css({"display":"none"});
                    para.genhead.css({"display":"none","height":"0px"});
                    para.present.css({"display":"none"});
                    setTimeout(function(){
                        /*ie7  ie8  动画部分*/
                        para.genheader.show();
                        setTimeout(function(){
                            para.genhead.show();
                            para.genhead.animate({"height":"260px"},600);
                        },700);
                    },700);
                    setTimeout(function(){
                        para.present.show();
                    },700);
                }
            },
            ora_tion: function (){
                /*总经理头像*/
                $(".gen-header").animate({"opacity":"1"},1000,function(){
                    $(".gen-head").animate({"height":"260px","opacity":"1"},1000);
                });
                $(".present").animate({"opacity":"1"},1000);
            },
            init: function () {
                var that = this;
                that._init_oration();
            }
        }
        oration_obj.init();
    }


