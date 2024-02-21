// sum.test.js
import { expect, test } from "vitest";
import { sum, lastIndex, isEven, isOdd } from "./app.js";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("returns the last index of an array", () => {
  expect(lastIndex([1, 2, 3, 3, 2])).toBe(2);
});

test("check if a number is even", () => {
  expect(isEven(2)).toBeTruthy();
});

test("check if a number is odd", () => {
  expect(isOdd(3)).toBeTruthy();
});
