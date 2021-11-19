/*
 * Generatore di “nomi cognomi” casuali: prendendo
 * una lista di nomi e una lista di cognomi,
 * Gatsby vuole generare una falsa lista di invitati.
 */


// Create the Array
namesGroup = [ 'Mario', 'Marco', 'Paola', 'Francesca', 'Luana', 'Gabriele' ];
surnameGroup = [ 'Cariglio', 'Salusso', 'Bianciotto', 'De rosa', 'Rossi', 'Silvestri' ];

// Create Array Empty
nameSurnameGroup = [];

// scroll through the array and create random name and surname
for( let i = 0; i < namesGroup.length; i++) {

    // generated random numbers
    nameGenerated = namesGroup[Math.floor(Math.random() * (namesGroup.length - 1 + 1) ) + 0];
    surnameGenerated = surnameGroup[Math.floor(Math.random() * (surnameGroup.length - 1 + 1) ) + 0];
    
    nameSurnameGroup.push(`${nameGenerated} ` + `${surnameGenerated}`);
    
    console.log(nameSurnameGroup[i]);
    
}