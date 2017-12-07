$(function(){
    if (_CURRENT_PAGE !== "galleria") return false;
    
    
    var fFullPage   = false;
    var overlay     = $("#gallery_fp_overlay");
    var fpSlick     = $("#gallery_fp_slick");
    overlay.appendTo("body").hide();
    
    $(".gallery").on("click dblclick", "img", OpenFullPage);
    
    InitSlick("#galleria_pavimenti_slick", {
        prevArrow       : "#galleria_pavimenti_prev",
        nextArrow       : "#galleria_pavimenti_next",
        appendDots      : "#galleria_pavimenti_dots_container"
    });
    
    InitSlick("#galleria_docce_slick", {
        prevArrow       : "#galleria_docce_prev",
        nextArrow       : "#galleria_docce_next",
        appendDots      : "#galleria_docce_dots_container"
    });
    
    
    function OpenFullPage(event){
        if (fFullPage) return false;
        var $this   = $(event.currentTarget);
        var index   = $this.closest(".slick-slide").data("slick-index");
        
        $this.closest(".gallery").find(".slick-slide").not(".slick-cloned").each(function(i, element){
            var div = $("<div>").appendTo(fpSlick);
            $("<img>", {
                "data-lazy" : $(element).children(".slick_custom_slide").first().data("fpimg")
            }).appendTo(div);
        });
        
        fFullPage = true;
        overlay.show();
        
        $.LoadingOverlay("show");
        var loadingCount = index;
        fpSlick.on("lazyLoaded", function(event){
            if (loadingCount <= 0) {
                $.LoadingOverlay("hide");
                fpSlick.off("lazyLoaded");
            }
            loadingCount--;
        });
        
        fpSlick.slick({
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
        }).slick("slickGoTo", index, true);
        CalculateFullPageHeights();
        
        $("#gallery_fp_close").on("click", CloseFullPage);
        $(window)
            .on("resize",   CalculateFullPageHeights)
            .on("keydown",  WindowKeyDown);
        
        fpSlick.find(".slick-active").first().trigger("focus");
    }
    
    function CloseFullPage(){
        overlay.hide();
        fpSlick.slick("unslick").empty();
        $("#gallery_fp_close").off("click", CloseFullPage);
        $(window)
            .off("resize",  CalculateFullPageHeights)
            .off("keydown", WindowKeyDown);
        
        fFullPage = false;
    }
    
    function CalculateFullPageHeights(){
        var h = overlay.height() - $("#gallery_fp_close").outerHeight() - parseInt($("#gallery_fp_wrapper").css("margin-bottom"), 10);
        $("#gallery_fp_wrapper").height(h);
        $("#gallery_fp_wrapper").find(".slick-slide").height(h);
    }
    
    function WindowKeyDown(event){
        if (event.which === 27) CloseFullPage();
    }
    
    
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
    
});