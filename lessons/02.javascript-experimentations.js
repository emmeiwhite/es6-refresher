// 1. var: Traditional way to declare variables. function scoped. Pollutes global namespace
function example() {
  var x = 34
  console.log(x)
}

example() // 10

try {
  console.log(x) // ReferenceError: x is not defined
} catch (error) {
  console.log('Error Handled gracefully')
}

// var: Reassignment & redeclaration of var | Can lead to issues if not used correctly

/** a) Reassigning  */
var k = 10
console.log(k) // 10

k = 'mayank'
console.log(k) // mayank

/** var: Redefinition with var */
var isRaining = true
console.log(isRaining)

var isRaining = 'No, it is not raining'
console.log(isRaining)

/** 2. let
 * In JavaScript, the let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined. Block scope refers to any code block delimited by curly braces {} such as loops, conditionals, or function bodies.
 */

let x = 10
if (true) {
  let y = 20
  console.log(x) // Output: 10
  console.log(y) // Output: 20
}
console.log(x) // Output: 10
try {
  console.log(y) // Throws ReferenceError: y is not defined
} catch (error) {
  console.log('Risky code handled, prevented ReferenceError')
}

/**
 * Reassignment and Redefinition using let
Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope. This helps prevent accidental redeclaration of variables and can aid in writing more predictable and maintainable code.
 */

let preparation = true
console.log(preparation)

preparation = 'setting up the deadlines' // re-assigning it but we cannot re-declare within the same scope, which helps prevent unnecessary bugs
console.log(preparation)

/** Let's try to re-declare a variable with let and see the outcome */
// Re definition using 'let'

let foo = 10

// let foo =
//     'Mayank';
/** Trying to re-declare foo results in a syntax error, which stops whole program execution, in fact it occurs during the compile time even in partially compiled languages like javaScript */
console.log(foo) // Output : Error;

/*
const hello; 
// Again a syntax error which results in termination of JS Program
*/

/* ---
const
- In JavaScript, the const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed or reassigned throughout the execution of the script.

- values declared with const cannot be modified. But if the value is an object or an array the properties of these complex data types can easily be modified .
--- */
const person = {
  name: 'Mayank',
  age: 30
}

console.log(person.name)
console.log(person.age)

// Attempting to reassign the whole object will result in an error
/** For Example:
 *
 * person = {} // This is a Type Error this time, not a syntax error. Assignment to a constant variable
 */
try {
  person = {} // This is a TypeError:
} catch (error) {
  console.log('TypeError: Handled (An assignment to the const variable)')
}

/* 
Type errors occur when we try to perform a wrong operation on a datatype
a) When trying to reassign a const
b) When we try to call a non-function as a function. e.g, let x = 2; x();
c) When we try to access the properties of null & undefined
d) When we try use an incorrect method on a type. e.g, let num = 2; num.toUppercase();
*/

const numbers = [1, 2, 3]
console.log(numbers) // Output: [1, 2, 3]

// Modifying array elements is allowed
numbers.push(4)
console.log(numbers) // Output: [1, 2, 3, 4]

try {
  // Attempting to reassign the variable will throw an error
  numbers = [] // Throws TypeError: Assignment to constant variable.
} catch (error) {
  console.log('TypeError: Handled assignment to a const variable')
}

/** 1. */
