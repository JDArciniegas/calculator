// ----- using Object to store operators ----
let operation = {
  '+': function (a, b) { return a + b },
  '-': function (a, b) { return a - b },
  '*': function (a, b) { return a * b },
  '/': function (a, b) { return a / b },
}
// create one function for each operator
// create function operate - takes 3 par - 2 numbers & operator
function operate(val1, val2, operator){
  return operator(val1, val2);
}

console.log(operate(2, 3, operation['+']));
console.log(operate(5, 5, operation['*']));
console.log(operate(100, 10, operation['-']));
console.log(operate(9, 3, operation['/']));
// populate display when click/press key
// save display value
