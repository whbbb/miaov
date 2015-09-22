$(document).ready(function(){

    var _my_recharge_cyber = {
        parameter: {
            /*招商银行  浦发银行  农业银行  工商银行  交通银行  建设银行  中国银行  中信银行  广发银行  北京银行  光大银行  民生银行  平安银行  上海银行 华夏银行 邮政银行*/
            arr_num: ["cmb","spdb","abc","icbc","comm","ccb","boc","cncb","cgb","bjb","ceb","cmsb","pab","shb","hxb","psbc"],
            _recharge_cyber_form: $( "#J_rech_cyber_form" )
        },

        init: function(){
            var that = this;
            var para = that.parameter;

            that.init_verify( para._recharge_cyber_form );
            that.bind();

            load_tips( ".recharge-complete", function( obj ){
                _my_recharge_cyber.parameter._my_recharge_cyber_result_tips = obj;
            } );
        },

        init_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish && _my_recharge_cyber.parameter._my_recharge_cyber_result_tips; }, function () {
                para.verify_obj = target_form.verify();
                para.verify_obj.init( function(){
                    _my_recharge_cyber.parameter._my_recharge_cyber_result_tips._ajax_tips_operate( para.verify_obj );
                } );
            } );
        },

        bind: function(){
            var that = this;
            var para = that.parameter;

            $(".sundry-bank li").click( function(){
                $(this).addClass("thisborder").siblings().removeClass("thisborder");
                $(this).find(".cur-select").addClass("c-select");
                $(this).siblings().find(".cur-select").removeClass("c-select");
                $(".idbreed").eq($(this).index()).show().siblings(".idbreed").hide();
                $("#thisbanknum").val( para.arr_num[$(this).index()] );
            });
            /*选择更多银行鼠标经过效果*/
            $(".selectmore").mouseenter( function(){
                $(this).css("color","#33cc99");
                $(".sjiao").css("background-position","0 0");
            }).mouseleave(function(){
                $(this).css("color","#333");
                $(".sjiao").css("background-position","0 -5px");
            });
            /*选择更多银行  点击时间 */
            $(".selectmore").click( function(){
                $(".sundry-bank>li").show();
                $(this).hide();
            });
        }
    };

    _my_recharge_cyber.init();

});