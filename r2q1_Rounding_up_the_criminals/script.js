// PLACE YOUR CODE HERE
let a = document.querySelectorAll('div.box.a')
for (let arrested of a) {
 arrested.style.backgroundColor = "red";
 let taskElement = document.createElement("span")
 taskElement.innerHTML = "jailed"
 arrested.appendChild(taskElement)
}

let u = document.querySelectorAll('div.box.a.undercover')
for (let undercover of u){
undercover.style.backgroundColor = "yellow";
}

