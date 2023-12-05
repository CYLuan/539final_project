document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Check if the element is intersecting (in the viewport).
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1; // Fade in when in viewport
                entry.target.style.transform = "translateY(0)"; // Slide effect
            } else {
                entry.target.style.opacity = 0; // Fade out when out of viewport
                entry.target.style.transform = "translateY(30px)"; // Slide effect
            }
        });
    }, {
        rootMargin: '0px',
        // the margin around the root element (viewport).
        threshold: 0.1
        // how much of the target element has to be visible in order to trigger the animation.
    });

    // Select all elements with the class 'fade-effect'
    document.querySelectorAll('.fade-effect').forEach((section) => {
        observer.observe(section);
    });
});
