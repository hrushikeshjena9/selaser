

const slider = document.querySelector(".bg-image-slider");
const title = document.getElementById("slider-title");
const text = document.getElementById("slider-text");

const slides = [
    {
        image: "./assets/slider-img-1.png",
        title: "REPAIR & MAINTENANCE SERVICES",
        text: "We sell a huge range of colour and mono laser and multi-function printers, scanners, wide format plotters, plus consumables, spare parts, and accessories."
    },
    {
        image: "./assets/slider-img-2.jpg",
        title: " PLOTTER SALES, SERVICE & REPAIRING",
        text: "Discover the best quality printers and scanners for your home and office needs. Get affordable prices and fast delivery.  spare parts, and accessories."
    },
    {
        image: "./assets/slider-img-3.jpg",
        title: "OFFICE COPIER /PRINTERLEASE / RENTAL",
        text: "We provide genuine spare parts and consumables for a variety of printer models, ensuring smooth and long-lasting performance.  spare parts, and accessories."
    },
    {
        image: "./assets/slider-img-4.jpg",
        title: "OFFICE EQUIPMENTS SUPPLIER",
        text: "Our team of experts is ready to assist with all your technical needs, offering reliable support and maintenance solutions.  spare parts, and accessories."
    }
];

let index = 0;

function changeSlide() {
    // Add fade-out effect for background and text
    slider.classList.add("fade-out");
    title.classList.remove("text-fade-in");
    text.classList.remove("text-fade-in");
    title.classList.add("text-fade");
    text.classList.add("text-fade");

    setTimeout(() => {
        // Change background and content
        slider.style.backgroundImage = `url('${slides[index].image}')`;
        title.textContent = slides[index].title;
        text.textContent = slides[index].text;

        // Remove fade-out and fade-in new content
        slider.classList.remove("fade-out");
        title.classList.remove("text-fade");
        text.classList.remove("text-fade");
        title.classList.add("text-fade-in");
        text.classList.add("text-fade-in");

        // Update index for next slide
        index = (index + 1) % slides.length;
    }, 1000); // Match the CSS transition duration
}

// Initial Slide Load
changeSlide();
setInterval(changeSlide, 4000);



document.getElementById("year").textContent = new Date().getFullYear();



// testimonials 


document.addEventListener('DOMContentLoaded', function () {
    const testimonialsContent = document.querySelector('.testimonials-content');
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn1');
    const nextBtn = document.querySelector('.next-btn1');
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




let currentIndex = 0;
const slider1 = document.getElementById("slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 2;
    slider1.style.transform = `translateX(-${currentIndex * 100}%)`;
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 2) % 2;
    slider1.style.transform = `translateX(-${currentIndex * 100}%)`;
});



