$(document).ready(function() {
    var _audit = {
        parameter: {
            _audit_obj: $("#J_audit"),
            _audit_tab: $("#J_audit .audittab"),
            _audit_tr: $("#J_audit .audittab .tab-tr")
        },
        init: function () {
            var that = this;
            var para = that.parameter;
            that._invest_tr(para._audit_tr);
            that.bind();

            /*字数限制*/
            astrict(".limit",8);
            load_tips( ".account-pay-complete", function( obj ){
                _audit.parameter._bespoke_top_result_tips = obj;
            } );
        },
        bind: function () {
            var that = this;
            var para = that.parameter;
            para._audit_tr.delegate(".mistake-close", "click", function () {
                $(this).closest(".mistake-hint").hide();
                return false;
            });
            para._audit_tr.delegate(".mistake-hint", "click", function () {
                return false;
            });
            para._audit_tr.delegate(".tab-tr a", "click", function () {
                para._bespoke_top_result_tips.show();
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
    _audit.init();
});