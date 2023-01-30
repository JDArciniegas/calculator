// --------------------variables--------------------
const resultScreen = document.querySelector('#result');
const lastOperation = document.querySelector('#last-operation');
const clearButton = document.querySelector('#clear');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals')
const deleteButton = document.querySelector('#delete');
const operands = ['+', '-', '*', '/'];
let firstValue, secondValue, operator;

// ----- using Object to store operators ----
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// -----------------functions---------------------
// create one function for each operator
// create function operate - takes 3 par - 2 numbers & operator

function executeOperation(value1, value2, operator) {
  value1 = Number(value1)
  value2 = Number(value2)
  let solution;
  switch (operator) {
    case '+':
      solution = add(value1, value2);
      break;
    case '-':
      solution = substract(value1, value2);
      break;
    case '*':
      solution = multiply(value1, value2);
      break;
    case '/':
      solution = divide(value1, value2);
      break;
  }
  resultScreen.textContent = solution;
}
function resetNumber() {
  if (resultScreen.textContent === "0") resultScreen.textContent = '';
}

function selectNumber() {
  console.log(numberButtons.value);
}

function deleteNumber() {
  resultScreen.textContent = resultScreen.textContent
    .toString()
    .slice(0, -1)
}

function addDecimalPoint(){
  if (resultScreen.textContent.includes('.')) return
  resultScreen.textContent += '.'
}

function clearCalculator() {
  firstValue = 0;
  secondValue = 0;
  resultScreen.textContent = 0;
  lastOperation.textContent = '';
}

function appendValue(number) {
  resetNumber()
  resultScreen.textContent += number
}

function appendOperator(operand) {
  operator = operand;
  firstValue = resultScreen.textContent;
  lastOperation.textContent = `${firstValue} ${operand}`
  resultScreen.textContent = ''
}

function operate() {
  secondValue = resultScreen.textContent;
  executeOperation(firstValue, secondValue, operator);
  lastOperation.textContent = `${firstValue} ${operator} ${secondValue} =`
}

// --------------------events--------------------
window.addEventListener('keydown', (e) => {
  if (e.key >= 0 && e.key <= 9) appendValue(e.key);
  if (e.key === '=' || e.key === "Enter") operate();
  if (e.key === 'c') clearCalculator();
  if (operands.includes(e.key)) appendOperator(e.key);
  if (e.key === '.') addDecimalPoint();
  if (e.key === "Backspace" || e.key === "Delete") deleteNumber();
});

clearButton.addEventListener('click', clearCalculator);
equalsButton.addEventListener('click', operate);
deleteButton.addEventListener('click', deleteNumber);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => appendValue(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => appendOperator(button.textContent));
});





