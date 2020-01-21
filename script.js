$(document).ready(function () {


  // *Simon says*

// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



var numToGuess = [];
var guessedNum = [];

while(numToGuess.length < 5) {
  numToGuess.push(getRandomIntInclusive(1, 500));
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert('Questi sono i numeri da memorizzare ' + numToGuess);

setTimeout(function() {

  i = 0;
  while (i < 5 ) {

    var userNum = parseInt(prompt('Inserisci il numero da indovinare'));
    if (numToGuess.includes(userNum)) {
      guessedNum.push(userNum);
      console.log('Hai inserito il numero ' + userNum);
      console.log('Complimenti, hai indovinato ' + guessedNum.length + ' N su 5');
    } else {
      console.log('Hai inserito il ' + userNum);
      console.log('Numero sbagliato');
    }
    if (i == 4) {
      alert('Hai indovinato ' + guessedNum.length + ' N su 5\n I numeri indovinati sono: ' + guessedNum)
    }

    i++;

  }
}, 300);



});
