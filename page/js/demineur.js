const canvasDemineur = document.getElementById('canvasDemineur');
        const ctx2 = canvasDemineur.getContext('2d');
        let taille = 15; // Taille du tableau (10x10)
        let mines = 40; // Nombre de mines

		let perdu = false; 
		let gagner = 0; 

        // Fonction pour générer un nombre aléatoire entre min et max (inclus)
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // Création du tableau
        let tableau = Array.from({ length: taille }, () => Array(taille).fill(0));
        let ouvert = Array.from({ length: taille }, () => Array(taille).fill(0));
        let drapeauMarquer = Array.from({ length: taille }, () => Array(taille).fill(0));

		function lancement() {
			// Placement aléatoire des mines
			let minesPlacées = 0;
			while (minesPlacées < mines) {
				const ligne = getRandom(0, taille - 1);
				const colonne = getRandom(0, taille - 1);
				if (tableau[ligne][colonne] !== -1) {
					tableau[ligne][colonne] = -1; // -1 représente une mine
					minesPlacées++;
				}
			}

			// Calcul du nombre de mines voisines pour chaque case
			for (let i = 0; i < taille; i++) {
				for (let j = 0; j < taille; j++) {
					if (tableau[i][j] !== -1) {
						let count = 0;
						for (let x = -1; x <= 1; x++) {
							for (let y = -1; y <= 1; y++) {
								const ni = i + x;
								const nj = j + y;
								if (ni >= 0 && ni < taille && nj >= 0 && nj < taille && tableau[ni][nj] === -1) {
									count++;
								}
							}
						}
						tableau[i][j] = count;
					}
				}
			}
		}



        // Fonction pour dessiner le contenu d'une case
        function dessinerCase(i, j) {

            if (ouvert[i][j] == false) {
                gagner++
            }
            const x = j * largeurCase;
            const y = i * hauteurCase;

            ctx2.fillStyle = '#ccc';
            ctx2.fillRect(x, y, largeurCase, hauteurCase);

            
            if (tableau[i][j] === -1) {
                // C'est une mine
                ctx2.fillStyle = 'red';
                ctx2.fillRect(x, y, largeurCase, hauteurCase);
                ctx2.font = '20px Arial';
                ctx2.fillText("💣", x - 9 + largeurCase / 3 , y + 3 + hauteurCase / 1.5 );
            } else if (tableau[i][j] > 0) {
                // Il y a des mines voisines
                ctx2.fillStyle = 'blue';
                ctx2.font = '20px Arial';
                ctx2.fillText(tableau[i][j], x - 2 + largeurCase / 3 , y + 3 + hauteurCase / 1.5 );
                ouvert[i][j] = true;
            }

            if (tableau[i][j] == 0 && ouvert[i][j] == false) { 

                ouvert[i][j] = true;
                
                for (let a = -1; a <= 1; a++) {
                    for (let b = -1; b <= 1; b++) {
                        
                        let ii = i + a; 
                        let jj = j + b; 
                        if (ii >= 0 && ii < taille && jj >= 0 && jj < taille) {
                                
                            dessinerCase(  i + a, j + b);
                        }
                    }
                }
            }
            

			if((gagner == 185 && mines == 40) || (gagner == 80 && mines == 20) ){
				
				ctx2.fillStyle = '#fff';
				ctx2.strokeStyle = '#24ae60;'; // Couleur de la bordure
				ctx2.lineWidth = 2; // Largeur de la bordure

				// Dessiner un rectangle arrondi avec une bordure noire
				ctx2.beginPath();
				ctx2.moveTo(160, 140); // Coin supérieur gauche
				ctx2.arcTo(230, 140, 230, 200, 10); // Coin supérieur droit
				ctx2.arcTo(230, 200, 130, 200, 10); // Coin inférieur droit
				ctx2.arcTo(130, 200, 130, 140, 10); // Coin inférieur gauche
				ctx2.arcTo(130, 140, 230, 140, 10); // Retour au coin supérieur gauche
				ctx2.closePath();
				ctx2.fill();
				ctx2.stroke();

				ctx2.fillStyle = '#011';
				ctx2.font = '20px Arial';
				ctx2.fillText("Gagner", 147, 175);
			}

			if(perdu){
				ctx2.fillStyle = '#fff';
				ctx2.strokeStyle = '#000'; // Couleur de la bordure
				ctx2.lineWidth = 2; // Largeur de la bordure

				// Dessiner un rectangle arrondi avec une bordure noire
				ctx2.beginPath();
				ctx2.moveTo(160, 140); // Coin supérieur gauche
				ctx2.arcTo(230, 140, 230, 200, 10); // Coin supérieur droit
				ctx2.arcTo(230, 200, 130, 200, 10); // Coin inférieur droit
				ctx2.arcTo(130, 200, 130, 140, 10); // Coin inférieur gauche
				ctx2.arcTo(130, 140, 230, 140, 10); // Retour au coin supérieur gauche
				ctx2.closePath();
				ctx2.fill();
				ctx2.stroke();

				ctx2.fillStyle = '#011';
				ctx2.font = '20px Arial';
				ctx2.fillText("Perdu", 153, 177);
			} 

        }

        
 // Dessiner le tableau initial
 let largeurCase = 24;
 let hauteurCase = 24;

function ajusterTailleCanvas() {
    if (window.innerWidth < 800) {
        // Réduire la taille du canvas
        canvasDemineur.width = 240; 
        canvasDemineur.height = 240;

        largeurCase = 24;
        hauteurCase = 24;
        taille = 10; // Taille du tableau (10x10)
         mines = 20; // Nombre de mines
    }else{
        canvasDemineur.width = 360;  
        canvasDemineur.height = 360; 
        largeurCase = 24;
        hauteurCase = 24;
        taille = 15; // Taille du tableau (10x10)
         mines = 40; // Nombre de mines
    }

     
    tableau = Array.from({ length: taille }, () => Array(taille).fill(0));
			lancement();
			tableauInitial();
			perdu = false; 
		    gagner = 0; 
            drapeau = false; 





            if (window.innerWidth < 800) {
                niv = 1;
                contenuCases = JSON.parse(JSON.stringify(niv1));

                joueurI = 5; // Initialiser la position x du joueur
                joueurJ = 2; // Initialiser la position y du joueur
                orientation = 6;

                loadedImages = 0;

                tailleImage = 20;
                canvas.width = 240;  // par exemple, réduire de moitié
               canvas.height = 240; // ajuster en fonction de vos besoins
           }else{
               canvas.width = 360;  // par exemple, réduire de moitié
               canvas.height = 360; // ajuster en fonction de vos besoins
               niv = 1;
               contenuCases = JSON.parse(JSON.stringify(niv1));

               joueurI = 5; // Initialiser la position x du joueur
               joueurJ = 2; // Initialiser la position y du joueur
               orientation = 6;

               loadedImages = 0;

               tailleImage = 30;
           }
           
               dessiner();

}
window.onload = ajusterTailleCanvas;
window.onresize = ajusterTailleCanvas;

		function tableauInitial() {


			for (let i = 0; i < taille; i++) {
				for (let j = 0; j < taille; j++) {

					ctx2.fillStyle =  "#323334";
           			ctx2.fillRect(j * largeurCase, i * hauteurCase, largeurCase, hauteurCase);
					ctx2.strokeRect(j * largeurCase, i * hauteurCase, largeurCase, hauteurCase);
                    ouvert[i][j] = false;
                    drapeauMarquer[i][j] = false;

				}
			}
		}
        // Gestion du clic
		canvasDemineur.addEventListener('click', function(event) {

            const rect = canvasDemineur.getBoundingClientRect();
            const mouseX = event.clientX - rect.left - 10;
            const mouseY = event.clientY - rect.top - 10 ;

            const colonne = Math.floor(mouseX / largeurCase);
            const ligne = Math.floor(mouseY / hauteurCase);
            let i = ligne; 
            let j = colonne;
            const x = j * largeurCase;
            const y = i * hauteurCase;

            let gMine = 95;
            if ( mines == 40) {
                gMine = 185;
            }

			if(perdu == false && gagner < gMine && drapeau == false && drapeauMarquer[i][j] == false){

				if(tableau[ligne][colonne] == -1 ){
					
					perdu = true;
				} 

				dessinerCase(ligne, colonne);
			} else if (drapeau && perdu == false && gagner < gMine ) {
               
                if (ouvert[i][j] == false) {

                    if (drapeauMarquer[i][j] == false) {
                        drapeauMarquer[i][j] = true;
                         ctx2.font = '20px Arial';
                         ctx2.fillText("🚩", x - 8 + largeurCase / 3 , y + 3 + hauteurCase / 1.5 );
                       
                    } else {
                        drapeauMarquer[i][j] = false;
                        ctx2.fillStyle =  "#323334";
                        ctx2.fillRect(j * largeurCase, i * hauteurCase, largeurCase, hauteurCase);
                        ctx2.strokeRect(j * largeurCase, i * hauteurCase, largeurCase, hauteurCase);
                        
                    }
                }
            }
		});

		
		// Gestion du bouton "Recommencer"
		document.getElementById('recommencer').addEventListener('click', function() {
			
			tableau = Array.from({ length: taille }, () => Array(taille).fill(0));
			lancement();
			tableauInitial();
			perdu = false; 
		    gagner = 0; 
            drapeau = false; 

		});


        let drapeau = false; 
		document.getElementById('drapeau').addEventListener('click', function() {
			
            if (drapeau) {
                drapeau = false;
            } else{

                drapeau = true;
            }
		});