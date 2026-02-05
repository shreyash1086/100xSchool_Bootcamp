/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a) {
    this.result = this.result + a;
  }

  subtract(a) {
    this.result = this.result - a;
  }

  multiply(a) {
    this.result = a * this.result;
  }

  divide(a) {
    if (a === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    this.result = this.result / a;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    expression = expression.split(/\s/)
      .map((item) => item.trim())
      .join("");
    
    
    
  //   for(let i = 0; i < expression.length; i++) {
  //     if (expression.includes('*')) {
  //       let index = expression.indexOf('*');
  //       this.result = this.add(1);
  //       let temp = 0;
  //       for (let j = index - 1; j > 0; j--){
  //         if (!(expression[j] >= '0' && expression[j] <= '9')) {
  //           temp = j + 1;
  //           break;
  //         }
  //       }
  //       this.result = this.multiply(Number(expression.substring[temp, index]));
  //       let temp2 = 0;
  //       for (let j = index + 1; j <= expression.length; j++){
  //         if (j === expression.length) {
  //           temp2 = j;
  //           break;
  //         }
  //         if (!(expression[j] >= '0' && expression[j] <= '9')) {
  //           temp2 = j + 1;
  //           break;
  //         }
  //       }
  //       this.result = this.multiply(Number(expression.substring[index+1, temp2]));
  //     }
  // }
}

let calc = new Calculator();
calc.calculate('3 * 4');

// module.exports = Calculator;
