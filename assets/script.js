// Defining variables 
var mainEl = document.querySelector("#main");
var startquizEl = document.querySelector("#start-quiz");
var timerEl = document.querySelector("#timer");

// Varibles to use for showing and hiding quiz questions, first and last pages
var openingpageEl = document.querySelector("#opening-page");
var question1El = document.querySelector("#question1");
var question2El = document.querySelector("#question2");
var question3El = document.querySelector("#question3");
var question4El = document.querySelector("#question4");
var question5El = document.querySelector("#question5");
var finalScreenEl = document.querySelector("#final-screen");
var submitButtonEl = document.querySelector(".initial-button");

var question1answer1El = document.querySelector("#btn-q1-a1");
var question1answer2El = document.querySelector("#btn-q1-a2");
var question1answer4El = document.querySelector("#btn-q1-a4");

var question2answer1El = document.querySelector("#btn-q2-a1");
var question2answer2El = document.querySelector("#btn-q2-a2");
var question2answer4El = document.querySelector("#btn-q2-a4");

var question3answer1El = document.querySelector("#btn-q3-a1");
var question3answer2El = document.querySelector("#btn-q3-a2");
var question3answer3El = document.querySelector("#btn-q3-a3");

var question4answer1El = document.querySelector("#btn-q4-a1");
var question4answer2El = document.querySelector("#btn-q4-a2");
var question4answer4El = document.querySelector("#btn-q4-a4");

var question5answer1El = document.querySelector("#btn-q5-a1");
var question5answer2El = document.querySelector("#btn-q5-a2");
var question5answer3El = document.querySelector("#btn-q5-a3");



var timeLeft = 0;

// Function to start the timer
function startTimer() {

    var timeLeft = 75;

    question1answer1El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question1answer2El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question1answer4El.addEventListener("click", function() {timeLeft = timeLeft - 10;});

    question2answer1El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question2answer2El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question2answer4El.addEventListener("click", function() {timeLeft = timeLeft - 10;});

    question3answer1El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question3answer2El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question3answer3El.addEventListener("click", function() {timeLeft = timeLeft - 10;});

    question4answer1El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question4answer2El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question4answer4El.addEventListener("click", function() {timeLeft = timeLeft - 10;});

    question5answer1El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question5answer2El.addEventListener("click", function() {timeLeft = timeLeft - 10;});
    question5answer3El.addEventListener("click", function() {timeLeft = timeLeft - 10;});

    var timeInterval = setInterval(function () {

        if (timeLeft >= 0) {
            timerEl.textContent = "Time:  " + timeLeft;
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            question1El.style.display = "none";
            question2El.style.display = "none";
            question3El.style.display = "none";
            question4El.style.display = "none";
            question5El.style.display = "none";
            finalScreenEl.style.display = "flex";
        }

        if (finalScreenEl.style.display === "flex") {

            clearInterval(timeInterval);
            timerEl.textContent = timeLeft;
        }

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

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    else if (element.matches("#btn-q1-a1") || element.matches("#btn-q1-a2") || element.matches("#btn-q1-a4")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Wrong!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    question2El.addEventListener("click", questionTwo);

}

// Fuction to remove q2 and show q3 when q2 is answered
function questionTwo(event) {

    question2El.style.display = "none";
    question3El.style.display = "flex";

    var element = event.target; 

    if (element.matches("#btn-q2-a3")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Correct!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    else if (element.matches("#btn-q2-a1") || element.matches("#btn-q2-a2") || element.matches("#btn-q2-a4")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Wrong!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    question3El.addEventListener("click", questionThree);

}

// Fuction to remove q3 and show q4 when q3 is answered
function questionThree(event) {

    question3El.style.display = "none";
    question4El.style.display = "flex";

    var element = event.target; 

    if (element.matches("#btn-q3-a4")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Correct!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    else if (element.matches("#btn-q3-a1") || element.matches("#btn-q3-a2") || element.matches("#btn-q3-a3")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Wrong!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);

    }

    question4El.addEventListener("click", questionFour);

}

// Fuction to remove q4 and show q5 when q4 is answered
function questionFour(event) {

    question4El.style.display = "none";
    question5El.style.display = "flex";

    var element = event.target; 

    var element = event.target; 

    if (element.matches("#btn-q4-a3")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Correct!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    else if (element.matches("#btn-q4-a1") || element.matches("#btn-q4-a2") || element.matches("#btn-q4-a4")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Wrong!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);

    }

    question5El.addEventListener("click", questionFive);
}

function questionFive(event) {

    question5El.style.display = "none";
    finalScreenEl.style.display = "flex";

    var element = event.target; 

    if (element.matches("#btn-q5-a4")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Correct!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    else if (element.matches("#btn-q5-a1") || element.matches("#btn-q5-a2") || element.matches("#btn-q5-a3")) {

        var correctEl = document.createElement("div");
        var correctTextEl = document.createElement("p");
        correctTextEl.textContent = "Wrong!"
        correctEl.setAttribute("class", "correct");
        
        correctEl.appendChild(correctTextEl);
        mainEl.appendChild(correctEl);

        setTimeout(function() {

            correctEl.style.display = "none";
        }, 2000);
    }

    
    submitButtonEl.addEventListener("click", saveHighscore);
}

function saveHighscore() {

    var initials = document.querySelector("#initials");
    var timeLeft = document.querySelector("#timer");

    var highScore = {

        intials: initials.value,
        score: timeLeft.textContent
    };

    localStorage.setItem("highScore", JSON.stringify(highScore));
}

// Start Quiz Button Click
startquizEl.addEventListener("click", startQuiz);