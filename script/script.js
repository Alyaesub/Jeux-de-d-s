console.log("teste réussi");

// Sélection des éléments du DOM
const rollButton = document.getElementById("rollDice"); // Bouton pour lancer le dé
const holdButton = document.getElementById("hold-score");
const diceFace = document.querySelector(".rolling-element"); // Image du dé
const diceResult = document.getElementById("diceResult"); // Affiche le resultat du dés

// Sélection des éléments des joueurs
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const globalScore1 = document.querySelector(".player-1 .globalScore .span");
const globalScore2 = document.querySelector(".player-2 .globalScore .span");
const roundScore1 = document.querySelector(".player-1 .round-score span");
const roundScore2 = document.querySelector(".player-2 .round-score span");

// Variables pour suivre les scores et le joueur actif
let scores = [0, 0]; // scores globaux des joueurs
let roundScore = 0;
let activePlayer = 0; // 0 pour Joueur 1, 1 pour Joueur 2

function rollDice() {
	// Fonction pour lancer le dé

	// Réinitialise l'image du dé
	diceFace.src = "assets/game-die.256x256-removebg-preview.png";
	diceResult.textContent = "C'est parti mon KiKi...";
	// Ajoute une animation temporaire
	diceFace.classList.add("rolling"); // Ajoute une classe pour déclencher l'animation

	// Supprime l'animation après 2 secondes (durée de l'animation définie en CSS)
	setTimeout(() => {
		diceFace.classList.remove("rolling");
		const result = Math.floor(Math.random() * 6) + 1;

		// Mettre à jour le résultat visuel du dé

		diceFace.src = `assets/die-face-${result}.png`;

		// Afficher le résultat sous le dé
		diceResult.textContent = `Vous avez fait un ${result} !`;

		if (result === 1) {
			// Si le résultat est 1, le score du round est réinitialisé
			roundScore = 0;
			updateRoundScore(activePlayer, roundScore);
			diceResult.textContent = " Oups!!! t'a fait un 1!!!!";
		} else {
			// Sinon, ajoute le résultat au score du round
			roundScore += result;
			updateRoundScore(activePlayer, roundScore);
		}
	}, 2000); //2 secondes
}

// Fonction pour mettre à jour le score du round
function updateRoundScore(player, score) {
	if (player === 0) {
		roundScore1.textContent = score;
	} else {
		roundScore2.textContent = score;
	}
}
// Associe la fonction au clic sur le bouton
rollButton.addEventListener("click", rollDice);

//////////////////////////// FIN DE L'ANIMATION /////////////////////////////

///////////////////// Fonction pour me changement de joueur ////////////////
