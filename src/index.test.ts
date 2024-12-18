import { add, divide, multiply, subtract } from "./index";

describe("Tests", () => {
  it("should expect add to work", () => {
    expect.assertions(2);

    expect(add(1, 2)).toBe(3);
    expect(add(1, 2)).not.toBe(4);
  });

  it("should expect subtract to work", () => {
    expect.assertions(2);

    expect(subtract(2, 1)).toBe(1);
    expect(subtract(2, 1)).not.toBe(2);
  });

  it("should expect multiply to work", () => {
    expect.assertions(2);

    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2, 2)).not.toBe(5);
  });

  it("should expect divide to work", () => {
    expect.assertions(2);

    expect(divide(4, 2)).toBe(2);
    expect(divide(4, 2)).not.toBe(3);
  });
});
