const services = document.querySelectorAll('.service');

		services.forEach(service => {
			service.addEventListener('click', () => {
				if (!service.classList.contains('active')) {
					services.forEach(s => s.classList.remove('active'));
					service.classList.add('active');
				} else {
					service.classList.remove('active');
				}
			});
	
			service.addEventListener('mouseleave', () => {
				if (service.classList.contains('active')) {
					service.classList.remove('active');
				}
			});
		});