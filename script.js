//Computer stores random number between 0 and 30 before game starts
let randomNumber = Math.floor(Math.random() * 30) + 1

//Storing HTML elements into variables to easily use them later + initialising variable for count
let result = document.querySelector(".result")
let attempt = document.getElementById("attempt")
let button = document.getElementById("button")
let guess = document.getElementById("guess")
let count = 1

//Listening for event "click" on submit and linking it to function to check guess
button.addEventListener("click", checkGuess)

//Creating function to check guess
function checkGuess() {
    //Storing value guessed by user in variable
    let guessValue = document.getElementById("guess").value;

    //Game logic: if the number guessed by the user is less than the number stored by the computer,
    if (guessValue < randomNumber) {
        attempt.innerHTML = "Attempt n: " + count //show number attempt
        result.innerHTML = "Your guess is too low"; //tell user guess is too low
        count++ //increment attempt count
     } //else if number guessed by user is more than number stored by computer,
     else if (guessValue > randomNumber) {
        attempt.innerHTML = "Attempt n: " + count //show number attempt
        result.innerHTML = "Your guess is too high"; //tell user guess is too high
        count++ //increment attempt count
     } else //else tell user they guessed correctly in n attempts
     {
        attempt.innerHTML = "Attempt n: " + count //show number attempt
        result.innerHTML = "You guessed correctly in " + count++ + "attempts";
    }
}