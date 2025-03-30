// Funciones

function myFunc() {
  console.log("¡Hola Función!");
}

for (let i = 0; i < 5; i++) {
  myFunc();
}

// Con parámetros
function myFuncWithParams(name) {
  console.log(`¡Hola ${name}!`);
}

myFuncWithParams("Aarón");

// Funciones anónimas
const myFunc2 = function (name) {
  console.log(`¡Hola ${name}!`);
};
myFunc2("AaronPFDev");

// Arrow Functions
const myFunc3 = (name) => {
  console.log(`¡Hola ${name}!`);
};
myFunc3("AaronPFDev");

const myFunc4 = (name) => console.log(`¡Hola ${name}!`);
myFunc4("AaronPFDev");

// Parámetros

function suma(a, b) {
  console.log(a + b);
}
suma(5, 10);

function defaultSuma(a = 0, b = 0) {
  console.log(a + b);
}

defaultSuma();
defaultSuma(4);
defaultSuma(4 + 6);

// Retorno de valores
function producto(a, b) {
  return a * b;
}

producto(5, 10); // No se muestra nada porque no se imprime el resultado
let result = producto(5, 10); // Se guarda el resultado en la variable result
console.log(result); // Se imprime el resultado

// Funciones anidadas
function extern() {
  console.log("función externa");
  function intern() {
    console.log("función interna");
  }
  intern();
}

extern(); // Llama a la función externa
// intern(); // Llama a la función interna (no se puede llamar porque no está definida en el ámbito global)

// Funciones de orden superior
function applyFunction(func, param) {
  func(param);
}
applyFunction(myFunc4, "Función de orden superior"); // Llama a la función myFunc4 con el parámetro "Función de orden superior"

// forEach
const array = [1, 2, 3, 4, 5];

const set = new Set(["Aarón", "Pesqueira", "AaronPFDev", 45, true]);

const map = new Map([
  ["name", "Aarón"],
  ["email", "aronaldo9@hotmail.com"],
  ["age", 45],
]);

array.forEach((value) => {
  console.log(value); // Imprime cada elemento del array
});
// Funciona tb con sets y maps
set.forEach((value) => console.log(value)); // Imprime cada elemento del set
map.forEach((value) => console.log(value)); // Imprime cada elemento del map
