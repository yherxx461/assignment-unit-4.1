console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log('return:', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name + '!';
}
// Remember to call the function to test
console.log('personalized name:', helloName('Ying'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('add result:', addNumbers(3, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  
return num1 * num2 * num3;
}
// return num1 * num2 * num3
console.log('multiply result:', multiplyThree(5, 3, 6));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  return number > 0;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('number1 is positive:', isPositive(5));
console.log('number2 is positive:', isPositive(-4));
console.log('number3 is positive:', isPositive(0));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`
function getLast(array) {
  if (array.length > 0) {
    return array[array.length - 1];
   } else {
  return undefined;
   }
}

let array =[4, 5, 8, 6, 9];
console.log('last item in array', getLast(array));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  // looping through the array
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return true; // if value is found
    }
  }
  // if value is not found
  return false;
}

console.log('value1 is in array:', find(4, array));
console.log('value2 is in array:', find(2, array));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {}
  // per research, i found that one of the method is to use charAt()


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
