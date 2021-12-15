import get from "../../src/lodash/get";

test("should return value according to the key", () => {
  const target = { name: "fh" };
  expect(get(target, "name")).toBe("fh");
});
