const container = document.querySelector("#container");

const text = document.querySelector("#text");
const buttons = container.getElementsByTagName("button");

let themeRedBtn = document.querySelector("#themeRed");
let themeDarkBtn = document.querySelector("#themeDark");
let themeGreenBtn = document.querySelector("#themeGreen");
let themeResetBtn = document.querySelector("#themeReset");

themeDarkBtn.style.backgroundColor = "black";
themeDarkBtn.style.color = "white";

themeRedBtn.style.backgroundColor = "#900000";
themeRedBtn.style.color = "white";

themeGreenBtn.style.backgroundColor = "#88E788";

themeDarkBtn.addEventListener("click", () => {
  container.style.backgroundColor = "black";
  container.style.color = "white";
  text.style.color = "white";
  text.style.fontFamily = "Verdana";
  document.body.style.backgroundColor = "black";
});
themeRedBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#900000";
  container.style.color = "white";
  text.style.color = "white";
  text.style.fontFamily = "Cursive";
  document.body.style.backgroundColor = "#900000";
});
themeGreenBtn.addEventListener("click", () => {
  container.style.backgroundColor = "#88E788";
  container.style.color = "white";
  text.style.color = "black";
  text.style.fontFamily = "Times New Roman";
  document.body.style.backgroundColor = "#88E788";
});
themeResetBtn.addEventListener("click", () => {
  container.style.backgroundColor = "";
  container.style.color = "";
  text.style.color = "black";
  text.style.fontFamily = "sans-serif";
  document.body.style.backgroundColor = "lightgray";
});
