
// Defining variables 
var startquizEl = document.querySelector("#start-quiz");
var openingpageEl = document.querySelector("#opening-page");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var question5El = document.querySelector("#question5");
var finalScreenEl = document.querySelector("#final-screen");

// Function to remove home page and show first question
function startQuiz() {

    openingpageEl.style.display = "none";
    question1El.style.display = "flex";

    question1El.addEventListener("click", questionOne);

}

// Fuction to remove q1 and show q2 when q1 is answered
function questionOne() {

    question1El.style.display = "none";
    question2El.style.display = "flex";

    question2El.addEventListener("click", questionTwo);

}

// Fuction to remove q2 and show q3 when q2 is answered
function questionTwo() {

    question2El.style.display = "none";
    question3El.style.display = "flex";

    question3El.addEventListener("click", questionThree);

}

// Fuction to remove q3 and show q4 when q3 is answered
function questionThree() {

    question3El.style.display = "none";
    question4El.style.display = "flex";

    question4El.addEventListener("click", questionFour);

}

// Fuction to remove q4 and show q5 when q4 is answered
function questionFour() {

    question4El.style.display = "none";
    question5El.style.display = "flex";

    question5El.addEventListener("click", questionFive);

}

function questionFive() {

    question5El.style.display = "none";
    finalScreenEl.style.display = "flex";

    // Add storage for initials and high score

}







// Start Quiz Button Click
startquizEl.addEventListener("click", startQuiz);
