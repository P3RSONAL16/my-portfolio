// header_off_on.js

import { gsap } from "gsap";

// Seleccionamos el header
const header = document.querySelector("header");

let lastScrollY = window.scrollY;
let isHidden = false;

// Detectar el scroll
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Evitar movimientos innecesarios si no hay desplazamiento
  if (Math.abs(currentScroll - lastScrollY) < 5) return;

  // Si hacemos scroll hacia abajo y el header no está oculto → esconder
  if (currentScroll > lastScrollY && !isHidden) {
    gsap.to(header, {
      y: "-100%", // lo mueve hacia arriba
      duration: 0.05,
      ease: "power2.out"
    });
    isHidden = true;
  }

  // Si hacemos scroll hacia arriba y el header está oculto → mostrar
  else if (currentScroll < lastScrollY && isHidden) {
    gsap.to(header, {
      y: "0%", // vuelve a su posición original
      duration: 0.05,
      ease: "power2.out"
    });
    isHidden = false;
  }

  lastScrollY = currentScroll;
});
