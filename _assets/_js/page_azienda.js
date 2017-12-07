$(function(){
    if (_CURRENT_PAGE !== "azienda") return false;
    
    $("#azienda #top_slick").slick({
        dots            : true,
        infinite        : true,
        mobileFirst     : true,
        slidesToShow    : 1,
        slidesToScroll  : 1,
        swipeToSlide    : true,
        accessibility   : false,
        variableWidth   : true,
        adaptiveHeight  : true,
        prevArrow       : "#azienda #top_prev",
        nextArrow       : "#azienda #top_next",
    });
    
    
    $("#azienda #partners_slick").slick({
        dots            : true,
        infinite        : true,
        mobileFirst     : true,
        slidesToShow    : 4,
        slidesToScroll  : 1,
        swipeToSlide    : true,
        accessibility   : false,
        prevArrow       : "#azienda #partners_prev",
        nextArrow       : "#azienda #partners_next",
        appendDots      : "#azienda #partners_dots_container",
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
    });
    
});