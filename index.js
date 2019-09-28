// Elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const questionID = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("score");
const choices = document.getElementsByClassName("choice");

let currentQ = 0;


// Questions
let questions = [
    {
        question: "How do we reference a class on css?",
        choicesArr: [".", "#", "?", "!"],
        correct: ".",
    }, {
        question: "To make our webpage neutral before we add or make changes, what document should we always add first?",
        choicesArr: ["html", "css", "reset.css", "javascript"],
        correct: "reset.css",
    }, {
        question: "What do we use to program the behavior of a web page?",
        choicesArr: ["javascript", "html", "css", "VS Code"],
        correct: "javascript",
    }, {
        question: "What the first term in an array?",
        choicesArr: ["Index 2", "Index 1", "Index 0", "Index 3"],
        correct: "Index 0",
    }, {
        question: "What is the third term in an array?",
        choicesArr: ["Index 3", "Index 1", "Index 0", "Index 2"],
        correct: "Index 2",
    }, {
        question: "What kind of data type consists of true or false values?",
        choicesArr: ["Boolean", "String", "if", "else"],
        correct: "Boolean",
    }

]

const finalQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
    let q = Math.floor(Math.random * questions.length)
    if(currentQ < questions.length){
        questionID.innerHTML = "<p>" + questions[currentQ].question + "<p>";
        choiceA.innerHTML = questions[currentQ].choicesArr[0];
        choiceA.setAttribute("value",questions[currentQ].choicesArr[0])
        choiceB.innerHTML = questions[currentQ].choicesArr[1];
        choiceB.setAttribute("value",questions[currentQ].choicesArr[1])
        choiceC.innerHTML = questions[currentQ].choicesArr[2];
        choiceC.setAttribute("value",questions[currentQ].choicesArr[2])
        choiceD.innerHTML = questions[currentQ].choicesArr[3];
        choiceD.setAttribute("value",questions[currentQ].choicesArr[3])
    }
    currentQ++;

}

// Start Quiz
for (var i = 0; i < choices.length; i++) {
    choices[i].onclick = checkAnswer;
}
start.onclick = startQuiz;


function startQuiz() {
    console.log("clicked start")
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    progressRender();
    counterRender();
    TIMER = setInterval(counterRender, 1000);
    

}

function progressRender() {
    for (let qIndex = 0; qIndex <= finalQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function counterRender() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = gaugeUnit * count + "px";
        count++;
    }
    else {
        count = 0;
        answerWrong();
        if (runningQuestion < finalQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }

    }
}

function checkAnswer(event) {
    console.log("bruh");
    var answer = event.target.value;
    console.log(answer);
    if (questions[runningQuestion].correct === answer) {
        score++;
        answerCorrect();
    } else {
        answerWrong();
    }
    if (runningQuestion < finalQuestion) {
        count = 0;
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
    }
}

function answerCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "yellow";
}

function answerWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "purple";
}


function scoreRender() {
    scoreContainer.style.display = "block";
    const scorePercent = Math.round(100 * score / questions.length);

}



