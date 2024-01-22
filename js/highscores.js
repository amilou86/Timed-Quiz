
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
console.log(key)
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
