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
        answer1.style.backgroundColor = "yellow";
        answer2.style.backgroundColor = "transparent";
        answer3.style.backgroundColor = "transparent";
        selectedvalue = answer1.value;
    })

    answer2.addEventListener("click", () => {
        answer1.style.backgroundColor = "transparent";
        answer2.style.backgroundColor = "yellow";
        answer3.style.backgroundColor = "transparent";
        selectedvalue = answer2.value;
        
    })

    answer3.addEventListener("click", () => {  
        answer1.style.backgroundColor = "transparent";
        answer2.style.backgroundColor = "transparent";
        answer3.style.backgroundColor = "yellow";
        selectedvalue = answer3.value;
    })

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    const submitButton = document.getElementsByClassName("submitButton");

    submitButton[0].addEventListener("click", () => {
        if (selectedvalue === "true") {
            result[0].style.color = "lightgreen";
            totalScore++;
            result[0].innerHTML = "True \n Your score is"+totalScore+"/4";
            
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
    

}

let endGameButton = document.getElementById('endGameButton');
endGameButton.addEventListener("click",endGame);   
function endGame(){    
    alert("Gams is over!!!"+totalScore);
if(answer1.value=="true"  || answer2.value=="true"  || answer3.value=="true")
totalScore++;
console.log(totalScore);
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



  




