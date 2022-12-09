//TASK 1 - destructuring assignment
// a user obj:
let user = {
  name: 'John',
  years: 30,
};

//scrie destructuring assignment ce citeste:
// propr name in variabila name
// propr years in variabila age
// propr isAdmin in variabila isAdmin (false, nu exista propr)

let { name, years: age, isAdmin = false } = user;

console.log('nume:', name);
console.log('age:', age);
console.log('isAdmin:', isAdmin);

// TASK 2- the maximal salary
// a salary obj:
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

//o functie ce returneaza numele a top-paid person.
//daca salariul e empty, return null
//daca sunt mai multe top-paid returneaza oricare

function topSalary(salaries) {
  //daca salariul e empty, return null
  let salaryTop = 0;
  let salaryName = null;

  //object.entries and destructuring sa iteram peste valorile key/value
  for (let [key, value] of Object.entries(salaries)) {
    //daca valorile salariilor mai mari decat salaryMax
    if (salaryTop < value) {
      salaryTop = value;
      salaryName = key;
    }
  }
  //returneaza numele celui top-paid
  return salaryName;
}
console.log('Numele celui cu salariul cel mai mare:', topSalary(salaries));
