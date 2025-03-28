// Loops o bucles
// Los bucles son estructuras de control que nos permiten repetir una o varias instrucciones un número determinado de veces. En JavaScript tenemos varios tipos de bucles:

// for

for (let i = 0; i < 5; i++) {
  // Código a repetir
  console.log(`Hola ${i}`);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  // Código a repetir
  console.log(`Elemento: ${numbers[i]}`);
}

// while

let i = 0;
while (i < 5) {
  // Código a repetir
  console.log(`Hola ${i}`);
  i++;
}

// Bucle infinito
// while(true) {

// }

// do-while
i = 6;
do {
  // Código a repetir
  console.log(`Hola ${i}`);
  i++;
} while (i < 5);

// for of
let myArray = [1, 2, 3, 4];
let mySet = new Set(["Aarón", "Pesqueira", 45, true, "AaronPFDev"]);
let myMap = new Map([
  ["name", "Aarón"],
  ["age", 45],
  ["isDeveloper", true],
]);

let myString = "¡Hola, JavaScript";

for (let valor of myArray) {
  console.log(valor);
}

for (let valor of mySet) {
  console.log(valor);
}

for (let valor of myMap) {
  console.log(valor);
}

for (let valor of myString) {
  console.log(valor);
}

// Buenas prácticas

// break y continue
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  } else if (i == 7) {
    break;
  }
  console.log(`Hola ${i}`);
}
