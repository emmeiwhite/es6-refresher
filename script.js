// 1. var: Traditional way to declare variables. function scoped. Pollutes global namespace
function example() {
  var x = 34
  console.log(x)
}

example() // 10
console.log(x) // ReferenceError: x is not defined
