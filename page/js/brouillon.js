import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';



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



// Scene
const scene = new THREE.Scene();

let head = null;
let topPart = null;

let Hand = null; 
let Hand1 = null; 
let Hand2 = null;
let HandLEFT = null;
let HandLEFT1 = null;
let forearm = null;
let forearm1 = null; 


let femur = null;
let shin = null; 
let Foot = null; 
let femur1 = null;
let shin1 = null; 
let Foot1 = null; 

let index = 0;
let allObjects = [];

let isKicking = false;
let legKickStartTime = null;
let currentLeg = 'left'; // Commence par la jambe gauche
let kickStrength = 1;
const clock = new THREE.Clock();

let floatingText = null;
let baseTextY = 0;
let baseTextYpetit = 0;
let baseTextX = 0;

// Loader
const loader = new SplineLoader();
loader.load('/page/3d/scene2.splinecode', (splineScene) => {
  scene.add(splineScene);


    // 🎯 On récupère l'objet "Text"
  floatingText = splineScene.getObjectByName("Text");

  if (floatingText) {
    baseTextY = floatingText.position.y;
    baseTextYpetit = floatingText.position.y + 200;
    baseTextX = floatingText.position.x; // <- nouvelle ligne
  }




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
    
  head = splineScene.getObjectByName("Head");
  topPart = splineScene.getObjectByName("Top part");


// Rotation bras
const minRotation = 0.06;
const maxRotation = 0.8;
const amplitude = (maxRotation - minRotation) / 2;
const offset = (maxRotation + minRotation) / 2;

// Rotation avant-bras
const minRotation2 = 0.1;
const maxRotation2 = -1.9;
const amplitude2 = (maxRotation2 - minRotation2) / 2;
const offset2 = (maxRotation2 + minRotation2) / 2;

// Utilise un easing lent (forme de sinus plus plate)
function easedSin(t, speed = 0.25, pauseFactor = 0.9) {
  const raw = Math.sin(t * speed);
  return Math.pow(Math.sin(t * speed), 3) * pauseFactor + raw * (1 - pauseFactor);
}




function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();

  const eased = easedSin(t);

  if (HandLEFT) {
    HandLEFT.rotation.z = eased * amplitude + offset;
  }
  if (HandLEFT1) {
    HandLEFT1.rotation.z = easedSin(t + 2.3) * amplitude + offset;
  }

  if (forearm) {
    forearm.rotation.x = easedSin(t + 1.4, 0.2) * amplitude2 + offset2;
  }
  if (forearm1) {
    forearm1.rotation.x = easedSin(t + 3.1, 0.2) * amplitude2 + offset2;
  }

  if (Hand) {
 
    const minRotationz = 2.1; // en radians (~ -23°)
const maxRotationz = 2.9;  // en radians (~ 11°)
  const amplitudez = (maxRotationz - minRotationz) / 2;
const offsetz = (maxRotationz + minRotationz) / 2;






// Rythme plus lent et irrégulier

let speed = 0.25;
setInterval(() => {
  speed = 0.2 + Math.random() * 0.1; // vitesse entre 0.2 et 0.3
}, 10000);
const raw = Math.sin(t * speed);

// Transforme le sinus en variation plus douce
const smoothed = Math.pow(Math.abs(raw), 2) * Math.sign(raw);

const minRotationx = 0.2;
const maxRotationx = 0.8;

const amplitudeX = (maxRotationx - minRotationx) / 2;
const offsetX = (maxRotationx + minRotationx) / 2;

Hand.rotation.x = smoothed * amplitudeX + offsetX;
Hand2.rotation.x = smoothed * amplitudeX + offsetX;






  if (isKicking && legKickStartTime !== null) {
  const duration = 0.8;
  const elapsed = t - legKickStartTime;

  if (elapsed <= duration) {
    const progress = elapsed / duration;

    // Montée lente, descente rapide
    let eased;
    if (progress < 0.7) {
      eased = progress / 0.6;
    } else {
      eased = 1 - (progress - 0.7) / 0.4;
    }

    const kickPower = Math.max(0, Math.min(1, eased)) * kickStrength;

    if (currentLeg === 'left') {
      if (femur1) femur1.rotation.x = -1 * kickPower;
      if (shin1)  shin1.rotation.x =  2 * kickPower;
    } else {
      if (femur) femur.rotation.x = -1 * kickPower;
      if (shin)  shin.rotation.x =  2 * kickPower;
    }

  } else {
    // Réinitialisation
    isKicking = false;
    legKickStartTime = null;

    if (currentLeg === 'left') {
      if (femur1) femur1.rotation.x = 0;
      if (shin1)  shin1.rotation.x = 0;
    } else {
      if (femur) femur.rotation.x = 0;
      if (shin)  shin.rotation.x = 0;
    }
  }
}






 // ✨ Effet de flottement
  if (floatingText) {
    if (window.innerWidth < 1400) {
      
       floatingText.position.y = baseTextYpetit + Math.sin(t * 1.1) * 10;
    } else {

      
    }
  }

  
function updateTextScale() {
  if (!floatingText) return;


  if (window.innerWidth < 380) {
    camera.zoom = 0.7; // Dézoom léger
  } else if (window.innerWidth < 400) {
    camera.zoom = 0.8; // Dézoom léger
  } else if (window.innerWidth < 450) {
    camera.zoom = 0.9; // Dézoom léger
  } else {
    camera.zoom = 1; // Zoom normal
  }


  floatingText.position.x = baseTextX - 18;

  if (window.innerWidth < 620) {
    // Smartphone
    floatingText.scale.set(0.3, 0.3, 0.3);

        floatingText.position.y = baseTextY + 100 +Math.sin(t * 1.1) * 10;
  } else if (window.innerWidth < 750) {
    // Tablette
    floatingText.scale.set(0.4, 0.4, 0.4);

        floatingText.position.y = baseTextY + 90 +Math.sin(t * 1.1) * 10;
  } else if (window.innerWidth < 1024) {
    // Tablette
    floatingText.scale.set(0.5, 0.5, 0.5);

        floatingText.position.y = baseTextY + 70 +Math.sin(t * 1.1) * 10;
  } else if (window.innerWidth < 1124) {
    // Tablette
    floatingText.scale.set(0.65, 0.65, 0.65);

        floatingText.position.y = baseTextY + 40 +Math.sin(t * 1.1) * 10;
  } else if (window.innerWidth < 1400) {
    // Tablette
    floatingText.scale.set(0.8, 0.8, 0.8);

        floatingText.position.y = baseTextY + 20 + Math.sin(t * 1.1) * 10;
  }else{
    floatingText.scale.set(1, 1, 1);
    
        floatingText.position.y = baseTextY + Math.sin(t * 1.1) * 10;
  }
}

// Appelé au début
updateTextScale();
camera.updateProjectionMatrix();

// Et à chaque redimensionnement
window.addEventListener('resize', updateTextScale);




}
  renderer.render(scene, camera);
}
animate();

});







// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
const container = document.getElementById("robot-container");
container.appendChild(renderer.domElement);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableZoom = false;

function animate() {
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.left = window.innerWidth / -2;
  camera.right = window.innerWidth / 2;
  camera.top = window.innerHeight / 2;
  camera.bottom = window.innerHeight / -2;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});







const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const target3D = new THREE.Vector3();


window.addEventListener('mousemove', (event) => {
  if (!head) return;

  // Coordonnées souris inversées pour compenser orientation du mesh
  mouse.x = -((event.clientX / window.innerWidth) * 2 - 1);
  mouse.y = -(-(event.clientY / window.innerHeight) * 2 + 1);

  raycaster.setFromCamera(mouse, camera);

  // Projette un point dans l’espace 3D
  raycaster.ray.at(500, target3D);

  //  Triche visuelle : forcer un décalage latéral pour recaler le regard
                     // ajuste ce chiffre pour centrer visuellement
  target3D.y += 500; // ajuste selon l'inclinaison de la tête

  head.lookAt(target3D);
  head.rotateY(Math.PI);

  // 🧍 Haut du corps = mouvement plus doux
  topPart.rotation.y = -mouse.x * 0.35; // ↩️ moins que la tête
  topPart.rotation.x = mouse.y * 0.15; // ↕️ plus discret
  
});

window.addEventListener('touchmove', (event) => {
  if (!head || !event.touches.length) return;

  const touch = event.touches[0];
  mouse.x = -((touch.clientX / window.innerWidth) * 2 - 1);
  mouse.y = -(-(touch.clientY / window.innerHeight) * 2 + 1);

  raycaster.setFromCamera(mouse, camera);
  raycaster.ray.at(500, target3D);
  target3D.y += 500;

  head.lookAt(target3D);
  head.rotateY(Math.PI);

  topPart.rotation.y = -mouse.x * 0.35;
  topPart.rotation.x = mouse.y * 0.15;
});





window.addEventListener('click', () => {
  // Si une animation est déjà en cours, on ignore le clic
  if (isKicking) return;

  isKicking = true;
  legKickStartTime = clock.getElapsedTime();

  // Alterne la jambe après le lancement
  currentLeg = (currentLeg === 'left') ? 'right' : 'left';

  // Génère la puissance du coup
  kickStrength = 0.5 + Math.random() * 0.7;
});

window.addEventListener('touchend', () => {
  if (isKicking) return;

  isKicking = true;
  legKickStartTime = clock.getElapsedTime();
  currentLeg = (currentLeg === 'left') ? 'right' : 'left';
  kickStrength = 0.5 + Math.random() * 0.7;
});
