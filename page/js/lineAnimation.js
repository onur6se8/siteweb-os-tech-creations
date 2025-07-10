document.addEventListener("scroll", handleScroll);

		var lines = document.querySelectorAll('.line');
		var circles = document.querySelectorAll('.circle');
		var lineDroite = document.querySelectorAll('.lineDroite');
		var divContainer = document.querySelectorAll('.resp');
		

		function handleScroll() {
			lines.forEach((line, index) => {
				var lineRect = line.getBoundingClientRect();
				var lineTop = window.scrollY + lineRect.top;
				var windowHeight = window.innerHeight;

				if (window.scrollY + windowHeight - 200 > lineTop) {
					line.style.height = "100%";
				} else {
					line.style.height = "0";
				}
			});

			lineDroite.forEach((line, index) => {
				var lineRect = line.getBoundingClientRect();
				var lineTop = window.scrollY + lineRect.top;
				var windowHeight = window.innerHeight;

				if (window.scrollY + windowHeight - 80 > lineTop) {
					line.style.width = "100px";
				} else {
					line.style.width = "0";
				}
			});

			circles.forEach((circle) => {
				var circleRect = circle.getBoundingClientRect();
				var circleTop = window.scrollY + circleRect.top;
				var windowHeight = window.innerHeight;

				if (window.scrollY + windowHeight - 60 > circleTop) {
					circle.style.visibility = 'visible';
    				circle.style.opacity = 1;
				} else {
					circle.style.visibility = 'hidden';
					circle.style.opacity = 0;
				}
			});

			divContainer.forEach((container) => {
				var containerRect = container.getBoundingClientRect();
				var containerTop = window.scrollY + containerRect.top;
				var windowHeight = window.innerHeight;

				if (window.scrollY + windowHeight - 400 > containerTop) {
					container.style.visibility = 'visible';
    				container.style.opacity = 1;
				} else {
					container.style.visibility = 'hidden';
					container.style.opacity = 0;
				}
			});
		}

		// Initialiser l'état d'affichage
		handleScroll();