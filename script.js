//Computer stores random number between 0 and 30 before game starts
let randomNumber = Math.floor(Math.random() * 30) + 1

//Storing HTML elements into variables to easily use them later + initialising variable for count
const result = document.querySelector(".result")
const title = document.querySelector('.title')
const attempt = document.getElementById("attempt")
const playBtn = document.getElementById("play")
const guess = document.getElementById("guess")
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

const displayResult = (message) => {
    result.textContent = message
}

const displayAttempt = (attemptCount) => {
    attempt.textContent = attemptCount
}

//Creating function to check guess
function checkGuess() {
    //Storing value guessed by user in variable
    const guessValue = guess.value;

    //Game logic: if value is empty or is less than 0/more than 30
    if (guessValue === '' && randomNumber || guessValue && guessValue > 30 || guessValue && guessValue < 0) {
        displayResult('Please enter a valid number to play')
        guess.value = ''
        animation()
    } else if (Number(guessValue) !== randomNumber) {
        const previousValue = (guessValue && guessValue >= 0 || guessValue <= 30 ? getValue() : '')
        sessionStorage.setItem('value', guessValue)
        if (previousValue && guessValue && previousValue === guessValue) { //compare current value to previous value: if same
            displayAttempt(`Attempt n: ${count}`);
            displayResult("Nope, you've already tried that! Keep guessing!")
        } else if (playBtn.style.visibility === "hidden") {
            displayAttempt('')
            displayResult('Hey, that does not count! You have to start a new game :)')
        }
         else {
            displayAttempt(`Attempt n: ${(guessValue && previousValue ? ++count : count)}`);
                displayResult(guessValue > randomNumber ? "Your guess is too high!" : 'Your guess is too low')
        }
        animation()
    } else {
        displayAttempt(`Attempt n: ${count}`);
        guess.value = ''
        displayResult("Congratulations! You guessed correctly in " + count + " attempts! Do you want to play again?");
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

function getValue() {
    return sessionStorage.getItem('value')
}

function playAgain() {
    location.reload();
    sessionStorage.clear()
}