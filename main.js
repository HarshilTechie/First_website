document.addEventListener("DOMContentLoaded", () => {
    const transitionOverlay = document.querySelector('.transition-overlay');
    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetUrl = link.href; 

            transitionOverlay.classList.add('active');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500); 
        });
    });

    window.addEventListener('load', () => {
        transitionOverlay.classList.remove('active');
    });
});
