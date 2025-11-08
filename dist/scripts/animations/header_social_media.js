import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const iconButton = document.getElementById("iconButton");
  const socialIcons = document.querySelectorAll(".social-icon");

  if (!iconButton || socialIcons.length === 0) return;

  let isOpen = false;

  // Ocultar íconos inicialmente
  gsap.set(socialIcons, { x: -50, opacity: 0, scaleX: 0, pointerEvents: "none" });

  iconButton.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      // Mostrar íconos
      gsap.to(socialIcons, {
        duration: 0.5,
        x: 0,
        opacity: 1,
        scaleX: 1,
        pointerEvents: "auto",
        stagger: 0.1,
        ease: "power3.out",
      });
      gsap.to(iconButton, { rotation: 90, duration: 0.3, ease: "power2.out" });
    } else {
      // Ocultar íconos
      gsap.to(socialIcons, {
        duration: 0.4,
        x: -50,
        opacity: 0,
        scaleX: 0,
        pointerEvents: "none",
        stagger: 0.1,
        ease: "power3.in",
      });
      gsap.to(iconButton, { rotation: 0, duration: 0.3, ease: "power2.in" });
    }
  });
});