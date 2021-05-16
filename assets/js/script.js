$(document).ready(function() {
    
    $('.tooltip').css('display', 'none') // End-Hide
    
    $('#span').click(function() {
        $('.tooltip').fadeToggle(350)
         //End fade
    }) 
    $('#span').mouseenter(function() {
        $('.tooltip').fadeIn(350)
         //End fade
    }) // mouseenter
    $('.tooltip').mouseleave(function() {
        $(this).fadeOut(350) //end fade
    }) //end mouseleave
    
}) //End-Ready