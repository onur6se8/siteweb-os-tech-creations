
const elements = [
    { id: 'element1', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element2', positionX: Math.random() * window.innerWidth, positionY:(Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element3', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element4', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element5', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element6', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element7', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element8', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 },
    { id: 'element9', positionX: Math.random() * window.innerWidth, positionY: (Math.random() * (document.body.scrollHeight - 500))+500, vitesseX: Math.random() - 0.5, vitesseY: Math.random() - 0.5 }
];

elements.forEach(elementData => {
    const element = document.getElementById(elementData.id);

    function detecterCollision(element1, element2) {
        return (
          element1.positionX < element2.positionX + largeurElement &&
          element1.positionX + largeurElement > element2.positionX &&
          element1.positionY < element2.positionY + hauteurElement &&
          element1.positionY + hauteurElement > element2.positionY
        );
    }

    function mettreAJourPosition() {
        elementData.positionX += elementData.vitesseX;
        elementData.positionY += elementData.vitesseY;

        
    
        if (elementData.positionX <= 0 || elementData.positionX >= window.innerWidth ) {
            elementData.vitesseX = -elementData.vitesseX;
        }
    
        if (elementData.positionY <= 500 ) {
            if (elementData.vitesseY <= 0) {
                elementData.vitesseY = -elementData.vitesseY;
            }
        } else if (elementData.positionY >= document.body.scrollHeight - 500 ) {
            if (elementData.vitesseY >= 0) {
                elementData.vitesseY = -elementData.vitesseY;
            }
        }
    
        element.style.left = elementData.positionX + 'px';
        element.style.top = elementData.positionY + 'px';

        
    
        requestAnimationFrame(mettreAJourPosition);
    }

    

    mettreAJourPosition();
});