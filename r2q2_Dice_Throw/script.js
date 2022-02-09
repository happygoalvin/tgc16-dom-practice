// PLACE YOUR CODE HERE
let roll = document.querySelector('#btn');
roll.addEventListener('click', function(){
    // generate a random number between 1 to 6
   let randomNumber = Math.floor(Math.random() * 6 + 1);

   // 1. select the container that we want add into
   let p = document.querySelectorAll('.box');   

   // 2. Append in the new random number
   p[0].innerHTML = randomNumber
   p[1].innerHTML = randomNumber

   let result = document.querySelector('#result');
   result.innerText = parseFloat(p[0].innerHTML) + parseFloat(p[1].innerHTML);
})



