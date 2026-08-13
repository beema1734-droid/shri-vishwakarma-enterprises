/* =========================================================
   SHRI VISHWAKARMA ENTERPRISES
   WEBSITE JAVASCRIPT
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("open");

            const isOpen = navMenu.classList.contains("open");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            if (isOpen) {

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-xmark"></i>';

            } else {

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });


        /* Close menu after clicking a link */

        const navLinks =
            navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            });

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections =
        document.querySelectorAll("main section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-link");

    function updateActiveNavigation() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + 160;

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop;

            const sectionHeight =
                section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navigationLinks.forEach(function (link) {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href === "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =========================
       BACK TO TOP
    ========================= */

    const backToTop =
        document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =========================
       SMOOTH ANCHOR LINKS
    ========================= */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );

    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


    /* =========================
       IMAGE FALLBACK
    ========================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener(
            "error",
            function () {

                image.style.display = "none";

            }
        );

    });


});