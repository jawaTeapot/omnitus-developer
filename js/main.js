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

    ////// МЕНЮ //////

    $(function() {
        const $menu_popup = $('.burger-menu__popup');
        $(".burger-menu__trigger").click(function(){
            $('body').addClass('body_pointer');
            $menu_popup.show(0);
            $menu_popup.animate(
                {left: parseInt($menu_popup.css('left'),10) === 0 ? -$menu_popup.outerWidth() : 0},
                300
            );
            return false;
        });
        $(".burger-menu__close").click(function(){
            $('body').removeClass('body_pointer');
            $menu_popup.animate(
                {left: parseInt($menu_popup.css('left'),10) === 0 ? -$menu_popup.outerWidth() : 0},
                300,
                function(){
                    $menu_popup.hide(0);
                }
            );
            return false;
        });
        $(document).on('click', function(e){
            if (!$(e.target).closest('.burger-menu__popup').length){
                $('body').removeClass('body_pointer');
                $menu_popup.animate(
                    {left: parseInt($menu_popup.css('left'),10) === 0 ? -$menu_popup.outerWidth() : 0},
                    300,
                    function(){
                        $menu_popup.hide(0);
                    }
                );
            }
        });
    });

});
