// inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

// Declare a variable with the user number
let userNumber = parseInt( prompt(' Benvenuto, dimmi un numero. ') );

let numberResult;

// if it' even print the number else print the next number
if( userNumber % 2 === 0 ) {
    numberResult = userNumber;
} else{
    numberResult = userNumber + 1;
}

// output
alert(numberResult);