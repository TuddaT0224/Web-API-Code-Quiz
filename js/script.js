// imput all of the HTML elements
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var quizForm = document.getElementById("quiz");
var startQuiz = document.getElementById("startpage");
var startQuizButton = document.getElementById("startbtn");
var quizTimer = document.getElementById("timer");
var resultsEl = document.getElementById("result");
var quizOver = document.getElementById("quizover");
var totalScoreEl = document.getElementById("totalscore");
var highscoreInputName = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreContainer = document.getElementById("highscoreContainer");
var highScore = document.getElementById("high-scorePage");
var endquiz = document.getElementById("endQuizBtns");
var highscoreDisplayScore = document.getElementById("highscore-score");
var highscoreDisplayName = document.getElementById("highscore-initials");
var questionsEl = document.getElementById("questions");

// Quiz Questions
var quizQuestions = [{
    question: "What is the purpose of the 'typeof' operator in JavaScript?",
    choiceA: "To determine the data type of a value",
    choiceB: "To compare two values",
    choiceC: "To loop over an array",
    choiceD: "To declare a variable",
    correctAnswer: "a"},
 {
    question: "Which of the following is NOT a valid JavaScript data type?",
    choiceA: "String",
    choiceB: "Boolean",
    choiceC: "Undefined",
    choiceD: "Float",
    correctAnswer: "d"},
 {
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    choiceA: "'Null' represents an empty or non-existent value, while 'undefined' indicates a variable that has been declared but not assigned a value",
    choiceB: "They are synonyms and can be used interchangeably",
    choiceC: "'Null' is a keyword in JavaScript, while 'undefined' is a built-in function",
    choiceD: "'Null' is used to represent numbers, while 'undefined' is used for strings",
    correctAnswer: "a"},
 {
    question: "Which keyword is used to declare a function in JavaScript?",
    choiceA: "method",
    choiceB: "func",
    choiceC: "def",
    choiceD: "function",
    correctAnswer: "d"},
 {
    question: "Which keyword is used to break out of a loop in JavaScript?",
    choiceA: "stop",
    choiceB: "exit",
    choiceC: "break",
    choiceD: "end",
    correctAnswer: "c"},
 {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"},
 {
    question: "What is the purpose of the 'querySelector' method in JavaScript?",
    choiceA: "To select and retrieve elements from the DOM using a CSS selector",
    choiceB: "To create a new HTML element",
    choiceC: "To perform arithmetic operations",
    choiceD: "To define a new JavaScript function",
    correctAnswer: "a"},
];
 
// global variables
var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

// This will cycle through the object array containing the questions and generate the questions and answers.
function generateQuizQuestion(){
    quizOver.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "<p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start quiz function starts the timer, then it will hide the start button and display first question.
function startQuiz(){
    quizOver.style.display = "none";
    startQuiz.style.display = "none";
    generateQuizQuestion();

    // function for timer
    timerInterval = setInterval(function() {
        timeLeft--;
        quizTimer.textContent = "Time left: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            showScore();
        }
    }, 1000);
    quizForm.style.display = "block";
}

// This function will display your score after completing the quiz or running out of time.
function showScore(){
    quizForm.style.display = "none";
    quizOver.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    totalScoreEl.innerHTML = "You got " + score + "out of " + quizQuestions.length + " correct!";
}




    