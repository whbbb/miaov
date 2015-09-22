$(document).ready(function(){
    var _resetp1 ={
        parameter:{
            _resetp3_obj:$("#J_resetp3-form"),
            _resetp3_button:$("#J_resetp3-form #resetp3-next"),
            _resetp3_input1:$("#J_resetp3-form input[data-name='password']"),
            _resetp3_input2:$("#J_resetp3-form input[data-name='re_password']")
        },
        bind: function(){
            var that = this;
            var para = that.parameter;

            //提现按钮click事件绑定
            para._resetp3_button.bind( "click", function(){
                para._resetp3_obj.submit();
            } );
        },
        init: function () {
            var that = this;
            that.init_verify( that.parameter._resetp3_obj );
            that.bind();
        },

        init_verify: function( target_form ){
            var that = this;
            var para = that.parameter;

            $.delay_load( function () { return $.verify_load_finish; }, function () {
                para.verify_obj = target_form.verify();
                para.verify_obj.init();
            } );
        }
    };
    _resetp1.init();
});