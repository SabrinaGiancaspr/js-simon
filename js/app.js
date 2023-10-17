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
const timeOutDomeElement = document.getElementById('timeout');

//aggiungo eventlistener, al click del bottone inizia la funzione
playButtonDomElement.addEventListener('click', function () {

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

  //stampare countdown in pagina
  let countdown = 5;
  timerOutDomElement.innerHTML = 'Countdown: ' + countdown;
  //creo intervallo per il countdown
  const countdownInterval = setInterval(function () {
    countdown--;
    //visualizza il countdown aggiornato nella pagina
    timerOutDomElement.innerHTML = 'Countdown: ' + countdown;
    //condizionali
    //se il countdown è minore o uguale di 0
    if (countdown <= 0) {
      //allora cancella il countdown
      clearInterval(countdownInterval);
      //cancella numeri casuali dalla pagina
      numbersDomElement.innerHTML = '';
      //cancella il countdown dalla pagina
      timerOutDomElement.innerHTML = '';
    }
  }, 1000);

  //stampare countdown in pagina
  //impostare timer 30 secondi prima di chiedere i numeri all'utente
  let timerNumber = 30;
  timeOutDomeElement.innerHTML = 'Countdown: ' + timerNumber;

  let idInterval = setInterval(function timeOut() {
    if (timerNumber === 0) {
      clearInterval(idInterval);
      timeOutDomeElement.innerHTML = '';
    } else {
      timerNumber--
      timeOutDomeElement.innerHTML = 'Countdown: ' + timerNumber;
    }
  }, 1000)
})

