document.addEventListener("DOMContentLoaded", function () {
    // create objects
    var startButton = document.getElementById('start')
    startButton.onclick = startGame

    var time = 75;
    var score = 0;

    // is this needed? it's declared within select answer function too
    timerInterval = setInterval(() => {
    }, 1000);

    var quizQuestions = questions;

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

    var correctSound = new Audio('assets/sfx/correct.wav');
    correctSound.preload = "auto";
    var wrongSound = new Audio('assets/sfx/incorrect.wav');
    wrongSound.preload = "auto";

    // function to select answers
    function selectAnswer(index = 0) {
        console.log("select answer working");
        var correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

        // check if answer is correct
        var isCorrect = index === correctAnswerIndex;

        // update score and progress based on answer & play sound
        if (isCorrect) {
            score++;
            correctSound.play();
        } else {
            // Reduce time by 5 seconds
            time -= 5;
            document.getElementById("time").textContent = ` ${time}`;

            // Play wrong sound
            wrongSound.play();

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

        // Get references to the HTML elements
        var questionsArea = document.getElementById("questions");
        var questionTitle = document.getElementById("question-title");
        var choices = document.getElementById("choices");
        var endScreen = document.getElementById("end-screen");

        // Check if the elements exist before trying to manipulate them
        if (questionsArea && questionTitle && choices && endScreen) {
            // clears screen of q&a 
            questionsArea.innerHTML = "";
            questionTitle.classList.add("hide");
            choices.classList.add("hide");

            // bring up end-screen div from html
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

                // save scores in local storage
                localStorage.setItem("final-score", score);
                localStorage.setItem("initials", userInitials);

                // Display high scores and clear screen
                displayHighScores();

            });
        } else {
            console.error("One or more elements not found");
        }
    }

    // get reference to HTML elements
    var savedScores = document.querySelector("#saved-scores");
    var highScores = document.querySelector("#highscores");


    function displayHighScores() {
        // fetch data from localstorage
        var storedInitials = localStorage.getItem("initials");
        var storedScore = localStorage.getItem("final-score");

        // get reference to HTML elements
        var savedScores = document.querySelector("#saved-scores");
        var highScores = document.querySelector("#highscores");
        var goBackButton = document.getElementById("go-back"); // Add this line
        var clearButton = document.getElementById("clear"); // Add this line

        // clear existing scores from ol
        highScores.innerHTML = "";

        // for loop to show each high score
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);

            // make sure key is related to scores
            if (key.startsWith("score_")) {
                var storedInitials = key.substring("score_".length);
                var storedScore = localStorage.getItem(key);

                // create new li for each new score
                var li = document.createElement("li");
                li.textContent = `${storedInitials}: ${storedScore}`;

                // append li to ol
                highScores.appendChild(li);
            }
        }

        // event listeners for go back and clear buttons
        goBackButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });

        clearButton.addEventListener("click", function () {
            highScores.classList.add("hide");

        });
    }


});