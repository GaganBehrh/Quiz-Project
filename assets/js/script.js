const questions = [{
    i: 0,
    question: "What langauage you speak in Germany?",
    answer: [
        { text: "French", isCorrect: false },
        { text: "German", isCorrect: true },
        { text: "English", isCorrect: false }

    ]

},
{
    i: 1,
    question: "What langauage you speak in France?",
    answer: [
        { text: "Spanish", isCorrect: false, isSelected: false },
        { text: "French", isCorrect: true },
        { text: "German", isCorrect: false }

    ]

},
{
    i: 2,
    question: "What is the capital of Germany",
    answer: [
        { text: "Hannover", isCorrect: false },
        { text: "Berlin", isCorrect: true },
        { text: "Munich", isCorrect: true }

    ]

},
{
    i: 3,
    question: "What is the capital of France",
    answer: [
        { text: "paris", isCorrect: true },
        { text: "Nantes", isCorrect: false },
        { text: "Bordeaux", isCorrect: false },

    ]
}
]

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
        selectedvalue = answer1.value;
    })

    answer2.addEventListener("click", () => {
        selectedvalue = answer2.value;
    })

    answer3.addEventListener("click", () => {
        selectedvalue = answer3.value;
    })

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    const submitButton = document.getElementsByClassName("submitButton");

    submitButton[0].addEventListener("click", () => {
        if (selectedvalue == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
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
  if(nextButton){
nextButton.addEventListener("click", () => {
    begin = false;
    if (j < 2) {
        j++;
        iterate(j);
        console.log(j);
    }
  
})

  }




