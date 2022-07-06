import {questions} from './question.js';
var totalScore=0;
var begin = true;
function loopthrough(i) {

    const q = document.getElementById("q");
    q.innerText = questions[i].question;

    const answer1 = document.getElementById("ans1");
    const answer2 = document.getElementById("ans2");
    const answer3 = document.getElementById("ans3");
   

    answer1.innerText = questions[i].answer[0].text;
    answer2.innerText = questions[i].answer[1].text;
    answer3.innerText = questions[i].answer[2].text;
   

    answer1.value = questions[i].answer[0].isCorrect;
    answer2.value = questions[i].answer[1].isCorrect;
    answer3.value = questions[i].answer[2].isCorrect;
   

    var selectedvalue = "";

    answer1.addEventListener("click", () => {
        answer1.style.backgroundColor = "#FFF89A";
        answer2.style.backgroundColor = "#F7E2E2";
        answer3.style.backgroundColor = "#F7E2E2";
        selectedvalue = answer1.value;
    })

    answer2.addEventListener("click", () => {
        
        answer1.style.backgroundColor = "#F7E2E2";
        answer2.style.backgroundColor = "#FFF89A";
        answer3.style.backgroundColor = "#F7E2E2";
        
        selectedvalue = answer2.value;
    })

    answer3.addEventListener("click", () => {
        answer1.style.backgroundColor = "#F7E2E2";
        answer2.style.backgroundColor = "#F7E2E2";
        answer3.style.backgroundColor = "#FFF89A";
        selectedvalue = answer3.value;
    })

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    const submitButton = document.getElementsByClassName("submitButton");

    submitButton[0].addEventListener("click", () => {
        if (selectedvalue === "true") {
            result[0].style.color = "lightgreen";
            totalScore++;
            result[0].innerHTML = "True"+totalScore;
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}
if (begin) {
    loopthrough("0");
}

const nextButton = document.getElementsByClassName('nextButton')[0];
var j = 0;
  
nextButton.addEventListener("click", () => {
    begin = false;
    if (j < 3) {
        j++;
        loopthrough(j);
        console.log(j);
    }
  
})


  




