// ---- Testimonials Slider ----
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.testimonial-dots .dot');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    let current = 0;
    let autoPlay;

    function showTestimonial(index) {
        cards.forEach(card => card.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        cards[index].classList.add('active');
        dots[index].classList.add('active');
        current = index;
    }

    function next() {
        showTestimonial((current + 1) % cards.length);
    }

    function prev() {
        showTestimonial((current - 1 + cards.length) % cards.length);
    }

    function startAutoPlay() {
        autoPlay = setInterval(next, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); next(); startAutoPlay(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); prev(); startAutoPlay(); });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            showTestimonial(i);
            startAutoPlay();
        });
    });

    startAutoPlay();
});