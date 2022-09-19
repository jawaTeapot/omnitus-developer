$(document).ready(function() {
    ////// СЕЛЕКТ //////
    $('.custom-select').each(function () {
        const placeholder = $(this).data().placeholder;
        $(this).select2({
            minimumResultsForSearch: -1,
        });
    })
    ////// КАРУСЕЛЬ //////
    const settings = {
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1.1,
        responsive: [
            {
                breakpoint: 760,
                settings: "unslick"
            }
        ]
    };
    $('#carousel').slick(settings);
    $(window).on("resize", function () {
        if ($(window).width() > 760) {
            return;
        }
        if (!$('#carousel').hasClass("slick-initialized")) {
            return $('#carousel').slick(settings);
        }
    });
    ////// МОДАЛКИ //////
    if ($.modal) {
        const modalSettings = {
            escapeClose: false,
            clickClose: false,
            showClose: false
        }
        $("#confirmation-modal").modal(modalSettings);

        $('#confirm-btn').on('click', function () {
            $.modal.close();
        });

        $('#non-confirm-btn').on('click', function () {
            $.modal.close();
            $('#waiver-modal').modal(modalSettings);
        });

        $('#back-btn').on('click', function () {
            $.modal.close();
            $("#confirmation-modal").modal(modalSettings);
        });
    }
    ////// ТАБЫ //////
    $('#tabs .VideoAudio__nav-btn').on('click', function () {
        $('#tabs .VideoAudio__nav-btn').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $('.' + $(this).data().tab).show();
    });
});
