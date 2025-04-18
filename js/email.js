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