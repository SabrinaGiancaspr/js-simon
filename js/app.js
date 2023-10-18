// creare funzione per generare 5 numeri casuali
// dopo 5 secondi i numeri spariscono 
// poi inizia il countdown di 30, una volta finito l'utente deve tramite prompt scrivere i numeri che si ricorda
// dopo averli inseriti bisogna stampare quanti numeri e quali numeri sono stati individuati 

//recupero button dal DOM con getElement by ID
const playButtonDomElement = document.getElementById('button');
//recupero number list dal DOM con getElement by ID
const numbersDomElement = document.getElementById('numeri-random');
//recupero timer dal DOM
const timerOutDomElement = document.getElementById('timer');
//recupero timeout dal DOM
const timeOutDomElement = document.getElementById('timeout');
//recupero numeri-ricordati dal DOM
const numeriRicordatiDomElement = document.getElementById('numeri-ricordati');

//aggiungo eventlistener, al click del bottone inizia la funzione
playButtonDomElement.addEventListener('click', function () {
  numeriRicordatiDomElement.innerHTML = '';
  function generateRandomNumbers() {
    //creo l'Array vuoto
    const randomNumbers = [];
    //inizia ciclo for per creare 5 numeri
    for (let i = 0; i < 5; i++) {
      //formula numeri random da 1 a 100 per 5 volte
      randomNumbers.push(Math.floor(Math.random() * 100)); // Genera numeri casuali da 0 a 99
    }
    //ritorna l'array pushato con i 5 numeri random
    return randomNumbers;
  }
  // sta creando una variabile chiamata randomNumbersArray e assegnandole il valore restituito dalla funzione generateRandomNumbers(). 
  // ora randomNumbersArray conterrà l'array di 5 numeri casuali generati.
  const randomNumbersArray = generateRandomNumbers();
  console.log(randomNumbersArray);

  //recupero l'elemento dal DOM per far stampare i 5 numeri random in pagina
  numbersDomElement.innerHTML = randomNumbersArray


  // Stampare countdown in pagina
  let countdown = 5;
  timerOutDomElement.innerHTML = 'Countdown: ' + countdown;
  //creo intervallo per il countdown
  const countdownInterval = setInterval(function () {
    countdown--;
    //visualizza countdown in pagina
    timerOutDomElement.innerHTML = 'Countdown: ' + countdown;
    //condizionali
    //se il timer è minore o uguale a zero
    if (countdown <= 0) {
      //allora cancella timer
      clearInterval(countdownInterval);
      //far sparire i numeri dell array
      numbersDomElement.innerHTML = '';
      //far sparire il timer dalla pagina
      timerOutDomElement.innerHTML = '';

      // Impostare timer 30 secondi prima di chiedere i numeri all'utente
      let timerNumber = 30;
      //visualizzare countdown in pagina
      timeOutDomElement.innerHTML = 'Countdown: ' + timerNumber;
      //settare intervallo 
      const timerCountdown = setInterval(function () {
        timerNumber--;
        //visualizza countdown in pagina
        timeOutDomElement.innerHTML = 'Countdown: ' + timerNumber;
        //condizionali
        //se il timer è minore o uguale a zero
        if (timerNumber <= 0) {
          //allora cancella timer
          clearInterval(timerCountdown);
          //far sparire il timer dalla pagina
          timeOutDomElement.innerHTML = '';

          // Array per memorizzare i numeri che l'utente ricorda
          const userNumbers = [];

          for (let i = 0; i < 5; i++) {
            const userInput = prompt('Inserisci il numero che ricordi');
            // Confronto se l'input dell'utente è presente nell'array di numeri casuali
            if (randomNumbersArray.includes(parseInt(userInput)) && !userNumbers.includes(parseInt(userInput))) {
              userNumbers.push(parseInt(userInput));
            }
          }

          // Stampo i numeri che l'utente ha individuato
          console.log('Numeri individuati dal utente:', userNumbers);

          //stampare in pagina i numeri 
         numeriRicordatiDomElement.innerHTML = 'lista numeri ricordati ' + userNumbers;
         numeriRicordatiDomElement.innerHTML += '<br> quanti numeri hai ricordato ' + userNumbers.length;
        }
      }, 1000);
    }
  }, 1000);
});