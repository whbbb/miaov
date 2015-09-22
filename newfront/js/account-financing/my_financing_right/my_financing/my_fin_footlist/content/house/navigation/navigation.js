$(document).ready(function() {
    var _navigation = {
        parameter: {
            _nav_obj: $("#J_navigation"),
            _nav_list:$("#J_navigation .inv-list-nav"),
            _nav_li:$("#J_navigation .inv-list-nav li"),
            _nav_li_current: $( ".listnav-current" ),
            _speed:600
        },
        init: function () {
            var that = this;
            var para = that.parameter;

            that.bind();
        },
        bind: function () {
            var that=this;
            var para=that.parameter;

            var thisLeft=para._nav_li_current.css("left");
            var leftNumber=$.parseNumber(thisLeft);

            that._nav_li_default();

            para._nav_li.click(function(){
                var thisLi=$(this);
                var current_val=thisLi.val();
                $("#details-nav").val(current_val);
                var nav_index=$("#details-nav").val();
                var indexLeft=nav_index*thisLi.width()+leftNumber+"px";
                if(nav_index){
                    thisLi.addClass("green-current").siblings().removeClass("green-current");
                    para._nav_li_current.stop().animate({"left":indexLeft},para._speed);
                    para._nav_obj.siblings("#J_house_body").find(".house").eq(nav_index).show().siblings().hide();
                }
            });
        },
        _nav_li_default:function (){
            var that=this;
            var para=that.parameter;

            var nav_index=$("#details-nav").val();
            var thisLeft=para._nav_li_current.css("left");
            var leftNumber=$.parseNumber(thisLeft);
            var indexLeft=nav_index*para._nav_li.width()+leftNumber+"px";
            para._nav_li.addClass("green-current").siblings().removeClass("green-current");
            para._nav_li_current.stop().animate({"left":indexLeft},para._speed);
            para._nav_obj.siblings("#J_house_body").find(".house").eq(nav_index).show().siblings().hide();
        }
    };
    _navigation.init();
});