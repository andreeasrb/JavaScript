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
console.log(unique(values));

// TASK 2 - filter anagrams
// anagrams = cuvinte ce contin aceleasi litere, dar in ordine diferita
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

function aclean(arr) {
  let sortedWords = {};
  //un loop sa iterezi peste fiecare item din arr
  for (let item of arr) {
    let sorted = 0;
    //un loop pentru fiecare cuvant sa iterezi peste fiecare caracter din cuvant
    for(let char of item) {
      if(item.includes(char)){
        
      }
    }
  }
}

// let sortedWords = {};
// for (let item1 of arr) {
//   let sorted = 0;
//     if (item1.length == item2.length) {
//       return item1 + " " + item2;
//     }
// }


function aclean2(arr) {
  let sortedWords = new Map();

  for (let item of arr){
    let words = item
        .toLowerCase()
        .split('') //pe litere
        .sort() //in ordine alfabetica
        .join(''); //lipeste
    //adauga la map val dupa key
    sortedWords.set(words, item);
  }

  return Array.from(sortedWords.values());
}

console.log(aclean(arr));
console.log(aclean2(arr));

// TASK 3 - iterable keys
// get an array of map.keys() in a variable si apoi sa aplicam metode specifice array-ului - push

let map = new Map();

map.set('name', 'john');

//array.from - metoda de a face un real array pentru a putea folosi si metodele
let keys = Array.from(map.keys());

keys.push('more');
