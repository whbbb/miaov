$(document).ready(function(){
    var _invest={
        parameter:{
            _invest_obj:$("#J_invest"),
            _invest_nav:$("#J_invest .invest-nav"),
            _invest_nav_li:$("#J_invest .invest-nav li"),
            _current_triangle:$(".current-triangle"),
            _speed:500
        },

        init: function () {
            var that = this;
            that.bind();
        },

        bind:function(){
                var that=this;
                var para = that.parameter;

                /*点击  优房宝   优车宝   优选计划  薪金宝   底部三角 动画*/
                var thisLeft=para._current_triangle.css("left");

                that._invest_current();
                para._invest_nav_li.click(function(){
                    var thisLi=$(this);
                    var leftNumber=$.parseNumber(thisLeft);
                    var li_val=thisLi.val();
                    $("#invest_hidden").val(li_val);
                    var hidden_val=$("#invest_hidden").val();
                    var indexLeft=hidden_val*thisLi.width()+leftNumber+"px";
                    if(hidden_val){
                        thisLi.addClass("invest-current").siblings().removeClass("invest-current");
                        para._current_triangle.stop().animate({"left":indexLeft},para._speed);
                    }
                });
        },
        _invest_current:function(){
            var that=this;
            var para = that.parameter;

            var thisLeft=para._current_triangle.css("left");
            var leftNumber=$.parseNumber(thisLeft);
            var hidden_val=$("#invest_hidden").val();
            var indexLeft=hidden_val*para._invest_nav_li.width()+leftNumber+"px";
            para._invest_nav_li.addClass("invest-current").siblings().removeClass("invest-current");
            para._current_triangle.stop().animate({"left":indexLeft},para._speed);
        }
    };
    _invest.init();
});

