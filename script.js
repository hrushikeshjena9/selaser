const slider = document.querySelector(".bg-image-slider");

const images = [
    "./assets/slider-img-1.png",
    "./assets/slider-img-2.jpg",
    "./assets/slider-img-3.jpg",
    "./assets/slider-img-4.jpg"
];

let index = 0;

function changeBackground() {
    slider.style.backgroundImage = `url('${images[index]}')`;
    index = (index + 1) % images.length;
}

changeBackground(); 
setInterval(changeBackground, 4000);






document.getElementById("year").textContent = new Date().getFullYear();



// testimonials 


document.addEventListener('DOMContentLoaded', function () {
    const testimonialsContent = document.querySelector('.testimonials-content');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let testimonialWidth = testimonialSlides[0].offsetWidth;
    let index = 0;
    

    function moveSlides() {
        testimonialsContent.style.transition = 'transform 1s ease-in-out'; // Smooth transition
        testimonialsContent.style.transform = `translateX(-${testimonialWidth * index}px)`;
    }

 
    setInterval(function () {
        index++;
        if (index >= testimonialSlides.length) {
            index = 0;
        }
        moveSlides();
    }, 5000); 


    prevBtn.addEventListener('click', function () {
        index--;
        if (index < 0) {
            index = testimonialSlides.length - 1;
        }
        moveSlides();
    });

  
    nextBtn.addEventListener('click', function () {
        index++;
        if (index >= testimonialSlides.length) {
            index = 0;
        }
        moveSlides();
    });
});


// menu  

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');


function openMenu() {
    mobileMenu.classList.remove('-translate-y-full');
    overlay.classList.remove('hidden');
}


function closeMenuHandler() {
    mobileMenu.classList.add('-translate-y-full');
    overlay.classList.add('hidden');
}


hamburger.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuHandler);
overlay.addEventListener('click', closeMenuHandler);

document.querySelectorAll('#mobileMenu a').forEach(item => {
    item.addEventListener('click', closeMenuHandler);
});



const container = document.getElementById('service-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let index1 = 0;
    
    function updateSlider() {
        container.style.transform = `translateX(-${index1 * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (index1 > 0) {
            index1--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (index1 < container.children.length - 1) {
            index1++;
            updateSlider();
        }
    });


// const container = document.getElementById('service-container');
// const prevBtn = document.getElementById('prev-btn');
// const nextBtn = document.getElementById('next-btn');

// let index1 = 0;
// const totalSlides = 2; // Since you have 2 full slides

// function updateSlider() {
//     container.style.transform = `translateX(-${index1 * 100}%)`;
// }

// prevBtn.addEventListener('click', () => {
//     if (index1 > 0) {
//         index1--;
//         updateSlider();
//     }
// });

// nextBtn.addEventListener('click', () => {
//     if (index1 < totalSlides - 1) {
//         index1++;
//         updateSlider();
//     }
// });
