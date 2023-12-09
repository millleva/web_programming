document.addEventListener("DOMContentLoaded", function () {
    var menuButton = document.getElementById("menu-button");
    var navMenu = document.getElementById("nav-menu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("show-menu");
        });
    }
});