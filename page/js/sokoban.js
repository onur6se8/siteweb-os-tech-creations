        
        const canvas = document.getElementById('canvas');
		const ctx = canvas.getContext('2d');

		let niv1 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 20, 2, 20, 20, 20, 20, 20, 4, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];

		let niv2 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 20, 20, 20, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 4, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];

		let niv3 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1],
				[1, 1, 20, 2, 20, 20, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 20, 1, 1, 1, 1],
				[1, 1, 1, 20, 20, 1, 1, 20, 20, 1, 1, 1],
				[1, 1, 1, 20, 20, 20, 20, 20, 20, 1, 1, 1],
				[1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];

		let niv4 = [
				[1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 20, 20, 20, 20, 20, 20, 1],
				[1, 1, 1, 1, 20, 20, 20, 1, 1, 20, 20, 1],
				[20, 4, 4, 1, 20, 1, 20, 1, 1, 20, 1, 1],
				[20, 20, 20, 20, 20, 2, 20, 20, 1, 2, 1, 1],
				[1, 20, 20, 1, 20, 1, 20, 20, 20, 20, 1, 1],
				[1, 1, 1, 1, 20, 20, 20, 1, 1, 2, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 20, 20, 1],
				[1, 1, 1, 1, 4, 20, 20, 20, 20, 20, 20, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		let niv5 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 20, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1],
				[1, 20, 4, 4, 1, 2, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 20, 20, 2, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		let niv6 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 20, 20, 4, 1, 1, 1, 1, 1],
				[1, 1, 1, 20, 2, 1, 4, 1, 1, 1, 1, 1],
				[1, 1, 1, 20, 20, 20, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 20, 1, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 2, 20, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 20, 20, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		let niv7 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 4, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 20, 2, 2, 20, 20, 1, 1, 1],
				[1, 1, 1, 1, 20, 20, 20, 20, 20, 1, 1, 1],
				[1, 1, 1, 1, 1, 2, 1, 20, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 4, 20, 4, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		let niv8 = [
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 4, 4, 4, 4, 20, 1, 1, 1, 1],
				[1, 1, 20, 20, 2, 20, 1, 2, 20, 1, 1, 1],
				[1, 1, 20, 20, 2, 20, 20, 2, 20, 1, 1, 1],
				[1, 1, 20, 20, 1, 1, 20, 20, 20, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		let niv9 = [  // commence en 2  - 6
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 20, 20, 20, 1, 1, 1, 1],
				[1, 1, 1, 4, 20, 2, 20, 4, 1, 1, 1, 1],
				[1, 1, 1, 20, 20, 2, 20, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 20, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 20, 2, 20, 20, 1, 1, 1, 1, 1, 1],
				[1, 20, 20, 20, 20, 20, 1, 1, 1, 1, 1, 1],
				[1, 4, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		let niv10 = [  //   5 -- 5
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 20, 20, 1, 1, 1, 1],
				[1, 1, 20, 20, 20, 4, 4, 2, 1, 1, 1, 1],
				[1, 1, 20, 4, 20, 1, 20, 2, 1, 1, 1, 1],
				[1, 1, 1, 2, 4, 4, 20, 20, 20, 1, 1, 1],
				[1, 1, 1, 20, 20, 1, 1, 20, 20, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		];
		
		
		
		const images = []; // Tableau pour stocker les images
		const addImage = (src) => {
			const img = new Image();
			img.src = src;
			images.push(img);
		}                                      // Ajouter les images
		addImage('/page/imageSokoban/BlocMUR.png');
		addImage('/page/imageSokoban/caisse.png');
		addImage('/page/imageSokoban/caisse_ok.png');
		addImage('/page/imageSokoban/objectif.png');
		addImage('/page/imageSokoban/bravo.png');
		addImage('/page/imageSokoban/robot_face.png');
		addImage('/page/imageSokoban/robotder.png');
		addImage('/page/imageSokoban/robotdroite.png');
		addImage('/page/imageSokoban/robotg.png');


		let niv = 1;
		let contenuCases = JSON.parse(JSON.stringify(niv1));

		let joueurI = 5; // Initialiser la position x du joueur
		let joueurJ = 2; // Initialiser la position y du joueur
		let orientation = 6;

		let loadedImages = 0;

		let tailleImage = 30;
		function dessiner() {

			let fin = 0;
			
			for (let i = 0; i < contenuCases.length; i++) {
				for (let j = 0; j < contenuCases[i].length; j++) {
					const imgIndex = contenuCases[i][j] - 1; // Soustraire 1 car les indices commencent à 0
					const x = j * tailleImage; // Largeur de chaque case
					const y = i * tailleImage; // Hauteur de chaque case
					
					if(i == joueurI && j == joueurJ){
					
						const image = images[orientation - 1];
						ctx.drawImage(image, x, y, tailleImage, tailleImage); // Dessiner l'image

					} else if(imgIndex == 19){

						ctx.fillStyle = "white"; // Couleur blanche
						ctx.fillRect(x, y, tailleImage, tailleImage);
					} else {

						const image = images[imgIndex];
						ctx.drawImage(image, x, y, tailleImage, tailleImage); // Dessiner l'image
					}


					if(contenuCases[i][j] == 4){

						fin ++;

					}
				}
			}

			if(fin == 0){

				const image = images[4];
				ctx.drawImage(image, 90, 120, 180, 90); // Dessiner l'image

				niv++;
				if(niv == 1){
					contenuCases = JSON.parse(JSON.stringify(niv1));
					joueurI = 5; // Initialiser la position x du joueur
					joueurJ = 2;
				} else if (niv == 2){
				
					contenuCases = JSON.parse(JSON.stringify(niv2));
					joueurI = 3; // Initialiser la position x du joueur
					joueurJ = 3;
				} else if (niv == 3){
			
					contenuCases = JSON.parse(JSON.stringify(niv3));
					joueurI = 4; // Initialiser la position x du joueur
					joueurJ = 2;
				} else if (niv == 4){
				
					contenuCases = JSON.parse(JSON.stringify(niv4));
					joueurI = 1; // Initialiser la position x du joueur
					joueurJ = 5;
				} else if (niv == 5){
				
					contenuCases = JSON.parse(JSON.stringify(niv5));
					joueurI = 7; // Initialiser la position x du joueur
					joueurJ = 5;
				} else if (niv == 6){
			
					contenuCases = JSON.parse(JSON.stringify(niv6));
					joueurI = 7; // Initialiser la position x du joueur
					joueurJ = 6;
				} else if (niv == 7){
				
					contenuCases = JSON.parse(JSON.stringify(niv7));
					joueurI = 8; // Initialiser la position x du joueur
					joueurJ = 6;
				} else if (niv == 8){
				
					contenuCases = JSON.parse(JSON.stringify(niv8));
					joueurI = 3; // Initialiser la position x du joueur
					joueurJ = 7;
				} else if (niv == 9){
				
					contenuCases = JSON.parse(JSON.stringify(niv9));
					joueurI = 1; // Initialiser la position x du joueur
					joueurJ = 5;
				} else if (niv == 10){
			
					contenuCases = JSON.parse(JSON.stringify(niv10));
					joueurI = 4; // Initialiser la position x du joueur
					joueurJ = 4;
				} else if(niv>10){
					contenuCases = JSON.parse(JSON.stringify(niv1));
					joueurI = 5; // Initialiser la position x du joueur
					joueurJ = 2;
				}
			
			}
		}

		images.forEach(image => {
			image.onload = function() {
				loadedImages++;
				if (loadedImages === images.length) {
					dessiner();
				}
			}
		});


		

		
		document.getElementById('gauche').addEventListener('click', function() {
		
			// Code pour déplacer vers la gauche
			if(joueurJ - 1 < 0 ){
			} else if (contenuCases[joueurI][joueurJ - 1] == 20){ // 20 == vide
				joueurJ --;
		
			}else if (contenuCases[joueurI][joueurJ - 1] == 4){ // 4 == objectif
				joueurJ --;
			
			}else if (contenuCases[joueurI][joueurJ- 1] == 2 && contenuCases[joueurI ][joueurJ - 2] == 20){ // 2 == caisse  20 == vide
				contenuCases[joueurI ][joueurJ - 1] = 20;
				contenuCases[joueurI ][joueurJ - 2] = 2;
				joueurJ --;
			
			}else if (contenuCases[joueurI ][joueurJ - 1] == 2 && contenuCases[joueurI ][joueurJ - 2] == 4){ // 2 == caisse  4 == objectif
				contenuCases[joueurI ][joueurJ - 1] = 20;
				contenuCases[joueurI ][joueurJ - 2] = 3; // 3 == caisse_ok
				joueurJ --;
		
			}else if (contenuCases[joueurI ][joueurJ - 1] == 3 && contenuCases[joueurI ][joueurJ - 2] == 4){ // 3 == caisse_ok  4 == objectif
				contenuCases[joueurI ][joueurJ - 1] = 4;
				contenuCases[joueurI ][joueurJ - 2] = 3; // 3 == caisse_ok
				joueurJ --;
		
			}else if (contenuCases[joueurI ][joueurJ - 1] == 3 && contenuCases[joueurI][joueurJ  - 2] == 20){ // 3 == caisse_ok  20 == vide
				contenuCases[joueurI ][joueurJ - 1] = 4;
				contenuCases[joueurI ][joueurJ - 2] = 2; 
				joueurJ --;
			
			}
			orientation = 9;
			dessiner();
		});

		document.getElementById('droite').addEventListener('click', function() {
		
			if(joueurJ + 1 >= 12 ){
			} else if (contenuCases[joueurI ][joueurJ + 1] == 20){ // 20 == vide
				joueurJ ++;
			
			}else if (contenuCases[joueurI ][joueurJ + 1] == 4){ // 4 == objectif
				joueurJ ++;
			
			}else if (contenuCases[joueurI ][joueurJ + 1] == 2 && contenuCases[joueurI ][joueurJ + 2] == 20){ // 2 == caisse  20 == vide
				contenuCases[joueurI ][joueurJ + 1] = 20;
				contenuCases[joueurI ][joueurJ + 2] = 2;
				joueurJ ++;
		
			}else if (contenuCases[joueurI ][joueurJ + 1] == 2 && contenuCases[joueurI ][joueurJ + 2] == 4){ // 2 == caisse  4 == objectif
				contenuCases[joueurI ][joueurJ + 1] = 20;
				contenuCases[joueurI ][joueurJ + 2] = 3; // 3 == caisse_ok
				joueurJ ++;
		
			}else if (contenuCases[joueurI ][joueurJ + 1] == 3 && contenuCases[joueurI ][joueurJ + 2] == 4){ // 3 == caisse_ok  4 == objectif
				contenuCases[joueurI ][joueurJ + 1] = 4;
				contenuCases[joueurI ][joueurJ + 2] = 3; // 3 == caisse_ok
				joueurJ ++;
		
			}else if (contenuCases[joueurI ][joueurJ + 1] == 3 && contenuCases[joueurI ][joueurJ+ 2] == 20){ // 3 == caisse_ok  20 == vide
				contenuCases[joueurI ][joueurJ + 1] = 4;
				contenuCases[joueurI ][joueurJ + 2] = 2; 
				joueurJ ++;
			
			}
			orientation = 8;

			dessiner();

		});

		document.getElementById('haut').addEventListener('click', function() {
		
			if(joueurI - 1 < 0 ){
			} else if (contenuCases[joueurI - 1][joueurJ] == 20){ // 20 == vide
				joueurI --;
			}else if (contenuCases[joueurI - 1][joueurJ] == 4){ // 4 == objectif
				joueurI --;
			
			}else if (contenuCases[joueurI - 1][joueurJ] == 2 && contenuCases[joueurI - 2][joueurJ] == 20){ // 2 == caisse  20 == vide
				contenuCases[joueurI - 1][joueurJ] = 20;
				contenuCases[joueurI - 2][joueurJ] = 2;
				joueurI --;
			
			}else if (contenuCases[joueurI - 1][joueurJ] == 2 && contenuCases[joueurI - 2][joueurJ] == 4){ // 2 == caisse  4 == objectif
				contenuCases[joueurI - 1][joueurJ] = 20;
				contenuCases[joueurI - 2][joueurJ] = 3; // 3 == caisse_ok
				joueurI --;
			
			}else if (contenuCases[joueurI - 1][joueurJ] == 3 && contenuCases[joueurI - 2][joueurJ] == 4){ // 3 == caisse_ok  4 == objectif
				contenuCases[joueurI - 1][joueurJ] = 4;
				contenuCases[joueurI - 2][joueurJ] = 3; // 3 == caisse_ok
				joueurI --;
			
			}else if (contenuCases[joueurI - 1][joueurJ] == 3 && contenuCases[joueurI - 2][joueurJ] == 20){ // 3 == caisse_ok  20 == vide
				contenuCases[joueurI - 1][joueurJ] = 4;
				contenuCases[joueurI - 2][joueurJ] = 2; 
				joueurI --;
		
			}
			orientation = 7;
			dessiner();
		});

		document.getElementById('bas').addEventListener('click', function() {
		
			if(joueurI + 1 >= 12 ){
			} else if (contenuCases[joueurI + 1][joueurJ] == 20){ // 20 == vide
				joueurI ++;
				
			}else if (contenuCases[joueurI + 1][joueurJ] == 4){ // 4 == objectif
				joueurI ++;
		
			}else if (contenuCases[joueurI + 1][joueurJ] == 2 && contenuCases[joueurI + 2][joueurJ] == 20){ // 2 == caisse  20 == vide
				contenuCases[joueurI + 1][joueurJ] = 20;
				contenuCases[joueurI + 2][joueurJ] = 2;
				joueurI ++;
		
			}else if (contenuCases[joueurI + 1][joueurJ] == 2 && contenuCases[joueurI + 2][joueurJ] == 4){ // 2 == caisse  4 == objectif
				contenuCases[joueurI + 1][joueurJ] = 20;
				contenuCases[joueurI + 2][joueurJ] = 3; // 3 == caisse_ok
				joueurI ++;
		
			}else if (contenuCases[joueurI + 1][joueurJ] == 3 && contenuCases[joueurI + 2][joueurJ] == 4){ // 3 == caisse_ok  4 == objectif
				contenuCases[joueurI + 1][joueurJ] = 4;
				contenuCases[joueurI + 2][joueurJ] = 3; // 3 == caisse_ok
				joueurI ++;
		
			}else if (contenuCases[joueurI + 1][joueurJ] == 3 && contenuCases[joueurI + 2][joueurJ] == 20){ // 3 == caisse_ok  20 == vide
				contenuCases[joueurI + 1][joueurJ] = 4;
				contenuCases[joueurI + 2][joueurJ] = 2; 
				joueurI ++;
		
			}
			orientation = 6;
			dessiner();
		});

		// Écoutez l'événement keydown (appuyer sur une touche)
		canvas.addEventListener('keydown', (event) => {
			// Utilisez event.key pour obtenir la touche appuyée
			const touche = event.key;

			// Empêche l'action par défaut du navigateur (défilement de la page)
			event.preventDefault();
			
			// Traitez la touche selon vos besoins
			switch(touche) {
				case 'ArrowUp':
					
					if(joueurI - 1 < 0 ){
					} else if (contenuCases[joueurI - 1][joueurJ] == 20){ // 20 == vide
						joueurI --;
					}else if (contenuCases[joueurI - 1][joueurJ] == 4){ // 4 == objectif
						joueurI --;
					
					}else if (contenuCases[joueurI - 1][joueurJ] == 2 && contenuCases[joueurI - 2][joueurJ] == 20){ // 2 == caisse  20 == vide
						contenuCases[joueurI - 1][joueurJ] = 20;
						contenuCases[joueurI - 2][joueurJ] = 2;
						joueurI --;
					
					}else if (contenuCases[joueurI - 1][joueurJ] == 2 && contenuCases[joueurI - 2][joueurJ] == 4){ // 2 == caisse  4 == objectif
						contenuCases[joueurI - 1][joueurJ] = 20;
						contenuCases[joueurI - 2][joueurJ] = 3; // 3 == caisse_ok
						joueurI --;
					
					}else if (contenuCases[joueurI - 1][joueurJ] == 3 && contenuCases[joueurI - 2][joueurJ] == 4){ // 3 == caisse_ok  4 == objectif
						contenuCases[joueurI - 1][joueurJ] = 4;
						contenuCases[joueurI - 2][joueurJ] = 3; // 3 == caisse_ok
						joueurI --;
					
					}else if (contenuCases[joueurI - 1][joueurJ] == 3 && contenuCases[joueurI - 2][joueurJ] == 20){ // 3 == caisse_ok  20 == vide
						contenuCases[joueurI - 1][joueurJ] = 4;
						contenuCases[joueurI - 2][joueurJ] = 2; 
						joueurI --;
				
					}
					orientation = 7;
					break;
				case 'ArrowDown':
					
					if(joueurI + 1 >= 12 ){
					} else if (contenuCases[joueurI + 1][joueurJ] == 20){ // 20 == vide
						joueurI ++;
						
					}else if (contenuCases[joueurI + 1][joueurJ] == 4){ // 4 == objectif
						joueurI ++;
				
					}else if (contenuCases[joueurI + 1][joueurJ] == 2 && contenuCases[joueurI + 2][joueurJ] == 20){ // 2 == caisse  20 == vide
						contenuCases[joueurI + 1][joueurJ] = 20;
						contenuCases[joueurI + 2][joueurJ] = 2;
						joueurI ++;
				
					}else if (contenuCases[joueurI + 1][joueurJ] == 2 && contenuCases[joueurI + 2][joueurJ] == 4){ // 2 == caisse  4 == objectif
						contenuCases[joueurI + 1][joueurJ] = 20;
						contenuCases[joueurI + 2][joueurJ] = 3; // 3 == caisse_ok
						joueurI ++;
				
					}else if (contenuCases[joueurI + 1][joueurJ] == 3 && contenuCases[joueurI + 2][joueurJ] == 4){ // 3 == caisse_ok  4 == objectif
						contenuCases[joueurI + 1][joueurJ] = 4;
						contenuCases[joueurI + 2][joueurJ] = 3; // 3 == caisse_ok
						joueurI ++;
				
					}else if (contenuCases[joueurI + 1][joueurJ] == 3 && contenuCases[joueurI + 2][joueurJ] == 20){ // 3 == caisse_ok  20 == vide
						contenuCases[joueurI + 1][joueurJ] = 4;
						contenuCases[joueurI + 2][joueurJ] = 2; 
						joueurI ++;
				
					}
					orientation = 6;
					break;
				case 'ArrowLeft':
					// Code pour déplacer vers la gauche
					if(joueurJ - 1 < 0 ){
					} else if (contenuCases[joueurI][joueurJ - 1] == 20){ // 20 == vide
						joueurJ --;
				
					}else if (contenuCases[joueurI][joueurJ - 1] == 4){ // 4 == objectif
						joueurJ --;
					
					}else if (contenuCases[joueurI][joueurJ- 1] == 2 && contenuCases[joueurI ][joueurJ - 2] == 20){ // 2 == caisse  20 == vide
						contenuCases[joueurI ][joueurJ - 1] = 20;
						contenuCases[joueurI ][joueurJ - 2] = 2;
						joueurJ --;
					
					}else if (contenuCases[joueurI ][joueurJ - 1] == 2 && contenuCases[joueurI ][joueurJ - 2] == 4){ // 2 == caisse  4 == objectif
						contenuCases[joueurI ][joueurJ - 1] = 20;
						contenuCases[joueurI ][joueurJ - 2] = 3; // 3 == caisse_ok
						joueurJ --;
				
					}else if (contenuCases[joueurI ][joueurJ - 1] == 3 && contenuCases[joueurI ][joueurJ - 2] == 4){ // 3 == caisse_ok  4 == objectif
						contenuCases[joueurI ][joueurJ - 1] = 4;
						contenuCases[joueurI ][joueurJ - 2] = 3; // 3 == caisse_ok
						joueurJ --;
				
					}else if (contenuCases[joueurI ][joueurJ - 1] == 3 && contenuCases[joueurI][joueurJ  - 2] == 20){ // 3 == caisse_ok  20 == vide
						contenuCases[joueurI ][joueurJ - 1] = 4;
						contenuCases[joueurI ][joueurJ - 2] = 2; 
						joueurJ --;
					
					}
					orientation = 9;
					break;
				case 'ArrowRight':
					if(joueurJ + 1 >= 12 ){
					} else if (contenuCases[joueurI ][joueurJ + 1] == 20){ // 20 == vide
						joueurJ ++;
					
					}else if (contenuCases[joueurI ][joueurJ + 1] == 4){ // 4 == objectif
						joueurJ ++;
					
					}else if (contenuCases[joueurI ][joueurJ + 1] == 2 && contenuCases[joueurI ][joueurJ + 2] == 20){ // 2 == caisse  20 == vide
						contenuCases[joueurI ][joueurJ + 1] = 20;
						contenuCases[joueurI ][joueurJ + 2] = 2;
						joueurJ ++;
				
					}else if (contenuCases[joueurI ][joueurJ + 1] == 2 && contenuCases[joueurI ][joueurJ + 2] == 4){ // 2 == caisse  4 == objectif
						contenuCases[joueurI ][joueurJ + 1] = 20;
						contenuCases[joueurI ][joueurJ + 2] = 3; // 3 == caisse_ok
						joueurJ ++;
				
					}else if (contenuCases[joueurI ][joueurJ + 1] == 3 && contenuCases[joueurI ][joueurJ + 2] == 4){ // 3 == caisse_ok  4 == objectif
						contenuCases[joueurI ][joueurJ + 1] = 4;
						contenuCases[joueurI ][joueurJ + 2] = 3; // 3 == caisse_ok
						joueurJ ++;
				
					}else if (contenuCases[joueurI ][joueurJ + 1] == 3 && contenuCases[joueurI ][joueurJ+ 2] == 20){ // 3 == caisse_ok  20 == vide
						contenuCases[joueurI ][joueurJ + 1] = 4;
						contenuCases[joueurI ][joueurJ + 2] = 2; 
						joueurJ ++;
					
					}
					orientation = 8;
					break;
				default:
					break;
			}

			dessiner();
		});

		// Assurez-vous que l'élément peut recevoir les événements clavier en lui donnant le focus
		canvas.setAttribute('tabindex', '0');


		// Gestion du bouton "Recommencer"
		document.getElementById('recommencerSokoban').addEventListener('click', function() {
			

			ajusterTailleCanvas();
		});