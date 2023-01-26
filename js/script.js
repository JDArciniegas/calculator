// --------------------variables--------------------
const result = document.querySelector('#result');
const lastOperation = document.querySelector('#last-operation');

// ----- using Object to store operators ----
const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// -----------------functions---------------------
// create one function for each operator
// create function operate - takes 3 par - 2 numbers & operator

function executeOperation(value1, value2, operator) {
  switch (operator) {
    case '+':
      return add(value1, value2);
      break;
    case '-':
      return substract(value1, value2);
      break;
    case '*':
      return multiply(value1, value2);
      break;
    case '/':
      return divide(value1, value2);
      break;
  }
}

function updateResultDisplay(result, display){
  display.append(result);
}
// --------------------events--------------------
window.addEventListener('keydown', (e) => {
  updateResultDisplay(e.key, result)
  console.log(e.key);
})

