export function removeHtmlTag(html: string): string {
    const ele = document.createElement("div");
    ele.innerHTML = html;
    return ele.textContent || ele.innerText;
}
