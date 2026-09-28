var l=document.getElementById("l"),em=document.getElementById("em"),t=document.getElementById("t");
function sync(){em.style.display=l.children.length?"none":"block"}
document.getElementById("f").onsubmit=function(ev){ev.preventDefault();var v=t.value.trim();if(!v)return;
var li=document.createElement("li"),s=document.createElement("span"),d=document.createElement("button");
s.textContent=v;s.onclick=function(){li.classList.toggle("done")};
d.textContent="Delete";d.className="ghost";d.onclick=function(){li.remove();sync()};
li.append(s,d);l.appendChild(li);t.value="";t.focus();sync()};
