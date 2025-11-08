import { transitionEnabledOnThisPage } from 'astro:transitions/client';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

// Esperamos a que el DOM esté completamente cargado antes de ejecutar el script.
window.addEventListener('DOMContentLoaded', () => {

    // ============================================================
    // CANVAS Y ANIMACIÓN (GSAP)
    // ============================================================

    const canvas = document.querySelector('canvas');
    if (!canvas) return console.error('Canvas no encontrado');

    // Estado inicial idéntico al CSS
    gsap.set(canvas, {
        opacity: 0,
    });

    // Animación idéntica al CSS: fadeIn 3s ease-in-out forwards
    gsap.to(canvas, {
        opacity: 1,
        duration: 3,
        ease: 'power1.inOut', // equivalente a "ease-in-out"
    });


    // ============================================================
    // CONFIGURACIÓN GLOBAL
    // ============================================================
    const config = {
        canvasBg: '#110f10',              // Color de fondo del canvas
        // modelPath: '/models/engel.glb', 
        // modelPath: '/models/sphinx.glb', 
        metalness: 0.5,                   // Brillo metálico del material
        roughness: 0.75,                  // Rugosidad (0 = espejo, 1 = mate)
        baseZoom: 0.75,                   // Escala base de la cámara según el tamaño del modelo
        baseCamPosX: window.innerWidth < 1000 ? 0 : -0.75, // Ajuste de posición de cámara según ancho
        baseCamPosY: -1.25,
        baseCamPosZ: 0,

        // Rotación base del modelo
        baseRotationX: 0,                 
        baseRotationY: 0.3,
        baseRotationZ: 0,
        // Offset del modelo
        baseOffsetX: -1.55,
        baseOffsetY: -0.15,

        // Intensidad y posición de diferentes luces direccionales
        ambientIntensity: 0.25,
        keyIntensity: 0.5,
        keyPosX: 2.5, keyPosY: 10, keyPosZ: 10,
        fillIntensity: 1.5,
        fillPosX: -5, fillPosY: 2.5, fillPosZ: -2.5,
        rimIntensity: 2.5,
        rimPosX: -7.5, rimPosY: 5, rimPosZ: -10,
        topIntensity: 0.5,
        topPosX: 0, topPosY: 15, topPosZ: 0,

        // Luz que sigue al cursor
        cursorLightEnable: true,
        cursorLightIntensity: 1.0,
        cursorLightColor: '#ffffff',
        cursorLightDistance: 2.5,
        cursorLightDecay: 2,
        cursorLightPosZ: 1.5,
        cursorLightScale: 1,

        // Sensibilidad de movimiento/parallax del modelo
        parallaxSensitivityX: 0.25,
        parallaxSensitivityY: 0.25
    };

    // ============================================================
    // ESCENA Y CÁMARA
    // ============================================================

    // Creamos la escena principal (donde van todos los objetos, luces, etc.)
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(config.canvasBg);

    // Creamos una cámara de perspectiva (como un ojo humano)
    const camera = new THREE.PerspectiveCamera(
        60, // Campo de visión en grados
        window.innerWidth / window.innerHeight, // Relación de aspecto
        0.1, // Distancia mínima visible
        1000 // Distancia máxima visible
    );

    // ============================================================
    // RENDERIZADOR
    // ============================================================

    // El renderer convierte la escena 3D en píxeles que se muestran en el <canvas>
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight); // Tamaño del render
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Escala para pantallas HiDPI
    renderer.shadowMap.enabled = true; // Habilitamos sombras suaves

    // ============================================================
    // LUCES
    // ============================================================

    // Luz ambiental: ilumina todo de forma uniforme
    const ambientLight = new THREE.AmbientLight(0xffffff, config.ambientIntensity);
    scene.add(ambientLight);

    // Luz principal (key light): ilumina el modelo desde un ángulo
    const keyLight = new THREE.DirectionalLight(0xffffff, config.keyIntensity);
    keyLight.position.set(config.keyPosX, config.keyPosY, config.keyPosZ);
    keyLight.castShadow = true; // Permite sombras
    scene.add(keyLight);

    // Luz de relleno (fill light): suaviza las sombras
    const fillLight = new THREE.DirectionalLight(0xffffff, config.fillIntensity);
    fillLight.position.set(config.fillPosX, config.fillPosY, config.fillPosZ);
    scene.add(fillLight);

    // Luz trasera (rim light): genera un borde de luz en los bordes del modelo
    const rimLight = new THREE.DirectionalLight(0xffffff, config.rimIntensity);
    rimLight.position.set(config.rimPosX, config.rimPosY, config.rimPosZ);
    scene.add(rimLight);

    // Luz superior (top light): ilumina desde arriba
    const topLight = new THREE.DirectionalLight(0xffffff, config.topIntensity);
    topLight.position.set(config.topPosX, config.topPosY, config.topPosZ);
    scene.add(topLight);

    // ============================================================
    // LUZ DEL CURSOR
    // ============================================================

    // Luz puntual que sigue la posición del cursor del ratón
    const cursorLight = new THREE.PointLight(
        config.cursorLightColor,
        config.cursorLightIntensity,
        config.cursorLightDistance,
        config.cursorLightDecay
    );
    cursorLight.position.set(0, 0, config.cursorLightPosZ);
    cursorLight.visible = config.cursorLightEnable;
    scene.add(cursorLight);

    // ============================================================
    // CARGAR MODELO 3D
    // ============================================================

    const loader = new GLTFLoader(); // Cargador GLTF
    let model, modelCenter = new THREE.Vector3();

    loader.load(
        config.modelPath, // Ruta del modelo
        (gltf) => {
            model = gltf.scene; // Escena del modelo cargado

            // Recorremos todos los objetos del modelo
            model.traverse(node => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                    if (node.material) {
                        node.material.metalness = config.metalness;
                        node.material.roughness = config.roughness;
                    }
                }
            });

            // Centramos el modelo en el origen (0,0,0)
            const box = new THREE.Box3().setFromObject(model);
            modelCenter = box.getCenter(new THREE.Vector3());
            model.position.sub(modelCenter);
            model.position.x += config.baseOffsetX;
            model.position.y += config.baseOffsetY;

            // Calculamos el tamaño para posicionar la cámara a una distancia adecuada
            const size = box.getSize(new THREE.Vector3());
            camera.position.z = Math.max(size.x, size.y, size.z) * config.baseZoom;

            // Añadimos el modelo a la escena
            scene.add(model);
        },
        undefined,
        (err) => console.error('Error al cargar el modelo:', err)
    );

    // ============================================================
    // INTERACCIÓN CON EL RATÓN
    // ============================================================

    let mouseX = 0, mouseY = 0;             // Posición del ratón normalizada (-1 a 1)
    let targetRotationX = 0, targetRotationY = 0; // Rotación deseada
    let currentRotationX = 0, currentRotationY = 0; // Rotación actual interpolada

    window.addEventListener('mousemove', (e) => {
        // Convertimos coordenadas de píxeles a un rango de -1 a 1
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.clientY / window.innerHeight) * 2 - 1;

        // Si la luz del cursor está activa, la movemos junto al ratón
        if (config.cursorLightEnable) {
            cursorLight.position.x = mouseX * config.cursorLightScale;
            cursorLight.position.y = -mouseY * config.cursorLightScale;
        }
    });

    // ============================================================
    // ADAPTACIÓN AL REDIMENSIONAR LA PANTALLA
    // ============================================================

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight; // Nueva relación de aspecto
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight); // Actualizamos el tamaño del render
    });

    // ============================================================
    // BUCLE DE ANIMACIÓN
    // ============================================================

    function animate() {
        // Esta función se ejecuta en bucle (60 veces por segundo aprox.)
        requestAnimationFrame(animate);

        // Si el modelo está cargado, aplicamos rotación suave basada en el ratón
        if (model) {
            // Calculamos la rotación objetivo según la posición del ratón
            targetRotationY = mouseX * config.parallaxSensitivityX;
            targetRotationX = mouseY * config.parallaxSensitivityY;

            // Interpolamos suavemente hacia la rotación deseada (efecto fluido)
            currentRotationX += (targetRotationX - currentRotationX) * 0.05;
            currentRotationY += (targetRotationY - currentRotationY) * 0.05;

            // Aplicamos la rotación final al modelo
            model.rotation.x = config.baseRotationX + currentRotationX;
            model.rotation.y = config.baseRotationY + currentRotationY;
        }

        // Dibujamos la escena desde la perspectiva de la cámara
        renderer.render(scene, camera);
    }

    // Iniciamos la animación
    animate();
});
