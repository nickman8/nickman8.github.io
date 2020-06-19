$(document).ready(function () {

    $(".m-menu-button, .serach-btn-mob").on("click", function () {
        window.scrollTo(0, 0);
        $(".m-menu").toggleClass("m-menu-visble");
        $("body").toggleClass("overflow-hidden");
    });

    $("#creators_button").on("click", function () {
        if ($("#actors_button").hasClass("active")) {
            $("#creators_button").toggleClass("active");
            $("#actors_button").toggleClass("active");
            $("#actors").removeClass("tabs-content");
            $("#actors").addClass("tabs-hide");
            $("#creators").removeClass("tabs-hide");
            $("#creators").addClass("tabs-content");
        }
    });

    $("#actors_button").on("click", function () {

        if ($("#creators_button").hasClass("active")) {
            $("#creators_button").toggleClass("active");
            $("#actors_button").toggleClass("active");
            $("#creators").removeClass("tabs-content");
            $("#creators").addClass("tabs-hide");
            $("#actors").removeClass("tabs-hide");
            $("#actors").addClass("tabs-content");
        }

    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
        breakpoints: {
            992: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".button-next"
                }
            },
        }
    });
});