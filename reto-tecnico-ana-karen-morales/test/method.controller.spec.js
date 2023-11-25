import { findFibonacciNumber } from "../src/components/method.controller";
test('should return ', () => {
    const result = findFibonacciNumber(1);
    expect(result).toBe(1);
  });