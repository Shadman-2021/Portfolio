// Smooth scrolling

$('a[href*="#"]').click(function(e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function() {
        window.location.hash = target;
    });
});

//Toggle button 
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// carosal
const leftSlide = document.querySelector(".left-slides");
const rightSlide = document.querySelector(".right-slides");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;

let currentSlide = 0;

rightSlide.style.transform = `translateY(-${(slidesLength - 1) * 100}%)`;

leftBtn.addEventListener("click", () => changeSlide("left"));
rightBtn.addEventListener("click", () => changeSlide("right"));

function changeSlide(btn) {
    if (btn == "right") {
        currentSlide++;

        if (currentSlide > slidesLength - 1) {
            currentSlide = 0;
        }
    } else if (btn == "left") {
        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = slidesLength - 1;
        }
    }

    rightSlide.style.transform = `translateY(-${(slidesLength - 1 - currentSlide) * 100
        }%)`;
    leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}

setInterval(autoChangeSlide, 3000);

function autoChangeSlide() {

    currentSlide++;

    if (currentSlide > slidesLength - 1) {
        currentSlide = 0;
    }

    rightSlide.style.transform = `translateY(-${(slidesLength - 1 - currentSlide) * 100
        }%)`;
    leftSlide.style.transform = `translateY(-${currentSlide * 100}%)`;
}

//get in touch 
// GET IN TOUCH COMPONENT
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible')
});