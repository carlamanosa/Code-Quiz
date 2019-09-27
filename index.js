const start = document.getElementById("start-page");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");

const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("storeContainer");

// Timer
const timeGauge = document.getElementById("timeGauge");
const gaugeWidth = 150;
const questionTime = 10;
let count = 0;
const gaugeProgressBar = gaugeWidth/questionTime;

// Choices
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

let finalQuestion = questions.length - 1;
let runningQuestion = 0

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>" + q.question + "<p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

// runningQuestion = 0;
// renderQuestion()

// runningQuestion++
// renderQuestion()

// Progress Bar

function progressRender() {
    for(let qIndex = 0; qIndex <= finalQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// Start Quiz

start.addEventListener("click", startQuiz);

let TIMER
function startQuiz() {
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    renderQuestion();
    quiz.style.display = "block";

}

function answerCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "yellow";
}

function answerWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "purple";
}

function counterRender() {
    if( count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressBar * count + "px";
        count++;
    }
    else{
        count = 0;
        answerIsWrong();
        if( runningQuestion < finalQuestion) {
            runningQuestion++;
            renderQuestion();
        } else{
            clearInterval(TIMER);
            scoreRender();
        }

    }
}

function checkAnswer(answer) {
    if(questions[runningQuestion].correct == answer) {
        score++;
        answerCorrect();
    } else{
        answerWrong();
    }
    if(runningQuestion < finalQuestion) {
        count = 0;
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
    }
}



