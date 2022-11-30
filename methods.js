// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('methods');
appDiv.innerHTML = `<h1>Methods</h1>`;

let user = {
  name: 'John',
  age: 30,
};

/**
 * Varianta 1 - cu Function expression ca metoda, atribuita proprietatii user.sayHi a obiectului
 */

user.sayHi = function () {
  console.log('Buna cu function expression');
};
user.sayHi();

/**
 * Varianta 2 - cu pre-declared function as a method
 */
//prima data e declarata functia
function sayHi() {
  console.log('buna');
}

//apoi adaugam functia ca si metoda
user.sayHi = sayHi;
//apelam functia
user.sayHi();
console.log('hei');
