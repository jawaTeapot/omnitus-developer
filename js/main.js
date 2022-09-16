$(document).ready(function() {
    $('.custom-select').each(function () {
        const placeholder = $(this).data().placeholder;
        $(this).select2({
            minimumResultsForSearch: -1,
        });
    })

    $('#carousel').slick({
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 760,
                settings: "unslick"
            }
        ]
    });
    $(window).on("resize", function () {
        if ($(window).width() > $breakpoint) {
            return;
        }
        if (!slider.hasClass("slick-initialized")) {
            return $('#carousel').slick(settings);
        }
    });

});