// JavaScript to toggle the mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Feather Icons Activation
document.addEventListener('DOMContentLoaded', (event) => {
    feather.replace();
});






