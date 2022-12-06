/** ARRAYS */

// TASK 4 - sum input numbers

function sumInput() {
  let arrayInput = [];

  while (true) {
    //let value = prompt("A number please?", 0);

    if (value === ' ' || value === null || !isFinite(value)) break;

    arrayInput.push(+value);
  }

  let sum = 0;
  for (let arrayInputs of arrayInput) {
    sum += arrayInputs;
  }
  return sum;
}
//alert( sumInput() );

/** ARRAYS METHODS */
// TASK 1 - translate border-left-width to borderLeftWidth

function camelize(str) {
  //remove all dashes- each word after dash becomes uppercased
  return str
    .split('-')
    .map(
      //face loop prin toate, returneaza un array cu rezultatele
      // daca index e 0 (prima litera) lasa asa word-ul, daca nu, ia prima litera si fa upperCase si adauga restul cuvantului de la index 1
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join('');

  // let newArray = str.split('-');
  // for(let items of newArray){
  //   newArray[0] = items.toUpperCase();
  // }

  // newArray[0].toUpperCase();
  // console.log(newArray);
  // return newArray.join('');
}
console.log(camelize('background-color'));

//TASK 2 - filter range
// o functie ce prim un array, se uita pentru elemente cu valoarea >= a si <= b si returneaza ca rezultat un array
// sa nu modifice array-ul, sa returneze array nou

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

console.log('filter range: ', filterRange([5, 3, 8, 1], 1, 4));

//TASK 3 - filter range "in place"
// o functie ce primeste un array si sterge toate valorile cu exceptia celor care sunt intre a si b: a <= arr[i] <=b

function filterRangeInPlace(arr, a, b) {
  //iteram prin array si salvam din array val arr[i] intr-un variabila
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    //daca vreun element e mai mic decat a, sau mai mare decat b fa splice si se va sterge.
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log('filter range in place:', arr);

// TASK 4 - sort in decreasing order
function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}
let arrDescr = [1, 5, 6];
console.log('Sort in decreasing order: ', arrDescr.sort(compareNumeric));

// TASK 5 - copy and sort array
//- o functie sa returneze o copie -- SLICE

function copySorted(arr) {
  //sa returneze o copie a array si sortata, iar 'arr' sa fie nemodificata
  return arr.slice().sort();
}

let arrCopied = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arrCopied);
console.log(arrCopied);
console.log(sorted);

// TASK 6 - create an extendable calculator
// constructor function Calculator

function Calculator() {
  //metoda urm trebuie sa stie ce fac + si -
  this.operations = {};

  //metoda ce ia string in formatul "number operator number" cu space-delimited - returneaza rezultatul
  this.calculate = function (str) {
    a = str[0].split(' ');
    oper = str[1].split(' ');
    b = str[2].split(' ');

    return;
  };

  this.addMethod = function (name, func) {};
}
