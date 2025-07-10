let rotationX = 0, rotationY = 0, rotationSpeedX = 0, rotationSpeedY = 1;
		let lastX, lastY;
		let isDragging = false;

		const cube = document.getElementById('cube');

		// Rotation continue
		function updateRotation() {
			if (!isDragging) {
				rotationX += rotationSpeedX;
				rotationY += rotationSpeedY;
			}
			cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
			requestAnimationFrame(updateRotation);
		}

		// Démarrage de la rotation
		updateRotation();

		// Gestionnaire pour les événements de souris
		function handleMouseDown(event) {
			isDragging = true;
			lastX = event.clientX;
			lastY = event.clientY;
		}

		function handleMouseMove(event) {
			if (isDragging) {
				const dx = event.clientX - lastX;
				const dy = event.clientY - lastY;
				rotationSpeedX = -dy * 0.05;
				rotationSpeedY = dx * 0.05;
				lastX = event.clientX;
				lastY = event.clientY;
			}
		}

		function handleMouseUp() {
			isDragging = false;
		}

		// Gestionnaire pour les événements tactiles
		function handleTouchStart(event) {
			const touch = event.touches[0];
			isDragging = true;
			lastX = touch.clientX;
			lastY = touch.clientY;
		}

		function handleTouchMove(event) {
			if (isDragging) {
				const touch = event.touches[0];
				const dx = touch.clientX - lastX;
				const dy = touch.clientY - lastY;
				rotationSpeedX = -dy * 0.05;
				rotationSpeedY = dx * 0.05;
				lastX = touch.clientX;
				lastY = touch.clientY;
				event.preventDefault();
			}
		}

		function handleTouchEnd() {
			isDragging = false;
		}

		// Ajout des écouteurs d'événements
		cube.addEventListener('mousedown', handleMouseDown);
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);

		cube.addEventListener('touchstart', handleTouchStart);
		document.addEventListener('touchmove', handleTouchMove);
		document.addEventListener('touchend', handleTouchEnd);
