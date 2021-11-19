// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi che sono in posizioni dispari

// Create Array of numbers
const numbersArray = [3, 5, 4, 54, 6, 21, 8, 12, 31];

// create variable result
let result = 0;

// scroll through the Array
for( let i = 0; i < numbersArray.length; i++ ) {

    // if index is odd result = result + numbersarray index
    if (i % 2 !== 0) {
        result += numbersArray[i];
    }
}

// output
console.log(result);