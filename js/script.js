   /*Lista Cognomi
  Chiedere all’utente il cognome
  inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
  stampa la lista ordinata alfabeticamente
  scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/

  // chiedo all'utente il cognome

  var cognomeUtente = prompt('Qual è il tuo cognome?');
  cognomeCapitalized = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.slice(1)

  // creo l'array

   var cognomi =["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

  // // inserisco il cognome utente nella Lista e metto in ordine alfabetico
  cognomi.push(cognomeCapitalized);
  cognomi.sort();

  for (var i = 0; i < cognomi.length; i++) {
    console.log(cognomi[i]);
  }

  // iserisco numero ordine
  console.log(cognomi.indexOf(cognomeCapitalized) + 1);


  // var trovato = false;
  // var j = 0;
  // var ordine;    ordine 'umano'
  //
  // while (trovato == false) {
  //   if (cognomeUtente == cognomi[j]) {
  //     trovato = true;
  //     ordine = j + 1;
  //   }
  //
  //   j++;
  //
  //   if (j == cognomi.length) {
  //     trovato = true;
  //   }
  // }
  //
  // console.log(ordine);
