// Custom mobile menu and more
$(document).ready(function () {
    $("#toggle-menu").click(function () {
        $(".menu").toggleClass("menu-mobile-visible");
    });
    $("#hiRodney").click(function () {
        $(".this-is").toggleClass("sparta");
    });
    $("#byeRodney").click(function () {
        $(".this-is").toggleClass("sparta");
    });
});

// Parallax effects
var rellax = new Rellax('.rellax');

// Scroll Reveal effects
ScrollReveal().reveal('.card', {
    interval: 16,
    reset: false,
    duration: 1250,
    scale: 0.5
});
