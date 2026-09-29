/* =========================================
   MENÚ RESPONSIVE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


/* =========================================
   CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
========================================= */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================================
   BOTÓN VOLVER ARRIBA
========================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   AÑO AUTOMÁTICO
========================================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* =========================================
   ANIMACIÓN DE APARICIÓN
========================================= */

const elements = document.querySelectorAll(
    ".card, .economy-card, .security-card, .student-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});