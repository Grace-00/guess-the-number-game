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


let count = 1 //starting counter for attempts

window.addEventListener('resize', () => {
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
    let guessValue = document.getElementById("guess").value;

    //result.classList.add('transition')

    //Game logic: if the number guessed by the user is less than the number stored by the computer,
    if (guessValue === '' && randomNumber || guessValue && guessValue > 30 || guessValue && guessValue < 0) {
        result.textContent = 'Please insert a valid number to play'
    } else if (guessValue < randomNumber) {
        attempt.textContent = "Attempt n: " + count; //show number attempt
        result.textContent = "Your guess is too low!"; //tell user guess is too low
        count++ //increment attempt count

    }
    //else if number guessed by user is more than number stored by computer,
    else if (guessValue > randomNumber) {
        attempt.textContent = "Attempt n: " + count; //show number attempt
        result.textContent = "Your guess is too high!"; //tell user guess is too high
        count++ //increment attempt count
    } else //else tell user they guessed correctly in n attempts and ask if they want to play again
    {
        attempt.textContent = "Attempt n: " + count; //show number attempt
        result.textContent = "You guessed correctly in " + count++ + " attempts!";
        paraPlayAgain.textContent = "Do you want to play again?"
        playAgainButton.style.visibility = "visible"; //show button
        button.style.visibility = 'hidden';
    }
}
playAgainButton.addEventListener("click", playAgain)

function playAgain() { //reload the page to play again
    location.reload();
}