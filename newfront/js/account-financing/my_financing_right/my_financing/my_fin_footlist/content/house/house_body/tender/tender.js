$(document).ready(function() {
    var _tender = {
        parameter: {
            _tender_obj: $("#J_tender"),
            _tender_tab: $("#J_tender .tendertab"),
            _tender_tr: $("#J_tender .tendertab .tab-tr"),
            _tender_details: $("#J_tender .tendertab .tab-tr .hide-details"),
            _tender_close: $("#J_tender .tendertab .tab-tr .hide-details .close"),
            _speed: 600,
            _click_flag: true
        },
        init: function () {
            var that = this;
            var para = that.parameter;
            that._invest_tr(para._tender_tr);
            that.bind();

            /*字数限制*/
            astrict(".limit",8);

            load_tips( ".account-pay-complete", function( obj ){
                _tender.parameter._bespoke_top_result_tips = obj;
            } );
        },
        bind: function () {
            var that = this;
            var para = that.parameter;

            $("#J_tender .tendertab").delegate(".tab-tr", "click", function () {
                    if( para._click_flag ){
                        var thisTr = $(this);
                        if (thisTr.hasClass("fafa")==false) {
                            that._animate_show(thisTr, para._tender_details);
                        }
                    }else{
                        para._click_flag = true;
                    }
            });
            $("#J_tender .tendertab").delegate(".tab-tr a", "click", function () {
                para._bespoke_top_result_tips.show();
                para._click_flag = false;
            });

            para._tender_tr.delegate(".close", "click", function () {
                that._animate_hide($(this), para._tender_details);
            });
            para._tender_tr.delegate(".mistake-close", "click", function () {
                $(this).closest(".mistake-hint").hide();
                return false;
            });
            para._tender_tr.delegate(".mistake-hint", "click", function () {
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
            var that=this;
            var para = that.parameter;
            target.each(function( i ){
                var trHeight=$.parseNumber(target.height());
                var tr_top=i*trHeight+"px";
                $(this).css("top",tr_top);
            });
        }
    };
    _tender.init();
});