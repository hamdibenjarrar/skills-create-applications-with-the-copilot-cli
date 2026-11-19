const test = require('node:test');
const assert = require('node:assert/strict');
const { addition, subtraction, multiplication, division, calculate } = require('../calculator');

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
