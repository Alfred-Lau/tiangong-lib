export default function getBase64(
  img: File,
  cb: (file: string | ArrayBuffer | null) => void
): void {
  const reader = new FileReader();
  reader.addEventListener("load", () => cb(reader.result));
  reader.readAsDataURL(img);
}
