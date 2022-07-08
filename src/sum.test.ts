import { add } from "./sum";

describe("Sum", () => {
  test("Should sum correctly", () => {
    expect(add(1, 3)).toBe(5);
  });
});
