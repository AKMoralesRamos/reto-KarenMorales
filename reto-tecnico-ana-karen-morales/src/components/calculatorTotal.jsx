import { findPrimeNumber, findFibonacciNumber } from "./method";

export const calculatorTotal = (numberValue) => {
  const primeNumber = findPrimeNumber(numberValue);
  const fibonacciNumber = findFibonacciNumber(numberValue);
  return ((2 * primeNumber * 3) / 7) * fibonacciNumber;
};
