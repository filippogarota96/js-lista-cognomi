 /*Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/

// chiedo all'utente il cognome

var cognomeUtente = prompt("Qual è il tuo cognome?");
// creo l'array

var cognomi =["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// inserisco il cognome utente nella Lista
cognomi.push(cognomeUtente);

// Metto i cognomi in ordine alfabetico
 cognomi.sort();
var i = 0;
var numero = 1;
while (cognomi[i]) {
  numero = cognomi[i] + numero + 1;
  i++
}

console.log(cognomi[i]);



// Scrivo il numero della posizione del cognome
