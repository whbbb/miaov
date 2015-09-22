$(document).ready(function(){
    var _survey={
        parameter: {
            _survey_obj: $( "#J_survey" ),
            _basic_facts:$( "#J_survey .basic-facts"),
            _basic:$("#J_survey .basic-facts .basic"),
            _basic_details:$("#J_survey .basic-facts .basic .basic-details")
        },
        init: function () {
            var that = this;
            var para = that.parameter;
            that.bind();
        },
        bind:function(){
            var that = this;
            var para = that.parameter;
            para._basic.hover(function(){
                $(this).find(para._basic_details).toggle();
            });
        }

    };
    _survey.init();
});