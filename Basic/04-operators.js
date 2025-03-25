// Operadores

// Operadores aritméticos
let a = 5;
let b = 10;

console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicación
console.log(a / b); // División

console.log(a % b); // Módulo (resto de la división)
console.log(a ** b); // Exponente

a++; // Incremento
console.log(a);
b--; // Decremento
console.log(b);

// Operadores de asignación
let myVariable = 2;
console.log(myVariable);
myVariable += 2; // myVariable = myVariable + 2;
console.log(myVariable);
myVariable -= 2; // myVariable = myVariable - 2;
myVariable *= 2; // myVariable = myVariable * 2;
myVariable /= 2; // myVariable = myVariable / 2;
myVariable %= 2; // myVariable = myVariable % 2;
myVariable **= 2; // myVariable = myVariable ** 2;

// Operadores de comparación
console.log(a > b); // Mayor que
console.log(a < b); // Menor que
console.log(a >= b); // Mayor o igual que
console.log(a <= b); // Menor o igual que
console.log(a == b); // Igual que
console.log(a == 6); // Igualdad por valor
console.log(a == "6"); // Igualdad por valor
console.log(a == a);
console.log(a === 6); // Igualdad por identidad (valor y tipo)
console.log(a === "6"); // Igualdad por identidad (valor y tipo)
console.log(a === a);
console.log(a != b); // Distinto que
console.log(a != 6); // Distinto que
console.log(a !== "6"); // Distinto por identidad (valor y tipo)
console.log(0 == false); // true
console.log(1 == false); // false
console.log(2 == false); // false
console.log(0 == ""); // true
console.log(0 == " "); // true
console.log(0 == ""); // true
console.log(0 == "Hola"); // false
console.log(0 === ""); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// Truthy values (valores verdaderos)
// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos la cadena vacía
// El boolean true

// Falsy values (valores falsos)
// El cero y 0n
// La cadena vacía
// NaN
// Null
// Undefined
// El boolean false

// Operadores lógicos
// and (&&)
console.log(5 > 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20); // true
console.log(5 < 10 && 15 > 20); // false
console.log(5 < 10 && 15 < 20 && 30 > 40); // false

// or (||)
console.log(5 > 10 || 15 > 20); // false
console.log(5 < 10 || 15 < 20); // true
console.log(5 < 10 || 15 > 20); // true
console.log(5 > 10 || 15 > 20 || 30 > 40); // false

console.log((5 > 10 && 15 > 20) || 30 > 40); // false
console.log((5 > 10 && 15 > 20) || 30 < 40); // true

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20)); // true
console.log(!(5 > 10 || 15 > 20)); // true

// Operadores ternarios
const isRaining = true;
isRaining ? console.log("está lloviendo") : console.log("no está lloviendo");
