/** TODAY WE'LL DISCUSS:
 * 1. HOISTING
 * 2. CALL STACK to track function calls
 * 3. FUNCTIONS as the first-class citizens
 */
/** 1. Hoisting: Function declaration and variable declared with var keyword are hoisted, means they are assigned memory during the Creation Phase of Execution Context */

console.log(greet) // no error but we get undefined
var greet = 'hello ji, kaise hain aap!'

foo() // due to hoisting we are able to call the foo function

function foo() {
  console.log('foo hoo hoo')
}

/** REMEMBER: For clean code, avoid writing code where hoisting happens */

// NOTE: let, const and function expressions declared with them are not hoisted
/*
shoutOut() // RE: cannot access shoutOut before initialization
const shoutOut = function () {
  console.log('Imran is a wonderful programmer')
}*/

/* --- 
console.log(x)
let x = 23

const y; // Here we get a syntax error and whole program is not executed at all.
--- */

/** 2. FUNCTIONS ARE CONSIDERED FIRST CLASS CITIZENS IN JAVASCRIPT
 * a) We can assign a function to a variable (as is the case with Function Expressions)
 * b) We can pass function reference as a parameter to another function and call it within another function
 * c) We can return a function from another function(A concept which lays down foundations for Closures)
 * Primarily in JavaScript we should think of Function as a value as stated in the book Eloquent JavaScript
 */
