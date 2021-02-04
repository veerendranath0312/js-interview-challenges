// Celsius to Fahrenheit
// F = C * (9 / 5) + 32;

// Test Data
// -----convertToF(-30) should return a value of -22
// -----convertToF(-10) should return a value of 14
// -----convertToF(0) should return a value of 32
// -----convertToF(20) should return a value of 68
// -----convertToF(30) should return a value of 86

function convertToF(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

const fahrenheitDeg = convertToF(-30);
console.log(fahrenheitDeg);
