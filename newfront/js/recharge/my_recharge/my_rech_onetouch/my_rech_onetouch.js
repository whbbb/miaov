$(document).ready(function(){

    var _my_recharge_one_touch = {
        parameter: {
            _one_touch_form: $( "#J_one_touch_form" )
        },

        init: function(){
            var that = this;
            var para = that.parameter;

            that.init_verify( para._one_touch_form );
            that.bind();

            load_tips( ".recharge-complete", function( obj ){
                _my_recharge_one_touch.parameter._my_recharge_one_touch_result_tips = obj;
            } );
        },

        init_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish && _my_recharge_one_touch.parameter._my_recharge_one_touch_result_tips; }, function () {
                para.verify_obj = target_form.verify();
                para.verify_obj.init( function(){
                    _my_recharge_one_touch.parameter._my_recharge_one_touch_result_tips._ajax_tips_operate( para.verify_obj );
                } );
            } );
        },

        bind: function(){

            $(".recharge li").click(function(){
                $(this).addClass("curren-trecharge").siblings().removeClass("curren-trecharge");
            });

            $(".onekey").click(function(){
                $(".onekey-part").show();
                $(".select-bank").hide();
            });

            $(".cyberbank").click(function(){
                $(".select-bank").show();
                $(".onekey-part").hide();
            });
        }
    };

    _my_recharge_one_touch.init();
});