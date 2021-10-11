# Guess-the-number game

## Tech

- HTML, CSS (media queries, animation), JavaScript (sessionStorage, if/else, template literals)

## Project explanation

The user has to guess a random number between 0 and 30. <br />
At launch the game stores in its memory a random number which the user has to guess by submitting a value. <br />
If the value submitted is the same as the random number, a message of congratulations + the request to play again are displayed. <br />
If the value submitted is not the same as the random number, a hint message is displayed to help the user guess correctly. <br />
Every time a value is submitted, the game shows the number of attempts taken to guess correctly. <br />
If no value is submitted, a message asks to submit one and no attempts are stored. <br />
If a value higher than 30 or lower than 0 is submitted, a message asks to enter a valid value. <br />
If the same value is submitted twice or more, a message of "value already tried" is displayed and the number of taken attempts doesn't change - sessionStorage takes care of storing the current and previous value and compare them: if they're the same, the counter doesn't increment. <br />
Once the value equals the random number, the game shows that the user has won in a specific number of attempts and asks if the user wants to play again. <br />

## Nice features

- If the value submitted is wrong, a shake animation is shown.
- The user can play by clicking the play button either with the mouse or the Enter key.
- How to play is either displayed inside the input field or as a subtitle, under the title, depending on the viewport's size.
