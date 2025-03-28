// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}

console.log(`El resultado de la suma es ${suma}`);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

let i = 1;
while (i <= 50) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

const nombres = ["Aarón", "Pedro", "Pepe", "Juan", "Luis"];

for (let nombre of nombres) {
  console.log(nombre);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const cadena = "Esto es una cadena de texto";
let totalVocales = 0;
const vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

for (let letra of cadena) {
  if (vocales.includes(letra)) {
    totalVocales++;
  }
}
console.log(`El total de vocales es ${totalVocales}`);

// 6. Dado un array de números , usa un bucle para multiplicar todos los números y mostrar el producto

const numeros = [2, 4, 6, 8, 10];
let producto = 1;

for (let numero of numeros) {
  producto *= numero;
}

console.log(`El producto de todos los números es ${producto}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let num = 5;
for (let i = 0; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
const texto = "Hola Mundo";
let textoInvertido = "";

for (let i = texto.length - 1; i >= 0; i--) {
  textoInvertido += texto[i];
}

console.log(textoInvertido);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let a = 0;
let b = 1;
let fibonacci = [a, b];
for (let i = 2; i < 10; i++) {
  let c = a + b;
  fibonacci.push(c);
  a = b;
  b = c;
}

console.log(fibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let nums = [4, 12, 8, 20, 5, 15];
let mayoresA10 = [];

for (let num of nums) {
  if (num > 10) {
    mayoresA10.push(num);
  }
}

console.log(mayoresA10);
