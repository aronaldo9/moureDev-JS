// 1. Crea una variable para cada operación aritmética
let a = 4;
let b = 2;
let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;
let modulo = a % b;
let potencia = a ** b;
let incremento = a++;
let decremento = b--;

// 2. Crea una variable para cada tipo de operación de asignación,
// que haga uso de las variables utilizadas para las operaciones
// aritméticas
let asignacionSuma = a;
asignacionSuma += b;

let asignacionResta = a;
asignacionResta -= b;

let asignacionMultiplicacion = a;
asignacionMultiplicacion *= b;

let asignacionDivision = a;
asignacionDivision /= b;

let asignacionModulo = a;
asignacionModulo %= b;

let asignacionPotencia = a;
asignacionPotencia **= b;

let asignacionIncremento = a;
asignacionIncremento++;

let asignacionDecremento = b;
asignacionDecremento--;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores
// de comparación

console.log(a > b);
console.log(b < a);
console.log(a === a);
console.log(a != b);
console.log(b <= a);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de
// comparación

console.log(a < b);
console.log(b > a);
console.log(a === b);
console.log(b >= a);
console.log(a != a);

// 5. Utiliza el operador lógico and
console.log(a > b && a == a);

// 6. Utiliza el operador lógico or
console.log(a < b || b == b);

// 7. Combina ambos operadores lógicos
console.log((a > b && a == a) || b == b);

// 8. Añade alguna negación
console.log(!((a > b && a == a) || b == b));

// 9. Utiliza el operador ternario
const isRunning = true;
isRunning ? console.log("Está corriendo") : console.log("No está corriendo");

// 10. Combina operadores aritméticos, de comparación y lógicos
console.log(a + b > a || a - b < b);
