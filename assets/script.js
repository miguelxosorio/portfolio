// var i = 0
// var txt = "Hello! My name is Miguel and I make Websites...";
// var speed = 80;

// function typewriter() {
//     if (i < txt.length) {
//         document.getElementById('greeting').innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typewriter, speed);
//     }
// }

// typewriter();

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-item');
const totalSlides = slides.length;

document.getElementById('right-button').addEventListener('click', function () {
    nextSlide();
});

document.getElementById('left-button').addEventListener('click', function () {
    prevSlide();
});


function updateSlidePosition() {
    for (let slide of slides) {
        console.log(slide);
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }

    slides[slidePosition].classList.add('carousel-item-visible');
}

function nextSlide() {
    console.log('next');
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function prevSlide() {
    console.log('back');
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}
