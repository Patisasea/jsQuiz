
var questionActive;
var question;
var answer;
var choices;
var choice;
var timer;
var questionsDone = [];
var duration = 300;
var minutes;
var seconds;
var title = document.querySelector(title);
var answer_1 = document.querySelector(".answer_1");
var answer_2 = document.querySelector(".answer_2");
var answer_3 = document.querySelector(".answer_3");
var answer_4 = document.querySelector(".answer_4");
var time = document.querySelector("#timer");

document.getElementById("startGame").addEventListener("click", function () {
    quiz();
});


function timerRun() {
    timer = duration;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.textContent = minutes + ":" + seconds;

        --timer;
    }, 1000);

}

function quiz() {

    timerRun();

    questionActive = Math.floor(Math.random() * questions.length);

    while (timer > 0 && questionsDone.length < questions.length) {


        question = questions[questionActive];

        title = questions.title;

        console.log(questionActive);

        questionsDone.push(questionActive);

        console.log(question.title);

        choices = question.choices;

        console.log(choices);

        while (questionsDone.includes(questionActive)) {

            questionActive = Math.floor(Math.random() * questions.length);

            if (questionsDone.length == questions.length) {
                break;
            }
        }
    }


    console.log(questionsDone.length);
}


