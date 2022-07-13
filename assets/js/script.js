
const questions = [{
    i: 0,
    question: "1/4. What is the most populous and most visited city in Switzerland?",
    answer: [
        { text: "Geneva", isCorrect: false },
        { text: "Zurich", isCorrect: true },
        { text: "Bern", isCorrect: false }

    ]

},
{
    i: 1,
    question: "2/4. What is the most populous and most visited city in France?",
    answer: [
        { text: "Nantes", isCorrect: false, isSelected: false },
        { text: "Paris", isCorrect: true },
        { text: "Lyon", isCorrect: false }

    ]

},
{
    i: 2,
    question: "3/4. What is the most populous and most visited city in Germany?",
    answer: [
        { text: "Aach", isCorrect: false },
        { text: "Hamburg", isCorrect: true },
        { text: "Calw", isCorrect: false }

    ]

},
{
    i: 3,
    question: "4/4. What is the most populous and most visited city in Austria?",
    answer: [
        { text: "Vienna", isCorrect: true },
        { text: "Salzburg", isCorrect: false },
        { text: "Graz", isCorrect: false },

    ]
}
]

var correctAnswers = [
    { ans: 'Zurich' },
    { ans: 'Paris' },
    { ans: 'Hamburg' },
    { ans: 'Vienna' }
]

var score = 0;
var begin = true;
var result = document.getElementsByClassName("result");
result[0].innerText = "";
var selectedValue = "", currentSelectedValue = "";
let gameOver = document.getElementById("gameOver");
gameOver.classList.add("hide");
let questionSection = document.getElementById("questionSection");

const answer1 = document.getElementById("ans1");
const answer2 = document.getElementById("ans2");
const answer3 = document.getElementById("ans3");
function loopthrough(i) {
    const q = document.getElementById("q");
    q.innerText = questions[i].question;

    answer1.innerText = questions[i].answer[0].text;
    answer2.innerText = questions[i].answer[1].text;
    answer3.innerText = questions[i].answer[2].text;

    answer1.value = questions[i].answer[0].isCorrect;
    answer2.value = questions[i].answer[1].isCorrect;
    answer3.value = questions[i].answer[2].isCorrect;

    answer1.addEventListener("click", () => {
        //toggleclass
        /*
           answer1.classList.toggle("selectedAnswer");
           answer2.classList.toggle("deselectedAnswer");
           answer3.classList.toggle("deselectedAnswer");*/

        answer1.classList.remove("deselectedAnswer");
        answer1.classList.add("selectedAnswer");
        answer2.classList.remove("selectedAnswer");
        answer2.classList.add("deselectedAnswer");
        answer3.classList.remove("selectedAnswer");
        answer3.classList.add("deselectedAnswer");



        selectedValue = answer1.value;

        if (answer1.value === "true") {
            result[0].style.color = "lightgreen";
            result[0].innerHTML = "True";
        }
        else {
            result[0].style.color = "red";
            result[0].innerHTML = "False";
        }
    })

    answer2.addEventListener("click", () => {
        /*
        answer1.classList.toggle("deselectedAnswer");
        answer2.classList.toggle("selectedAnswer");
        answer3.classList.toggle("deselectedAnswer");
        */
        answer2.classList.remove("deselectedAnswer");
        answer2.classList.add("selectedAnswer");
        answer1.classList.remove("selectedAnswer");
        answer1.classList.add("deselectedAnswer");
        answer3.classList.remove("selectedAnswer");
        answer3.classList.add("deselectedAnswer");

        console.log(answer2.value);
        selectedValue = answer2.value;
        if (answer2.value === "true") {
            result[0].style.color = "lightgreen";
            result[0].innerHTML = "True";
        }
        else {
            result[0].style.color = "red";
            result[0].innerHTML = "False"
        }
    })

    answer3.addEventListener("click", () => {
        /*
                answer1.classList.toggle("deselectedAnswer");
                answer2.classList.toggle("deselectedAnswer");
                answer3.classList.toggle("selectedAnswer");
                */
        answer3.classList.remove("deselectedAnswer");
        answer3.classList.add("selectedAnswer");
        answer1.classList.remove("selectedAnswer");
        answer1.classList.add("deselectedAnswer");
        answer2.classList.remove("selectedAnswer");
        answer2.classList.add("deselectedAnswer");
        if (answer3.value === "true") {
            result[0].style.color = "lightgreen";
            result[0].innerHTML = "True";
        }
        else {
            result[0].style.color = "red";
            result[0].innerHTML = "False";
        }

    })
}
const submitButton = document.getElementsByClassName("submitButton");

let endGameButton = document.getElementById('endGameButton');
endGameButton.addEventListener("click", endGame);
function endGame(event) {
    questionSection.classList.remove("hide");
    gameOver.classList.remove("hide");


}

if (begin) {
    loopthrough("0");
}
const nextButton = document.getElementsByClassName('nextButton')[0];
var j = 0;
nextButton.addEventListener("click", () => {
    answer1.classList.add("deselectedAnswer");
    answer2.classList.add("deselectedAnswer");
    answer3.classList.add("deselectedAnswer");
    answer1.classList.remove("selectedAnswer");
    answer2.classList.remove("selectedAnswer");
    answer3.classList.remove("selectedAnswer");
    if (selectedValue === "true") {
        score++;
    }
    result[0].innerText = "Correct,Score is " + score;
    begin = false;

    if (j < 3) {
        j++;
        loopthrough(j);

    }
})








