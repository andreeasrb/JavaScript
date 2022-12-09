//MAP and SET
//TASK 1
// o functie ce returneaza un ARRAY cu items unice ale array ului
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
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
//console.log(unique(values));

// TASK 2 - filter anagrams
// anagrams = cuvinte ce contin aceleasi litere, dar in ordine diferita
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

// TASK 3 - iterable keys
// get an array of map.keys() in a variable si apoi sa aplicam metode specifice array-ului - push

let map = new Map();

map.set('name', 'john');

//array.from - metoda de a face un real array pentru a putea folosi si metodele
let keys = Array.from(map.keys());

keys.push('more');
