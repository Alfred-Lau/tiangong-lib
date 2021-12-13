import { isVideo } from "../../src/media/is";

test("should return true type url type a video source", () => {
    const wrongUrl = "return_false.img";
    const rightUrl = "return_true.mp4";
    expect(isVideo(wrongUrl)).toBe(false);
    expect(isVideo(rightUrl)).toBe(true);
});
