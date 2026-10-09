const l = document.getElementById("l");
const em = document.getElementById("em");
const t = document.getElementById("t");

function sync() {
  em.style.display = l.children.length ? "none" : "block";
}

document.getElementById("f").onsubmit = function (ev) {
  ev.preventDefault();
  const v = t.value.trim();
  if (!v) return;

  const li = document.createElement("li");
  const s = document.createElement("span");
  const d = document.createElement("button");

  s.textContent = v;
  s.onclick = function () { li.classList.toggle("done"); };

  d.textContent = "Delete";
  d.className = "ghost";
  d.onclick = function () { li.remove(); sync(); };

  li.append(s, d);
  l.appendChild(li);
  t.value = "";
  t.focus();
  sync();
};

sync();
