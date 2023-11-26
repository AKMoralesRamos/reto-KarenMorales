import { describe, expect, test } from "@jest/globals";
import CalculatorTotal from "../src/components/method.jsx";

describe("test for the method of CalculatorTotal", () => {
  test("should return 0 when n = 1", () => {
    const n = 1;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(-0);
  });

  test("should return 0 when n = 2", () => {
    const n = 2;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(0);
  });

  test("should return 4.714285714285714 when n = 3", () => {
    const n = 3;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(4.714285714285714);
  });

  test("should return 11.142857142857142 when n = 4", () => {
    const n = 4;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(11.142857142857142);
  });

  test("should return 17.485714285714284 when n = 5", () => {
    const n = 5;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(17.485714285714284);
  });

  test("should return 20.357142857142858 when n = 6", () => {
    const n = 6;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(20.357142857142858);
  });

  test("should return 22.747252747252748 when n = 7", () => {
    const n = 7;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(22.747252747252748);
  });

  test("should return 24.857142857142858 when n = 8", () => {
    const n = 8;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(24.857142857142858);
  });

  test("should return 21.88235294117647 when n = 9", () => {
    const n = 9;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(21.88235294117647);
  });

  test("should return 20.758441558441557 when n = 10", () => {
    const n = 10;
    const result = CalculatorTotal.calculatorFromN(n);
    expect(result).toBe(20.758441558441557);
  });
});
