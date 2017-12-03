$(function(){
    if (_CURRENT_PAGE !== "marchi") return false;
    
    
    InitSlick("#marchi_pavimenti_slick", {
        prevArrow       : "#marchi_pavimenti_prev",
        nextArrow       : "#marchi_pavimenti_next",
        appendDots      : "#marchi_pavimenti_dots_container"
    });
    
    InitSlick("#marchi_rivestimenti_slick", {
        prevArrow       : "#marchi_rivestimenti_prev",
        nextArrow       : "#marchi_rivestimenti_next",
        appendDots      : "#marchi_rivestimenti_dots_container"
    });
    
    InitSlick("#marchi_sanitari_slick", {
        prevArrow       : "#marchi_sanitari_prev",
        nextArrow       : "#marchi_sanitari_next",
        appendDots      : "#marchi_sanitari_dots_container"
    });
    
    InitSlick("#marchi_vasche_slick", {
        prevArrow       : "#marchi_vasche_prev",
        nextArrow       : "#marchi_vasche_next",
        appendDots      : "#marchi_vasche_dots_container"
    });
    
    InitSlick("#marchi_docce_slick", {
        prevArrow       : "#marchi_docce_prev",
        nextArrow       : "#marchi_docce_next",
        appendDots      : "#marchi_docce_dots_container"
    });
    
    InitSlick("#marchi_rubinetterie_slick", {
        prevArrow       : "#marchi_rubinetterie_prev",
        nextArrow       : "#marchi_rubinetterie_next",
        appendDots      : "#marchi_rubinetterie_dots_container"
    });
    
    InitSlick("#marchi_mobili_slick", {
        prevArrow       : "#marchi_mobili_prev",
        nextArrow       : "#marchi_mobili_next",
        appendDots      : "#marchi_mobili_dots_container"
    });
    
    InitSlick("#marchi_riscaldamento_slick", {
        prevArrow       : "#marchi_riscaldamento_prev",
        nextArrow       : "#marchi_riscaldamento_next",
        appendDots      : "#marchi_riscaldamento_dots_container"
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