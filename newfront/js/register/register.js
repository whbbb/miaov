
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
        },

        //加载模块
        load_block: function () {
            //加载 提现
            includePage( "#J_main", "./main/main.html" );
        }

    };

    _index.init();
} );
