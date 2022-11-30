// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let schedule = {};
schedule['8:30'] = 'get up';
schedule['7'] = ' ';

function hasValue(obj) {
  if ('8:30' in obj) {
    return true;
  }
  return false;
}
console.log("Schedule obj has key '8.30:' " + hasValue(schedule));

function hasValue2(obj) {
  if ('8' in obj) {
    return true;
  }
  return false;
}
//alert(hasValue2(schedule));

function isEmpty(obj) {
  let result;
  for (let key in obj) {
    result = key;
    console.log('Result false: ' + result);
    return false;
  }
  console.log('Result: ' + result);
  return true;
}
console.log('schedule obj isEmpty: ' + isEmpty(schedule));

schedule = {};
console.log('schedule obj isEmpty: ' + isEmpty(schedule));

//Sum all salaries and store in the var "sum"
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function calculateSalary(obj) {
  if (isEmpty(obj) == true) {
    return 0;
  }

  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

console.log('salary sum with obj salaries: ', calculateSalary(salaries));

console.log('salary sum with obj empty: ', calculateSalary({}));

//console.log('Sum: ' + sum);

//a function that multplies all numeric prop val of obj by 2

//sa return un obiect nou, cu rezultatul valorilor
//function multiplyNumeric(obj) {
//for (let key in obj) {
//if (typeof obj[key] == 'number') {
//let newNumber = {};
//newNumber[key] = obj[key] * 2;
//return newNumber
//}
//}
//}

//var 1

let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  // - creez un obiect gol, -pt a nu modifica val originale
  // se face clonarea si crearea de obiect nou cu valorile de la obj
  let menuDuplicate = Object.assign({}, obj); 
  
  //un loop prin keys ale obj nou
  // OPTIMIZARE - se poate optimiza cu una din metodele clasei Object 
  for (let key in menuDuplicate) {
    //verficiam daca tipul obj[key] este numar
    if (typeof menuDuplicate[key] == 'number') {
      //multiplicam cu 2 val numerice ale obj[key]
      //si le salvam in obiectul creat
      menuDuplicate[key] = menuDuplicate[key] * 2;
    }
  }
  //returneaza obiectul nou creat modificat
  return menuDuplicate;
}

console.log('Menu duplicated: ', multiplyNumeric(menu));
console.log('Menu: ', menu);

//var2
//Object.assign(menuDuplicate, menu);
//console.log('Menu duplicate obj before multiplication: ', menuDuplicate);

//multiplyNumeric(menuDuplicate);
//console.log('Menu duplicate obj after multiplication: ', menuDuplicate);


