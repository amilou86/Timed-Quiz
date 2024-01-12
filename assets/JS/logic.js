// create objects
var startButton = document.getElementById('start')
var questionContainer = document.getElementById('questions')

// create method to start game 
startButton.addEventListener('click', startGame)
startButton.classList.add('hide')
questionContainer.classList.remove('hide')

var timeRemaining = 60;

// functions needed
function startGame() {
    timer = setInterval(() => {
        timeRemaining--;
        document.getElementById("timer").textContent = `Time: ${timeRemaining}`;
        if (timeRemaining === 0) {
            endGame();
        }
    }, 1000);

}

function nextQuestion() {

}

function selectAnswer() {

}