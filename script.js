let againBtn = document.querySelector(".again");
let guessNumber = document.querySelector(".number");
let guessValue = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let msg = document.querySelector(".message");
let gameScore = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let score = 20;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);




//  Functionality for check button
checkBtn.addEventListener("click", () => {
    // 1. want input value in input format
    let val = Number(guessValue.value);
    // 2. check input field is empty or not
    if (!val) {
// 2.1 show msg enter a number
    msg.textContent = "Enter a Value";
}// 3. if random number === input number
else if (randomNumber === val) {
// 3.1 change bg color to green
document.body.style.backgroundColor = "green";
// 3.2 show randomNumber in place of ?
guessNumber.textContent = randomNumber;
// 3.3 update highscore if score is greater than highscore
if (score > highscore.textContent) {
// 3.3.1 update the dom
highscore.textContent = score;

}
// 3.4 update msg to correct number
msg.textContent = "Correct Guess!";
}
// 4 id guessvalue is less than random number
else if(val<randomNumber) {
// 4.1 decrement the score by 1
score--;
// 4.2 update the score in html
gameScore.textContent = score;
// 4.3 show msg too low
msg.textContent = "Too Low!";
}
// 5 id guessvalue is greater than random number
else if(val > randonNumber) {
// 5.1 decrement the score by 1
score--;
// 5.2 update the score in html
gameScore.textContent = score;
// 5.3 show msg too high 
msg.textContent = "Too High!";
}
// Functionality for again button
checkBtn.addEventListener("click", () => {
 // 1. Change bg color of body to #222
document.body.style.backgroundColor = "#222";
 // 2. change the value of guessnumber to ?
 guessNumber.textContent = "?";
 // 3. change msg to start guessing
 msg.textContent = "Start Guessing...";
 // 4. change the score value to 20
 score = 20;
 // 5. update the score in game score in html
 gameScore.textContent = score;
 // 6. generate a new random number
 randomNumber = Math.trunc(Math.random() * 20) + 1;
 console.log(randomNumber);
});
});
