$(function(){
    if (_CURRENT_PAGE !== "azienda") return false;
    
    // Swiper Top
    var aziendaSwiperTop = new Swiper("#azienda_top_swiper", {
        pagination              : "#azienda_top_swiper .swiper-pagination",
        nextButton              : "#azienda_top_swiper .swiper-button-next",
        prevButton              : "#azienda_top_swiper .swiper-button-prev",
        paginationClickable     : true,
        
        grabCursor              : true,
        
        freeMode                : true,
        freeModeMomentumRatio   : 0.7,
        
        loop                    : true,
        slidesPerView           : "auto",
        loopedSlides            : 5,
        centeredSlides          : true,
        spaceBetween            : 0
    });
    $(window).on("resize", SetSlideWidth);
    SetSlideWidth();
    function SetSlideWidth(){
        var maxWidth = (100 - ($(window).width() * 0.028));
        $("#azienda_top_swiper").find(".swiper-slide").css("max-width", maxWidth + "%");
    }
    
    
    // Swiper Partners
    var aziendaSwiperPartners = new Swiper("#azienda_partners_swiper", {
        nextButton              : "#azienda_partners_swiper .swiper-button-next",
        prevButton              : "#azienda_partners_swiper .swiper-button-prev",
        
        freeMode                : true,
        freeModeMomentumRatio   : 0.7,
        
        loop                    : true,
        slidesPerView           : 5,
        spaceBetween            : 80,
        loopedSlides            : 5,
        centeredSlides          : true,
        
        /*zoom                    : true,
        zoomToggle              : true,
        zoomMax                 : 3,
        zoomMin                 : 1,*/
        
        breakpoints             : {
            1400 : {
              slidesPerView : 4,
              spaceBetween  : 70
            },
            1000 : {
              slidesPerView : 3,
              spaceBetween  : 50
            },
            600 : {
              slidesPerView : 2,
              spaceBetween  : 30
            },
            400 : {
              slidesPerView : 1,
              spaceBetween  : 10
            }
        }
    });
    
});