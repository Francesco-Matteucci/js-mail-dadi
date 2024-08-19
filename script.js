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


//? --------------------------------------------------------------------------------------------------------------------

//! ESERCIZIO 2 - Finta Login
// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// Controlla che sia nella lista di chi può accedere,
// Stampa un messaggio appropriato sull’esito del controllo.


// Invento una lista di mail autorizzate
const authorizedEmails = ["francesco@boolean.com", "angelo@boolean.com", "giorgio@boolean.com", "giovanni@boolean.com", "marco@boolean.com"];


// Recupero elementi dal DOM
const loginButton = document.getElementById("loginButton");
const messageElement = document.getElementById("message");

// Aggiungo un listener per l'evento click del bottone del form
loginButton.addEventListener('click', function () {

    //Recupero la mail inserita dall'utente nell'input del form
    const userEmail = document.getElementById("email").value;


    //Creo una variabile per determinare se la mail inserita dall'utente è autorizzata al login
    let isAuthorized = false;

    // Creo un ciclo "for" per controllare se la mail è presente nella lista autorizzata
    for (let i = 0; i < authorizedEmails.length; i++) {
        if (userEmail === authorizedEmails[i]) {
            isAuthorized = true;
            break;
        }
    }

    // Stampo il messaggio per l'utente a seconda della validazione o meno all'accesso
    if (isAuthorized) {
        messageElement.innerText = "Accesso consentito. Benvenuto!";
        messageElement.style.color = "green";
    } else {
        messageElement.innerText = "Accesso negato. Email non autorizzata.";
        messageElement.style.color = "red";
    }
});