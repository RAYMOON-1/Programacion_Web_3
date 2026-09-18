document.addEventListener('DOMContentLoaded', () => {
    let clickCount = 0;
    const counterElement = document.getElementById('click-counter');
    const allLinks = document.querySelectorAll('.link-btn, .socials__icon');
    const shareBtn = document.getElementById('share-btn');
    const toast = document.getElementById('toast');

    // Registrar contador de clics
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            clickCount++;
            if (counterElement) {
                counterElement.textContent = clickCount;
            }
        });
    });

    // Función de copiar al portapapeles
    if (shareBtn) {
        shareBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(window.location.href).then(() => {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            });
        });
    }
});