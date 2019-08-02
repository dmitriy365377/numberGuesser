// Game values

let min = 2,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI Elements

const game = document.querySelector('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');



// Assign UI min and max
// textContent - Позволяет задавать 
//или 
//получать текстовое содержимое элемента и его потомков.

minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess

// addEventListener() -регистрирует обработчик 
// события для целевого объекта (eventTarget), 
// для которого он будет вызываться при возникновении события.

guessBtn.addEventListener('click', function () {

    // Функция parseInt читает из строки целое число!

    let guess = parseInt(guessInput.value)
    // Validate 

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}}`)
    }

    // Check if won
    if (guess === winningNum) {
        gamaOver(true, `  ${winningNum} is correct, YOU WIN!  `)

    } else {

        guessesLeft -= 1;

        if (guessesLeft === 0) {

            gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`)



        } else {
            //

            // Change border color
            guessInput.style.borderColor = 'red'

            //Clear Input
            guessInput.value = ''

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }

    }
})

// Game over
function gamaOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red'

    // Disable input 
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color
    // Set text color
    message.style.color = color
    // Set message
    setMessage(msg)

}



// Set message 
function setMessage(msg, color) {
    message.getElementsByClassName.color = color;
    message.textContent = msg;
}