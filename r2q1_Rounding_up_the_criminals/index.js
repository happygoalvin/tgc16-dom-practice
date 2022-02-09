let a = document.querySelectorAll('.box a!undercover')
for (let arrested of a) {
arrested.style.backgroundColor = "red";
arrested.innerHTML = "<p>jailed</p>";
}

let u = document.querySelectorAll('.box a undercover')
for (let undercover of u){
undercover.style.backgroundColor = "yellow";
}