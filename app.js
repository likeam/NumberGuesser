//Game values

let min = 1,
    max = 10,
    winningNum = 2,
    guesseLeft = 3;

//UI Elements
const geme = document.getElementById('game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

//Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;


//Listen for guess
guessBtn.addEventListener('click', function(){
    console.log(guessInput.value);
})