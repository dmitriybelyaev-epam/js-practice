//conditional

/** TODO
 * Task - rewrite IF..ELSE to ternary operator
 */
let result;

if (a + b < 4) {
  result = 'wrong';
} else {
  result = 'too much';
}

//answer:

let a = 6;
b = 3;
let result = (a + b < 4) ? "wrong" : "too much";
console.log(result);


/** TODO
 * The system receives two params x and y.
 * Implement the logic when z equal to sum of x and y 
 * in case both of them less than 10 or multiplication in 
 * case of greater or equal than 10
 * Task 1 - if else
 * Task 2 - ternary operator
 */
{
  const x = 3;
  const y = 7;
}

//IF Else

const x = 3,
  y = 7;
z = 10;
if (x < 10 && y < 10) {
  z = x + y;
}
else {
  z = x * y;
}

//Ternary operator

const x = 3;
y = 7;
z = 10;
x * + y >= z ? console.log("right") : console.log("wrong");

/** TODO
 * The system receives 3 params - x, y, operator.
 * Operator can pass 4 possible values - "add", "subtract", 
 * "multiply", "divide".
 * Implement the logic when the system does appropriate 
 * operation based on passed operator param.
 */

{
  const x = 3;
  const y = 7;
  const operator = "add";
}

//Answer using If Else

const x = 3;
const y = 7;
const operator = "add";

if ("add") {
  x + y
} else if ("subtract") {
  x - y
} else if ("divide") {
  x / y
} else if ("multiply") {
  x * y
}

//Answer using Switch operator

const x = 3;
const y = 7;
const operator = "add";

switch (operator) {
  case 'add':
    (x + y);
    break;
  case 'subtract':
    (x - y);
    break;
  case 'divide':
    (x / y);
    break;
  case 'multiply':
    (x * y);
    break;
}     