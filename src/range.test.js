const { range } = require("./range");

describe("range", () => {
  test("generates a range of numbers from start to end", () => {
    const result = [...range(1, 5)];
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("supports different step values", () => {
    const result = [...range(0, 10, 2)];
    expect(result).toEqual([0, 2, 4, 6, 8]);
  });

  test("returns an empty array if start is greater than or equal to end", () => {
    const result = [...range(5, 5)];
    expect(result).toEqual([]);

    const result2 = [...range(6, 5)];
    expect(result2).toEqual([]);
  });
});
