document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById('box');

    // Animation au clic : translation vers la droite de 500px
    box.addEventListener('click', function() {
        gsap.to(box, { x: 500, duration: 1 });
    });

    // Animation au double clic : rotation de 360 degrés
    box.addEventListener('dblclick', function() {
        gsap.to(box, { rotation: 360, duration: 1 });
    });

    // Animation au survol (mouseover) : changement de couleur
    box.addEventListener('mouseover', function() {
        gsap.to(box, { backgroundColor: 'lightcoral', duration: 0.5 });
    });

    // Animation au retrait du survol (mouseout) : retour à la couleur initiale
    box.addEventListener('mouseout', function() {
        gsap.to(box, { backgroundColor: 'lightblue', duration: 0.5 });
    });

    // Animation au clic droit (contextmenu) : réduction de la taille
    box.addEventListener('contextmenu', function(event) {
        event.preventDefault(); // Empêcher le menu contextuel
        gsap.to(box, { scale: 0.5, duration: 1 });
    });

    // Animation au chargement de la page : opacité de 0 à 1
    gsap.from(box, { opacity: 0, duration: 2 });
});