

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

document.getElementById("video").addEventListener("ended", function() {
    console.log("hola");
});


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
