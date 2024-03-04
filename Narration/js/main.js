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

var btn = document.querySelector("input");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "Les péripéties parisiennes") {
    btn.value = "En avant !";
    txt.textContent = "Les péripéties parisiennes !";
  } else {
    btn.value = "Les péripéties parisiennes";
    txt.textContent = "En avant !";
  }
}