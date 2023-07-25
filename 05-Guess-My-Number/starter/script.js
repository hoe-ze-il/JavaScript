'use strict';

// document.querySelector('.score').textContent = 19;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // When there is no input
        if (!guess) {
            // document.querySelector('.message').textContent = 'No Number!';
            displayMessage('No Number');
        
        // When player win!
        } else if (guess === secretNumber) {
            // document.querySelector('.message').textContent = 'Correct!';
            displayMessage('Correct')

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        // When guess > secretNumber
        } else if (guess > secretNumber) {
            if (score > 1) {
                // document.querySelector('.message').textContent = 'Too Hight';
                displayMessage('Too Hight!')
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = 'You Lost The Game!';
                displayMessage('You lost the game!')
                document.querySelector('.score').textContent = 0;
            }

        } else if (guess < secretNumber) {
            if (score > 1) {
                // document.querySelector('.message').textContent = 'Too Low';
                displayMessage('Too Low!')
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = 'You Lost The Game!';
                displayMessage('You lost the game!')
                document.querySelector('.score').textContent = 0;
            }
        }
    }
);

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });