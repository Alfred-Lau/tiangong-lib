/**
 * @jest-environment jsdom
 */
import { removeHtmlTag } from "../../src/dom/removeHtmlTag";

test("should return right string", () => {
  const targetString = "test string";
  const ret = removeHtmlTag(targetString);
  expect(ret).toBe(targetString);
});
