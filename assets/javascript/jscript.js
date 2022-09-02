//quiz questions
const questions = [{
        question: "What is always coming but never arrives?",
        correct: "Tomorrow",
        answers: [
            "car",
            "river",
            "Tomorrow",
            "bus"
        ]
    },
    {
        question: "What word is spelled incorrectly in every single dictionary??",
        correct: "Incorrectly",
        answers: [
            "parliament",
            "Incorrectly",
            "promise",
            "thursday"
        ]
    },
    {
        question: "What never asks a question but gets answered all the time??",
        correct: "phone",
        answers: [
            "phone",
            "radio",
            "television",
            "tree"
        ]
    },
    {
        question: "What is always coming but never arrives?",
        correct: "Tomorrow",
        answers: [
            "car",
            "river",
            "Tomorrow",
            "bus"
        ]
    },
    {
        question: "What can one catch that is not thrown??",
        correct: "cold",
        answers: [
            "fish",
            "leaf",
            "cold",
            "water"
        ]
    },
    {
        question: " What can provide us with power and strength to walk through a wall??",
        correct: "A door",
        answers: [
            "A door",
            "A wall",
            "muscles",
            "magic",
        ]
    },
    {
        question: "When you drop a white hat in the Black sea, what will it become??",
        correct: "It becomes wet",
        answers: [
            "It becomes light",
            "It becomes wet",
            "It becomes white",
            "It becomes black",
        ]
    },
    {
        question: "Despite its name, what is actually Bombay Duck?",
        correct: "type of fish",
        answers: [
            "type of turtle",
            "type of chicken",
            "type of duck",
            "type of fish"
        ]
    },
];

const quizBtn = document.getElementById('btn-start');
const nextBtn = document.getElementById('btn-submit');
const quizQuestList = document.getElementById('quiz');


let quizQuestLive;

quizBtn.addEventListener('click', quizBegin);
nextBtn.addEventListener('click', () => {
    quizQuestLive++;
    nextQuizQuest();
});

function quizBegin() {
    quizBtn.classList.add('absent'); //hide start button after first question
    quizQuestLive = 0 ;
    quizQuestList.classList.remove('absent');
    nextQuizQuest();
}
// next question 
function nextQuizQuest() {
    defReset();
    viewQuizQuest(questions[quizQuestLive]);
}
//question
const questsQuiz = document.getElementById('question');
const listOfAnswer = document.getElementById('btn-ans');

function viewQuizQuest(question) {
    questsQuiz.innerText = question.question;
    question.answers.forEach(answer => {
        const listItems = document.createElement('listItems');
        listItems.innerText = answer;
        listItems.classList.add('ans');
        if (answer == question.correct) {
            listItems.dataset.correct = answer.correct;
        }
        listItems.addEventListener('click', quizAns);
        listOfAnswer.appendChild(listItems);
    });
}
//function to reset to default state after each question
function defReset() {
    removeStat(document.body);
    nextBtn.classList.add('absent');
    while (listOfAnswer.firstChild) {
        listOfAnswer.removeChild(listOfAnswer.firstChild);
    }
}

function quizAns(ansC) {
    const ansBtn = ansC.target;
    const correct = ansBtn.dataset.correct;

    checkAnsStatus(document.body, correct);
    //array to use for each loop - include all questions and restart after last question
    Array.from(listOfAnswer.children).forEach(listItems => {
        checkAnsStatus(listItems, listItems.dataset.correct);
    });
    if (questions.length > quizQuestLive + 1) {
        nextBtn.classList.remove('absent');
    } else {
        quizBtn.innerText = 'Restart';
        quizBtn.classList.remove('absent');
    }
}
// added background color in css for right and wrong answers
function checkAnsStatus(element, correct) {
    removeStat(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function removeStat(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}