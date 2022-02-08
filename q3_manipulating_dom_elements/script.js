// USE THOSE VARIABLES TO MODIFY THE DOM ELEMENTS
let header = document.querySelector('h1').innerText = "Hello World!";
let important = document.querySelector('span#important');
let todo = document.querySelector('li.todo');

important.style.backgroundColor = "red";
todo.style.fontFamily = "verdana"
todo.style.fontSize = "16px";

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}