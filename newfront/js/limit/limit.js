
//借款操作部分
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
        },

        //加载模块
        load_block: function () {
            //加载   网银限制表
            includePage( "#J_cyber", "./cyber/cyber.html" );
        }
    };

    _index.init();
} );