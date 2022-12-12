/** ARRAYS */

// TASK 4 - sum input numbers
// o functie sumInput
function sumInput() {
  //un array gol unde se va stoca suma elem
  let arrayInput = [];

  //atata timp cat user-ul introduce un numar - afiseaza un prompt
  while (true) {
    //let value = prompt('A number please?', 0);
    //termina - BREAK - de intrebat cand user introduce o val ce e un string gol, o val non-numeric sau apasa pe cancel
    if (value === '' || value === null || !isFinite(value)) break;

    //adauga la array valoarea ultima numerica adaugata, ce e conv in numar
    arrayInput.push(+value);
  }

  //calculeaza suma valorilor adaugate deja in array
  let sum = 0;
  //iteram prin array pentru a face suma valorilor
  for (let arrayInputs of arrayInput) {
    sum += arrayInputs;
  }
  //returnam suma valorilor la final
  return sum;
}
//alert(sumInput());

/** ARRAY METHODS */
// TASK 1 - translate border-left-width to borderLeftWidth
//o functie camelize(str) ce schimba cuvintele despartite cu '-'

function camelize(str) {
  //remove all dashes- each word after dash becomes uppercased
  return (
    str
      //split- desparte string-urile si le aduce intr-un array
      //['background', 'color']
      .split('-')
      //transforma array-ul
      .map(
        //face loop prin toate, returneaza un array cu rezultatele
        // daca index e 0 (prima litera) lasa asa word-ul, daca nu, ia prima litera si fa upperCase si adauga restul cuvantului de la index 1
        (item, index) =>
          index == 0 ? item : item[0].toUpperCase() + item.slice(1)
      )
      // fa-le join back
      .join('')
  );
}
console.log('Camelize str: ', camelize('background-color'));
console.log('Camelize str: ', camelize('list-style-image'));

// TASK 2 - filter range
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

    //daca vreun element e in afara intervalului fa splice si sterge.
    if (value < a || value > b) {
      arr.splice(i, 1);
      i--; // update la index
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
  //metoda 'calculate' trebuie sa stie ce fac + si -
  //obiectul operations cu explicarea operatiilor +, -
  this.operations = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  //metoda ce ia string in formatul "number operator number" cu space-delimited - returneaza rezultatul
  this.calculate = function (str) {
    //split la str functiei pentru a avea un spatiu
    let splitStr = str.split(' '),
      //prima var cu indexul 0, + pentru a-l converti in nr
      a = +splitStr[0],
      //a doua var cu index 1
      oper = splitStr[1],
      //a treia var cu indexul 2, + pentru a-l converti in nr
      b = +splitStr[2];

    return this.operations[oper](a, b);
  };

  //o metoda noua ce invata calc o noua operatie, ce ia operatorul name si functia ce va avea 2 argumente func(a, b) ce o implementeaza
  this.addMethod = function (name, func) {
    this.operations[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
console.log('Calculator: ', result);

// TASK 7 - Map to names
// un array de user objects, ce fiecare are proprietatea user.name
// scrie codul ce converteste intr-un array de nume

//obiecte
let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

//array cu obiectele de mai sus
let users = [john, pete, mary];
console.log('objects array:', users);

//converteste intr-un array cu nume
let names = users.map((item) => item.name);
console.log('objects names:', names);

// TASK 8 - Map to objects
//un array de user objects ce fiecare are - name, surname, id
//creeaza un alt array din el cu obiectele avand id, fullName = generat din name si surname

let johnn = { name: 'John', surname: 'Smith', id: 1 };
let petee = { name: 'Pete', surname: 'Hunt', id: 2 };
let maryy = { name: 'Mary', surname: 'Key', id: 3 };

let users2 = [johnn, petee, maryy];

//un alt array din users2 cu obiectele avand id, fullName = name + surname
let usersMapped = users2.map(({ name, surname, id }) => ({
  fullName: `${name} ${surname}`,
  id: id,
}));
console.log('Map to obj fullName:', usersMapped[0].fullName);
console.log('Map to obj id:', usersMapped[0].id);

// TASK 9 - sort users by age
// o fucntie sortByAge(users) ce ia un array de obj cu proprietatea age si sorteaza-i dupa age

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let arr2 = [pete, john, mary];

sortByAge(arr2);
console.log(arr2[0].name);
console.log(arr2[1].name);
console.log(arr2[2].name);

// TASK 10 - Shuffle an array
// o functie shuffle(array) ce face shuffle(randomly reorders) elem dintr-un array -- cu SORT, math.random

function shuffle(array) {}

let arrNum = [1, 2, 3];

// TASK 13 - Get average age
// o functie getAverageAge(users) ce aduce un array de obiecte cu propr age si returneaza average age
// formula - ( age1 + age2 + ... + ageN ) / N

function getAverageAge(users) {
  //reduce - 2 argumente, initial value a lui sum e 0, user e primul elem din array si luam proprietatea age, user.age. impartim la nr de user, length
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}
let john3 = { name: 'John', age: 25 };
let pete3 = { name: 'Pete', age: 30 };
let mary3 = { name: 'Mary', age: 29 };

let arr3 = [john, pete, mary];
console.log('get average age:', getAverageAge(arr3));

// TASK 12 - Filter unique array members
//o functie ce sa returneze un array cu unique items of array

// function unique(arrUnique) {
//   return Array.from(new Set(arrUnique));
// }

function unique(arrUnique) {
  let unique = [];

  //loop prin array
  for (let string of arrUnique) {
    //daca nu exista elementul(stringul) in array-ul creat - (include)
    if (!unique.includes(string)) {
      //fa push si adauga-l in array-ul creat
      unique.push(string);
    }
  }
  //returneaza array-ul creat cu valorile finale
  return unique;
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log('unique strings: ', unique(strings));

// TASK 13 - created keyed obj from array
// o functie groupById(arr) ce creaza un OBIECT din array cu id as key si array items as Values

function groupById(arrKeyed) {
  return arrKeyed.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let users3 = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users3);
console.log(usersById);
