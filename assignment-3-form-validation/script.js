var rules={name:function(v){return /^[A-Za-z ]{3,}$/.test(v)?"":"Use at least 3 letters. Numbers aren't allowed."},
email:function(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)?"":"Enter an email like name@example.com."},
phone:function(v){return /^[6-9]\d{9}$/.test(v)?"":"Enter 10 digits starting with 6, 7, 8 or 9."},
pw:function(v){return v.length>=8&&/[A-Z]/.test(v)&&/[0-9]/.test(v)?"":"Use 8+ characters with one capital letter and one number."}};
function check(id){var i=document.getElementById(id),m=rules[id](i.value.trim());i.nextElementSibling.textContent=m;i.className=m?"bad":"good";return !m}
Object.keys(rules).forEach(function(id){document.getElementById(id).oninput=function(){check(id)}});
document.getElementById("f").onsubmit=function(e){e.preventDefault();var all=Object.keys(rules).map(check).every(Boolean);document.getElementById("ok").hidden=!all};
