// Carousel functionality
const carousel = document.querySelector('.carousel');
const carouselBtnLeft = document.querySelector('.carousel-left');
const carouselBtnRight = document.querySelector('.carousel-right');

if (carousel && carouselBtnLeft && carouselBtnRight) {
    const scrollAmount = 250;

    carouselBtnLeft.addEventListener('click', () => {
        carousel.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    carouselBtnRight.addEventListener('click', () => {
        carousel.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Show/hide carousel buttons based on scroll position
    function updateCarouselButtons() {
        const scrollLeft = carousel.scrollLeft;
        const scrollWidth = carousel.scrollWidth;
        const clientWidth = carousel.clientWidth;

        if (scrollLeft <= 0) {
            carouselBtnLeft.style.opacity = '0.5';
            carouselBtnLeft.style.pointerEvents = 'none';
        } else {
            carouselBtnLeft.style.opacity = '1';
            carouselBtnLeft.style.pointerEvents = 'auto';
        }

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
            carouselBtnRight.style.opacity = '0.5';
            carouselBtnRight.style.pointerEvents = 'none';
        } else {
            carouselBtnRight.style.opacity = '1';
            carouselBtnRight.style.pointerEvents = 'auto';
        }
    }

    carousel.addEventListener('scroll', updateCarouselButtons);
    window.addEventListener('resize', updateCarouselButtons);
    updateCarouselButtons();
}

// FAQ functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Email form submission
const emailInputs = document.querySelectorAll('.email-input');
const getStartedBtns = document.querySelectorAll('.get-started-btn');

getStartedBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const emailInput = emailInputs[index];
        const email = emailInput.value.trim();
        
        if (email === '') {
            emailInput.style.borderColor = '#e50914';
            emailInput.placeholder = 'Please enter your email';
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            emailInput.style.borderColor = '#e50914';
            emailInput.placeholder = 'Please enter a valid email';
            return;
        }
        
        // Reset border color
        emailInput.style.borderColor = '';
        
        // Show success message (you can replace this with actual form submission)
        alert('Thank you! Check your email to continue.');
        emailInput.value = '';
    });
    
    // Reset border on input
    emailInputs[index].addEventListener('focus', () => {
        emailInputs[index].style.borderColor = '';
    });
});

// Language selector (can be extended with actual language switching)
const languageSelects = document.querySelectorAll('.language-select');

languageSelects.forEach(select => {
    select.addEventListener('change', (e) => {
        const language = e.target.value;
        console.log('Language changed to:', language);
        // Add your language switching logic here
    });
});

// Sign in button functionality
const signInBtn = document.querySelector('.signin-btn');

if (signInBtn) {
    signInBtn.addEventListener('click', () => {
        alert('Redirecting to sign in page...');
        // Replace with actual sign-in page navigation
        // window.location.href = '/signin';
    });
}