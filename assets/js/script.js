// Get required elements - values don't change
const startButton = document.getElementById('startQuiz');
const usernameInput = document.getElementById('username');
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const resultScreen = document.getElementById('resultScreen');
const usernameDisplay = document.getElementById('usernameDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const resetButton = document.getElementById('resetButton');

// Hide questionScreen and resultScreen initially
questionScreen.style.display = 'none';
resultScreen.style.display = 'none';

// Declare variables
let username = '';
let score = 0;
let currentQuestion = 0;

// Question data  - values don't change
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

// Event listener for quiz start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
    username = usernameInput.value;
    if (username !== '') {
        startScreen.style.display = 'none';
        questionScreen.style.display = 'block';
        displayQuestion(currentQuestion);
    } else {
        alert('Please enter a username to start the quiz.');
    }
}

// Function to display a question and its options
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

// Function to display the result screen
function showResult() {
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'block';
    usernameDisplay.textContent = `Username: ${username}`;
    scoreDisplay.textContent = `Score: ${score} out of ${questions.length}`;
}

// Start the quiz
document.addEventListener('DOMContentLoaded', () => {
    startButton.disabled = true;
    usernameInput.addEventListener('input', () => {
        startButton.disabled = usernameInput.value === '';
    });
});

// Event listener for reset button
resetButton.addEventListener('click', () => {
    startScreen.style.display = 'block';
    questionScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    usernameInput.value = '';
    username = '';
    score = 0;
    currentQuestion = 0;
    startButton.disabled = true;
});
