counter = 0
let increment = document.querySelector('#increment')
    .addEventListener('click', function() {
        counter++;
        if (counter > 10) {
            counter = 10;
        }
        boxColor();
        document.querySelector('#box').innerText = counter;
    })

let decrement = document.querySelector('#decrement')
    .addEventListener('click', function(){
        counter--;
        if (counter < 0) {
            counter = 0;
        }
        boxColor();
        document.querySelector('#box').innerText = counter
    })

let reset = document.querySelector('#reset')
    .addEventListener('click', function(){
        counter = 0
        boxColor()
        document.querySelector('#box').innerText = counter
    })

function boxColor() {
    if (counter % 2 == 0) {
    document.querySelector('#box').style.backgroundColor = "green";
} else {
    document.querySelector('#box').style.backgroundColor = "red";
}
}
