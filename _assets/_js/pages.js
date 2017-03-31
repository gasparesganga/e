$(function(){
    /*
        Azienda
    */
    var swiper = new Swiper(".swiper-container", {
        pagination              : ".swiper-pagination",
        nextButton              : ".swiper-button-next",
        prevButton              : ".swiper-button-prev",
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
        $(".swiper-slide").css("max-width", maxWidth + "%");
    }
    
    
});