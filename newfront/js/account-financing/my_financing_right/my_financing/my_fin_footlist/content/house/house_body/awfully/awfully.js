$(document).ready(function(){
    var _awfully={
        parameter:{
            _awfully_obj:$("#J_awfully"),
            _awfully_tab:$("#J_awfully .awfullytab"),
            _awfully_tr:$("#J_awfully .awfullytab .tab-tr"),
            _awfully_details:$("#J_awfully .awfullytab .tab-tr .hide-details"),
            _awfully_close:$("#J_awfully .awfullytab .tab-tr .hide-details .close"),
            _speed:600
        },
        init:function(){
            var that = this;
            var para = that.parameter;
            that._invest_tr( para._awfully_tr);

            /*字数限制*/
            astrict(".limit",8);
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
    _awfully.init();
});