// create objects
var startButton = document.getElementById('start')


// create method to start game 
// startButton.addEventListener('click', startGame)
// startButton.classList.add('hide')
// questions.classList.remove('hide')

var time = 75;

// functions needed
function startGame() {
    console.log("This function is working")
    //clear the text content of the start-screen section

    var startScreenDiv = document.getElementById("start-screen");
    startScreenDiv.innerHTML = "";

    //start timer
    // setInterval(() => {
    //     time--;
    //     document.getElementById("timer").textContent = `Time: ${time}`;
    //     if (time === 0) {
    //         endGame();
    //     }
    // }, 1000);

    //call displayquestion function

    // displayQuestion();
}
function displayQuestion() {
    var questions = document.getElementById('questions')
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    questions.textContent = currentQuestion.question;

    questions.innerHTML = " ";

    currentQuestion.answers.forEach((answer, index) => {
        var answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.addEventListener("click", () => {
            checkAnswer(index);
        });
        questions.appendChild(answerButton);
    });




    function nextQuestion() {

    }

    function selectAnswer() {

    }
    var startButton = document.getElementById("start")
}
startButton.onclick = startGame