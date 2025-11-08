import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
        // Limpieza automática con contexto (importante en Astro)
        const ctx = gsap.context(() => {
            // ============================================================
            // Animación de entrada del título principal
            // ============================================================
            gsap.from(".projectTitle", {
                x: 200,
                opacity: 0,
                duration: 1.2,
                delay: 0.4,
                ease: "power3.out",
            });

            // ============================================================
            // Animación de aparición del contenido
            // ============================================================
            const content = document.querySelector(".content-appear");
            if (content) {
                gsap.from(content, {
                    opacity: 0,
                    y: 50,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: content,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                });
            }


            // ============================================================
            // Animación del FOOTER con GSAP
            // ============================================================
            const footer = document.querySelector("#footer");

            if (footer) {
                // Estado inicial: oculto, un poco desplazado hacia abajo
                gsap.set(footer, { opacity: 0});

                // Entrada inicial al cargar
                gsap.to(footer, {
                    opacity: 1,
                    duration: 1.2,
                    delay: 1,
                    ease: "power3.out",
                });

                // Control con scroll: desaparece al bajar y reaparece al subir
                ScrollTrigger.create({
                    trigger: ".section-resumen",
                    start: "top 85%",
                    end: "top top",
                    onEnter: () => {
                        gsap.to(footer, {
                            opacity: 0,
                            duration: 0.6,
                            ease: "power2.out",
                        });
                    },
                    onLeaveBack: () => {
                        gsap.to(footer, {
                            opacity: 1,
                            duration: 0.6,
                            ease: "power2.out",
                        });
                    },
                });
            }

            // ============================================================
            // Parallax del banner + rotación 3D ligera
            // ============================================================
            const bannerImg = document.querySelector(".mainBannerImg");
            if (bannerImg) {
                gsap.fromTo(
                    bannerImg,
                    { yPercent: -15, rotateX: 0 },
                    {
                        yPercent: 15,
                        rotateX: 2,
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".mainBanner",
                            start: "top top",
                            end: "bottom top",
                            scrub: 1.2,
                        },
                    },
                );

                // Parallax del título sincronizado con scroll
                gsap.to(".projectTitle", {
                    yPercent: 40,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".mainBanner",
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    },
                });
            }

            // ===========================================
            // Parallax del texto sincronizado con scroll
            // ===========================================
            gsap.to(".YScrollAnimation", {
                yPercent: 40,
                ease: "none",
                scrollTrigger: {
                    trigger: ".trigger",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });

            // ============================================================
            // CREDITOS STICKY CON GSAP (MEJORADO - FLUIDO + FADE OUT FINAL)
            // ============================================================
            ScrollTrigger.matchMedia({
                // >= 901px → desktop
                "(min-width: 901px)": function () {
                    const credits = document.querySelector(".credits-fixed");
                    if (!credits) return;

                    gsap.from(credits, {
                        autoAlpha: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ".section-resumen",
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });

                    ScrollTrigger.create({
                        trigger: credits,
                        start: "top top+=150",
                        endTrigger: ".credits-end-trigge",
                        end: "top bottom",
                        pin: credits,
                        pinSpacing: false,
                        anticipatePin: 0.01,
                        scrub: false,
                        markers: false,
                        onLeave: () => {
                            gsap.to(credits, {
                                autoAlpha: 0,
                                duration: 0.6,
                                ease: "power2.inOut",
                            });
                        },
                        onEnterBack: () => {
                            gsap.to(credits, {
                                autoAlpha: 1,
                                duration: 0.6,
                                ease: "power2.out",
                            });
                        },
                    });
                },

                // <= 900px → mobile / tablet
                "(max-width: 900px)": function () {
                    // Limpieza de triggers si vienen de desktop
                    ScrollTrigger.getAll().forEach(trigger => {
                        if (trigger.trigger && trigger.trigger.classList.contains("credits-fixed")) {
                            trigger.kill();
                        }
                    });
                    // Aseguramos que esté visible y sin efectos
                    const credits = document.querySelector(".credits-fixed");
                    if (credits) {
                        gsap.set(credits, { clearProps: "all", autoAlpha: 1 });
                    }
                },
            });
        });

        // Cleanup automático cuando el componente se desmonta
        return () => ctx.revert();
    });
}