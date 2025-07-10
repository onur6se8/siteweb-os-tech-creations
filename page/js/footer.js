fetch("/page/html/footer.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
    document.getElementById("footerYear").textContent = new Date().getFullYear();

    const phrases = [
      "Sites web modernes.",
      "Développement. Communication. Performance.",
      "iOS & Android.",
      "Animations fluides.",
      "UI/UX design pensé pour l’utilisateur.",
      "Créativité visuelle. Puissance technique.",
      "Tech, design & impact.",
      "Boutique en ligne clé en main.",
      "Présence digitale solide sur tous les canaux.",
      "Applications mobiles fluides.",
      "Design graphique impactant.",
      "Expériences utilisateurs immersives.",
      "E-commerce performant.",
      "Interfaces animées.",
      "Stratégies digitales.",
      "Créativité. Technologie. Résultat.",
      "Outils d'automatisation.",
      "Jeux interactifs.",
      "Contenus réseaux sociaux.",
      "Solutions sur-mesure.",
      "Innovation continue."
    ];

    const elements = document.querySelectorAll(".textFooter");
    const cursors = document.querySelectorAll(".cursor");

    elements.forEach((element, index) => {
      const state = {
        phraseIndex: 0,
        charIndex: 0,
        isDeleting: false,
        isVisible: false
      };

      function typeLoop() {
        if (!state.isVisible) {
          setTimeout(typeLoop, 100); // pause jusqu'à visibilité
          return;
        }

        const currentPhrase = phrases[state.phraseIndex];
        const speed = state.isDeleting ? 45 : 90;

        cursors[index]?.classList.remove("clignote");

        if (!state.isDeleting) {
          element.textContent = currentPhrase.substring(0, state.charIndex + 1);
          state.charIndex++;

          if (state.charIndex === currentPhrase.length) {
            cursors[index]?.classList.add("clignote");
            setTimeout(() => {
              state.isDeleting = true;
              typeLoop();
            }, 3000);
            return;
          }
        } else {
          element.textContent = currentPhrase.substring(0, state.charIndex - 1);
          state.charIndex--;

          if (state.charIndex === 0) {
            state.isDeleting = false;
            state.phraseIndex = (state.phraseIndex + 1) % phrases.length;
            cursors[index]?.classList.add("clignote");
            setTimeout(typeLoop, 1000);
            return;
          }
        }

        const delay = speed + Math.random() * 70;
        setTimeout(typeLoop, delay);
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          state.isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.1 });

      observer.observe(element);
      typeLoop(); // démarrage global (mais ne tape que si visible)
    });

    // --- Reste de ton code inchangé : glisser-déposer et SVG personnalisé ---

    const card = document.getElementById('draggable-card');
    let isDragging = false, offsetX, offsetY;

    card.addEventListener('mousedown', (e) => {
      if (window.innerWidth > 970) {
        isDragging = true;
        offsetX = e.clientX - card.offsetLeft;
        offsetY = e.clientY - card.offsetTop;
        card.style.cursor = 'grabbing';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      card.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        card.style.left = `${e.clientX - offsetX}px`;
        card.style.top = `${e.clientY - offsetY}px`;
      }
    });

    card.addEventListener('mousemove', (e) => {
      if (!isDragging) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 20;
        const rotateY = (x - centerX) / 20;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (!isDragging) {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }
    });

    function updatePath() {
      const div = document.getElementById("clippedDiv");
      const path = document.getElementById("myCustomPath");
      const positiondiv = document.getElementById("positiondiv");
      const cornerblock = document.getElementById("cornerblock");

      const width = div.clientWidth;
      let height = 450;
      let heightDroite = 350;
      const widthDroite = 350;
      const r = 50;

      if (width < 970) {
        height = 300;
        heightDroite = 200;
      }

      div.style.height = height + "px";

      if (width < 568) {
        div.style.clipPath = "none";
        div.style.webkitClipPath = "none";
        path.setAttribute("d", "");
        cornerblock.style.position = "static";
        cornerblock.style.margin = "20px 0px 0px 0px";
        positiondiv.style.position = "static";
      } else {
        cornerblock.style.position = "absolute";
        cornerblock.style.margin = "0px 0px 10px 0px";
        positiondiv.style.position = "relative";

        const d = `
          M${r},0
          H${width - r}
          A${r},${r} 0 0 1 ${width},${r}
          V${heightDroite - r}
          A${r},${r} 0 0 1 ${width - r},${heightDroite}
          H${width - widthDroite}
          A${r},${r} 0 0 0 ${width - widthDroite - r},${heightDroite + r}
          V${height - r}
          A${r},${r} 0 0 1 ${width - widthDroite - r - r},${height}
          H${r}
          A${r},${r} 0 0 1 0,${height - r}
          V${r}
          A${r},${r} 0 0 1 ${r},0
          Z
        `;

        div.style.clipPath = "url(#myCustomShape)";
        div.style.webkitClipPath = "url(#myCustomShape)";
        path.setAttribute('d', d);
      }
    }

    window.addEventListener('resize', updatePath);
    updatePath();
  })
  .catch(error => {
    console.error("Erreur de chargement du footer :", error);
  });