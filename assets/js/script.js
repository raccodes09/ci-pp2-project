// get required elements - values don't change
const startbutton = document.getElementById('startQuiz');
const usernameInput = document.getElementById('username');
const quizContainer = document.getElementById('quizContainer');
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const resultScreen = document.getElementById('resultScreen');
const usernameDisplay = document.getElementById('usernameDisplay');
const scoreDisplay = document.getElementById('scorseDisplay');


// declare required variables
let username = '';
let score = 0;
let currentQuestion = 0;



// question data  - values don't change
const questions = [
    {
    question: "Who won the Premier League in the year 2000?",
    options: ["Manchester United", "Arsenal", "Chelsea"],
    answer: "Manchester United"
    },
    {
    question: "Which team was relegated from the Premier League in the year 2010?",
    options: ["Blackpool", "West Ham United", "Birmingham City"],
    answer: "Blackpool"
    },
    {
    question: "Who was the top goal scorer in the Premier League during the 2015-2016 season?",
    options: ["Sergio Agüero", "Harry Kane", "Jamie Vardy"],
    answer: "Harry Kane"
    },
    {
    question: "Which team won the Premier League title in the year 2019?",
    options: ["Liverpool", "Manchester City", "Chelsea"],
    answer: "Manchester City"
    },
    {
    question: "Who scored the fastest Premier League hat-trick in history?",
    options: ["Sadio Mané", "Robbie Fowler", "Andy Carroll"],
    answer: "Sadio Mané"
    }    
];



// event listener - start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    username = usernameInput.value;
    if (username !== '') {
        startScreen.style.display = 'none'
        questionScreen.style.display = 'block';
        displayQuestion(currentQuestion);
    } else {
        alert('Please enter username to kick off!');
    }
}



// function - display questions and options
function displayQuestion(questionIndex) {
    if (questionIndex < questions.length) {
        const questionData = questions[questionIndex];
        const optionsHTML = questionData.options.map((option, index) => `
            <label>
                <input type="radio" name="q${questionIndex}" value="${option}">
                ${option}
            </label>
            <br>
        `).join('');

        questionScreen.innerHTML = `
            <h2>Question ${questionIndex + 1}:</h2>
            <p>${questionData.question}</p>
            ${optionsHTML}
            <button id="nextQuestion">Next</button>
        `;

        const nextButton = document.getElementById('nextQuestion');
        nextButton.addEventListener('click', () => {
            const selectedOption = document.querySelector(`input[name=q${questionIndex}]:checked`);
            if (selectedOption) {
                if (selectedOption.value === questionData.answer) {
                    score++;
                }
                currentQuestion++;
                displayQuestion(currentQuestion);
            }
        });
    } else {
        showResult();
    }
}



// function - display result screen
function showResult() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    usernameDisplay.textContent = `Username: ${username}`;
    scoreDisplay.textContent = `Score: ${score} out of ${questions.length}`;
}

// event listener - start quiz
document.addEventListener('DOMContentloaded', () => {
    startButton.disabled = true;
    usernameInput.addEventListener('input', () => {
        startButton.disabled = usernameInput.value === '';
    });
});



// event listener - reset button
resetButton.addEventListener('click', () => {
    startScreen.style.display = 'block';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    usernameInput = '';
    score = 0;
    currentQuestion = 0;
    startButton.disabled = true;
});



