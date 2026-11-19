const test = require('node:test');
const assert = require('node:assert/strict');
const { addition, subtraction, multiplication, division, modulo, power, squareRoot, calculate } = require('../calculator');

test('addition adds two numbers', () => {
  assert.equal(addition(2, 3), 5);
  assert.equal(addition(-4, 1), -3);
  assert.equal(addition(0.1, 0.2), 0.30000000000000004);
});

test('subtraction subtracts the second number from the first', () => {
  assert.equal(subtraction(10, 4), 6);
  assert.equal(subtraction(4, 10), -6);
});

test('multiplication multiplies two numbers', () => {
  assert.equal(multiplication(45, 2), 90);
  assert.equal(multiplication(-3, 3), -9);
  assert.equal(multiplication(7, 0), 0);
});

test('division divides the first number by the second', () => {
  assert.equal(division(20, 5), 4);
  assert.equal(division(7, 2), 3.5);
});

test('division by zero throws an error', () => {
  assert.throws(() => division(5, 0), /Division by zero/);
});

test('calculate supports operation names and symbols', () => {
  assert.equal(calculate('add', '2', '3'), 5);
  assert.equal(calculate('-', '10', '4'), 6);
  assert.equal(calculate('*', '45', '2'), 90);
  assert.equal(calculate('/', '20', '5'), 4);
});

test('calculate rejects unknown operations and invalid numbers', () => {
  assert.throws(() => calculate('unknown', '1', '2'), /Unknown operation/);
  assert.throws(() => calculate('add', 'a', '2'), /Invalid number/);
});

test('modulo returns the remainder of a division', () => {
  assert.equal(modulo(5, 2), 1);
  assert.equal(modulo(10, 5), 0);
  assert.equal(modulo(-7, 3), -1);
});

test('modulo by zero throws an error', () => {
  assert.throws(() => modulo(5, 0), /Modulo by zero/);
});

test('power raises the base to the exponent', () => {
  assert.equal(power(2, 3), 8);
  assert.equal(power(5, 0), 1);
  assert.equal(power(2, -1), 0.5);
});

test('square root returns the root of a number', () => {
  assert.equal(squareRoot(16), 4);
  assert.equal(squareRoot(0), 0);
  assert.equal(squareRoot(2), Math.SQRT2);
});

test('square root of a negative number throws an error', () => {
  assert.throws(() => squareRoot(-9), /negative number/);
});

test('calculate supports the new operations', () => {
  assert.equal(calculate('%', '5', '2'), 1);
  assert.equal(calculate('^', '2', '3'), 8);
  assert.equal(calculate('sqrt', '16'), 4);
});
