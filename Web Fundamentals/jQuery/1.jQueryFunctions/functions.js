$(document).ready(function(){

    $( ".header" )
    .after( "<p>Test</p>" )
    .before( "<p>Test</p>" )
    .addClass('position');

    $( ".header ul li" )
    .after( "<li>Another li</li>");

    $('.second li').click(function() {
         $('p').slideToggle("slow"); 
    })
    // $('.header button').hide();

    $('.footer button').click(function(){ 
        $('.footer p').addClass('color'); 
    });

    $('.footer p').click(function() {
         $('img').addClass('image'); 
        })

    $('.header ul li').click(function() {
        $('a').slideDown();
    })
    $('a').click(function(){
        $('p').addClass('color');
    });

    $('button').click(function(){ 
        $('footer p').hide(); 
    });

    $('h1').show();
    $('.box p').click(function() { 
        $(this).addClass('color'); 
    });

    $('.footer img').click(function() {
        $(".div1").fadeIn();
        $(".div2").fadeIn("slow");
        $(".div3").fadeIn(3000);
    })

    $(".box p").click(function(){
        $("span").hide();
    });
});

/*
    .click
    .hide
    .show
    .toggle
    .slideDown
    .slideUp
    .slideToggle
    .fadeIn
    .fadeOut
    .addClass
    .before
    .after
    .append
    .html
    .attr
    .val
    .text
*/