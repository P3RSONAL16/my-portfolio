/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} year
 * @property {string} href
 * @property {string} img
 * @property {string} description
 * @property {string} text
 * @property {string} technologies
 * @property {string} previewLink
 * @property {string[]} images
 * @property {{ name: string, url: string }} nextProject
 * @property {{ client: string, website: string, leadDeveloper: string }} credits
 * @property {{ summary1: string, summary2: string }} summary
 */

/** @type {Project[]} */
export const projects = [
  // === ubermosh === / 2025
  {
    slug: "ubermosh",
    title: "Ubermosh",
    year: "2025",
    href: "projects/ubermosh",
    img: "img/UBERMOSH/UBERMOSH-PREVIEW.png",
    description: "Un proyecto visual inspirado en la estética cyberpunk, velocidad y caos controlado.",
    text: `"Ubermosh" explora una experiencia digital intensa con un diseño cargado de energía y contraste, combinando música, luz y movimiento en una interfaz que refleja la adrenalina del universo cyberpunk.`,
    technologies: "Este proyecto fue desarrollado utilizando HTML para la estructura del sitio, CSS para el diseño responsivo y estilización, y GitHub para el control de versiones. node.js para el back-end",
    images: [
      "public/img/UBERMOSH/UBERMOSH-PREVIEW.png",
      "public/img/UBERMOSH/UBERMOSH-PREVIEW.png",
      "public/img/UBERMOSH/Captura de pantalla 2025-10-26 174631.png",
      "public/img/UBERMOSH/Captura de pantalla 2025-10-26 174654.png",
      "/img/UBERMOSH/Captura de pantalla 2025-10-26 174714.png",
      "/img/UBERMOSH/Captura de pantalla 2025-10-26 174754.png",
      "/img/UBERMOSH/Captura de pantalla 2025-10-26 174915.png",
      "/img/UBERMOSH/Captura de pantalla 2025-10-26 174849.png",
      "/img/UBERMOSH/Captura de pantalla 2025-10-26 174814.png",
      "/img/UBERMOSH/Captura de pantalla 2025-f10-26 174714.png",
      "/img/UBERMOSH/Vinillo3D.png",
      "/img/UBERMOSH/Logo Ubermosh.webm",
    ],
    nextProject: {
      name: "Matcha No Kuma",
      url: "projects/matcha-no-kuma"
    },
    credits: {
      client: "Ubermosh",
      titleWebsite: "",
      website: "",
      leadDeveloper: "Mario Alfonso",
      tech: "HTML, CSS, JavaScript, Node, SQL, Photoshop, After Effects, Blender"
    },
    summary: {
      summary1: "Ubermosh es un proyecto visual inspirado en el cyberpunk.",
      summary2: "Combina movimiento, luz y música para generar una experiencia digital intensa.",
      summary3: "El proyecto refleja adrenalina y contraste mediante un diseño dinámico y creativo."
    }
  },
  // === runes-viking === / 2025
  {
    slug: "runes-viking",
    title: "Runes Viking",
    year: "2025",
    href: "/projects/runes-viking",
    img: "/img/RUNES VIKING/RUNES VIKING-PREVIEW.png",
    description: "Un homenaje visual a la mitología nórdica y sus símbolos antiguos.",
    text: `"Runes Viking" combina ilustración digital y animación para crear una experiencia inmersiva inspirada en la simbología y la estética vikinga.`,
    technologies: "HTML, CSS, JavaScript, GSAP",
    images: [
      "/img/RUNES VIKING/RUNES VIKING-PREVIEW.png",
      "/img/RUNES VIKING/RUNES VIKING-PREVIEW.png",
      "/img/RUNES VIKING/Captura de pantalla 2025-10-27 205111.png",
      "/img/RUNES VIKING/Captura de pantalla 2025-10-27 205047.png",
    ],
    nextProject: {
      name: "Ubermosh",
      url: "/projects/ubermosh"
    },
    credits: {
      client: "Runes Viking",
      titleWebsite: "www.RunesViking.io",
      website: "https://p3rsonal16.github.io/Viking-Runes/",
      leadDeveloper: "Mario Alfonso",
      tech: "HTML, CSS, JavaScript, GSAP",
    },
    summary: {
      summary1: "Runes Viking es un proyecto visual que homenajea la mitología nórdica.",
      summary2: "Combina ilustración y animación para explorar símbolos antiguos.",
      summary3: "El proyecto crea una experiencia inmersiva que refleja la estética vikinga.",
    }
  },
  // === product-slider === / 2025
  {
    slug: "product-slider",
    title: "Product Slider",
    year: "2025",
    href: "/projects/product-slider",
    img: "/img/INFINITE SLIDER/INFINITE SLIDER-PREVIEW.png",
    description: "Un slider interactivo diseñado para mostrar productos de forma fluida e infinita.",
    text: `"Product Slider" explora la interacción dinámica entre movimiento continuo y diseño minimalista, enfocado en la presentación visual de productos.`,
    technologies: "HTML, CSS, JavaScript, GSAP",
    images: [
      "/img/INFINITE SLIDER/INFINITE SLIDER-PREVIEW1.png",
      "/img/INFINITE SLIDER/Captura de pantalla 2025-10-06 180152.png",
      "/img/INFINITE SLIDER/INFINITE SLIDER-PREVIEW.png",
      "/img/INFINITE SLIDER/Captura de pantalla 2025-10-06 181235.png",
    ],
    nextProject: {
      name: "Runes Viking",
      url: "/projects/runes-viking"
    },
    credits: {
      client: "Product Slider",
      titleWebsite: "www.ProductSlider.io",
      website: "https://p3rsonal16.github.io/Infinite-Slider/",
      leadDeveloper: "Mario Alfonso",
      tech: "HTML, CSS, JavaScript, GSAP"
    },
    summary: {
      summary1: "Product Slider es un slider interactivo para mostrar productos de forma fluida.",
      summary2: "Permite una interacción dinámica y un diseño minimalista.",
      summary3: "El proyecto ofrece una experiencia visual continua y atractiva para el usuario."
    }
  },
  // === matcha-no-kuma === / 2024
  {
    slug: "matcha-no-kuma",
    title: "Matcha No Kuma",
    year: "2024",
    href: "/projects/matcha-no-kuma",
    img: "/img/MATCHA NO KUMA/Matcha no kuma-PREVIEW.png",
    text: `Matcha no Kuma es una página web dedicada a la difusión y comercialización del té matcha, resaltando su tradición, beneficios y origen. Su estética elegante y minimalista combina elementos de la cultura japonesa con ilustraciones y fotografías de alta calidad.`,
    technologies: "Este proyecto fue desarrollado utilizando HTML para la estructura del sitio,  CSS para el diseño responsivo y estilización, y GitHub para el control de versiones.",
    description: "El contenido se adapta con fluidez a distintos formatos, permitiendo integrar tanto imágenes como videos que evocan la experiencia sensorial del matcha.",
    images: [
      "/img/MATCHA NO KUMA/Matcha no kuma-PREVIEW3.png",
      "/img/MATCHA NO KUMA/Matcha no kuma(HOME).jpg",
      "/img/MATCHA NO KUMA/Matcha no kuma(ABOUT).png",
      "/img/MATCHA NO KUMA/Matcha no kuma(MAP).png"
    ],
    nextProject: {
      name: "Gnotech",
      url: "/projects/gnotech"
    },
    credits: {
      client: "Matcha No Kuma",
      titleWebsite: "www.MatchaNoKuma.io",
      website: "https://p3rsonal16.github.io/Matcha-No-Kuma/",
      leadDeveloper: "Mario Alfonso",
      tech: "html, css, photoshop"
    },
    summary: {
      summary1: "Matcha no Kuma es una marca de té artesanal.",
      summary2: "Inspirados en la pureza y el equilibrio del té japonés, diseñamos una página web que refleja la esencia de la marca: simple, natural y cuidadosamente elaborada.",
      summary3: "Construido con un enfoque en rendimiento, flexibilidad y mantenimiento sencillo, el sitio permite compartir la historia detrás de cada mezcla, presentar productos de forma clara y ofrecer una experiencia inmersiva que celebra la cultura del matcha."
    }
  },
  // === gnotech
  {
    slug: "gnotech",
    title: "Gnotech",
    year: "2024",
    href: "/projects/gnotech",
    img: "/img/GNOTECH/GNOTECH-PREVIEW.png",
    description: "Proyecto enfocado en tecnología e innovación digital.",
    text: `"Gnotech" representa la integración entre creatividad y tecnología, desarrollando interfaces limpias y funcionales orientadas a la experiencia de usuario.`,
    technologies: "Este proyecto fue desarrollado utilizando HTML para la estructura del sitio, CSS para el diseño responsivo y estilización, Javascript y GitHub para el control de versiones.",
    images: [
      "/img/GNOTECH/GNOTECH-PREVIEW2.png",
      "/img/GNOTECH/GNOTECHHOME.jpg",
      "/img/GNOTECH/Captura de pantalla 2025-10-27 200447.png",
      "/img/GNOTECH/Captura de pantalla 2025-10-27 200349.png",
    ],
    nextProject: {
      name: "Signal",
      url: "/projects/signal"
    },
    credits: {
      client: "Gnotech",
      titleWebsite: "www.Gnotech.io",
      website: "https://p3rsonal16.github.io/Gnotech/",
      leadDeveloper: "Mario Alfonso",
      tech: "HTML, CSS, JavaScript"
    },
    summary: {
      summary1: "Gnotech, enfocado en tecnología e innovación digital.",
      summary2: "Gnotech es un proyecto académico desarrollado en un instituto tecnológico, enfocado en la tecnología, la innovación digital y la optimización de procesos educativos.",
      summary3: "El proyecto busca desarrollar interfaces limpias, intuitivas y funcionales, orientadas a mejorar la experiencia académica de estudiantes y docentes mediante herramientas digitales eficientes."
    }
  },
  // === signal
  {
    slug: "signal",
    title: "Signal",
    year: "2022",
    href: "/projects/signal",
    img: "/img/SIGNAL/SIGNAL-PREVIEW.png",
    description: "Una experiencia visual que fusiona comunicación, sonido y abstracción digital.",
    text: "Signal es una terminal web experimental que explora la relación entre el sonido, la comunicación y el diseño visual. A través de animaciones dinámicas y tipografía generativa, el proyecto convierte señales acústicas en una experiencia visual inmersiva.",
    technologies: "HTML, CSS, JavaScript",
    images: [
      "/img/SIGNAL/Captura de pantalla 2025-01-27 221032.png",
      "/img/SIGNAL/Captura de pantalla 2025-01-27 221127.png",
    ],
    nextProject: {
      name: "Neural Network",
      url: "/projects/neural-network"
    },
    credits: {
      client: "Signal",
      titleWebsite: "",
      website: "",
      leadDeveloper: "Mario Alfonso",
      tech: "HTML, CSS, JavaScript"
    },
    summary: {
      summary1: "Signal es una terminal web interactiva.",
      summary2: "Representa gráficamente el sonido mediante tipografía y movimiento experimental.",
      summary3: "El proyecto traduce señales sonoras en gráficos dinámicos y tipografía experimental, explorando nuevas formas de interacción con el usuario."
    }
  },
  // === neural-network
  {
    slug: "neural-network",
    title: "Neural Network",
    year: "2021",
    href: "/projects/neural-network",
    img: "/img/NEURAL NETWORK/NEURAL_NETWORK-PREVIEW.png",
    description: "Una animación web que visualiza la complejidad de las redes neuronales y el proceso de aprendizaje artificial.",
    text: `"Neural Network" representa la conexión entre arte y tecnología, donde patrones visuales emulan la forma en que las máquinas aprenden.`,
    technologies: "HTML, CSS, JavaScript",
    images: [
      "/img/NEURAL NETWORK/NEURAL_NETWORK-PREVIEW2.png",
      "/img/NEURAL NETWORK/NEURAL_NETWORK-PREVIEW.png"
    ],
    nextProject: {
      name: "Henka Jin",
      url: "/projects/henka-jin"
    },
    credits: {
      client: "Neural Network",
      titleWebsite: "www.NeuralNetwork.io",
      website: "https://p3rsonal16.github.io/Neural-Network-Animation-/",
      leadDeveloper: "Mario Alfonso",
      tech: "HTML, CSS, JavaScript"
    },
    summary: {
      summary1: "Neural Network es una exploración visual inspirada en redes neuronales.",
      summary2: "El proyecto fusiona tecnología, diseño para representar cómo la información se transmite y transforma dentro de un sistema artificial.",
      summary3: "El proyecto crea conexiones visuales que reflejan la inteligencia artificial de forma artística."
    }
  },
  // === henka-jin
  {
    slug: "henka-jin",
    title: "Henka Jin",
    year: "2020",
    href: "/projects/henka-jin",
    img: "/img/HENKA JIN/HENKA_JIN-PREVIEW.png",
    description: "Una marca conceptual de ropa inspirada en la transformación, la identidad y la evolución constante.",
    text: `"Henka Jin" es un proyecto de marca y tienda digital que combina moda, diseño visual y movimiento. A través de una estética que fusiona influencias orientales con tendencias contemporáneas.`,
    technologies: "Photoshop",
    images: [
      "/img/HENKA JIN/HENKA_JIN-PREVIEW2.png",
      "/img/HENKA JIN/OKINA KOI -- HOME.jpg",
      "/img/HENKA JIN/OKINA KOI -- PRODUCT.png",
      "/img/HENKA JIN/OKINA KOI -- CONTACTS.png",
    ],
    nextProject: {
      name: "Product Slider",
      url: "/projects/product-slider",
    },
    credits: {
      client: "Henka Jin",
      titleWebsite: "www.HenkaJin.io",
      website: "https://p3rsonal16.github.io/Henka-Jin/",
      leadDeveloper: "Mario Alfonso",
      tech: "Photoshop",
    },
    summary: {
      summary1: "Henka Jin es una marca digital de ropa.",
      summary2: "El proyecto combina ilustración, moda y animación para crear una experiencia visual que refleja el cambio constante como parte del proceso creativo.",
      summary3: "Con una estética que une influencias orientales y modernas, Henka Jin redefine el concepto de estilo como una expresión evolutiva del ser."
    }
  },


];




// ============ 3D Images
export const projects3D = [
  { src: "/img/3D GALLERY LOW/Desert_1.jpg", alt: "Desert 1" },
  { src: "/img/3D GALLERY LOW/Desert_1.jpg", alt: "Desert 1" },
  { src: "/img/3D GALLERY LOW/Desert_2.jpg", alt: "Desert 2" },
  { src: "/img/3D GALLERY LOW/Desert_3.jpg", alt: "Desert 3" },
  { src: "/img/3D GALLERY LOW/Desert_4.jpg", alt: "Desert 4" },
  { src: "/img/3D GALLERY LOW/Seaside_1.jpg", alt: "Seaside 1" },
  { src: "/img/3D GALLERY LOW/X.I.I NEW.jpg", alt: "X.I.I NEW" },
  { src: "/img/3D GALLERY LOW/X.V.I NEW.jpg", alt: "X.V.I NEW" },
  { src: "/img/3D GALLERY LOW/X.I.X NEW.jpg", alt: "X.I.X NEW" },
  { src: "/img/3D GALLERY LOW/X.I.V NEW.jpg", alt: "X.I.V NEW" },
  { src: "/img/3D GALLERY LOW/X.V NEW.jpg", alt: "X.V NEW" },
  { src: "/img/3D GALLERY LOW/X.V.I.I NEW.jpg", alt: "X.V.I.I NEW" },
  { src: "/img/3D GALLERY LOW/X.I.I.I NEW.jpg", alt: "X.I.I.I NEW" },
  { src: "/img/3D GALLERY LOW/X.X Nitido.jpg", alt: "X.X Nitido" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMoving.jpg", alt: "X.X.I CameraMoving" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMoving.jpg", alt: "X.X.I CameraMoving" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMovingComparation.jpg", alt: "X.X.I CameraMovingComparation" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMovingOutlast.jpg", alt: "X.X.I CameraMovingOutlast" },

  { src: "/img/3D GALLERY LOW/ETERNITY_V1.1.jpg", alt: "ETERNITY_V1.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V2.1.jpg", alt: "ETERNITY_V2.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V3.1.jpg", alt: "ETERNITY_V3.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V4.1.jpg", alt: "ETERNITY_V4.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V1.1.jpg", alt: "ETERNITY_V1.1 Duplicate" },

  { src: "/img/3D GALLERY LOW/咒語_1.jpg", alt: "咒語_1" },
  { src: "/img/3D GALLERY LOW/咒語_BHUDDA_1.1.jpg", alt: "咒語_BHUDDA_1.1" },

  { src: "/img/3D GALLERY LOW/Weapon_1.png", alt: "Weapon 1" },
  { src: "/img/3D GALLERY LOW/Weapon_2.png", alt: "Weapon 2" },
  { src: "/img/3D GALLERY LOW/Weapon_3.png", alt: "Weapon 3" },

  { src: "/img/3D GALLERY LOW/untitled5.jpg", alt: "untitled5" },
  { src: "/img/3D GALLERY LOW/TV_1.jpg", alt: "TV_1" },

  { src: "/img/3D GALLERY LOW/tierra_1.jpg", alt: "tierra_1" },
  { src: "/img/3D GALLERY LOW/Desert_1.jpg", alt: "Desert 1" },
  { src: "/img/3D GALLERY LOW/Desert_2.jpg", alt: "Desert 2" },
  { src: "/img/3D GALLERY LOW/Desert_3.jpg", alt: "Desert 3" },
  { src: "/img/3D GALLERY LOW/Desert_4.jpg", alt: "Desert 4" },
  { src: "/img/3D GALLERY LOW/Seaside_1.jpg", alt: "Seaside 1" },
  { src: "/img/3D GALLERY LOW/X.I.I NEW.jpg", alt: "X.I.I NEW" },
  { src: "/img/3D GALLERY LOW/X.V.I NEW.jpg", alt: "X.V.I NEW" },
  { src: "/img/3D GALLERY LOW/X.I.X NEW.jpg", alt: "X.I.X NEW" },
  { src: "/img/3D GALLERY LOW/X.I.V NEW.jpg", alt: "X.I.V NEW" },
  { src: "/img/3D GALLERY LOW/X.V NEW.jpg", alt: "X.V NEW" },
  { src: "/img/3D GALLERY LOW/X.V.I.I NEW.jpg", alt: "X.V.I.I NEW" },
  { src: "/img/3D GALLERY LOW/X.I.I.I NEW.jpg", alt: "X.I.I.I NEW" },
  { src: "/img/3D GALLERY LOW/X.X Nitido.jpg", alt: "X.X Nitido" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMoving.jpg", alt: "X.X.I CameraMoving" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMovingComparation.jpg", alt: "X.X.I CameraMovingComparation" },
  { src: "/img/3D GALLERY LOW/X.X.I CameraMovingOutlast.jpg", alt: "X.X.I CameraMovingOutlast" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V1.1.jpg", alt: "ETERNITY_V1.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V2.1.jpg", alt: "ETERNITY_V2.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V3.1.jpg", alt: "ETERNITY_V3.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V4.1.jpg", alt: "ETERNITY_V4.1" },
  { src: "/img/3D GALLERY LOW/ETERNITY_V1.1.jpg", alt: "ETERNITY_V1.1 Duplicate" },
  { src: "/img/3D GALLERY LOW/咒語_1.jpg", alt: "咒語_1" },
  { src: "/img/3D GALLERY LOW/咒語_BHUDDA_1.1.jpg", alt: "咒語_BHUDDA_1.1" },
  { src: "/img/3D GALLERY LOW/Weapon_1.png", alt: "Weapon 1" },
  { src: "/img/3D GALLERY LOW/Weapon_2.png", alt: "Weapon 2" },
  { src: "/img/3D GALLERY LOW/Weapon_3.png", alt: "Weapon 3" },
  { src: "/img/3D GALLERY LOW/untitled5.jpg", alt: "untitled5" },
  { src: "/img/3D GALLERY LOW/TV_1.jpg", alt: "TV_1" },
  { src: "/img/3D GALLERY LOW/tierra_1.jpg", alt: "tierra_1" },
  { src: "/img/3D GALLERY LOW/Tierra_2.jpg", alt: "Tierra_2" },
  { src: "/img/3D GALLERY LOW/Tierra_3.jpg", alt: "Tierra_3" },
  { src: "/img/3D GALLERY LOW/Tierra_4.jpg", alt: "Tierra_4" },

];


