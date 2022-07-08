
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
var selectedvalue = "", currentSelectedValue = "";
function calcScore(currentSelectedValue) {
   
      if(currentSelectedValue==="true"){  
      score++;
            console.log("Score is "+score);
            result[0].innerText="Correct,Score is "+score;
        }
        else if(currentSelectedValue==="false")
        result[0].innerText="Wrong, Score is "+score;
    }
   


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

    answer1.addEventListener("click", () => {
        answer1.style.backgroundColor = "yellow";
        answer2.style.backgroundColor = "transparent";
        answer3.style.backgroundColor = "transparent";
    
        selectedvalue = answer1.value;
       
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
        answer1.style.backgroundColor = "transparent";
        answer2.style.backgroundColor = "yellow";
        answer3.style.backgroundColor = "transparent";
        console.log(answer2.value);
        selectedvalue = answer2.value;
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
        answer1.style.backgroundColor = "transparent";
        answer2.style.backgroundColor = "transparent";
        answer3.style.backgroundColor = "yellow";
        selectedvalue = answer3.value;
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
 
     submitButton[0].addEventListener("click", () => {
         if (selectedvalue === "true") {
             result[0].style.color = "lightgreen";
             console.log(calcScore(selectedvalue));
           
             
         } else {
             result[0].innerHTML = "False";
             result[0].style.color = "red";
             console.log(calcScore(selectedvalue));
         }
     })

if(score>=4)
alert("Game is over!!!");
let endGameButton = document.getElementById('endGameButton');
endGameButton.addEventListener("click", endGame);
function endGame(event) {
    alert("Game is over! Your score is" + score+"/4");
    if(score<4)
    alert("You lost! Try again later.... :(");
    else
    alert("You won! Congratulations!!!.. :) :)");
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

    }

})








