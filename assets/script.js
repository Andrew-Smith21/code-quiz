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

// Variables for 10 second penalty event listener
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

// Timer variable declared globally
var timeLeft = 0;

// Function to start the timer
function startTimer() {

    // Starting quiz time is 75 seconds
    var timeLeft = 75;

    // When any of these wrong answers are clicked, 10 seconds taken off clock
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

    // Timer that counts down from 75 to 0 and skips to the last page when clock hits 0
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

// Starts the quiz
function startQuiz() {

    // Hides the opening page and shows the first question
    openingpageEl.style.display = "none";
    question1El.style.display = "flex";

    // Starts the countdown from 75
    startTimer();

    // Moves to next question when user clicks an answer
    question1El.addEventListener("click", questionOne);
}

// Starts when first question is answered
function questionOne(event) {

    // Hides first question and shows second question
    question1El.style.display = "none";
    question2El.style.display = "flex";

    // Finds which answer the user clicked
    var element = event.target; 

    // Displays Correct or Wrong depending on answer that disappears after 2 seconds
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

    // Moves to next question when user clicks an answer
    question2El.addEventListener("click", questionTwo);

}

// Starts when second question is answered
function questionTwo(event) {

    // Hides second question and shows third question
    question2El.style.display = "none";
    question3El.style.display = "flex";

    // Finds which answer the user clicked
    var element = event.target; 

    // Displays Correct or Wrong depending on answer that disappears after 2 seconds
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

    // Moves to next question when user clicks an answer
    question3El.addEventListener("click", questionThree);

}

// Starts when third question is answered
function questionThree(event) {

    // Hides third question and shows fourth question
    question3El.style.display = "none";
    question4El.style.display = "flex";

    // Finds which answer the user clicked
    var element = event.target; 

    // Displays Correct or Wrong depending on what user clicked that disappears after 2 seconds
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

    // Moves onto next question when user clicks an answer
    question4El.addEventListener("click", questionFour);

}

// Starts when user answers fourth question
function questionFour(event) {

    // Hides fourth question and shows fifth question 
    question4El.style.display = "none";
    question5El.style.display = "flex";

    // Finds which answer the user clicked
    var element = event.target; 

    // Dispalys Correct or Wrong depending on which answer is clicked that disappears after 2 seconds
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

    // Moves onto next question when user clicks an answer
    question5El.addEventListener("click", questionFive);
}

// Starts when user answers fifth question
function questionFive(event) {

    // Hides fifth question and shows final screen
    question5El.style.display = "none";
    finalScreenEl.style.display = "flex";

    // Finds which answer the user clicked
    var element = event.target; 

    // Displays Correct or Wrong depending on which answer was clicked that disappears after 2 seconds
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

    // Saves highscore to local storage when submit button is clicked
    submitButtonEl.addEventListener("click", saveHighscore);
}

// Saves highScore object to local storage
function saveHighscore() {

    // Variables for highScore object
    var initials = document.querySelector("#initials");
    var timeLeft = document.querySelector("#timer");

    var highScore = {

        intials: initials.value,
        score: timeLeft.textContent
    };

    // Saves highScore object to local storage
    localStorage.setItem("highScore", JSON.stringify(highScore));
}

// Start Quiz Button Click
startquizEl.addEventListener("click", startQuiz);