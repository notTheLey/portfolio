// Custom Cursor Implementation
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Scroll Animation (optional: can enhance performance with IntersectionObserver)
const items = document.querySelectorAll('.portfolio-item');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInScaleBlur 1s ease forwards';
        }
    });
});

items.forEach(item => {
    observer.observe(item);
});

// Typed.js for Hover Effects
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    const infoBox = item.querySelector('.info-box');
    const typedId = `#typed${index + 1}`;
    const infoText = infoBox.getAttribute('data-info');

    item.addEventListener('mouseenter', () => {
        if (!infoBox.classList.contains('typed-init')) {
            new Typed(typedId, {
                strings: [infoText],
                typeSpeed: 50,
                showCursor: false
            });
            infoBox.classList.add('typed-init');
        }
    });
});
