function ajusterHauteurSelonLargeur() {
    const divsAvecProportion = document.querySelectorAll('.sectionImageTaille');

    divsAvecProportion.forEach(div => {
        const largeur = div.clientWidth; // Obtient la largeur du div

        // Calcule la nouvelle hauteur en fonction de la largeur
        const nouvelleHauteur = largeur; // Par exemple, la hauteur sera égale à la largeur

        // Applique la nouvelle hauteur au div
        div.style.height = `${nouvelleHauteur}px`;
    });
}

// Appelle la fonction lors du chargement de la page et lorsqu'on redimensionne la fenêtre
window.addEventListener('load', ajusterHauteurSelonLargeur);
window.addEventListener('resize', ajusterHauteurSelonLargeur);