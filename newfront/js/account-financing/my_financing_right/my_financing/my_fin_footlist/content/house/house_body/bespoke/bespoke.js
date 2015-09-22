$(document).ready(function() {
    var _bespoke = {
        parameter: {
            _bespoke_obj: $("#J_bespoke"),
            _bespoke_tab: $("#J_bespoke .bespoketab"),
            _bespoke_tr: $("#J_bespoke .bespoketab .tab-tr"),
            _bespoke_details: $("#J_bespoke .bespoketab .tab-tr .hide-details"),
            _bespoke_close: $("#J_bespoke .bespoketab .tab-tr .hide-details .close"),
            _speed: 600,
            _click_flag: true
        },
        init: function () {
            var that = this;
            var para = that.parameter;
            that._invest_tr(para._bespoke_tr);
            that.bind();

            /*字数限制*/
            astrict(".limit",8);

            load_tips( ".account-pay-complete", function( obj ){
                _bespoke.parameter._bespoke_top_result_tips = obj;
            } );
        },
        bind: function () {
            var that = this;
            var para = that.parameter;

            $("#J_bespoke .bespoketab").delegate(".tab-tr", "click", function () {
                if( para._click_flag ){
                    var thisTr = $(this);
                    if (thisTr.hasClass("fafa")==false ) {
                        that._animate_show(thisTr, para._bespoke_details);
                    }
                }
                else{
                    para._click_flag = true;
                }
            });

            $("#J_bespoke .bespoketab").delegate(".tab-tr a", "click", function () {
                para._bespoke_top_result_tips.show();
                para._click_flag = false;
            });

            para._bespoke_tr.delegate(".close", "click", function () {
                that._animate_hide($(this), para._bespoke_details);
            });
            para._bespoke_tr.delegate(".mistake-close", "click", function () {
                $(this).closest(".mistake-hint").hide();
                return false;
            });

            para._bespoke_tr.delegate(".mistake-hint", "click", function () {
                return false;
            });
        },

        /*点击列表  行 的动画*/
        _animate_show: function( target ,details){
            var that = this;
            var para = that.parameter;

            var t = target.addClass("fafa").siblings().hide();

            target.stop().animate({"top":"0"},para._speed,function(){
                target.find( details).show();
            });
        },

        /*点击  X   的动画*/
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
            target.each(function( i ){
                var trHeight=35;
                var tr_top=i*trHeight+"px";
                $(this).css("top",tr_top);
            });
        }
    };
    _bespoke.init();
});