/*************************************************
Mobile Menu Toggler (Requires jQuery)
    Author  : Gaspare Sganga
    Version : 1.0.0
    License : MIT
*************************************************/
$(function(){
    var toggler = $("#header_menu_toggler");
    var wrapper = $("#header_menu_wrapper");
    var menu    = $("#header_menu");
    var speed   = 400;
    var fOpen   = false;
    var fMoving = false;
    
    $("#header_menu_toggler_close").hide();
    CheckMobileSize();
    
    toggler.on("click", function(event){
        if (fMoving) return false;
        console.log("ciao");
        fMoving = true;
        if (fOpen) {
            $("#header_menu_toggler_open").show();
            $("#header_menu_toggler_close").hide();
            menu.slideUp(speed, function(){
                wrapper.hide();
                fOpen   = false;
                fMoving = false;
            });
        } else {
            $("#header_menu_toggler_open").hide();
            $("#header_menu_toggler_close").show();
            wrapper.show();
            menu.slideDown(speed, function(){
                fOpen   = true;
                fMoving = false;
            });
        }
    });
    $(window).on("resize", CheckMobileSize);
    
    function CheckMobileSize(){
        if (toggler.is(":visible")) {
            if (fOpen) return false;
            wrapper.hide();
            menu.hide();
        } else {
            wrapper.show();
            menu.show();
        }
    }
});