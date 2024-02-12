// VARIABLES
// les variables permettent de stocker des données
// qui peuvent être utilisées ou modifiées dans le script

// variable pour stocker l'interval de génération des éléments
let moreCats;
// temps entre deux générations (en ms)
const speed = 100;
// nombre d'éléments générés
let catNumber = 0;
// nombre maximal d'éléments à générer
const maxCatNumber = 50;
//position de la souris en x et y
let mouseX, mouseY;
// état de déplacement de la souris
let moving = false;

// DOM READY : la page HTML a fini de charger, on peut donc interagir avec via des scripts
document.addEventListener('DOMContentLoaded', function() {
	console.log('ready');
	//
	// récupération de la position de la souris
	document.addEventListener('mousemove', function(e) {
		// position en X
		mouseX = e.pageX;
		// position en Y
		mouseY = e.pageY;
		moving = true;
		// message dans la console
		console.log('X:' + mouseX + ' Y:' + mouseY);
	});

	// arrêter/relancer la génération de chats
	const button = document.querySelector('button');
	const container = document.getElementById('spawn-elements');
	button.addEventListener('click', function() {
		// si le bouton a la class='on', on va l'enlever, sinon on l'ajoute
		if (button.classList.contains('on')) {
			button.classList.remove('on');
			button.textContent = 'SURPRIIIIISE !!';
			// suppression du spawn des cats
			clearInterval(SURPRIIIIISE);
			// on supprime les cats déjà placés
			container.innerHTML = '';
		} else {
			button.classList.add('on');
			button.textContent = 'Net Art !';
			// lancer une fonction externe avec un argument
			launchCats(container);
		}
	});
});

// FUNCTIONS
function launchCats(container) {
	// fonction intervale, qui permet de se lancer tout les x intervales de temps (définit par speed)
	moreCats = setInterval(function() {
		console.log('more cats function');

		// si la souris bouge quand la fonction est lancée
		if (moving == true) {
			console.log('moving');
			// on ajoute 1 au nombre d'éléments créés
			catNumber++;
			console.log('cat #' + catNumber);

			//on prépare une rotation aléatoire de l'élément créé
			let rotate = Math.round(Math.random() * 360);

			// on on génère le html à insérer dans la page,
			let cat = document.createElement('img');
            // et tous ses paramètres
			cat.setAttribute('src', 'src/img/internet pop up');
			cat.classList.add('cat');
			cat.style.top = mouseY + 'px';
			cat.style.left = mouseX + 'px';
			cat.style.transform = "rotate(" + rotate + "deg)";
            // un insère l'élément dans le container
			container.append(cat.cloneNode(true));

			// on supprime des chats au bout d'un moment
			if (catNumber >= maxCatNumber) {
                // si on a généré plus d'éléments que maxCatNumber, 
                // on supprime le premier créé (donc le plus ancien)
				console.log('catNumber : ' + catNumber);
				let first = container.firstChild;
				first.remove();
			}
			// on remet le mouvement en false pour 
			// éviter une génération trop forte
			moving = false;
		} else {
			// si la souris ne bouge pas quand la  
            // fonction est lancée, on ne fait rien
			console.log('not moving');
			return;
		}
	}, speed);
}
