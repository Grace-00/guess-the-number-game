//Computer stores random number between 0 and 30 before game starts
let randomNumber = Math.floor(Math.random() * 30) + 1

//Storing HTML elements into variables to easily use them later + initialising variable for count
const result = document.querySelector(".result")
const title = document.querySelector('.title')
const attempt = document.getElementById("attempt")
const playBtn = document.getElementById("play")
const guess = document.getElementById("guess")
const paraPlayAgain = document.querySelector(".playAgain")
const playAgainButton = document.getElementById("playAgain")
const subtitle = document.querySelector('.subtitle')
const contents = document.querySelector('.contents')

let count = 1 //starting counter for attempts

window.addEventListener('resize', () => { //show subtitle on viewports that are smaller than 570px
    if (window.innerWidth < 570) {
        subtitle.style.display = 'block'
    } else {
        subtitle.style.display = 'none'
    }
})

//Listening for event "click" on submit and linking it to function to check guess and hide second button visibility
playBtn.addEventListener("click", checkGuess)

//Hiding "play again" button
playAgainButton.style.visibility = "hidden";


//Listening for Enter key event
guess.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        checkGuess()
    }
})

//Creating function to check guess
function checkGuess() {

    //Storing value guessed by user in variable
    const guessValue = guess.value;

    //Game logic: if value is empty or is less than 0/more than 30
    if (guessValue === '' && randomNumber || guessValue && guessValue > 30 || guessValue && guessValue < 0) {
        result.textContent = 'Please enter a valid number to play' //show this message to user
        animation()

    } else if (guessValue < randomNumber) { //if the number guessed by the user is less than the number stored by the computer,
        attempt.textContent = "Attempt n: " + count; //show number attempt
        result.textContent = "Your guess is too low!"; //tell user guess is too low
        const currentGuessValue = guessValue //store current value in a variable
        if (currentGuessValue === guessValue) { //compare current value to previous value: if same
            count   //don't increment attempt count
        } else {
            count++ //increment attempt count
        }
        animation()
    }
    //else if number guessed by user is more than number stored by computer,
    else if (guessValue > randomNumber) {
        attempt.textContent = "Attempt n: " + count; //show number attempt
        result.textContent = "Your guess is too high!"; //tell user guess is too high
        const currentGuessValue = guessValue //store current value in a variable
        if (currentGuessValue === guessValue) { //compare current value to previous value: if same
            count   //don't increment attempt count
        } else {
            count++ //increment attempt count
        }
        animation()
    } else //else tell user they guessed correctly in n attempts and ask if they want to play again
    {
        attempt.textContent = "Attempt n: " + count; //show number attempt
        result.textContent = "You guessed correctly in " + count + " attempts!";
        paraPlayAgain.textContent = "Do you want to play again?"
        playAgainButton.style.visibility = "visible"; //show button
        playBtn.style.visibility = 'hidden';
    }
}
playAgainButton.addEventListener("click", playAgain)

function animation() { //animation for card
    contents.classList.remove('animation');
    window.requestAnimationFrame(() => {
        contents.classList.add('animation');
    });
}

function playAgain() { //reload the page to play again
    location.reload();
}