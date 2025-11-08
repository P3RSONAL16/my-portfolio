// src/scripts/modals.js
import { gsap } from "gsap";

// =====================
// MODAL ABOUT
// =====================
const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("aboutBtn");
const closeAbout = document.getElementById("closeAbout");
const footer = document.getElementById("footer");

if (aboutBtn && aboutModal && footer) {
  aboutBtn.addEventListener("click", () => {
    // Mostrar modal
    aboutModal.classList.remove("hidden", "invisible");

    // Reset animaciones iniciales
    gsap.set(aboutModal, { opacity: 0 });
    gsap.set(".about-content", { opacity: 0, y: 50 });

    // Animación entrada modal
    const tl = gsap.timeline();
    tl.to(aboutModal, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".about-content", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.02");

    // Footer sube
    gsap.to(footer, { y: "-70vh", duration: 0.25, ease: "power2.inOut" });
  });
}

if (closeAbout && footer) {
  closeAbout.addEventListener("click", () => {
    const tl = gsap.timeline({
      onComplete: () => {
        aboutModal.classList.add("hidden", "invisible");
      }
    });

    tl.to(".about-content", { opacity: 0, y: 50, duration: 0.6, ease: "power3.inOut" })
      .to(aboutModal, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.3");

    // Footer baja
    gsap.to(footer, { y: "0%", duration: 0.25, ease: "power3.out" });
  });
}

// =====================
// MODAL CONTACT
// =====================
const contactModal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeContact = document.getElementById("closeContact");

if (contactBtn && contactModal && footer) {
  contactBtn.addEventListener("click", () => {
    // Mostrar modal
    contactModal.classList.remove("hidden", "invisible");

    // Reset animaciones iniciales
    gsap.set(contactModal, { opacity: 0 });
    gsap.set(".contact-content", { opacity: 0, y: 50 });

    // Animación entrada modal
    const tl = gsap.timeline();
    tl.to(contactModal, { opacity: 1, duration: 0.8, ease: "power2.out" })
      .to(".contact-content", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.02");

    // Footer sube
    gsap.to(footer, { y: "-70vh", duration: 0.25, ease: "power2.inOut" });
  });
}

if (closeContact && footer) {
  closeContact.addEventListener("click", () => {
    const tl = gsap.timeline({
      onComplete: () => {
        contactModal.classList.add("hidden", "invisible");
      }
    });

    tl.to(".contact-content", { opacity: 0, y: 50, duration: 0.6, ease: "power3.inOut" })
      .to(contactModal, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.3");

    // Footer baja
    gsap.to(footer, { y: "0%", duration: 0.25, ease: "power3.out" });
  });
}