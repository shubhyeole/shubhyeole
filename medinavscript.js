document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // document.getElementById('hamburger').innerHTML="&#10006;";

    });
});
// **********************carousel

document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        const totalItems = items.length;
        if (index >= totalItems) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalItems - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    // Optional: Automatic sliding
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
});
