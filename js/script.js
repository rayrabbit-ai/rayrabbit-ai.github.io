// Smooth Scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
};

// Intersection Observer Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const animateOnScroll = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Targeting elements to observe
const elementsToAnimate = document.querySelectorAll('.animate');
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Interactive functionality
const buttons = document.querySelectorAll('.interactive-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        smoothScroll(button.dataset.target);
    });
});