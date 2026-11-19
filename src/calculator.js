#!/usr/bin/env node
/**
 * Node.js CLI calculator.
 *
 * Supported operations:
 * - addition: add two numbers (a + b)
 * - subtraction: subtract the second number from the first (a - b)
 * - multiplication: multiply two numbers (a * b)
 * - division: divide the first number by the second (a / b), throws on division by zero
 * - modulo: remainder of the first number divided by the second (a % b), throws on modulo by zero
 * - power: raise the base to the exponent (base ^ exponent)
 * - squareRoot: square root of a number, throws for negative numbers
 *
 * Usage: node src/calculator.js <operation> <a> <b>
 * Example: node src/calculator.js add 2 3
 */

// addition: returns the sum of a and b
function addition(a, b) {
  return a + b;
}

// subtraction: returns the difference of a and b
function subtraction(a, b) {
  return a - b;
}

// multiplication: returns the product of a and b
function multiplication(a, b) {
  return a * b;
}

// division: returns the quotient of a and b
function division(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// power: returns base raised to the exponent
function power(base, exponent) {
  return base ** exponent;
}

// squareRoot: returns the square root of n
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

const operations = {
  add: addition,
  addition,
  '+': addition,
  subtract: subtraction,
  subtraction,
  '-': subtraction,
  multiply: multiplication,
  multiplication,
  '*': multiplication,
  x: multiplication,
  divide: division,
  division,
  '/': division,
  mod: modulo,
  modulo,
  '%': modulo,
  pow: power,
  power,
  '^': power,
  sqrt: squareRoot,
  squareRoot,
};

function calculate(operation, ...values) {
  const fn = operations[operation];
  if (!fn) {
    throw new Error(`Unknown operation: ${operation}`);
  }
  const numbers = values.map((value) => {
    const number = Number(value);
    if (Number.isNaN(number)) {
      throw new Error(`Invalid number: ${value}`);
    }
    return number;
  });
  return fn(...numbers);
}

function main(argv) {
  const [operation, ...values] = argv;
  if (!operation) {
    console.log('Usage: node src/calculator.js <operation> <a> <b>');
    console.log(`Operations: ${Object.keys(operations).join(', ')}`);
    return 1;
  }
  try {
    console.log(calculate(operation, ...values));
    return 0;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return 1;
  }
}

if (require.main === module) {
  process.exitCode = main(process.argv.slice(2));
}

module.exports = { addition, subtraction, multiplication, division, modulo, power, squareRoot, calculate };
