// VARIABLES GLOBALES
let exemplevariable = "hello world"

// la page HTML a fini de charger, on peut donc
// interagir avec via des scripts sans risque d'erreur
document.addEventListener("DOMContentLoaded", function() {
    // laisser un message dans la console du navigateur
    console.log('ready');

    // lancer une fonction externe
    exemplefonction();
});

// FUNCTIONS EXTERNES
function exemplefonction() {
    // utiliser une variable pour afficher son contenu dans la console
    console.log(exemplevariable);
}

