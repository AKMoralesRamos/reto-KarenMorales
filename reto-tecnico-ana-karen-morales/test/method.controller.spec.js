import { findFibonacciNumber } from "../src/components/method.controller";
test('should return 1', () => {
    const result = findFibonacciNumber(1);
    expect(result).toBe(1);
  });