// ----- using Object to store operators ----
let operation = {
  '+': function (a, b) { return a + b },
  '-': function (a, b) { return a - b },
  '*': function (a, b) { return a * b },
  '/': function (a, b) { return a / b },
}
// create one function for each operator
// function operate(val1, val2, operator){

// }

console.log(operation['+'](2, 3));
console.log(operation['-'](2, 3));
console.log(operation['*'](2, 3));
console.log(operation['/'](2, 3));
// create function operate - takes 3 par - 2 numbers & operator
// populate display when click/press key
// save display value
