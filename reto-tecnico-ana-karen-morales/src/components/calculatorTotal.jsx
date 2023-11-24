import { findPrimeNumber, findTriangularNumber, findFibonacciNumber } from "./method";

export const calculatorTotal = (numberValue) => {
  const primeNumber = findPrimeNumber(numberValue);
  const triangularNumber = findTriangularNumber(numberValue);
  const fibonacciNumber = findFibonacciNumber(numberValue);
  return ((2 * primeNumber * 3 * triangularNumber) / (7 * fibonacciNumber));
};

