// OBBIETTIVO
// Chiedere la mail all'utente.
// Stampare un messaggio appropriato sull’esito del controllo.

// RAGIONAMENTO
// Creare un prompt dove si richiede la mail all'utente
// Creare una variabile di appoggio fuori dal ciclo for con valore booleano "false"
// All'interno del ciclo for definire il valore di "i" e verificare se la mail dell'utente è autorizzata all'accesso
// Infine stampare il risultato


const emailAutorizzate = ["giovanni@gmail.com", "riccardo@gmail.com", "lucia@gmail.com", "francesco@gmail.com"];
// console.log(emailAutorizzate);

let emailUtente = prompt("Inserisci la tua mail:");

let accessoConsentito = false;

for (i = 0; i < emailAutorizzate.length; i++) {
    if (emailUtente === emailAutorizzate[i]) {
        accessoConsentito = true;
        break;
    }
}

if (accessoConsentito) {
    console.log ("Accesso consentito.");
} else {
    console.log ("Accesso negato.");
}