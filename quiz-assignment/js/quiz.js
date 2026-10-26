"use strict";

const qa = [
    {
        question: "Who wrote The Hunger Games?",
        answer: "Suzanne Collins"
    },
    {
        question: "Who wrote the Harry Potter series?",
        answer: "J.K. Rowling"
    },
    {
        question: "Who wrote Fourth Wing?",
        answer: "Rebecca Yarros"
    },
    {
        question: "Who wrote Funny Story?",
        answer: "Emily Henry"
    },
    {
        question: "Who wrote It Ends With Us?",
        answer: "Colleen Hoover"
    }
];

let currentQuestion = 0;

document.getElementById("question").innerHTML = qa[currentQuestion].question;

document.getElementById("submit").addEventListener("click", function() {

    const selected = document.querySelector('input[name="option"]:checked');

    if (selected == null) {
        document.getElementById("result").innerHTML = "Please choose an answer.";
        return;
    }

    if (selected.value == qa[currentQuestion].answer) {
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML =
            "Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
    }

    selected.checked = false;

    nextQuestion();

    setTimeout(() => {
        document.getElementById("result").innerHTML = "";
    }, 3000);
});


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < qa.length) {
        document.getElementById("question").innerHTML =
            qa[currentQuestion].question;
    } else {
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").innerHTML =
            "You have completed the quiz.";
        document.getElementById("optionsForm").style.display = "none";
    }
}