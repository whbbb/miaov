
$( document ).ready( function(){
    var _index = {

        init: function () {
            var that = this;
            that.load_block();
            that.load_common();
            //$( 'html, body' ).animate( { scrollTop: $( document ).height() }, 'fast' );
        },


        //加载模块
        load_block: function () {

            /*加载  banner+东方园林简介*/
            includePage("#J_synopsis","./synopsis/synopsis.html");
            /*加载  产品概况*/
            includePage("#J_survey","./survey/survey.html");
            /*加载  产品特色*/
            includePage("#J_feature","./feature/feature.html");
        },
        //加载公用方法
        load_common: function(){
            //回到顶部
            scrollToTop();
        }

    };
    _index.init();

} );
