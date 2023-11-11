let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".fa-circle");
    const slideInterval = 3000; // Vrednost od 3 sekunde

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active-dots");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add("active-dots");
            } else {
                dot.classList.remove("active-dots");
            }
        });
    }

    function prevSlide() {
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active-dots");
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add("active");
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add("active-dots");
            } else {
                dot.classList.remove("active-dots");
            }
        });
    }

    // Prva tacna se stavlja odma aktivna
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active-dots");

    // Interval za automatski slider
    setInterval(nextSlide, slideInterval);

    function previousSlideImage() {
        prevSlide();
    }

    function nextSlideImage() {
        nextSlide();
    }




    const fadeInElements = document.querySelectorAll('.fade-in');

    const fadeIn = () => {
        fadeInElements.forEach((element) => {
            if (isElementInViewport(element)) {
                element.classList.add('appear');
            }
        });
    };
    
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight;
    };
    
    document.addEventListener('scroll', fadeIn);
    

