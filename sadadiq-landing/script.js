document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Anchor Links ---
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- Header Style on Scroll ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#fff';
            header.style.backdropFilter = 'none';
        }
    });

    // --- Mobile Menu Functionality ---
    const nav = document.querySelector('.nav .container');
    const navLinks = document.querySelector('.nav-links');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    nav.appendChild(mobileMenuBtn);

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        // Change icon to 'X' when menu is open
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('mobile-active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // --- Gallery (Slider) Functionality ---
    const galleryTrack = document.querySelector('.gallery-track');
    const slides = Array.from(galleryTrack.children);
    const nextButton = document.querySelector('.gallery-nav.next');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const dotsNav = document.querySelector('.gallery-dots');
    const dots = Array.from(dotsNav.children);

    let currentSlide = 0;
    const slideCount = slides.length;

    // Initialize dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Navigation functions
    function goToSlide(index) {
        if (index < 0 || index >= slideCount) return;
        
        // Update active states
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        // Update track position
        galleryTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active states
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Update button states
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === slideCount - 1;
    }

    // Event listeners for navigation buttons
    nextButton.addEventListener('click', () => {
        if (currentSlide < slideCount - 1) {
            goToSlide(currentSlide + 1);
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextButton.click();
        } else if (e.key === 'ArrowLeft') {
            prevButton.click();
        }
    });

    // Initialize first slide
    goToSlide(0);
    
    // Auto-advance slides every 5 seconds
    let slideInterval = setInterval(() => {
        const nextSlide = (currentSlide + 1) % slideCount;
        goToSlide(nextSlide);
    }, 5000);
    
    // Pause auto-advance on hover
    galleryTrack.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    galleryTrack.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % slideCount;
            goToSlide(nextSlide);
        }, 5000);
    });
});