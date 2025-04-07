const textarea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textarea.oninput = function (event) {
  const inputValue = event.target.value;
  console.log(inputValue.length);

  if (inputValue.length > 100) {
    textarea.disabled = true;
    charCount.innerHTML = `Char Count: ${inputValue.length}/100 ("Character Limit Reached")`;
    charCount.style.color = "red";
  } else {
    textarea.disabled = false;
    charCount.innerHTML = `Char Count: ${inputValue.length}/100`;
  }
};
