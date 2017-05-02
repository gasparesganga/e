$(function(){
    if (_CURRENT_PAGE !== "marchi") return false;
    
    
    InitSlick("#marchi_pavimenti_slick", {
        prevArrow       : "#marchi_pavimenti_prev",
        nextArrow       : "#marchi_pavimenti_next",
        appendDots      : "#marchi_pavimenti_dots_container"
    });
    
    
    function InitSlick(target, options){
        $(target).slick($.extend(true, {
            dots            : true,
            infinite        : true,
            mobileFirst     : true,
            slidesToShow    : 4,
            slidesToScroll  : 1,
            swipeToSlide    : true,
            accessibility   : false,
            responsive      : [
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
    
});