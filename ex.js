function sumInput() {
  //un array gol unde se va stoca suma elem
  let arrayInput = [];

  //atata timp cat user-ul introduce un numar - afiseaza un prompt
  while (true) {
    //let value = prompt('A number please?');
    //termina - BREAK - de intrebat cand user introduce o val ce e un string gol, o val non-numeric sau apasa pe cancel
    if (typeof value === 'string' || value === null) {
      console.log(value);
      break;
    }

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

function delay(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

//delay(10000).then(() => alert('runs after 3 seconds'));

function loadScript(src) {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript(
  'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js'
);

promise.then(
  (script) => console.log(`${script.src} is loaded!`),
  (error) => console.log(`Error: ${error.message}`)
);

promise.then((script) => console.log('Another handler...'));
console.log('ultima linie');