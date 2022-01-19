
var questionActiveNumber;
var activeQuestion;
var question;
var answer;
var choices;
var choice = -1;
var timer;
var questionsDone = [];
var duration = 300;
var minutes;
var seconds;
var timeLeft;
var score;
var scores = document.querySelector("aside")
var title = document.querySelector("#title");
var answers = document.querySelector("#questions");
var time = document.querySelector("#timer");
var main = document.querySelector("main");

document.getElementById("startGame").addEventListener("click", function () {
    quiz();
});

document.getElementById("showHighScores").addEventListener("click", function(){
    scores.classList.toggle("hidden")
});

for (var i = 0; i <= 3; i++) {
    answers.childNodes[i].addEventListener("click", function () {
        choice = i;
        console.log(choice);
    });
}

function timerRun() {
    timer = duration;
    clearInterval(timeLeft);
    timeLeft = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        time.textContent = minutes + ":" + seconds;

        timer--;
        
        if (timer <= 0) {
        clearInterval(timeLeft);
        return;
    } else if (questionsDone.length === questions.length) {
        clearInterval(timeLeft);
        return;
    }
    }, 1000);


}

function quiz() {

    timerRun();

    if (main.classList == "hidden") {
        main.classList.toggle("hidden");
    }

    questionActiveNumber = Math.floor(Math.random() * questions.length);

    while (timer > 0 && questionsDone.length < questions.length) {

        if (questionsDone.includes(questionActiveNumber)) {
            activeQuestion = questions[questionActiveNumber];

            question = activeQuestion.title;

            console.log(questionActiveNumber);


            console.log(question);

            title.textContent = question;

            choices = activeQuestion.choices;

            console.log(choices);

            for (let i = 0; i < 4; i++) {
                answers.children[i].textContent = choices[i];
            }
        }


        if (choice === -1) {

        } else {

            questionsDone.push(questionActiveNumber);

            while (questionsDone.includes(questionActiveNumber)) {

                questionActiveNumber = Math.floor(Math.random() * questions.length);

                if (questionsDone.length === questions.length) {
                    break;
                }
            }

        }

    }

    // if (main.classList != "hidden") {
    //     main.classList.toggle("hidden");
    // }




    if (timer === 0) {
        console.log("You're score is" + score + ".");
        return;

    }
    else if (questionsDone.length === questions.length) {
        console.log("You're score is" + score + ".")
        return;
    }

    console.log(questionsDone.length);
}


