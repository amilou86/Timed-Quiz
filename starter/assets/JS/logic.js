// create objects
var startButton = document.getElementById('start')

var time = 75;
var score = 0;

// is this needed? it's declared within select answer function too
timerInterval = setInterval(() => {
}, 1000);

var quizQuestions = questions;

startButton.onclick = startGame


// function to start game
function startGame() {
    console.log("This function is working");

    var startScreen = document.getElementById("start-screen");
    startScreen.classList.add("hide");

    // Show the questions area
    var questionsArea = document.getElementById("questions");
    questionsArea.classList.remove("hide");

    // Start timer
    timerInterval = setInterval(() => {
        time--;
        document.getElementById("time").textContent = ` ${time}`;
        if (time <= 0) {
            endGame();
        }
    }, 1000);

    displayQuestionAndAnswers(currentQuestionIndex);
}

// function to display questions & answers
function displayQuestionAndAnswers(questionIndex) {
    console.log("display Q&A working");
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

// Access the quizQuestions array from the linked file

var currentQuestionIndex = 0;

// function to select answers
function selectAnswer(index = 0) {
    console.log("select answer working");
    var correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

    // check if answer is correct
    var isCorrect = index === correctAnswerIndex;

    // update score and progress based on answer
    if (isCorrect) {
        score++;
    } else {
        // Reduce time by 5 seconds
        time -= 5;
        document.getElementById("time").textContent = ` ${time}`;

        // Check if time has run out
        if (time <= 0) {
            endGame(); // Call function to end the game
        }
    }

    proceedToNextQuestion();
    // if either condition (time runs out or all questions answered/reached end of array) is met, call endGame function

}

// function to proceed to next question
function proceedToNextQuestion() {
    console.log("proceed working");
    currentQuestionIndex++;
    // Check if there is a next question
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestionAndAnswers(currentQuestionIndex);
    } else {
        // If no next question, end the game
        endGame();
    }
}

// function to end game
function endGame() {
    console.log("end game working");
    // stops timer
    clearInterval(timerInterval);

    // clears screen of q&a 
    var questionsArea = document.getElementById("questions");
    questionsArea.innerHTML = " ";

    var questionTitle = document.getElementById("question-title");
    questionTitle.classList.add("hide");

    var choices = document.getElementById("choices");
    choices.classList.add("hide");

    // bring up end-screen div from html
    var endScreen = document.getElementById("end-screen");
    endScreen.classList.remove("hide");

    // populates final-score <p> with final score
    var finalScore = document.getElementById("final-score");
    finalScore.textContent = `Your final score is ${score}`;


    // ask for user initials -
    // reference submit button
    var submitButton = document.getElementById("submit");
    // add event listener to submit button
    submitButton.addEventListener("click", function () {
        // get user initials
        var initialsInput = document.getElementById("initials");
        var userInitials = initialsInput.value;

        // saves scores in local storage
        localStorage.setItem("final-score", score);
        localStorage.setItem("initials", userInitials);

        // redirect to highscore html
        window.location.href = "highScores.html";
    });


}

var clearButton = document.getElementById('clear');

