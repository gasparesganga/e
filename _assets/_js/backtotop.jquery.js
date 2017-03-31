/*************************************************
Back to Top button (Requires jQuery)
    Author  : Gaspare Sganga
    Version : 1.0.0
    License : MIT
*************************************************/
$(function(){
    var button      = $("#backtotop");
    var speed       = 500;
    var threshold   = 10;
    
    button.on("click", function(event){;
        $("html, body").animate({
            scrollTop   : 0
        }, speed);
    });
    $(window).on("scroll", CheckOffset);
    CheckOffset();
    
    function CheckOffset(){
        button.toggleClass("visible", ($(window).scrollTop() > threshold));
    }
});
