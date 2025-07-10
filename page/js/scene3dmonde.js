import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const container = document.getElementById('monde-container');

// Responsive
function getTailCanva() {
  return window.innerWidth > 780
    ? 780 * 0.8
    : container.clientWidth * 0.8;
}
function getZoom() {
  return window.innerWidth > 780
    ? 2.4 * 0.8
    : (container.clientWidth / 390) * 0.8;
}

let tailcanva = getTailCanva();

// Caméra orthographique
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
scene.background = new THREE.Color('#000000');

let earth = null;

// Charger la scène Spline
const loader = new SplineLoader();
loader.load('/page/3d/scenequelemonde.splinecode', (splineScene) => {
  scene.add(splineScene);
  earth = splineScene.getObjectByName('Sphere');
});

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(tailcanva, tailcanva);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setClearAlpha(1);
container.appendChild(renderer.domElement);

// OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;
controls.enableZoom = false;
controls.enablePan = false;
controls.enableRotate = true;

// Resize responsive
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

// Animation
let isVisible = false;
let animationFrame;

function animate() {
  if (!isVisible) return;
  if (earth) {
    earth.rotation.y += 0.001;
  }
  controls.update();
  renderer.render(scene, camera);
  animationFrame = requestAnimationFrame(animate);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible = true;
      animate();
    } else {
      isVisible = false;
      cancelAnimationFrame(animationFrame);
    }
  });
}, {
  threshold: 0.1
});

observer.observe(container);