// Factorial of a number
// 5! = 5*4*3*2*1 = 120

// Test data
// ----factorialize(5) should return 120.
// ----factorialize(10) should return 3628800.
// ----factorialize(20) should return 2432902008176640000.
// ----factorialize(0) should return 1.

function factorialize(num) {
  let fact = 1;
  for(let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

const result = factorialize(20);
console.log(result);