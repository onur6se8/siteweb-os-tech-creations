// Robot 3D - Optimisé avec frameCount et IntersectionObserver
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

const container = document.getElementById("robot-container");

// Camera
const camera = new THREE.OrthographicCamera(
  window.innerWidth / -2,
  window.innerWidth / 2,
  window.innerHeight / 2,
  window.innerHeight / -2,
  -50000,
  10000
);
camera.position.set(0, 0, 0);
camera.updateProjectionMatrix();

// Scene
const scene = new THREE.Scene();

let head, topPart, floatingText;
let Hand, Hand1, Hand2, HandLEFT, HandLEFT1, forearm, forearm1;
let femur, shin, Foot, femur1, shin1, Foot1;
let baseTextY = 0, baseTextYpetit = 0;
let isKicking = false, legKickStartTime = null, currentLeg = 'left', kickStrength = 1;

let frameCount = 0;

const loader = new SplineLoader();
const renderer = new THREE.WebGLRenderer({ antialias: true });
const width = container.clientWidth;
const height = 700;

camera.left = width / -2;
camera.right = width / 2;
camera.top = height / 2;
camera.bottom = height / -2;
camera.updateProjectionMatrix();

renderer.setSize(width, height);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const target3D = new THREE.Vector3();

window.addEventListener('resize', () => {
  const width = container.clientWidth;
  const height = 700;

  camera.left = width / -2;
  camera.right = width / 2;
  camera.top = height / 2;
  camera.bottom = height / -2;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
});

loader.load('/page/3d/scene2.splinecode', (splineScene) => {
  scene.add(splineScene);

  floatingText = splineScene.getObjectByName("Text");
  baseTextY = floatingText.position.y;
  baseTextYpetit = floatingText.position.y + 200;

  head = splineScene.getObjectByName("Head");
  topPart = splineScene.getObjectByName("Top part");

  Hand = splineScene.getObjectByName("Hand");
  Hand1 = splineScene.getObjectByName("Hand1");
  Hand2 = splineScene.getObjectByName("Hand2");
  HandLEFT = splineScene.getObjectByName("Hand LEFT");
  HandLEFT1 = splineScene.getObjectByName("Hand LEFT1");
  forearm = splineScene.getObjectByName("forearm");
  forearm1 = splineScene.getObjectByName("forearm1");

  femur = splineScene.getObjectByName("femur");
  shin = splineScene.getObjectByName("shin");
  Foot = splineScene.getObjectByName("Foot");
  femur1 = splineScene.getObjectByName("femur1");
  shin1 = splineScene.getObjectByName("shin1");
  Foot1 = splineScene.getObjectByName("Foot1");

  camera.zoom = 1;
  camera.updateProjectionMatrix();
  updateTextScale();
});

function updateTextScale(t = 0) {
  if (!floatingText) return;

  if (window.innerWidth < 380) camera.zoom = 0.7;
  else if (window.innerWidth < 400) camera.zoom = 0.8;
  else if (window.innerWidth < 450) camera.zoom = 0.9;
  else camera.zoom = 1;

  if (window.innerWidth < 620) floatingText.scale.set(0.3, 0.3, 0.3);
  else if (window.innerWidth < 750) floatingText.scale.set(0.4, 0.4, 0.4);
  else if (window.innerWidth < 1024) floatingText.scale.set(0.5, 0.5, 0.5);
  else if (window.innerWidth < 1124) floatingText.scale.set(0.65, 0.65, 0.65);
  else if (window.innerWidth < 1400) floatingText.scale.set(0.8, 0.8, 0.8);
  else floatingText.scale.set(1, 1, 1);

  floatingText.position.y = baseTextY + Math.sin(t * 1.1) * 10;
}

function updateRobotAnimations(t) {
  const eased = Math.sin(t * 0.25);

  if (HandLEFT) HandLEFT.rotation.z = eased * 0.37 + 0.43;
  if (HandLEFT1) HandLEFT1.rotation.z = Math.sin(t * 0.25 + 0.3) * 0.37 + 0.43;
  if (forearm) forearm.rotation.x = Math.sin(t * 0.2 + 1.4) * 1 + -0.9;
  if (forearm1) forearm1.rotation.x = Math.sin(t * 0.2 + 1.6) * 1 + -0.9;
  if (Hand) {
    const smoothed = Math.pow(Math.abs(Math.sin(t * 0.25)), 2) * Math.sign(Math.sin(t * 0.25));
    Hand.rotation.x = smoothed * 0.3 + 0.5;
    if (Hand2) Hand2.rotation.x = smoothed * 0.3 + 0.5;
  }
  if (isKicking && legKickStartTime !== null) {
    const duration = 0.8;
    const elapsed = t - legKickStartTime;
    if (elapsed <= duration) {
      const progress = elapsed / duration;
      const eased = progress < 0.7 ? progress / 0.6 : 1 - (progress - 0.7) / 0.4;
      const kickPower = Math.max(0, Math.min(1, eased)) * kickStrength;
      if (currentLeg === 'left') {
        if (femur1) femur1.rotation.x = -1 * kickPower;
        if (shin1) shin1.rotation.x = 2 * kickPower;
      } else {
        if (femur) femur.rotation.x = -1 * kickPower;
        if (shin) shin.rotation.x = 2 * kickPower;
      }
    } else {
      isKicking = false;
      legKickStartTime = null;
      if (currentLeg === 'left') {
        if (femur1) femur1.rotation.x = 0;
        if (shin1) shin1.rotation.x = 0;
      } else {
        if (femur) femur.rotation.x = 0;
        if (shin) shin.rotation.x = 0;
      }
    }
  }
  updateTextScale(t);
}

let isVisible = false;
let animationFrame;

function animate() {
  if (!isVisible) return;
  frameCount++;
  const t = frameCount / 60; // Avance uniquement quand visible
  updateRobotAnimations(t);
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
}, { threshold: 0.1 });

observer.observe(container);

window.addEventListener('mousemove', (event) => {
  if (!head) return;
  mouse.x = -((event.clientX / window.innerWidth) * 2 - 1);
  mouse.y = -(-(event.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.at(500, target3D);


    target3D.y += 350 + ( window.scrollY * 0.85 );


  head.lookAt(target3D);
  head.rotateY(Math.PI);
  topPart.rotation.y = -mouse.x * 0.35;
  topPart.rotation.x = mouse.y * 0.15;
});

window.addEventListener('touchmove', (event) => {
  if (!head || !event.touches.length) return;
  const touch = event.touches[0];
  mouse.x = -((touch.clientX / window.innerWidth) * 2 - 1);
  mouse.y = -(-(touch.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.at(500, target3D);


  target3D.y += 350 + ( window.scrollY * 0.85 );




  head.lookAt(target3D);
  head.rotateY(Math.PI);
  topPart.rotation.y = -mouse.x * 0.35;
  topPart.rotation.x = mouse.y * 0.15;
});

window.addEventListener('click', () => {
  if (isKicking) return;
  isKicking = true;
  legKickStartTime = frameCount / 60;
  currentLeg = (currentLeg === 'left') ? 'right' : 'left';
  kickStrength = 0.5 + Math.random() * 0.7;
});

window.addEventListener('touchend', () => {
  if (isKicking) return;
  isKicking = true;
  legKickStartTime = frameCount / 60;
  currentLeg = (currentLeg === 'left') ? 'right' : 'left';
  kickStrength = 0.5 + Math.random() * 0.7;
});