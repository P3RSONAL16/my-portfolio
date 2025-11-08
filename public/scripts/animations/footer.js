// public/scripts/animations/footer.js
import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js";

window.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("#logoHeight");
    const info = document.querySelector("#footerInfo");

    if (!logo || !info) return;

    // Estado inicial
    gsap.set([logo, info], {
        y: 100,
        scaleY: 0.7,
        opacity: 0,
        transformOrigin: "bottom center",
    });

    // Animación del bloque info
    gsap.to(info, {
        y: 0,
        scaleY: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 1.5,
    });

    // Animación del logo
    gsap.to(logo, {
        y: 0,
        scaleY: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 2,
    });
});