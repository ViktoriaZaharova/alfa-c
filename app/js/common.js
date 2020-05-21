$(function () {

    $(".number_phone").mask("+7 (999) 999-99-99");


    $("a.decor_stone_gallery").fancybox(
        {
            "padding": 20,
            "imageScale": false,
            "zoomOpacity": false,
            "zoomSpeedIn": 1000,
            "zoomSpeedOut": 1000,
            "zoomSpeedChange": 1000,
            "frameWidth": 700,
            "frameHeight": 600,
            "overlayShow": true,
            "overlayOpacity": 0.8,
            "hideOnContentClick": false,
            "centerOnScroll": false

        });

    $("a.project_gallery").fancybox(
        {
            "padding": 20,
            "imageScale": false,
            "zoomOpacity": false,
            "zoomSpeedIn": 1000,
            "zoomSpeedOut": 1000,
            "zoomSpeedChange": 1000,
            "frameWidth": 700,
            "frameHeight": 600,
            "overlayShow": true,
            "overlayOpacity": 0.8,
            "hideOnContentClick": false,
            "centerOnScroll": false

        });

    $("#navToggle").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });

    $('.overlayMenu ul li a').click(function () {
        $('.overlay').toggleClass('open');
        $('#navToggle').toggleClass('active');
    });


    // кнопка наверх
    $("body").on("click", ".top", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow")
    });


    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top - 140}, 500);
    });


    // убрать текст при клике в textarea
    $(document).ready(function () {
        $('input, textarea').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
            $(this).attr('placeholder', '');
        });
        $('input, textarea').blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    });
//end


});

$(window).scroll(function () { //фиксированное меню при скролле
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});


// отправка заявки с формы обратной связи на почту
$(document).ready(function () {

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });

});
// end


// модальные окна (несколько)
$(document).ready(function () {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div');

    open_modal.click(function (event) {
        event.preventDefault();
        var div = $(this).attr('href');
        overlay.fadeIn(400,
            function () {
                $(div)
                    .css('display', 'block')
                    .animate({
                        opacity: 1,
                        top: '50%'
                    }, 200);
            });
    });

    close.click(function () {
        modal
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    overlay.fadeOut(400);
                }
            );
    });
});
//end


