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
    i:3,
    question:"What is the capital of France",
    answer:[
        {text:"paris", isCorrect:true},
        {text:"Nantes", isCorrect:false},
        {text:"Bordeaux",isCorrect:false},

    ]
}
]

function loopthrough(i){
const q=document.getElementById("q");
q.innerText=questions[i].question;

const answer1=document.getElementById("ans1");
const answer2=document.getElementById("ans2");
const answer3=document.getElementById("ans3");
const answer4=document.getAnimations("ans4");

answer1.innerText=questions[i].answer[0].text;
answer2.innerText=questions[i].answer[1].text;
answer3.innerText=questions[i].answer[2].text;
answer4.innerText=questions[i].answer[3].text;
}


