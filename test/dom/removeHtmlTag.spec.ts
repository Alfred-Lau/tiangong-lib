/**
 * @jest-environment jsdom
 */
import { removeHtmlTag } from "../../src/dom/removeHtmlTag";

test("should return right string", () => {
    const targetString = "Unkown table &#39;triggers&#39;";
    const pureString = "Unkown table 'triggers'";
    const ret = removeHtmlTag(targetString);
    expect(ret).toBe(pureString);
});
