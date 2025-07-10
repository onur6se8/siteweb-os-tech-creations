


document.addEventListener("DOMContentLoaded", function () {        /* Slider les images qui défilent */
			const sliderContent = document.querySelector(".slider-content");
			const navButtons = document.querySelectorAll(".nav-button");
			let currentSlide = 1;
			let intervalId;
		
			if (sliderContent) {
				function changeSlide(targetSlide) {
				clearInterval(intervalId);
				const translateValue = -(targetSlide - 1) * 90;
				sliderContent.style.transform = `translateX(${translateValue}vw)`;
				currentSlide = targetSlide;
				intervalId = setInterval(() => {
					currentSlide++;
					if (currentSlide > navButtons.length) {
						currentSlide = 1;
					}
					changeSlide(currentSlide);
				}, 20000);
			}
		
			intervalId = setInterval(() => {
				currentSlide++;
				if (currentSlide > navButtons.length) {
					currentSlide = 1;
				}
				changeSlide(currentSlide);
			}, 20000);
		
			navButtons.forEach((button, index) => {
				button.addEventListener("click", (event) => {
					event.preventDefault();
					changeSlide(index + 1);
				});
			});
			}
			
		});      /* Slider les images qui défilent */



		
		document.addEventListener('DOMContentLoaded', function() {  /* nuage pour tablette au touche */
			const nuage = document.querySelector('.nuage');
			nuage.addEventListener('touchstart', function() {
				nuage.classList.add('touch');
			});
		});      /* nuage pour tablette au touche */




	