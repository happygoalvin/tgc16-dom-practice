let header = document.querySelector('h1')
header.style.color = "green";

let finished = document.querySelector('li.finished')
finished.innerText = "Repay credit card debt"

let urgent = document.querySelector('li#urgent');
urgent.style.border = "2px solid black"; 

let underline = document.querySelector('span.emphasis')
underline.style.textDecoration = "underline";

let emphasis = document.querySelector('p.emphasis')
emphasis.style.backgroundColor = "orange";
emphasis.style.fontSize = "32px";
emphasis.style.lineHeight = "24px";

let todo = document.querySelector('li#urgent span.todo')
todo.style.backgroundColor = "yellow";

let h2 = document.querySelector('h2').innerHTML = "<span class=\"greetings\">About Us</span>";