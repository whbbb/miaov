
//新闻部分
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
        },

        //加载模块
        load_block: function () {
            //加载   新闻
            includePage("#J_report", "./report/report.html" );
        }
    };

    _index.init();
} );