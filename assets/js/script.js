
const questions = [{
    i: 0,
    question: "What is the most populous and most visited city in Switzerland?",
    answer: [
        { text: "Geneva", isCorrect: false },
        { text: "Zurich", isCorrect: true },
        { text: "Bern", isCorrect: false }

    ]

},
{
    i: 1,
    question: "What is the most populous and most visited city in France?",
    answer: [
        { text: "Nantes", isCorrect: false, isSelected: false },
        { text: "Paris", isCorrect: true },
        { text: "Lyon", isCorrect: false }

    ]

},
{
    i: 2,
    question: "What is the most populous and most visited city in Germany?",
    answer: [
        { text: "Aach", isCorrect: false },
        { text: "Hamburg", isCorrect: true },
        { text: "Calw", isCorrect: false }

    ]

},
{
    i: 3,
    question: "What is the most populous and most visited city in Austria?",
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
    //for (let b = 0; b < correctAnswers; b++) {
      //  if (selectedvalue.toLowerCase() === correctAnswers(b).ans.toLowerCase()) {
      if(currentSelectedValue==="true"){  
      score++;
            console.log("Score is "+score);
            result[0].innerText="True, Score is "+score;
        }
        else
        score;
    }
    /*event.preventDefault();
    console.log(event.target.value);
    if(event.target.value==="true")
    score++;
    else
    score;*/


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
        //console.log(answer1.value);
        selectedvalue = answer1.value;
        // console.log(selectedvalue);
        if (answer1.value === "true") {
            result[0].style.color = "lightgreen";
            result[0].innerHTML = "True";
            // score++;
            // console.log(answer1.value);
          
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
        //console.log(selectedvalue);
        if (answer2.value === "true") {
            result[0].style.color = "lightgreen";
            result[0].innerHTML = "True";
            //score++;
            //console.log(answer2.value);
           
        }
        else {
            result[0].style.color = "red";
            result[0].innerHTML = "False";


        }


    })

    answer3.addEventListener("click", () => {
        answer1.style.backgroundColor = "transparent";
        answer2.style.backgroundColor = "transparent";
        answer3.style.backgroundColor = "yellow";
        // console.log(answer3.value);
        selectedvalue = answer3.value;
        // console.log(selectedvalue);
        if (answer3.value === "true") {
            result[0].style.color = "lightgreen";
            result[0].innerHTML = "True";
            //score++;
            //  console.log(answer3.value);
            

        }
        else {
            result[0].style.color = "red";
            result[0].innerHTML = "False";
        }

    })
}

    //var result = document.getElementsByClassName("result");
    //result[0].innerText = "";
    const submitButton = document.getElementsByClassName("submitButton");
 
     submitButton[0].addEventListener("click", () => {
         if (selectedvalue === "true") {
             result[0].style.color = "lightgreen";
             console.log(calcScore(selectedvalue));
             //totalScore++;
             //result[0].innerHTML = "True \n Your score is"+totalScore+"/4";
             
         } else {
             result[0].innerHTML = "False";
             result[0].style.color = "red";
         }
     })




let endGameButton = document.getElementById('endGameButton');
endGameButton.addEventListener("click", endGame);
function endGame(event) {
    alert("Game is over! Your score is" + score);
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
       // console.log(j);
    }

})








