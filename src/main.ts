import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
const gameName = "Catch'em Bears!";
const buttonName = "&#128059;";
let then: number = Date.now();
let now: number = 0;
let fps: number = 0;
let itemBought: boolean = false;
let bearCounter: number = 0;
let bearGrowth: number = 0;
let cost: number = 10;

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

// rate display
const bearRate: HTMLDivElement = document.createElement("div");
bearRate.textContent = `${bearGrowth} bears / s`;
app.append(bearRate);

// skill button
const skillButton: HTMLButtonElement = document.createElement("button");
skillButton.className = "skillButton";
skillButton.type = "button";
skillButton.textContent = `Cost ${cost}: bear trap (honey)`;
skillButton.addEventListener("click", skillOnClicked);
app.append(skillButton);

if (bearCounter < cost) {
  skillButton.disabled = true;
}

window.requestAnimationFrame(frameFunction);

// functions
function bearOnClicked() {
  bearCounter += 1;
  bearCounting.textContent = `${getBearCount()} bears`;
}

function skillOnClicked() {
  itemBought = true;
  bearGrowth += 1;
  bearCounter -= cost;
  cost *= 1.15;
  bearCounting.textContent = `${getBearCount()} bears`;
  skillButton.textContent = `Cost ${cost}: bear trap (honey)`;
  bearRate.textContent = `${bearGrowth} bears / s`;
}

function getBearCount() {
  return bearCounter.toFixed(2);
}

function frameFunction() {
  now = Date.now();
  fps = Math.round(1000 / (now - then));
  then = now;
  // console.log(fps);
  if (itemBought == true) {
    bearCounter += bearGrowth / fps;
    bearCounting.textContent = `${getBearCount()} bears`;
    skillButton.textContent = `Cost ${cost}: bear trap (honey)`;
  }
  skillButton.disabled = bearCounter < cost;
  window.requestAnimationFrame(frameFunction);
}
