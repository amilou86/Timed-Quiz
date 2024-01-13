// create objects
var startButton = document.getElementById('start')

var time = 75;

var score = 0;

var quizQuestions = questions;

function displayQuestionAndAnswers(questionIndex) {
    var question = questions[questionIndex];
    var questionText = question.question;
    var answerChoices = question.answers;

    // Get references to the HTML elements
    var questionTitleElement = document.getElementById("question-title");
    var choicesContainer = document.getElementById("choices");

    // Clear any existing content
    questionTitleElement.textContent = "";
    choicesContainer.innerHTML = "";

    // Display the question
    questionTitleElement.textContent = questionText;

    // Create and append answer choices as list of buttons
    answerChoices.forEach((answer, index) => {
        var answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.id = `choice-${index}`;

        // Add event listener for button clicks
        answerButton.addEventListener("click", () => {
            selectAnswer(index); // Call your function to handle answer selection
        });

        choicesContainer.appendChild(answerButton);
    });
}

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
// Assuming the array is named "quizQuestions" in questions.js  
var quizQuestions = questions.quizQuestions;

var currentQuestionIndex = 0;

function startQuiz() {
    // Hide the start screen
    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");

    // Show the questions area
    var questionsArea = document.getElementById("questions");
    questionsArea.classList.remove("hide");

    // Display the first question
    displayQuestionAndAnswers(currentQuestionIndex);
    console.log(quizQuestions)
}

function selectAnswer(index = 0) {
    var correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

    // check if answer is correct
    var isCorrect = index === correctAnswerIndex;

    // Get the feedback element
    var feedbackElement = document.getElementById("feedback");

    // Display feedback based on answer correctness
    if (isCorrect) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.remove("wrong");
        feedbackElement.classList.add("correct");
    } else {
        feedbackElement.textContent = "Wrong!";
        feedbackElement.classList.remove("correct");
        feedbackElement.classList.add("wrong");
    }

    // update score and progress based on answer
    if (isCorrect) {
        score++;
    } else {
        // Reduce time by 5 seconds
        time -= 5;
        document.getElementById("time").textContent = ` ${time}`;

        // Check if time has run out
        // if (time <= 0) {
        //     endGame(); // Call your function to end the game
        // }
    }

    proceedToNextQuestion();

}

function proceedToNextQuestion() {
    currentQuestionIndex++;
    displayQuestionAndAnswers(currentQuestionIndex);
}


// var startButton = document.getElementById("start")


startButton.onclick = startGame

// correct README and make sure everything is included before submitting!!!