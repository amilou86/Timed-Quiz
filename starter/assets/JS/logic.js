// create objects
var startButton = document.getElementById('start')


var time = 75;

function displayQuestionAndAnswers(questionIndex) {
    const question = questions[questionIndex];
    const questionText = question.question;
    const answerChoices = question.answers;

    // Get references to the HTML elements
    const questionTitleElement = document.getElementById("question-title");
    const choicesContainer = document.getElementById("choices");

    // Clear any existing content
    questionTitleElement.textContent = "";
    choicesContainer.innerHTML = "";

    // Display the question
    questionTitleElement.textContent = questionText;

    // Create and append answer choices as list of buttons
    answerChoices.forEach((answer, index) => {
        const answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.id = `choice-${index}`;

        // Add event listener for button clicks
        answerButton.addEventListener("click", () => {
            selectAnswer(index); // Call your function to handle answer selection
        });

        choicesContainer.appendChild(answerButton);
    });
}

// functions needed
function startGame() {
    console.log("This function is working");

    // Clear the start screen
    var startScreenDiv = document.getElementById("start-screen");
    startScreenDiv.innerHTML = "";

    // Start timer
    setInterval(() => {
        time--;
        document.getElementById("time").textContent = ` ${time}`;
        if (time === 0) {
            endGame();
        }
    }, 1000);

    startQuiz();
}


// Access the quizQuestions array from the linked file
const quizQuestions = questions.quizQuestions; // Assuming the array is named "quizQuestions" in questions.js

var currentQuestionIndex = 0;


function startQuiz() {
    // Hide the start screen
    const startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");

    // Show the questions area
    const questionsArea = document.getElementById("questions");
    questionsArea.classList.remove("hide");

    // Display the first question
    displayQuestionAndAnswers(currentQuestionIndex);
}


function nextQuestion() {

}

function selectAnswer() {

}
var startButton = document.getElementById("start")


startButton.onclick = startGame

// correct README and make sure everything is included before submitting!!!