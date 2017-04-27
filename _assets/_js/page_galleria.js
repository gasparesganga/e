$(function(){
    if (_CURRENT_PAGE !== "galleria") return false;
    
    // Thumbnails
    var fFullPage = false;
    $(".gallery").on("click dblclick", "img", function(event){
        if (fFullPage) return false;
        var $this = $(event.currentTarget);
        
        fFullPage = true;
        console.log("ok");
    });
    
    
    InitSlick("#galleria_pavimenti_slick", {
        prevArrow       : "#galleria_pavimenti_prev",
        nextArrow       : "#galleria_pavimenti_next",
        appendDots      : "#galleria_pavimenti_dots_container"
    });
    
    function InitSlick(target, options){
        $(target).slick($.extend(true, {
            dots            : true,
            infinite        : true,
            mobileFirst     : true,
            slidesToShow    : 5,
            slidesToScroll  : 1,
            swipeToSlide    : true,
            accessibility   : false,
            responsive      : [
                {
                    breakpoint  : 1600,
                    settings    : {
                        slidesToShow : 5
                    }
                },
                {
                    breakpoint  : 1400,
                    settings    : {
                        slidesToShow : 4
                    }
                },
                {
                    breakpoint  : 1000,
                    settings    : {
                        slidesToShow : 3
                    }
                },
                {
                    breakpoint  : 600,
                    settings    : {
                        slidesToShow : 2
                    }
                },
                {
                    breakpoint  : 400,
                    settings    : {
                        slidesToShow : 1
                    }
                },
                {
                    breakpoint  : 1,
                    settings    : {
                        slidesToShow : 1
                    }
                }
            ]
        }, options));
    }
    
    
    
    // Full Page
    var overlay = $("#gallery_fp_overlay");
    
    overlay.appendTo("body").hide();
    
    
    overlay.show();
    
    $(window).on("resize", CalculateFPHeights);
    
    
    $("#gallery_fp_slick").on("lazyLoaded", function(){
       console.log("loaded"); 
    });
    
    $("#gallery_fp_slick").slick({
        dots            : true,
        infinite        : true,
        mobileFirst     : true,
        slidesToShow    : 1,
        slidesToScroll  : 1,
        swipeToSlide    : true,
        accessibility   : true,
        lazyLoad        : "progressive",
        prevArrow       : "#gallery_fp_slick_prev",
        nextArrow       : "#gallery_fp_slick_next"
    }).slick("slickGoTo", 6);
    CalculateFPHeights();
    
    function CalculateFPHeights(){
        var h = overlay.height() - $("#gallery_fp_close").outerHeight() - parseInt($("#gallery_fp_wrapper").css("margin-bottom"), 10);
        $("#gallery_fp_wrapper").height(h);
        $("#gallery_fp_wrapper").find(".slick-slide").height(h);
    }
});