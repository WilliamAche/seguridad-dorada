;
(function ($, window, document, undefined) {
    'use strict';
    var $winW = function () {
        return $(window).width();
    };
    var $winH = function () {
        return $(window).height();
    };
    var $screensize = function (element) {
        $(element).width($winW()).height($winH());
    };
    var screencheck = function (mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };

    $(document).ready(function () {
        $(window).on('load', function () {
            $('.preloader').fadeOut();
            $('.animated-row').each(function () {
                var $this = $(this);
                $this.find('.animate').each(function (i) {
                    var $item = $(this);
                    var animation = $item.data('animate');
                    $item.on('inview', function (event, isInView) {
                        if (isInView) {
                            setTimeout(function () {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });
        });
        if ($('.facts-list').length) {
            $('.facts-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.services-list').length) {
            $('.services-list').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 3,
                margin: 30,
                autoplay: false,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    460: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.gallery-list').length) {
            $('.gallery-list').owlCarousel({
                loop: false,
                nav: false,
                dots: true,
                items: 3,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 4000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 20
                    },
                    992: {
                        items: 3,
                        margin: 30
                    }
                }
            });
        }
        if ($('.testimonials-slider').length) {
            $('.testimonials-slider').owlCarousel({
                loop: true,
                nav: false,
                dots: true,
                items: 1,
                margin: 30,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 6000,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }
        if ($('.fullpage-default').length) {
            var myFullpage = new fullpage('.fullpage-default', {
                licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5',
                anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'],
                menu: '#nav',
                lazyLoad: true,
                navigation: true,
                navigationPosition: 'right',
                scrollOverflow: true,
                responsiveWidth: 768,
                responsiveHeight: 600,
                responsiveSlides: true
            });
        }
        $(document).on('click', '.navbar-toggle', function () {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function () {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function () {
            fullpage_api.moveSectionDown();
        });


        $('.facts-row').on('inview', function (event, isInView) {
            $('.count-number').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function () {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function (event, isInView) {
            $(this).addClass('view');
        });
        $(document).on('click', '.menu-trigger', function () {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function () {
            $('body').removeClass('sidemenu-open');
        });
    });
})(jQuery, window, document);


$(function () {
    const header = $("#header");

    header.hide();

    $('.btn-scroll').click(function (e) {
        header.show("fast");
    });

    window.addEventListener('popstate', function () {
        // Obtiene el valor de la URL
        var url = window.location.href;

        // Verifica si la URL contiene el fragmento `#slide01` para ocultarlo
        if (url.indexOf('#slide01') !== -1) {
            header.hide();
        } else {
            header.show("fast");
        }
    });

});

$(document).ready(function () {
    $('#ml_0').click(function (e) {
        $('.intro').addClass('d-none');
        $('.ml_0').removeClass('d-none');
    });

    $('#ex_0').click(function (e) {
        $('.intro').addClass('d-none');
        $('.ex_0').removeClass('d-none');
    });

})


const playButton_1 = document.getElementById('play_paso_1');
const audio_paso_1 = document.getElementById('audio_paso_1');
const playButton_2 = document.getElementById('play_paso_2');
const audio_paso_2 = document.getElementById('audio_paso_2');
const playButton_3 = document.getElementById('play_paso_3');
const audio_paso_3 = document.getElementById('audio_paso_3');
const playButton_4 = document.getElementById('play_paso_4');
const audio_paso_4 = document.getElementById('audio_paso_4');
const playButton_5 = document.getElementById('play_paso_5');
const audio_paso_5 = document.getElementById('audio_paso_5');
const playButton_6 = document.getElementById('play_paso_6');
const audio_paso_6 = document.getElementById('audio_paso_6');


$('#next_1').click(function (e) {
    $('.next_0').addClass('d-none');
    $('.next_1').removeClass('d-none');
});

$('#prev_0').click(function (e) {
    $('.next_1').addClass('d-none');
    $('.next_0').removeClass('d-none');
});

$(".btn-select").hover(
    function () {
        if ($(this).data("tipo") == 'simulador') {
            $('.simulador').removeClass("d-none");
            $('.simulador').fadeIn("slow");
        } else {
            $('.simulador').addClass("d-none");
        }

        if ($(this).data("tipo") == 'guia') {
            $('.guia').removeClass("d-none");
        } else {
            $('.guia').addClass("d-none");
        }
    }
);

$('.btn-select').mouseleave(function () {
    $('.simulador').addClass("d-none");
    $('.guia').addClass("d-none");
});

// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });




playButton_1.addEventListener('click', () => {
    if (audio_paso_1.paused) {
        audio_paso_1.play();
        // Si deseas cambiar el ícono a pausa:
        playButton_1.querySelector('.fa-play').classList.add('fa-pause');
    } else {
        audio_paso_1.pause();
        // Si deseas cambiar el ícono a play:
        playButton_1.querySelector('.fa-play').classList.remove('fa-pause');
    }
});

playButton_2.addEventListener('click', () => {
    if (audio_paso_2.paused) {
        audio_paso_2.play();
        // Si deseas cambiar el ícono a pausa:
        playButton_2.querySelector('.fa-play').classList.add('fa-pause');
    } else {
        audio_paso_2.pause();
        // Si deseas cambiar el ícono a play:
        playButton_2.querySelector('.fa-play').classList.remove('fa-pause');
    }
});

playButton_3.addEventListener('click', () => {
    if (audio_paso_3.paused) {
        audio_paso_3.play();
        // Si deseas cambiar el ícono a pausa:
        playButton_3.querySelector('.fa-play').classList.add('fa-pause');
    } else {
        audio_paso_3.pause();
        // Si deseas cambiar el ícono a play:
        playButton_3.querySelector('.fa-play').classList.remove('fa-pause');
    }
});

playButton_4.addEventListener('click', () => {
    if (audio_paso_4.paused) {
        audio_paso_4.play();
        // Si deseas cambiar el ícono a pausa:
        playButton_4.querySelector('.fa-play').classList.add('fa-pause');
    } else {
        audio_paso_4.pause();
        // Si deseas cambiar el ícono a play:
        playButton_4.querySelector('.fa-play').classList.remove('fa-pause');
    }
});

playButton_5.addEventListener('click', () => {
    if (audio_paso_5.paused) {
        audio_paso_5.play();
        // Si deseas cambiar el ícono a pausa:
        playButton_5.querySelector('.fa-play').classList.add('fa-pause');
    } else {
        audio_paso_5.pause();
        // Si deseas cambiar el ícono a play:
        playButton_5.querySelector('.fa-play').classList.remove('fa-pause');
    }
});

playButton_6.addEventListener('click', () => {
    if (audio_paso_6.paused) {
        audio_paso_6.play();
        // Si deseas cambiar el ícono a pausa:
        playButton_6.querySelector('.fa-play').classList.add('fa-pause');
    } else {
        audio_paso_6.pause();
        // Si deseas cambiar el ícono a play:
        playButton_6.querySelector('.fa-play').classList.remove('fa-pause');
    }
});

// Escucha el evento hashchange
// window.addEventListener('hashchange', () => {
//     // Obtiene el valor de #slide
//     const slide = window.location.href.split('#')[1];
//     // Obtiene la ruta del audio
//     const audioPath = 'file:///C:/Users/Joel/Downloads/test/seguridad-dorada/audio/y2mate.mp3';

//     // Crea el objeto Audio
//     const audio = new Audio(audioPath);


//     if (slide == "slide05") {
//         console.log(audio);
//         // Escucha el evento play
//         audio.addEventListener('play', () => {
//             // Muestra un mensaje
//             alert('El audio comenzó a reproducirse');
//         });
//         // Reproduce el audio
//         audio.play();

//     } else {
//         audio.addEventListener('pause', () => {
//             // Muestra un mensaje
//             alert('El audio se detuvo');
//         });
//         console.log(audio.pause());
//         console.log("No hay audio");
//         audio.pause();
//     }
//     // Imprime el valor de #slide
//     console.log(slide);
// });

