//Computer stores random number between 0 and 30 before game starts
let randomNumber = Math.floor(Math.random() * 30) + 1

//Storing HTML elements into variables to easily use them later + initialising variable for count
let result = document.querySelector(".result")
let attempt = document.getElementById("attempt")
let button = document.getElementById("button")
let guess = document.getElementById("guess")
let count = 1