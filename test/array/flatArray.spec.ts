import { flatArray_V1 } from "../../src/array/flatArray";

test("should flatten by recursion", () => {
  const target = [1, 2, ["abc", true], { name: "fh" }];
  expect(flatArray_V1(target)).toStrictEqual([
    1,
    2,
    "abc",
    true,
    { name: "fh" },
  ]);
});
