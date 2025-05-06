document.addEventListener("DOMContentLoaded", function() {
    const aboutText = document.querySelector('.about-text');
    const aboutHeading = document.querySelector('.about-text h3');
    const aboutSubHeading = document.querySelector('.about-text h4');
    const aboutDescription = document.querySelector('.about-text p');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        if (isElementInViewport(aboutText)) {
            aboutHeading.classList.add('slide-in');
            aboutSubHeading.classList.add('slide-in');
            aboutDescription.classList.add('slide-in');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});