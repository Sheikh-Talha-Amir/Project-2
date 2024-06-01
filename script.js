let slideIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Initialize the first slide
changeSlide(0);

