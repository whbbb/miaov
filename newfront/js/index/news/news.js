
    $( document ).ready( function(){
        var _news = {

            parameter: {
                isIE8: false,
                isIE7: false
//                isIE8: $.browser.msie && $.browser.version == "8.0",
//                isIE7: $.browser.msie && $.browser.version == "7.0"
            },

            init: function() {
                var that = this;
                that.bind();
                that.initNews();
            },

            bind: function() {
                var that = this;

                $( "#J_news" ).delegate( "label", "click", function( event ){
                    var elm = $( event.target );
                    var targetValue = elm.parent( "li").attr( "class" ) == "current" ? 0 : elm.attr( "data-value" );
                    that.change( elm, targetValue );
                } );

                $( "#J_news" ).delegate( "img.normal", "click", function( event ){
                    var elm = $( event.target );
                    var targetValue = elm.parent( "li").attr( "class" ) == "current" ? 0 : elm.parent( "li").find( "label" ).attr( "data-value" );
                    that.change( elm, targetValue );
                } );
            },

            initNews: function(){
                var that = this;
                var targets = $( "#J_news .right-panel").find( "ul" );
                var targetValue = $( "#J_news .left-panel").find( "li[class='current']").find( "label" ).attr( "data-value" );

                if( targets ){
                    var targetElm = null;

                    targets.each( function(){
                        var currentTarget = $( this );
                        var currentTargetValue = currentTarget.attr( "data-value" );

                        currentTarget.css( "display", "none" );
                        currentTarget.removeClass( "current" );

                        if( currentTargetValue == targetValue ){
                            targetElm = currentTarget;
                            targetElm.css( "display", "block" );
                            targetElm.addClass( "current" );
                        }

                        if( !( that.parameter.isIE8 || that.parameter.isIE7 ) ){
                            currentTarget.css( "opacity", 0 );
                            targetElm.css( "opacity", 1 );
                        }
                    } );
                }
            },

            change: function( elm, targetValue ){
                var that = this;

                if( targetValue > 0 ){
                    var time = 260;
                    var lo = $( ".left-panel div" );
                    var currentObj = $( ".left-panel li.current label" );
                    var targetObj = elm;

                    currentObj.parent( "li" ).removeClass( "current" );
                    targetObj.parent( "li" ).addClass( "current" );

                    var moveDis = 57;
                    var currentTargetValue = currentObj.attr( "data-value" );
                    var targetDis = moveDis * ( targetValue - currentTargetValue );
                    var currentPos = $.parseNumber( lo.css( "margin-top" ) );
                    var targetPos = currentPos + targetDis + "px";

                    lo.animate( {
                        marginTop: targetPos
                    }, time, "swing" );

                    var targets = $( "#J_news .right-panel").find( "ul" );

                    if( targets ){
                        var currentElm = $( ".right-panel .current" );
                        var targetElm = null;

                        targets.each( function(){
                            var currentTarget = $( this );
                            var currentTargetValue = currentTarget.attr( "data-value" );

                            if( currentTargetValue == targetValue ){
                                targetElm = currentTarget;
                            }

                            if( that.parameter.isIE8 || that.parameter.isIE7 ) {
                                currentTarget.css( "display", "none" );
                            }
                        } );

                        if( that.parameter.isIE8 || that.parameter.isIE7 ){
                            setTimeout( function(){
                                targetElm.css( "display", "block" );
                            }, time );
                        }
                        else{
                            currentElm.animate( {
                                opacity: 0
                            }, time, "swing", function(){
                                currentElm.removeClass( "current" );
                                currentElm.css( "display", "none" );
                                targetElm.addClass( "current" );
                                targetElm.css( "opacity", 0 );
                                targetElm.css( "display", "block" );

                                targetElm.animate( {
                                    opacity: 1
                                }, time, "swing", function(){
                                } );
                            } );
                        }
                    }
                }
            }
        };

        _news.init();
    } );