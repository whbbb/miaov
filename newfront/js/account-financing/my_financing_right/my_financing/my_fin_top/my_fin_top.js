$(document).ready(function(){
    var _fin_top={
        parameter: {
            _fin_obj: $("#J_my_fin_top"),
            _fin_box:$("#J_my_fin_top .finbigbox"),
            _fin_ul: $("#J_my_fin_top .fin-yet"),
            _fin_yet: $("#J_my_fin_top .fin-yet .yet"),
            _fin_current: $("#J_my_fin_top .fin-yet .finShow"),
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
            /*鼠标经过事件*/
            para._fin_box.each(function(){
                var bigBox=$(this);
                var boxWidth=bigBox.width();
                bigBox.mouseenter(function(){
                    bigBox.find(para._fin_yet).hide();
                    bigBox.find(para._fin_current).show();
                });
                bigBox.mouseleave(function(){
                    bigBox.find(para._fin_current).hide();
                    bigBox.find(para._fin_yet).show();
                });
            });
        }
    };
    _fin_top.init();

});