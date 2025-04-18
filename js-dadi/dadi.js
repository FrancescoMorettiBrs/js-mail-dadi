// OBBIETTIVO
// Ricreare il gioco dei dadi.

// RAGIONAMENTO
// Creare le due variabili per Giocatore e Computer dove il massimo valore ottenibile è 6 mentre il minimo è 1
// Stampare subito il risultato dei due tiri di dadi
// Determinare se vince il Giocatore, il Computer oppure Pareggio e stampare il risultato


let dadoGiocatore = Math.floor(Math.random() *6) + 1;

let dadoComputer = Math.floor(Math.random() *6) + 1;

console.log("Giocatore tira il dado ed esce: " + dadoGiocatore);
console.log("Computer tira il dado ed esce: " + dadoComputer);

if (dadoGiocatore > dadoComputer) {
    console.log("Vince il giocatore!");
} else if (dadoGiocatore < dadoComputer) {
    console.log("Vince il computer!");
} else {
    console.log("Pareggio!");
}

