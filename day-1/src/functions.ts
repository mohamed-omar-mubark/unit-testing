// Returns the sum of two numbers
export function sum(a: number, b: number): number {
  return a + b;
}

// Multiplies two numbers
export const multiply = (a: number, b: number) => a * b;

// Divides two numbers, with a check to prevent division by zero
export const divide = (a: number, b: number) => (b !== 0 ? a / b : null);

// Counts the number of vowels in a given string
export const countVowels = (str: string) => {
  return str.match(/[aeiou]/gi)?.length || 0;
};

// Computes the factorial of a number recursively
export const factorial = (n: number): number => {
  return n === 0 ? 1 : n * factorial(n - 1);
};

// Determines if a number is prime
export const isPrime = (num: number) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Sums all elements of an array of numbers
export const arraySum = (arr: number[]): number => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

// Flattens a nested array into a single-level array
export const flattenArray = (arr: any[]): any[] => {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );
};

// Finds the smallest number in an array
export const findMin = (arr: number[]): number => Math.min(...arr);

// Checks whether a number is even
export const isEven = (num: number) => num % 2 === 0;
