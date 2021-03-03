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
for (var i = 0; i < cognomi.length; i++) {
  cognomi.sort();
  console.log(cognomi[i]);
}
