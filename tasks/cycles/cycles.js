/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;

  if (redemption >= 0 && redemption <= 350) {
  discount = 0;
  } else if (redemption >= 351 && redemption <= 1350) {
  discount = 15;
  }else if (redemption >= 1351 && redemption <= 2700) {
   discount = 30;
  } else if (redemption >= 2701 && redemption <= 6500) {
   discount = 45;
  } else {discount = 0;
  }

  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
}

//Answer using For

const i = 10;
var z = 1;
for (x = 1; x <= i; x++) z = z * x;
console.log(z);

//Answer using While

const i = 10;
var z = 1;
var x = 1;
while (x <= i) {
  z = z * x;
  x++;
  console.log(z)
}

//Answer using do..while

const i = 10;
var z = 1;
var x = 1;
do {
  z = z * x;
  x++;
}
while (x <= i);
console.log(z)  


/**
 * return concatenated string from an array of substring
 */
{
  
}

const substr = ["I", " love", " JS"];
var x;
for (x of substr) 
  console.log(x);

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };
}

module.exports = calculateDiscount;

//Answer

const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};
let sum = 0;
for (let elem in personIncomes) {
  sum += personIncomes[elem];
}
console.log(sum);



function reverseString(str) {
   return str;
}

console.log(reverseString('hello')); // olleh

function reverseString(str) {
  return str;
}


function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("hello"));

function reverseString(phreak) {
  var daFunkaFuck = "";
  for (var i = phreak.length - 1; i >= 0; i--) {
    daFunkaFuck += phreak[i]; 
  }
  return daFunkaFuck;
}
console.log(reverseString('!akcoR feihC a ma I'));

//2. Write a method to find an index of minimal item from an array;
function findMin(phreak) {
  var daFunkaFuck = "";
  for (var i = phreak.length - 1; i >= 0; i--) {
    daFunkaFuck <= phreak[i];
  }
  return daFunkaFuck;
}
console.log(findMin);

console.log(chars.indexOf(name));

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}

var square = function (number) 
{ return number + " " + number; };
var x = square("Jim");
console.log(x);

var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };

console.log(factorial(10));

var dummyWalks;
for (dummyWalks = 0; dummyWalks < 19; dummyWalks++)
{
 console.log("Dummy walks along... bitch") 
}

function findBiggusDickus(hate, crop) {
   hate>crop ? console.log("hate: ", hate) : 
   console.log("crop ", crop);
}

var hate = 3/4;
var crop = 5/7;

findBiggusDickus(hate, crop);
findBiggusDickus(9/28,12/22);
findBiggusDickus(90/400,58/80);

function findBiggusDickus(hate,crop) {
  var insult;
  hate > crop ? insult =["hate", hate] : 
  insult = ["crop", crop];
  return insult;
}

var hate = 3 / 4;
var crop = 5 / 7;

var hateCropKillInsult = findBiggusDickus(hate,crop);
console.log("Hate is", hate);
console.log("Crop is " + crop);
console.log("Hate " + hate[0] + 
" with a fucking attitude towards " + crop[1] 
+ " are both very legendary");