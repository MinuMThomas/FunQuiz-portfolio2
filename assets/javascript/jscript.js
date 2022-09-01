//quiz questions
const questions = [
    {
        question:  "What is always coming but never arrives?",
        correct : "Tomorrow",
        answers:[
            "car",
            "river",
            "Tomorrow",
            "bus"
        ]
    },
    {
        question:  "What word is spelled incorrectly in every single dictionary??",
        correct : "Incorrectly",
        answers:[
            "parliament",
            "Incorrectly",
            "promise",
            "thursday"
        ]
    },
    {
        question:  "What never asks a question but gets answered all the time??",
        correct : "phone",
        answers:[
            "phone",
            "radio",
            "television",
            "tree"
        ]
    },
    {
        question:  "What is always coming but never arrives?",
        correct : "Tomorrow",
        answers:[
            "car",
            "river",
            "Tomorrow",
            "bus"
        ]
    },
    {
        question:  "What can one catch that is not thrown??",
        correct : "cold",
        answers:[
            "fish",
            "leaf",
            "cold",
            "water"
        ]
    },
    {
        question:  " What can provide us with power and strength to walk through a wall??",
        correct : "A door",
        answers:[
            "A door",
            "A wall",
            "muscles",
            "magic",
        ]
    },
    {
        question:  "When you drop a white hat in the Black sea, what will it become??",
        correct : "It becomes wet",
        answers:[
            "It becomes light",
            "It becomes wet",
            "It becomes white",
            "It becomes black",
        ]
    },
    {
        question:  "Despite its name, what is actually Bombay Duck?",
        correct : "type of fish",
        answers:[
            "type of turtle",
            "type of chicken",
            "type of duck",
            "type of fish"
        ]
    },
]

//begin the quiz
const quizBtn = document.getElementById('btn-start');
//add event listener
quizBtn.addEventListener('click', quizBegin);
const quizQuestList =document.getElementById('quiz');//show questions

function quizBegin(){
    console.log("begin the quiz")
    quizQuestList.classList.add('absent')
}
