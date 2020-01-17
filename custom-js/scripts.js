// Custom mobile menu
$(document).ready(function () {
    $("#toggle-menu").click(function () {
        $(".menu").toggleClass("menu-mobile-visible");
    });
    $('#toggleSubnav').click(function () {
        $(".subnav-menu-items").toggleClass("hidden-xs visible-block");
        $("#subnavToggler").toggleClass("fa-chevron-down fa-times");
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
