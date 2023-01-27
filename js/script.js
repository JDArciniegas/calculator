// --------------------variables--------------------
const resultScreen = document.querySelector('#result');
const lastOperation = document.querySelector('#last-operation');

// vars for operations
let firstValue, secondValue, operator;
const operands = ['+', '-', '*', '/'];

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

function operate(){
  secondValue = resultScreen.textContent;
  executeOperation(firstValue, secondValue, operator);
  lastOperation.textContent = `${firstValue} ${operator} ${secondValue}`
}

// --------------------events--------------------
window.addEventListener('keydown', (e) => {
  if (e.key >= 0 && e.key <= 9) appendValue(e.key);
  if (e.key === '=' || e.key === "Enter") operate();
  if (operands.includes(e.key)) appendOperator(e.key);
});







