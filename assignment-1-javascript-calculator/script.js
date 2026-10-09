function calculate(a, b, op) {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/":
      if (b === 0) throw new Error("Can't divide by zero. Change the second number.");
      return a / b;
    default:
      throw new Error("Unknown operation");
  }
}

const a_ = document.getElementById("a");
const b_ = document.getElementById("b");
const out = document.getElementById("out");
const e = document.getElementById("e");

document.querySelectorAll("[data-op]").forEach(function (btn) {
  btn.onclick = function () {
    const a = parseFloat(a_.value);
    const b = parseFloat(b_.value);
    e.textContent = "";
    if (isNaN(a) || isNaN(b)) {
      e.textContent = "Enter both numbers first.";
      return;
    }
    try {
      out.textContent = +calculate(a, b, btn.dataset.op).toFixed(8);
    } catch (x) {
      e.textContent = x.message;
    }
  };
});
