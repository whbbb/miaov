$(document).ready(function(){
    var _yeting={
        parameter:{
            _yetint_obj:$("#J_yeting"),
            _yeting_tab:$("#J_yeting .yetingtab"),
            _yeting_tr:$("#J_yeting .yetingtab .tab-tr"),
            _yeting_details:$("#J_yeting .yetingtab .tab-tr .hide-details"),
            _yeting_close:$("#J_yeting .yetingtab .tab-tr .hide-details .close"),
            _speed:600,
            _click_flag: true
        },
        init:function(){
            var that = this;
            var para = that.parameter;
            that._invest_tr( para._yeting_tr);
            that.bind();

            /*字数限制*/
            astrict(".limit",8);
        },
        bind:function(){
            var that = this;
            var para = that.parameter;

            $( "#J_yeting .yetingtab").delegate( ".tab-tr", "click", function(){
                if(para. _click_flag){
                    var thisTr=$(this);
                    if(thisTr.hasClass("fafa")==false){
                        that._animate_show( thisTr,para._yeting_details);
                    }
                }
                else{
                    para._click_flag=true;
                }
            } );

            para._yeting_tr.delegate( ".close", "click", function(){
                that._animate_hide( $( this ) ,para._yeting_details);
            });
            para._yeting_tr.delegate( ".igmp", "click", function(){
                para._click_flag=false;
            });
        },

        /*点击列表  行的动画*/
        _animate_show: function( target ,details){
            var that = this;
            var para = that.parameter;

            var t = target.addClass("fafa").siblings().hide();

            target.animate({"top":"0"},para._speed,function(){
                target.find( details).show();
            });
        },

        /*点击列表*/
        _animate_hide: function( target,details){
            var that = this;
            var para = that.parameter;

            var ldtr = target.closest( ".tab-tr" );
            var trHeight=$.parseNumber( ldtr.height());
            var trindex=ldtr.index()*trHeight+"px";

            ldtr.find(details).hide();
            ldtr.animate({"top":trindex}, para._speed ,function(){
                ldtr.removeClass("fafa");
                ldtr.siblings().show();
            });
        },

        /*列表定位*/
        _invest_tr:function( target ){
            var that=this;
            var para = that.parameter;
            target.each(function( i ){
                var trHeight=$.parseNumber(target.height());
                var tr_top=i*trHeight+"px";
                $(this).css("top",tr_top);
            });
        }
    };
     _yeting.init();
});