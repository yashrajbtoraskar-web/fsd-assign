const rules = {
  name: v => /^[A-Za-z ]{3,}$/.test(v) ? "" : "Use at least 3 letters. Numbers aren't allowed.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? "" : "Enter an email like name@example.com.",
  phone: v => /^[6-9]\d{9}$/.test(v) ? "" : "Enter 10 digits starting with 6, 7, 8 or 9.",
  pw: v => (v.length >= 8 && /[A-Z]/.test(v) && /[0-9]/.test(v)) ? "" : "Use 8+ characters with one capital letter and one number.",
};

function check(id) {
  const i = document.getElementById(id);
  const m = rules[id](i.value.trim());
  i.nextElementSibling.textContent = m;
  i.className = m ? "bad" : "good";
  return !m;
}

Object.keys(rules).forEach(id => {
  document.getElementById(id).oninput = () => check(id);
});

document.getElementById("f").onsubmit = function (e) {
  e.preventDefault();
  const allValid = Object.keys(rules).map(check).every(Boolean);
  document.getElementById("ok").hidden = !allValid;
};
