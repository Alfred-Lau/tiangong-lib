export function removeHtmlTag(html: string): string {
  const ele = document.createElement("div");
  ele.innerHTML = html;
  return ele.textContent || ele.innerText;
}

export function removeHtmlTagNoImage(html: string): string | boolean {
  const tmpContainer = document.createElement("div");
  tmpContainer.innerHTML = html;
  const isImg = html && html.indexOf("img") > -1;
  return tmpContainer.textContent || tmpContainer.innerText || isImg;
}

// 去除html标签，不含<br>
export function removeHtmlTagHasBr(html: string): string {
  const filterHtml = html.replace(/<(?!\/?br\/?.+?>|\/?\/p.+?>)[^<>]*>/gi, "");
  const tmpHtml = filterHtml
    .replaceAll("<br />", "\n")
    .replaceAll("</p>", "\n")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&#39;", "’")
    .replaceAll("&quot;", '"');
  return tmpHtml;
}
