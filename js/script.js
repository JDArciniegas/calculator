// --------------------variables--------------------
const result = document.querySelector('#result');
const lastOperation = document.querySelector('#last-operation');

// ----- using Object to store operators ----
const add = (val1, val2) => val1 + val2;
const substract = (val1, val2) => val1 - val2;
const multiply = (val1, val2) => val1 * val2;
const divide = (val1, val2) => val1 / val2;

// --------------------events--------------------
window.addEventListener('keydown', (e) => {
  console.log(e.key);
})
// -----------------functions---------------------
// create one function for each operator
// create function operate - takes 3 par - 2 numbers & operator

// -----------------test----------------
// populate display when click/press key
// save display value
