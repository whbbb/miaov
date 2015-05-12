/**
 * Created by Jacky.Wang on 2015/5/12.
 */



$(document).ready(function() {
    var deleteLog = false;

    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3','page4'],
        sectionsColor: ['#ffffff', '#cccccc', '#2C3E50', '#51bec4'],
        onLeave: function(index, nextIndex, direction){
            if(deleteLog){
                $('#callbacksDiv').html('');
            }
            $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
        },
        afterRender: function(){
            $('#callbacksDiv').append('<p>afterRender</p>');
        },
        afterLoad: function(anchorLink, index){
            $('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');

            //section 2
            if(index == 2){
                //moving the image
                $('#section2').find('.intro').delay(100).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo', function(){
                    $('#section2').find('p').first().fadeIn(700, function(){
                        $('#section2').find('p').last().fadeIn(600);
                    });
                });
            }else{
                $('#section2').find('.intro').delay(100).animate({
                    left: '-150%'
                }, 1500, 'easeOutExpo', function(){
                    $('#section2').find('p').first().fadeOut(700, function(){
                        $('#section2').find('p').last().fadeOut(600);
                    });
                });
            }

            //section 3
            if(anchorLink == 'page3'){
                //section 3
                $('#section3').find('.intro').delay(100).animate({
                    left: '0%'
                }, 500, 'easeOutExpo');
            }

            deleteLog = true;
        }
    });
});