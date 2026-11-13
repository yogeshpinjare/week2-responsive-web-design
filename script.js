
const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Open and close mobile menu
menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
    );
});

// Close menu after clicking a link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Open menu");

    });

});
