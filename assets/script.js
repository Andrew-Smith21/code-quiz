
// Defining variables 
var mainEl = document.querySelector("#main");
var startquizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");
var openingpageEl = document.querySelector("#opening-page");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var question5El = document.querySelector("#question5");
var finalScreenEl = document.querySelector("#final-screen");

var timeLeft = 0;


// Function to start the timer
function startTimer() {

    var timeLeft = 75;

    var timeInterval = setInterval(function () {

        timerEl.textContent = "Time:  " + timeLeft;
        timeLeft--;
    }, 1000);

}

// Function to remove home page and show first question
function startQuiz() {

    openingpageEl.style.display = "none";
    question1El.style.display = "flex";

    startTimer();

    question1El.addEventListener("click", questionOne);

    
}

// Fuction to remove q1 and show q2 when q1 is answered
function questionOne(event) {

    question1El.style.display = "none";
    question2El.style.display = "flex";

    var element = event.target; 

    if (element.matches("#btn-q1-a3")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Correct!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);
    }

    else if (element.matches("#btn-q1-a1") || element.matches("#btn-q1-a2") || element.matches("#btn-q1-a4")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Wrong!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

    }

    question2El.addEventListener("click", questionTwo);

}

// Fuction to remove q2 and show q3 when q2 is answered
function questionTwo(event) {

    question2El.style.display = "none";
    question3El.style.display = "flex";

    

    question3El.addEventListener("click", questionThree);

}

// Fuction to remove q3 and show q4 when q3 is answered
function questionThree(event) {

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

function questionFive(event) {

    question5El.style.display = "none";
    finalScreenEl.style.display = "flex";

    // Add storage for initials and high score

}







// Start Quiz Button Click
startquizEl.addEventListener("click", startQuiz);
