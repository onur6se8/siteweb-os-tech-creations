document.querySelectorAll('.couleurFond').forEach(container => {
    container.addEventListener('mousemove', (event) => {
        const lampe = container.querySelector('.lampe');
        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;
        lampe.style.left = `${x}px`;
        lampe.style.top = `${y}px`;
    });

    container.addEventListener('mouseout', () => {
        const lampe = container.querySelector('.lampe');
        lampe.style.transition = 'opacity 0.6s';
        lampe.style.opacity = '0';
    });

    container.addEventListener('mouseover', () => {
        const lampe = container.querySelector('.lampe');
        lampe.style.transition = 'opacity 0.6s';
        lampe.style.opacity = '1';
    });
});

document.querySelectorAll('.idCouleurFond').forEach(container => {
    container.addEventListener('mousemove', (event) => {
        const lampe = container.querySelector('.lampe');
        const containerRect = container.getBoundingClientRect();
        const x = event.clientX - containerRect.left;
        const y = event.clientY - containerRect.top;
        lampe.style.left = `${x}px`;
        lampe.style.top = `${y}px`;
    });

    container.addEventListener('mouseout', () => {
        const lampe = container.querySelector('.lampe');
        lampe.style.transition = 'opacity 0.6s';
        lampe.style.opacity = '0';
    });

    container.addEventListener('mouseover', () => {
        const lampe = container.querySelector('.lampe');
        lampe.style.transition = 'opacity 0.6s';
        lampe.style.opacity = '1';
    });
});





document.querySelectorAll('.parentRotation').forEach(container => {
    const image = container.querySelector('.enfantRotation');

    container.addEventListener('mousemove', (e) => {
        const xOffset = (e.clientX - container.offsetLeft - container.offsetWidth / 2) / container.offsetWidth * 20; // Augmenté à 30
        const yOffset = (e.clientY - container.offsetTop - container.offsetHeight / 2) / container.offsetHeight * 20; // Augmenté à 30
    

        image.style.transform = `rotateX(${yOffset}deg) rotateY(${xOffset}deg) `;
    });

    container.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0) rotateY(0) ';
    });
});