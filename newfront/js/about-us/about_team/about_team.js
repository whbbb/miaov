
function team(){
    var team_obj={
        parameter: {
            is_ie7: $.browser.msie && $.browser.version == "7.0",
            is_ie8: $.browser.msie && $.browser.version == "8.0",
            team: $("#J_about_team"),
            major: $("#J_about_team").find(".major"),
            collect: $("#J_about_team").find(".collect"),
            team_left: $("#J_about_team").find(".team-left"),
            team_lefttop: $("#J_about_team").find(".team-lefttop"),
            team_right: $("#J_about_team").find(".team-right")

        },
        _init_team:function() {
            var that = this;
            var para = that.parameter;
            if (para.is_ie7 != true && para.is_ie8 != true) {
                para.major.css("opacity", 0);
                para.collect.css("opacity", 0);
                para.team_left.css("opacity", 0);
                para.team_lefttop.css("width", "330px");
                para.team_right.css({"opacity":"0","width":"0"});
                that.te_am();
            }else{
                para.major.css("display", "none");
                para.collect.css("display", "none");
                para.team_left.css("display", "none");
                para.team_lefttop.css("width", "330px");
                para.team_right.css("width", "0");
                setTimeout(function(){
                    para.major.show();
                },700);
                setTimeout(function(){
                    para.collect.show();
                    setTimeout(function(){
                        para.team_left.show();
                        para.team_lefttop.animate({"width":"0"});
                        para.team_right.animate({"width":"330px"});
                    })
                },700);
            }
        },
        te_am:function () {
            $(".major").animate({ "opacity":"1"},1000);
            $(".collect").animate({ "opacity":"1"},1000,function(){
                $(".team-left").animate({"opacity":"1"},500);
                $(".team-lefttop").animate({"width":"0"},500);
                $(".team-right").animate({"width":"330px","opacity":"1"},500);
            });
        },
        init:function(){
            var that=this;
            that._init_team();
        }
    };
    team_obj.init();
};