import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Ryan's game";
const buttonName = "&#128059;";
let bearCounter: number = 0;

document.title = gameName;

const header: HTMLHeadingElement = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const bearButton: HTMLButtonElement = document.createElement("button");
bearButton.className = "bearButton";
bearButton.type = "button";
bearButton.innerHTML = buttonName;

app.append(bearButton);

const bearCounting: HTMLDivElement = document.createElement("div");
bearCounting.textContent = getBearCount();

bearButton.addEventListener("click", onClicked);
app.append(bearButton);
app.append(bearCounting);

function onClicked() {
  bearCounter += 1;
  bearCounting.textContent = getBearCount();
}

function getBearCount() {
  return `${bearCounter} bears`;
}

setInterval(function () {
  bearCounter += 1;
  bearCounting.textContent = getBearCount();
}, 4000);
