
    $( document ).ready( function(){
        var _index_banner;

        _index_banner = {
            parameter: {
                _message_money: $( ".message-money" ),
                _banner_login: $( "#J_banner_login" )
            },

            init: function(){
                var that = this;

                that.format_money();
                that.banner_play();
                that.bind();
            },

            bind: function(){
                var that = this;
                var para = that.parameter;

                para._banner_login.bind( "click", function(){
                    $.delay_load( function(){ return $('.header #J_login #J_user_login_link') }, function(){
                        $('.header #J_login #J_user_login_link').click();
                    } )
                } );
            },

            banner_play: function(){
                $('.flexslider').flexslider({
                    directionNav: true,
                    pauseOnAction: false
                });
            },

            format_money: function(){
                var that = this;
                var para = that.parameter;

                $.each( para._message_money, function(){
                    $( this ).html( forMoney( $( this ).html(), 2 ) );
                } );

                var t = forMoney( $( ".login-top .login-p-3 span").html(), 2 );
                $( ".login-top .login-p-3 span").html( t );
            }
        };

        _index_banner.init();
});