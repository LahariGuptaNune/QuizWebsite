const questions = [
    {
        question: 'What does HTML stand for?',
        optionA: 'Hyper Text Markup Language',
        optionB: 'Hyper Text Markdown Language',
        optionC: 'Hyper Text Machine Language',
        optionD: 'Hyper Tell Markup Language',
        correctAnswer: 'optionA'
    },
    {
        question: 'What does CSS stand for?',
        optionA: 'Corona Se Sathark',
        optionB: 'Cascading Style Sheets',
        optionC: 'Call Simple Sheets',
        optionD: 'None of above',
        correctAnswer: 'optionB'
    },
    {
        question: 'What does JS stand for?',
        optionA: 'J2EE Sheet',
        optionB: 'JAVA STYLE',
        optionC: 'Java Script',
        optionD: 'None of above',
        correctAnswer: 'optionC',
    }
]

const loginPage = document.getElementById('login-page')
const startQuiz = document.getElementById('start-quiz')
const quizContainer = document.getElementById('quiz-container')
const quizQuestionElement = document.getElementById('quiz-question')
const options = document.querySelectorAll('.quiz-answer')
const quizOptionA = document.getElementById('option-a')
const quizOptionB = document.getElementById('option-b')
const quizOptionC = document.getElementById('option-c')
const quizOptionD = document.getElementById('option-d')
const previousButton = document.getElementById('previous')
const nextButton = document.getElementById('next')
const saveButton = document.getElementById('save')
const submitButton = document.getElementById('submit')
const canvas = document.getElementById('#confetti')
// const result = document.getElementById('result')

const jsConfetti = new JSConfetti()

let currentQuestion = 0
let correctAnswers = 0
let userChoosenAnswers = {}
let score = 0;


renderLoginPage()

function renderLoginPage() {
    
}

function startQuizandLoadPage(){
    loginPage.style.display = "none";
    quizContainer.style.display = "flex"
    renderQuizPage()
}

function renderQuizPage() {
    // console.log(currentQuestion);
    const quizQuestionAnswerData = questions[currentQuestion]
    quizQuestionElement.innerText = quizQuestionAnswerData.question
    quizOptionA.innerText = quizQuestionAnswerData.optionA
    quizOptionB.innerText = quizQuestionAnswerData.optionB
    quizOptionC.innerText = quizQuestionAnswerData.optionC
    quizOptionD.innerText = quizQuestionAnswerData.optionD
    if(currentQuestion === 0) previousButton.style.visibility = 'hidden'
    if(currentQuestion === questions.length-1) nextButton.style.visibility = 'hidden'
    saveButton.style.visibility = 'visible'
    if(currentQuestion === questions.length-1) submitButton.style.visibility = 'visible'
    else submitButton.style.visibility = 'hidden'
}

function goToPreviousQuestion() {
    console.log("goToPreviousQuestion" + currentQuestion);
    currentQuestion--;
    renderQuizPage()
    if(currentQuestion > 0) previousButton.style.visibility = 'visible'
    else previousButton.style.visibility = 'hidden'
    if(currentQuestion === questions.length-1) nextButton.style.visibility = 'hidden'
    else nextButton.style.visibility = 'visible'
    refreshAnswers()
}

function goToNextQuestion() {
    console.log("goToNextQuestion" +currentQuestion);
    currentQuestion++;
    renderQuizPage()
    if(currentQuestion > 0) previousButton.style.visibility = 'visible'
    else previousButton.style.visibility = 'hidden'
    if(currentQuestion === questions.length-1) nextButton.style.visibility = 'hidden'
    else nextButton.style.visibility = 'visible'
    refreshAnswers()
}

function save() {
    userChoosenAnswers[currentQuestion] = getSelectedAnswer();
}

function refreshAnswers() {
    options.forEach(option => {
        if(option.id === userChoosenAnswers[currentQuestion]) option.checked = true
        else option.checked = false
    })
}

function getSelectedAnswer() {
    console.log(options)
    let selectedOption
    options.forEach(option => {
        console.log(option.checked)
        if(option.checked) {
            console.log(option.id)
            selectedOption = option.id
        }
    })
    return selectedOption
}

function submit() {
    console.log(userChoosenAnswers)
    Object.keys(userChoosenAnswers).forEach(ans => {
        console.log(ans)
        console.log(userChoosenAnswers[ans])
        if(questions[ans].correctAnswer === userChoosenAnswers[ans]) 
         score=score+1
    })
    // result.innerText = score
    if(score === 3) {
        jsConfetti.addConfetti()
    }
    quizContainer.innerHTML = '<h2> You Scored ' + score + ' out of 3</h2>'
    console.log(score)
}