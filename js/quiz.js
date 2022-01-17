
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

    }, 1000);

}

function quiz() {

    timerRun();

    questionActive = Math.floor(Math.random() * questions.length);

    while (timer > 0 && questionsDone.length < questions.length) {


        question = questions[questionActive];

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


