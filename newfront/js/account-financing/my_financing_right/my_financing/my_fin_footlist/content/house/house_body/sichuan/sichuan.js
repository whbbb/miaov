$(document).ready(function(){
    var _sichuan={
        parameter:{
            _sichuan_obj:$("#J_sichuan"),
            _sichuan_tab:$("#J_sichuan .sichuantab"),
            _sichuan_tr:$("#J_sichuan .sichuantab .tab-tr"),
            _sichuan_details:$("#J_sichuan .sichuantab .tab-tr .hide-details"),
            _sichuan_close:$("#J_sichuan .sichuantab .tab-tr .hide-details .close"),
            _speed:600
        },
        init:function(){
            var that = this;
            var para = that.parameter;
            that._invest_tr( para._sichuan_tr);
            that.bind();

            /*字数限制*/
            astrict(".limit",8);
        },
        bind:function(){
            var that = this;
            var para = that.parameter;

            $( "#J_sichuan .sichuantab").delegate( ".tab-tr", "click", function(){
                var thisTr=$(this);
                if(thisTr.hasClass("fafa")==false){
                    that._animate_show( thisTr,para._sichuan_details);
                }
            } );

            para._sichuan_tr.delegate( ".close", "click", function(){
                that._animate_hide( $( this ) ,para._sichuan_details);
            });
        },

        /*点击列表  行的动画*/
        _animate_show: function( target ,details){
            var that = this;
            var para = that.parameter;

            var t = target.addClass("fafa").siblings().hide();

            target.stop().animate({"top":"0"},para._speed,function(){
                target.find( details).show();
            });
        },

        /*点击  X 的动画*/
        _animate_hide: function( target,details){
            var that = this;
            var para = that.parameter;

            var ldtr = target.closest( ".tab-tr" );
            var trHeight=$.parseNumber( ldtr.height());
            var trindex=ldtr.index()*trHeight+"px";

            ldtr.find(details).hide();
            ldtr.stop().animate({"top":trindex}, para._speed ,function(){
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
    _sichuan.init();
});