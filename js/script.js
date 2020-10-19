// variabili
var richiestaNome = "Come ti chiami?";
var nomeUtente = prompt(richiestaNome);
// console
console.log(nomeUtente);

// variabili
var richiestaCognome = "Qual'è il tuo cognome?";
var cognomeUtente = prompt(richiestaCognome);
// console
console.log(cognomeUtente);

// variabili
var richiestaColore = "Il tuo colore preferito?";
var coloreUtente = prompt(richiestaColore);
// console
console.log(coloreUtente);

// visualizzato
document.getElementById('risultato').innerHTML="Complimenti! La tua Password è: " + nomeUtente + cognomeUtente + coloreUtente + "19";
