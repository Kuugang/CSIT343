console.log("Hello World");

// [SECTION] DOM const welcomeText = document.getElementById("welcome"); console.log(welcomeText);

const welcomeText = document.getElementById("welcome");
console.log(welcomeText);
const redButton = document.querySelector("#redBtn");
const blkButton = document.querySelector("#blkBtn");
const greenBtn = document.querySelector("#greenBtn");
const blueButton = document.querySelector("#blueBtn");

// querySelector vs getElementsBy(ById, ByClassName, etc)
// Returns: querySelector - first matching element while getElementsBy - live collection (HTML Collection) of all matching elements.
// SelectorType: querySelector - CSS Selectors (.class, #id, tag) while get getElementsBy - Uses specific element names
// Use Case: querySelector - single specific element while getElementsBy - multiple elements.
// Performance: querySelector - Slower for multiple elements while getElementBy - faster for retrieving multiple elements.

// [SECTION] DOM Object Properties
// .innerHTML property contains the text content of an element as well as the tags of other elements inside the element.

welcomeText.innerHTML = "I am Angelito Quiambao";

//.style property actually contains the elements visual properties.
welcomeText.style.color = "red";
welcomeText.style.color = "green";
welcomeText.style.fontSize = "80px";

function changeColorToRed() {
  welcomeText.style.color = "red";
}

function changeColorToDefault() {
  welcomeText.style.color = "black";
}

// [SECTION] Event Listeners
// Whenever a user interacts with a web page, this action is considered as an event.
// click, hover, page load, or keypress

redButton.addEventListener("click", changeColorToRed);
blkButton.addEventListener("click", changeColorToDefault);
blueButton.addEventListener("click", () => {
  welcomeText.style.color = "blue";
});

greenBtn.addEventListener("click", () => {
  welcomeText.style.color = "green";
});

/*
    Mini Activity (5 mins)
 
    1. Add 2 new buttons to the HTML with text as "Change to Blue" and "Change to Green".
        -Add appropriate ids to both elements as identifiers
    2.In the JS, select the buttons using querySelector()
    3. Attach a click event using addEventListener() where upon clicking:
        -Change to Blue button should change the color of the text to blue.
        -Change to Green button should change the color of the text to green.
    4. Take a screenshot of your browser and send it in the chat.
*/
