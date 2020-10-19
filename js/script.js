// variabili

var richiestaNome = "Come ti chiami?";
var nomeUtente = prompt(richiestaNome);
console.log(nomeUtente);

var richiestaCognome = "Qual'è il tuo cognome?";
var cognomeUtente = prompt(richiestaCognome);
console.log(cognomeUtente);

var richiestaColore = "Il tuo colore preferito?";
var coloreUtente = prompt(richiestaColore);
console.log(coloreUtente);

document.getElementById('risultato').innerHTML=nomeUtente + cognomeUtente + coloreUtente;
