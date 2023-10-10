import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Catch'em Bears!";
const buttonName = "&#128059;";
let bearCounter: number = 0;

document.title = gameName;

// h1
const header: HTMLHeadingElement = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

// increment button
const bearButton: HTMLButtonElement = document.createElement("button");
bearButton.className = "bearButton";
bearButton.type = "button";
bearButton.innerHTML = buttonName;
bearButton.addEventListener("click", bearOnClicked);
app.append(bearButton);

// number display
const bearCounting: HTMLDivElement = document.createElement("div");
bearCounting.textContent = `${getBearCount()} bears`;
app.append(bearCounting);

// skill button
const skillButton: HTMLButtonElement = document.createElement("button");
skillButton.className = "skillButton";
skillButton.type = "button";
skillButton.textContent = "Cost 10: bear trap (honey)";
skillButton.addEventListener("click", skillOnClicked);
app.append(skillButton);

if (bearCounter < 10) {
  skillButton.disabled = true;
}

window.requestAnimationFrame(frameFunction);

function bearOnClicked() {
  bearCounter += 1;
  bearCounting.textContent = `${getBearCount()} bears`;
}

function skillOnClicked() {
  itemBought = true;
  bearCounter -= 10;
  bearCounting.textContent = `${getBearCount()} bears`;
}

function getBearCount() {
  return bearCounter;
}

let then: number = performance.now();
let timer: number = 0;
let itemBought: boolean = false;

function frameFunction() {
  timer += performance.now() - then;
  if (timer >= 1000 && itemBought == true) {
    bearCounter += 1;
    bearCounting.textContent = `${getBearCount()} bears`;
    timer = 0;
  }
  skillButton.disabled = bearCounter < 10;

  then = performance.now();
  window.requestAnimationFrame(frameFunction);
}
