import { isPlainObject, isNotNullOrUndefined } from "../../src/type";

test("should return true when provide an object not null and undefined", () => {
  const target = {};
  const NullObject = null;
  const undefinedArg = undefined;
  expect(isPlainObject(target)).toBeTruthy();
  expect(isPlainObject(NullObject)).toBeFalsy();
  expect(isPlainObject(undefinedArg)).toBeFalsy();
});

test("should return true when provide an object not null and undefined", () => {
  const targetPrimary = 100;
  const targetObject = [] as const;
  const NullObject = null;
  const undefinedArg = undefined;
  expect(isNotNullOrUndefined(targetPrimary)).toBeTruthy();
  expect(isNotNullOrUndefined(targetObject)).toBeTruthy();
  expect(isNotNullOrUndefined(NullObject)).toBeFalsy();
  expect(isNotNullOrUndefined(undefinedArg)).toBeFalsy();
});
