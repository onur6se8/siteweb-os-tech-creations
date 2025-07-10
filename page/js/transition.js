
const elTransition = document.querySelectorAll('.element-transition');
const elTransitionDroite = document.querySelectorAll('.element-transition-droite');

const elTransitionBas = document.querySelectorAll('.element-transition-bas');
var divContainer = document.querySelectorAll('.resp');
function mettreAJourEcran() {
    
        const largeurEcran = window.innerWidth; // / 2;
        const positionDeLecran = window.innerHeight;


        elTransition.forEach(el => {
            const positionEl = el.getBoundingClientRect().top;
            const divLargeur = el.offsetWidth / 2;
            // const positionpx = largeurEcran - divLargeur;

            // Appliquer la transformation et l'opacité si l'élément est dans la zone visible
            if (positionEl < positionDeLecran - 200 ) {
                el.style.transform = '';
                el.style.opacity = 1;
            } else {
                // Réinitialiser la transformation et l'opacité si l'élément n'est plus visible
                el.style.transform = 'translateX(-'+ divLargeur +'px)';
                
                el.style.opacity = 0;
            }
        });
    
        elTransitionDroite.forEach(el => {
            const positionEl = el.getBoundingClientRect().top;
            const divLargeur = el.offsetWidth / 2;
            // const positionpx = largeurEcran - divLargeur;

            // Appliquer la transformation et l'opacité si l'élément est dans la zone visible
            if (positionEl < positionDeLecran - 200) {
                el.style.transform = '';
                el.style.opacity = 1;
            } else {
                // Réinitialiser la transformation et l'opacité si l'élément n'est plus visible
                el.style.transform = 'translateX('+ divLargeur +'px)';
                el.style.opacity = 0;
            }
        });


        
        elTransitionBas.forEach(el => {
            const positionEl = el.getBoundingClientRect().top;
            const container = el.closest('.taillewidth'); // Trouve le parent .taillewidth

            if (!container) return; // Ignore si aucun parent .taillewidth

            const width = container.clientWidth;

            if (positionEl < positionDeLecran) {
                if (width > 1000) {
                el.style.transform = 'translateY(-200px)';
                } else if (width > 650) {
                el.style.transform = 'translateY(-100px)';
                } else if (width > 350) {
                el.style.transform = 'translateY(-50px)';
                } else {
                el.style.transform = 'translateY(-70px)';
                }
            } else {
                el.style.transform = '';
            }
        });

        divContainer.forEach((container) => {
            var containerRect = container.getBoundingClientRect();
            var containerTop = window.scrollY + containerRect.top;
            var windowHeight = window.innerHeight;

            if (window.scrollY + windowHeight - 200 > containerTop) {
                container.style.visibility = 'visible';
                container.style.opacity = 1;
            } else {
                container.style.visibility = 'hidden';
                container.style.opacity = 0;
            }
        });
}


// Gestionnaire d'événements pour le redimensionnement et le défilement
function handleEvent() {
    requestAnimationFrame(mettreAJourEcran);
}
mettreAJourEcran();
window.addEventListener('resize', handleEvent);
window.addEventListener('scroll', handleEvent);