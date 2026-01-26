(function () {
    const windowEl = document.querySelector('.carousel-window');
    const cards = Array.from(document.querySelectorAll('.track-card'));
    const prev = document.querySelector('.carousel-btn.prev');
    const next = document.querySelector('.carousel-btn.next');

    if (!windowEl || cards.length === 0 || !prev || !next) return;

    const getStep = () => {
        const card = cards[0];
        const style = window.getComputedStyle(card);
        const gap = parseInt(style.marginRight || '16', 10);
        return card.offsetWidth + gap;
    };

    const slide = (direction) => {
        windowEl.scrollBy({
            left: getStep() * direction,
            behavior: 'smooth'
        });
    };

    prev.addEventListener('click', () => slide(-1));
    next.addEventListener('click', () => slide(1));
}());

// Slideshow functionality
(function() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    const slides = slideshowContainer.querySelectorAll('.slide');
    const prevBtn = slideshowContainer.querySelector('.prev-slide');
    const nextBtn = slideshowContainer.querySelector('.next-slide');
    const dotsContainer = slideshowContainer.querySelector('.slideshow-dots');
    
    if (slides.length === 0) return;

    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('slideshow-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.slideshow-dot');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Hide navigation if only one image
    if (slides.length <= 1) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        if (dotsContainer) dotsContainer.style.display = 'none';
    }
}());