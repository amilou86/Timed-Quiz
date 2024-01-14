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
        if (time === 0) {
            endGame();
        }
    }, 1000);

    displayQuestionAndAnswers(currentQuestionIndex);
}

// function to display questions & answers
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

// Access the quizQuestions array from the linked file
var quizQuestions = questions.quizQuestions;
var currentQuestionIndex = 0;

// function to select answers
function selectAnswer(index = 0) {
    console.log("select answer working");
    var correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

    // check if answer is correct
    var isCorrect = index === correctAnswerIndex;

    // Get the feedback element
    // var feedbackElement = document.getElementById("feedback");

    // Display feedback based on answer correctness
    // if (isCorrect) {
    //     feedbackElement.textContent = "Correct!";
    //     feedbackElement.classList.remove("wrong");
    //     feedbackElement.classList.add("correct");
    // } else {
    //     feedbackElement.textContent = "Wrong!";
    //     feedbackElement.classList.remove("correct");
    //     feedbackElement.classList.add("wrong");
    // }

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
    // if either conditon (time runs out or all questions answered/reached end of array) is met, call endGame function

}

// function to proceed to next question
function proceedToNextQuestion() {
    console.log("proceed working");
    currentQuestionIndex++;
    displayQuestionAndAnswers(currentQuestionIndex);

    if (time <= 0 || currentQuestionIndex >= quizQuestions.length) {
        endGame();
    }
}

// function to end game
function endGame() {
    console.log("end game working");
    // stops timer
    clearInterval(timerInterval);

    // clears screen of q&a 
    // var questions = document.getElementById("questions");
    // questions.innerHTML = " ";

    // var questionTitle = document.getElementById("question-title");
    // questionTitle.classList.add("hide");

    // var choices = document.getElementById("choices");
    // choices.classList.add("hide");

    // var wrapper = document.getElementsByClassName("wrapper");
    // wrapper.classList.add("hide");


    // bring up end-screen div from html
    var endScreen = document.getElementById("end-screen");
    endScreen

    // populates final-score <p> with final score
    // ask for user initials in 'initial; textbox
    // when submit is clicked, clears screen 
    // goes to highscores ol in other html, which shows prev score saved 
}

// correct README and make sure everything is included before submitting!!!