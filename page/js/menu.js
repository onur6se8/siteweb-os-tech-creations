const menu01 = document.querySelector(".menu");

document.querySelector('.dropbtn').addEventListener('click', myFunction);
  
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");


    menu01.classList.toggle("menu22");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        
      menu01.classList.remove("menu22");
    }

}






const btnDesktop = document.getElementById("services-btn-desktop");
const dropdown = document.getElementById("services-dropdown");

// Toggle au clic
btnDesktop.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("active");
});

// Hover : affiche le menu au survol
btnDesktop.addEventListener("mouseenter", () => {
  dropdown.classList.add("active");
});
dropdown.addEventListener("mouseenter", () => {
  dropdown.classList.add("active");
});

// Ferme si on clique ailleurs
document.addEventListener("click", function (e) {
  if (!btnDesktop.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

// Ferme si on sort du bouton + menu
btnDesktop.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!dropdown.matches(':hover')) {
      dropdown.classList.remove("active");
    }
  }, 200); // petit délai pour laisser le temps d'entrer dans le dropdown
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.classList.remove("active");
});








  

document.addEventListener('DOMContentLoaded', function() {
  let lastScrollTop = 0;
  let menuHeight = document.querySelector('.sticky-menu').offsetHeight;
  let isHidden = false;

  window.addEventListener('scroll', function() {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let menu = document.querySelector('.sticky-menu');

    if (currentScrollTop > lastScrollTop) {
      // L'utilisateur descend dans la page
      if (currentScrollTop >= menuHeight && !isHidden) {
        menu.classList.add('hidden');
        isHidden = true;
      }
    } else {
      // L'utilisateur remonte dans la page
      menu.classList.remove('hidden');
      isHidden = false;
    }

    lastScrollTop = currentScrollTop;
  });




   const servicesBtn = document.getElementById("services-btn");
  const submenu = servicesBtn.nextElementSibling;

  if (window.matchMedia("(max-width: 1204px)").matches) {
    // Empêche toute action de lien
    servicesBtn.addEventListener("click", (e) => {
      e.preventDefault(); // pas de redirection
      e.stopPropagation(); // évite fermeture immédiate
      submenu.classList.toggle("active");
    });

    // Fermer le menu si on clique ailleurs
    document.addEventListener("click", () => {
      submenu.classList.remove("active");
    });
  }





});

