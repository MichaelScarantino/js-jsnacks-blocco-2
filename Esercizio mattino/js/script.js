// Il software deve richiedere per 5 volte un numero,
// il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni,con il for e con il while

// Create variable 
// let addition = 0;

// For each number, add the number at the result
// for( let i = 0; i < 5; i++ ) {
//     const userNumber = parseInt(prompt('inserisci un numero'));

//     addition += userNumber;
// }

// output
// console.log( 'il risultato è : ' + addition );


// ------------------------------------------------------------------------

// create variable addition and index
let addition = 0;
let i = 0;

while ( i < 5 ) {
    const userNumber = parseInt(prompt('inserisci un numero'));

    addition += userNumber;

    i++;
}

// output
console.log( 'il risultato è : ' + addition );