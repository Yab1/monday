const html = document.querySelector("html") as HTMLHtmlElement;

function manageAttributes(darkMode: boolean): void {
  darkMode ? html.setAttribute("class", "dark") : html.removeAttribute("class");
}

export default manageAttributes;
