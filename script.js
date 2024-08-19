//! ESERCIZIO 1 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato


// Recupero elementi dal DOM
const userDice = document.getElementById("user-dice")
const computerDice = document.getElementById("computer-dice")
const winner = document.getElementById("winner")

// Genero un numero casuale da 1 a 6 per l'utente e per il computer
let userRoll = Math.floor(Math.random() * 6) + 1;
let computerRoll = Math.floor(Math.random() * 6) + 1;

// Visualizzo i risultati dei lanci in pagina
userDice.innerText = "Hai tirato un " + userRoll + " Complimenti!";
computerDice.innerText = "Il computer ha tirato un " + computerRoll;

// Determino il vincitore
let result = "E' un pareggio!";
if (userRoll > computerRoll) {
    result = "Hai vinto!"
} else if (userRoll < computerRoll) {
    result = "Hai perso!"
}

//Stampo il vincitore in pagina
winner.innerText = result