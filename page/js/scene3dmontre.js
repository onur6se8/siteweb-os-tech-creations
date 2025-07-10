import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const container = document.getElementById('montre-container');

// Responsive
function getTailCanva() {
  return window.innerWidth > 800
    ? 800 * 0.8
    : container.clientWidth * 0.8;
}
function getZoom() {
  return window.innerWidth > 800
    ? 0.8
    : (container.clientWidth / 800) * 0.8;
}

let tailcanva = getTailCanva();

// Caméra
const camera = new THREE.OrthographicCamera(
  -tailcanva / 2,
  tailcanva / 2,
  tailcanva / 2,
  -tailcanva / 2,
  -50000,
  10000
);
camera.position.set(0, 0, 1000);
camera.lookAt(0, 0, 0);
camera.zoom = getZoom();
camera.updateProjectionMatrix();

// Scène
const scene = new THREE.Scene();
scene.background = new THREE.Color('#000');

// Aiguilles
let hourNeedle, minuteNeedle, secondNeedle;





let absdd;
let matGold = null;
let matNoir = null;
let matBlanc = null;
let currentMaterialIndex = 0;
const materialCycle = [];
const targetObjects = []; // 🟡 Contiendra tous les objets à modifier

const loader = new SplineLoader();
loader.load('/page/3d/scenemontre.splinecode', (splineScene) => {
  absdd = splineScene;
  scene.add(splineScene);

  // Aiguilles
  hourNeedle = splineScene.getObjectByName('hour');
  minuteNeedle = splineScene.getObjectByName('minute');
  secondNeedle = splineScene.getObjectByName('second');

  // Chercher les matériaux et les objets cibles
  splineScene.traverse(obj => {
    if (!obj.material) return;

    // Récupère les matériaux une seule fois
    if (obj.material.name === 'gold') matGold = obj.material;
    else if (obj.material.name === 'silver2') matNoir = obj.material;
    else if (obj.material.name === 'Rectangle Material') matBlanc = obj.material;

    // Enregistre les objets à modifier une fois
    if (obj.material.name === 'silver2' || obj.name === 'Boolean 2') {
      targetObjects.push(obj);
    }
  });

  // Créer le cycle une fois les matériaux trouvés
  if (matGold && matNoir && matBlanc) {
    materialCycle.push(matGold, matBlanc, matNoir);
  }
});

// 👉 Cycle les matériaux à chaque clic
function detectTargets() {
  if (materialCycle.length === 0 || targetObjects.length === 0) return;

  let start = null;
  const duration = 900;
  const initialRotation = scene.rotation.y;
  let materialChanged = false;

  function rotate(now) {
    if (!start) start = now;
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);

    scene.rotation.y = initialRotation + t * Math.PI * 2;

    // 💡 Changer la matière à mi-chemin (à 180°)
    if (!materialChanged && t >= 0.5) {
      const nextMaterial = materialCycle[currentMaterialIndex];
      currentMaterialIndex = (currentMaterialIndex + 1) % materialCycle.length;

      targetObjects.forEach(obj => {
        obj.material = nextMaterial;
      });

      materialChanged = true;
    }

    if (t < 1) {
      requestAnimationFrame(rotate);
    }
  }

  requestAnimationFrame(rotate);
}

// Détection d’un clic court (pas un drag)
let mouseDownPos = { x: 0, y: 0 };
let clickThreshold = 5;

window.addEventListener('mousedown', (e) => {
  mouseDownPos = { x: e.clientX, y: e.clientY };
});

window.addEventListener('mouseup', (e) => {
  // ✅ Ne déclenche que si clic à l'intérieur du canvas
  if (!renderer.domElement.contains(e.target)) return;

  const dx = Math.abs(e.clientX - mouseDownPos.x);
  const dy = Math.abs(e.clientY - mouseDownPos.y);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < clickThreshold) {
    detectTargets(); // 🟢 Changement de couleur
  }
});





// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(tailcanva, tailcanva);
renderer.shadowMap.enabled = false;
renderer.setClearAlpha(1);
container.appendChild(renderer.domElement);

// Contrôles
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enableZoom = false;
controls.enablePan = false;
controls.enableRotate = true;

// Resize
function handleResize() {
  tailcanva = getTailCanva();
  camera.left = -tailcanva / 2;
  camera.right = tailcanva / 2;
  camera.top = tailcanva / 2;
  camera.bottom = -tailcanva / 2;
  camera.zoom = getZoom();
  camera.updateProjectionMatrix();
  renderer.setSize(tailcanva, tailcanva);
}
window.addEventListener('resize', handleResize);

// Mise à jour des aiguilles (1 fois/sec)
function updateTime() {
  if (!hourNeedle || !minuteNeedle || !secondNeedle) return;
  const now = new Date();
  const h = now.getHours() % 12;
  const m = now.getMinutes();
  const s = now.getSeconds();
  hourNeedle.rotation.z = -((h + m / 60) * Math.PI / 6);
  minuteNeedle.rotation.z = -((m + s / 60) * Math.PI / 30);
  secondNeedle.rotation.z = -(s * Math.PI / 30);
}
setInterval(updateTime, 1000);

let isVisible = false;
let animationFrame;

function animate() {
  if (!isVisible) return; // ⛔ ne continue pas si hors écran

  scene.rotation.y += 0.002;
  controls.update();
  renderer.render(scene, camera);
  animationFrame = requestAnimationFrame(animate);
}

// ⬇️ Observer si la montre est visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible = true;
      animate(); // ✅ relance
    } else {
      isVisible = false;
      cancelAnimationFrame(animationFrame); // 🛑 stop rendu
    }
  });
}, {
  threshold: 0.1 // Déclenche si au moins 10% est visible
});

observer.observe(container);