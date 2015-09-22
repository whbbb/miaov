$(document).ready(function(){
    var _protocoltit= {
        parameter: {
            _pro_obj: $("#J_protocoltit"),
            _pro_li:$("#J_protocoltit li"),
            _J_tit_hidden:$("#J_protocoltit #J_tit_hidden"),
            _J_prodetails:$("#J_prodetails"),
            _J_details_protocol:$("#J_prodetails .portocol")
        },

        init: function () {
            var that = this;
            that.bind();
        },

        bind: function () {
            var that = this;
            var para = that.parameter;
            var current_hidden=para._J_tit_hidden.val();
            if( current_hidden==""){

                /*点击标题时的事件*/
                para._pro_li.click(function(){
                    var current_li=$(this);
                    var nav_index=current_li.val();
                    para._J_tit_hidden.val(nav_index);
                    var tit_val=para._J_tit_hidden.val();
                    if(tit_val){
                        current_li.addClass("current").siblings().removeClass("current");
                        para._J_details_protocol.eq(tit_val).show().siblings().hide();
                    }
                });
            }
            else{
                /*  默认有显示的时候不执行点击事件*/
                that._tit_init();
            }
        },
        /*获取 隐藏域的value值  判断哪个显示*/
       _tit_init:function(){
           var that=this;
           var para=that.parameter;
            var tit_val= para._J_tit_hidden.val();
            if(tit_val){
               para._pro_li.eq(tit_val).addClass("current").siblings().removeClass("current");
                para._pro_li.eq(tit_val).siblings().css("cursor","default");
                para._J_details_protocol.eq(tit_val).show().siblings().hide();
            }
        }
    };
    _protocoltit.init();
});



