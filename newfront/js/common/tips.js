
    $(document).ready(function(){

        var _result_tips = function() {
            var that = this;

            that.parameter = {
                _result_tips_frame_container: $("#J_result_tips_frame_container")
            };

            return that;
        };

        _result_tips.prototype = {

            tips_init: function( show_type, default_close_switch ){
                var that = this;
                var para = that.parameter;

                para._show_type = show_type;

                that._show_type();
                that._init_result_tips( default_close_switch );

                return that;
            },

            _init_result_tips: function( default_close_switch ){
                var that = this;
                var para = that.parameter;

                $.delay_load(
                    function(){
                        return $.mask_layer_load_finish;
                    },
                    function(){
                        that.result_tips_obj = para._result_tips_frame_container.mask_layer(
                            {
                                close_elms: para._result_tips_frame_container.find( "input, span" ),
                                default_close_switch: default_close_switch
                            }
                        );
                    }
                );
            },

            _ajax_tips_operate: function( that ){
                this.parameter._current_type_obj.show().siblings().hide();
                this.result_tips_obj.show();
                that.form.unbind( "submit" );
                that.form.submit();
            },

            show: function(){
                this.parameter._current_type_obj.show().siblings().hide();
                this.result_tips_obj.show();
            },

            _show_type: function(){
                var that = this;
                var para = that.parameter;

                para._all_obj = para._result_tips_frame_container.find( ".result-frame" );
                para._current_type_obj = para._result_tips_frame_container.find( para._show_type );
                para._other_type_obj = para._result_tips_frame_container.find( para._show_type ).siblings();
                if( para._current_type_obj.length > 1 ){
                    $( para._current_type_obj[ 0 ] ).show().siblings().hide();
                }
                else{
                    para._current_type_obj.show().siblings().hide();
                }
            }
        };

        $.result_tips = function( show_type, default_close_switch ){
            var _result_tips_obj = new _result_tips();
            return _result_tips_obj.tips_init( show_type, default_close_switch );
        }
    });
