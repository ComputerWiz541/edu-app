const mainScreen = document.getElementById('main-screen');
const mathScreen = document.getElementById('math-screen');
const mathButton = document.getElementById('math-button');
const backButton = document.getElementById('back-button');
const checkButton = document.getElementById('check-button');
const answerInput = document.getElementById('answer-input');
const resultElement = document.getElementById('result');
const mathQuestionElement = document.getElementById('math-question');
const themeButton = document.getElementById('theme-button');

mathButton.addEventListener('click', showMathScreen);
backButton.addEventListener('click', showMainScreen);
checkButton.addEventListener('click', checkAnswer);
themeButton.addEventListener('click', toggleTheme);

let num1, num2, operation, answer;

function showMathScreen() {
    mainScreen.style.display = 'none';
    mathScreen.style.display = 'block';
    generateMathProblem();
}

function showMainScreen() {
    mainScreen.style.display = 'block';
    mathScreen.style.display = 'none';
}

function generateMathProblem() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    answer = eval(`${num1} ${operation} ${num2}`);
    const question = `What is ${num1} ${operation} ${num2}?`;
    mathQuestionElement.textContent = question;
    answerInput.value = '';
    resultElement.textContent = '';
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer === answer) {
        resultElement.textContent = 'Correct!';
        resultElement.style.color = 'green';
        generateMathProblem();
    } else {
        resultElement.textContent = 'Incorrect!';
        resultElement.style.color = 'red';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.getElementById('app').classList.toggle('dark-theme');
}