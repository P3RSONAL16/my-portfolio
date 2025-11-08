// Manejador de la animación del overlay
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector('.overlay');

    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 2000); // Duración de la animación de 2s 
});