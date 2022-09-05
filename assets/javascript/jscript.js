const quizBtn = document.getElementById('btn-starts');
const nextBtn = document.getElementById('btn-submits');
const quizQuestList = document.getElementById('quiz');
const scoreContent = document.getElementById('score');
const questsQuiz = document.getElementById('question');
const listOfAnswer = document.getElementById('btn-ans');
const scoreDiv = document.getElementById('valid');
const total = document.getElementById('totalQuestions');

let quizQuestLive;
let score = 0;
let noOfQuestions = questions.length;

quizBtn.addEventListener('click', quizBegin);
nextBtn.addEventListener('click', function () {
    quizQuestLive++;
    nextQuizQuest();
});

function quizBegin() {
    quizBtn.classList.add('absent'); //hide start button after first question
    quizQuestLive = 0;
    quizQuestList.classList.remove('absent');
    nextQuizQuest();
    // alert("!!!!!BEGIN THE QUIZ!!!!");
}
// next question 
function nextQuizQuest() {
    defReset(); //reset to default
    viewQuizQuest(questions[quizQuestLive]);
}
//question
// const questsQuiz = document.getElementById('question');
// const listOfAnswer = document.getElementById('btn-ans');

function viewQuizQuest(question) {
    questsQuiz.innerText = question.question;
    //use forEach call back fn to each array element 
    question.answers.forEach(answer => {
        const listItems = document.createElement('li');
        listItems.innerText = answer;
        listItems.classList.add('ans');
        if (answer == question.correct) {
            listItems.dataset.correct = answer;
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
    // console.log(ansC);
    const ansBtn = ansC.target;
    // console.log(ansBtn);
    const correct = ansBtn.dataset.correct;
    // console.log(correct);

    //answer status and move on to next question or restart
    checkAnsStatus(document.body, correct);
    // console.log(listOfAnswer);
    //array to use foreach loop - include all questions and restart after last question
    Array.from(listOfAnswer.children).forEach(listItems => {
        markAnswers(listItems, listItems.dataset.correct);
    });
    updateScore(score, noOfQuestions);
    if (questions.length > quizQuestLive + 1) {
        nextBtn.classList.remove('absent');
        
    } else {
        quizBtn.innerText = 'TryAgain!';
        quizBtn.classList.remove('absent');
        tryAgain();
        // resetScore();
        // quizBtn.addEventListener('click', resetScore());
    }

}
// added alert and  increase score
function checkAnsStatus(element, correct) {
    removeStat(element);
    if (correct) {
        element.classList.add('correct');
        score++;
        // alert('well done');
    } else {
        element.classList.add('wrong');
        // alert('sorry');

    }
}
//color answer background
function markAnswers(element, correct) {
    if (correct) {
        element.classList.add('correct');

    } else {
        element.classList.add('wrong');
    }
}
//rremove status and return to default
function removeStat(element) {

    element.classList.remove('correct');
    element.classList.remove('wrong');
}
// add score 

function updateScore(score, noOfQuestions) {

    scoreContent.classList.remove('absent');
    scoreDiv.innerHTML = score;
    total.innerHTML = noOfQuestions;

}
//reset score back to zero at the end
function resetScore() {
    score = 0;
    scoreContent.classList.remove('absent');
    scoreDiv.innerHTML = 0;
    total.innerHTML = noOfQuestions;
}
//restart riddle again
function resetRiddle() {
    quizBegin();
    scoreContent.classList.remove('absent');
}

function tryAgain() {
    resetScore();
    resetRiddle();

}