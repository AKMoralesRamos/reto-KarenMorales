import { expect, test } from "@jest/globals";
import {
  findPrimeNumber,
  findTriangularNumber,
  findFibonacciNumber,
} from "../src/components/method.controller";

test("should return 23 when n = 7", () => {
  const n = 7
  const result = findPrimeNumber(n);
  expect(result).toBe(23);
});

test("should return 6 when n = 5", () => {
  const n = 5
  const result = findTriangularNumber(n);
  expect(result).toBe(6);
});

test("should return 1 when n = 1", () => {
  const n = 1
  const result = findFibonacciNumber(n);
  expect(result).toBe(1);
});
