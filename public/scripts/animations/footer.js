import gsap from "gsap";

window.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("#logoHeight");
    const info = document.querySelector("#footerInfo");

    if (!logo || !info) return;

    // Estado inicial idéntico al CSS @keyframes
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
        duration: 1,          // igual que en CSS (1s)
        ease: "power1.inOut", // igual que "ease-in-out"
        delay: 1.5,           // igual que animate-footer-info
   
    });

    // Animación del logo
    gsap.to(logo, {
        y: 0,
        scaleY: 1,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        delay: 2,           // igual que animate-footer-logo
     
    });
});