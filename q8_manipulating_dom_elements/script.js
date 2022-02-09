// PLACE YOUR CODE HERE
let emphasis = document.querySelectorAll('.emphasis')
for (let font of emphasis) {
    font.style.fontFamily = "Verdana";
}

let strike = document.querySelectorAll('li.finished')
for (let textDeco of strike) {
    textDeco.style.textDecoration = "line-through";
}

let bgcolor = document.querySelectorAll('ul#low-priority li.todo')
for (let background of bgcolor) {
    background.style.backgroundColor = 'blue';
}

let alert = document.querySelectorAll('.alert')
for (let danger of alert) {
    danger.style.color = "red";
}
