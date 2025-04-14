const operands = document
  .getElementById("operands-container")
  .getElementsByTagName("input");
const operand1 = operands[0];
const operand2 = operands[1];

const operators = document
  .getElementById("operators-container")
  .getElementsByTagName("button");

const opPlus = operators[0];
const opMinus = operators[1];
const opMultiply = operators[2];
const opDivide = operators[3];
const result = document.getElementById("result");

const resultHistory = document.getElementById("result-history");
const btnRemoveHistory = document.getElementById("btn-remove-history");

const memoryButtons = document
  .getElementById("memory-buttons-container")
  .getElementsByTagName("button");
const btnMPlus = memoryButtons[0];
const btnMR = memoryButtons[1];
const btnMC = memoryButtons[2];
let memoryValue = null;

operand1.addEventListener("input", () => {
  if (
    /^\d*\.?\d+$/.test(operand1.value) &&
    /^\d*\.?\d+$/.test(operand2.value)
  ) {
    for (const el of operators) {
      el.disabled = false;
    }
    return;
  }

  for (const el of operators) {
    el.disabled = true;
  }
});

operand2.addEventListener("input", () => {
  if (
    /^\d*\.?\d+$/.test(operand1.value) &&
    /^\d*\.?\d+$/.test(operand2.value)
  ) {
    for (const el of operators) {
      el.disabled = false;
    }
    return;
  }

  for (const el of operators) {
    el.disabled = true;
  }
});

let history = [];

opPlus.addEventListener("click", () => {
  const h = {
    left: operand1.value,
    right: operand2.value,
    operation: "+",
    result: parseFloat(operand1.value) + parseFloat(operand2.value),
  };
  result.innerText = "Result: " + h.result;
  addHistory(h);
});

opMinus.addEventListener("click", () => {
  const h = {
    left: operand1.value,
    right: operand2.value,
    operation: "-",
    result: parseFloat(operand1.value) - parseFloat(operand2.value),
  };
  result.innerText = "Result: " + h.result;
  addHistory(h);
});

opMultiply.addEventListener("click", () => {
  const h = {
    left: operand1.value,
    right: operand2.value,
    operation: "*",
    result: parseFloat(operand1.value) * parseFloat(operand2.value),
  };
  result.innerText = "Result: " + h.result;
  addHistory(h);
});

opDivide.addEventListener("click", () => {
  let resultText;
  if (operand2.value == "0") {
    resultText = "Error: Division by zero";
  } else {
    resultText = parseFloat(operand1.value) * parseFloat(operand2.value);
  }
  const h = {
    left: operand1.value,
    right: operand2.value,
    operation: "/",
    result: resultText,
  };
  result.innerText = `Result: ${h.result}`;
  addHistory(h);
});

btnRemoveHistory.addEventListener("click", clearHistory);

btnMPlus.addEventListener("click", () => {
  if (history.length > 0) {
    memoryValue = history[history.length - 1].result;
  } else {
    alert("Memory is empty!");
  }
});

btnMR.addEventListener("click", () => {
  if (memoryValue !== null) {
    operand1.value = memoryValue;
  } else {
    alert("Memory is empty!");
  }
});

btnMC.addEventListener("click", () => {
  if (memoryValue !== null) {
    memoryValue = null;
  } else {
    alert("Memory is empty!");
  }
});

function addHistory(h) {
  btnRemoveHistory.disabled = false;
  history.push(h);
  const li = document.createElement("li");
  li.textContent = `${h.left} ${h.operation} ${h.right} = ${h.result}`;
  resultHistory.appendChild(li);
}

function clearHistory() {
  resultHistory.innerHTML = "";
}
