// crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
// continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando
// la somma degli elementi è minore di 50.

// Create new Array
let numbersArray = [];

// declare addition variable
let addition = 0;

// while usernumbers < 50 ask for the number
while( addition < 50 ) {
    const userNumers = parseInt( prompt('inserisci un numero') );
    if(!isNaN(userNumers)){
        numbersArray.push(userNumers);
        addition += userNumers;
        console.log(addition);
    }
};

// output
console.log('il risultato è : ' + addition);