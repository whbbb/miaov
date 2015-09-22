
    $( document ).ready( function(){
        var _history = {

            parameter: {
                playFlag: true,
                bornObj: $( "#J_born" ),
                volumeObj: $( "#J_volume" ),
                futureObj: $( "#J_future" )
            },

            init: function() {
                var that = this;
                that.bind();
                that.initShow( $( window ) );
            },

            bind: function() {
                var that = this;

                $( window ).bind( "scroll", function( event ){
                    var elm = $( event.target );

                    if( that.parameter.playFlag ){
                        that.show( elm );
                    }
                } );
            },

            initShow: function( elm ){
                var that = this;

                if( that.parameter.playFlag ) {
                    var bo = that.parameter.bornObj;

                    if( elm.scrollTop() >= bo.position().top - ( bo.height() * 2.5 )
                        && elm.scrollTop() <= bo.position().top - ( bo.height() * 0.5 ) ) {
                        that.parameter.playFlag = false;
                        setTimeout(that.show($(window)), 500);
                    }
                }
            },

            show: function( elm ){
                var that = this;
                var bo = that.parameter.bornObj;
                var vo = that.parameter.volumeObj;
                var fo = that.parameter.futureObj;
                var time = 700;

                if( elm.scrollTop() >= bo.position().top - ( bo.height() * 2.5 )
                    && elm.scrollTop() <= bo.position().top - ( bo.height() * 0.5 ) ){
                    that.parameter.playFlag = false;

                    vo.css( "opacity", 0 );
                    vo.css( "display", "inline-block" );

                    vo.animate( {
                        left: "88px",
                        opacity: 1
                    }, time, "swing", function(){

                        fo.css( "opacity", 0 );
                        fo.css( "display", "inline-block" );

                        fo.animate( {
                            left: "130px",
                            opacity: 1
                        }, time, "swing");
                    } );
                }
            }
        };

        _history.init();
    } );