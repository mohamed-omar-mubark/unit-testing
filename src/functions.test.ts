import {
  sum,
  multiply,
  divide,
  countVowels,
  factorial,
  isPrime,
  arraySum,
  flattenArray,
  findMin,
  isEven,
} from "./functions";

// sum
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// multiply
test("multiply 3 and 4 should return 12", () => {
  expect(multiply(3, 4)).toBe(12);
});

// divide
test("divide 10 by 2 should return 5", () => {
  expect(divide(10, 2)).toBe(5);
});

// division by zero
test("divide by 0 should return null", () => {
  expect(divide(10, 0)).toBeNull();
});

// countVowels
test('countVowels in "hello" should return 2', () => {
  expect(countVowels("hello")).toBe(2);
});

// factorial
test("factorial of 5 should return 120", () => {
  expect(factorial(5)).toBe(120);
});

// isPrime
test("isPrime should return true for 7", () => {
  expect(isPrime(7)).toBe(true);
});

// isPrime
test("isPrime should return false for 8", () => {
  expect(isPrime(8)).toBe(false);
});

// arraySum
test("arraySum of [1, 2, 3, 4, 5] should return 15", () => {
  expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
});

// flattenArray
test("flattenArray should flatten a nested array", () => {
  expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
});

// findMin
test("findMin in [3, 1, 4, 1, 5] should return 1", () => {
  expect(findMin([3, 1, 4, 1, 5])).toBe(1);
});

// isEven
test("isEven should return true for 4", () => {
  expect(isEven(4)).toBe(true);
});

// isEven
test("isEven should return false for 3", () => {
  expect(isEven(3)).toBe(false);
});
