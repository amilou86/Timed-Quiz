// create objects
var startButton = document.getElementById('start-button')
var questionContainer = document.getElementById('question-container')

// create method to start game 
startButton.addEventListener('click', startGame)
console.log('Started')
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