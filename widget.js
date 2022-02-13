const rootDiv = document.createElement("div");
const widgetHtml = '<p style="color: red">Hello World!</p>'
rootDiv.innerHTML = widgetHtml;
document.querySelector("header").appendChild(rootDiv);