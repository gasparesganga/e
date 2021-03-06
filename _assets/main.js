//= require node_modules/jquery/dist/jquery.min.js
//= require node_modules/jquery-lazy/jquery.lazy.min.js
//= require node_modules/gasparesganga-jquery-loading-overlay/src/loadingoverlay.min.js
//= require node_modules/slick-carousel/slick/slick.min.js
//= require node_modules/cookieconsent/build/cookieconsent.min.js

//= require _js/backtotop.jquery.js
//= require _js/menu.jquery.js
//= require _js/cookieconsent.js

//= require _js/page_azienda.js
//= require _js/page_galleria.js
//= require _js/page_marchi.js
//= require _js/page_contatti.js


$(function(){
    $.LoadingOverlaySetup({
        image       : "",
        fontawesome : "fa fa-spinner fa-spin"
    });
    
    $(".lazy").lazy({
        enableThrottle  : true,
        throttle        : 250
    });
    
    $(document).on("afterChange", ".slick-slider", function(event){
        $(window).trigger("resize");
    });
    
    $(".email_encoded").html("&#105;&#x6e;&#102;&#111;&#x40;&#x65;&#x64;&#105;&#x6c;&#x66;&#x69;&#x6d;&#x65;&#114;&#x2e;&#105;&#116;");
});