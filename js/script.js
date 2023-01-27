// --------------------variables--------------------
const result = document.querySelector('#result');
const lastOperation = document.querySelector('#last-operation');

// vars for operations
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

  roundedSol = (Math.round(solution * 100) / 100).toFixed(2);
  updateLastOperation(value1, value2, operator)
  updateResultDisplay(roundedSol)
}

executeOperation(5, 6, '+')

function updateLastOperation(val1, val2, operator){
  lastOperation.append(`${val1} ${operator} ${val2}`)
}

function updateResultDisplay(sol){
  result.textContent = ''
  result.append(sol);
}

// --------------------events--------------------
window.addEventListener('keydown', (e) => {
  console.log(e.key);
})

