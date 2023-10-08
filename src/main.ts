import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Ryan's game";
const buttonName = "&#128059;";

document.title = gameName;

const header = document.createElement("h1");
const button = document.createElement("button");
header.innerHTML = gameName;
button.innerHTML = buttonName;
app.append(header);
app.append(button);
