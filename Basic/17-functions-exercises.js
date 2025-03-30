// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva la suma
const suma = (num1, num2) => num1 + num2;
console.log(suma(10, 5));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function encontrarMayor(numeros) {
  let mayor = numeros[0]; // Inicializa el mayor con el primer elemento del array
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i]; // Actualiza el mayor si se encuentra un número mayor
    }
  }
  return mayor; // Devuelve el número mayor encontrado
}

const numeros = [5, 15, 12, 10, 25];
console.log(encontrarMayor(numeros));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(str) {
  const vocales = "aeiouAEIOUáéíóú"; // Definimos las vocales
  let contador = 0; // Inicializamos el contador en 0
  for (let letra of str) {
    if (vocales.includes(letra)) {
      contador++; // Incrementamos el contador si encontramos una vocal
    }
  }
  return contador; // Devolvemos el número de vocales encontradas
}
const texto = "Hola, ¿cómo estás?";
console.log(contarVocales(texto)); // Llamamos a la función y mostramos el resultado en la consola

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let cadenasEnMayusculas = [];
const convertirAMayusculas = (cadenas) => {
  for (let cadena of cadenas) {
    cadenasEnMayusculas.push(cadena.toUpperCase()); // Convierte cada cadena a mayúsculas y las añade al nuevo array;
  }
  return cadenasEnMayusculas; // Devuelve el nuevo array con las cadenas en mayúsculas
};

const cadenas = ["hola", "mundo", "javascript"];
console.log(convertirAMayusculas(cadenas)); // Llama a la función y muestra el resultado en la consola

// 5. Crea una función que reciba un número y devuelva true si es primo y false en caso contrario

function isPrimo(num) {
  if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false; // Si el número es divisible por otro número, no es primo
  }
  return true; // Si no se encontró ningún divisor, el número es primo
}

console.log(isPrimo(1)); // Llama a la función y muestra el resultado en la consola

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const encontrarItemsComunes = (array1, array2) => {
  const comunes = [];
  for (let item of array1) {
    if (array2.includes(item)) {
      comunes.push(item);
    }
  }
  return comunes;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const itemsComunes = encontrarItemsComunes(array1, array2);
console.log(`itemsComunes = [${itemsComunes}]`); // Llama a la función y muestra el resultado en la consola

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
let sumaNumerosPares = 0;
function sumaPares(numeros) {
  for (let numero of numeros) {
    if (numero % 2 == 0) {
      sumaNumerosPares += numero; // Si el número es par, lo sumamos a la variable sumaPares
    }
  }
  return sumaNumerosPares; // Devuelve la suma de los números pares
}

const numerosPares = [12, 31, 64, 23, 76, 97];
sumaPares(numerosPares);

console.log(`La suma de los números pares es: ${sumaNumerosPares}`); // Llama a la función y muestra el resultado en la consola

// 8. Crea una función que reciba un array de números y devuelva un nuevo arrray con cada número elevado al cuadrado
let cuadrados = [];

const calcularCuadrados = (arrayNumeros) => {
  for (let numero of arrayNumeros) {
    cuadrados.push(numero * numero); // Eleva cada número al cuadrado y lo añade al nuevo array
  }
  return cuadrados; // Devuelve el nuevo array con los números elevados al cuadrado
};

const numerosCuadrados = [1, 2, 3, 4, 5];
calcularCuadrados(numerosCuadrados);
console.log(`Cuadrados = [${cuadrados}]`); // Llama a la función y muestra el resultado en la consola

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(cadena) {
  const palabras = cadena.split(" "); // Separa la cadena en palabras
  const palabrasInvertidas = palabras.reverse(); // Invierte el orden de las palabras
  return palabrasInvertidas.join(" "); // Une las palabras invertidas en una nueva cadena
}

const textoInvertido = invertirPalabras("Hola mundo, ¿cómo estás?");
console.log(textoInvertido); // Llama a la función y muestra el resultado en la consola

// 10. Crea una función que calcule el factorial de un número dado

function factorial(n) {
  let resultado = 1; // Inicializamos el resultado en 1
  for (let i = 2; i <= n; i++) {
    resultado *= i; // Calculamos el factorial multiplicando el resultado actual por el número actual
  }
  return resultado; // Devuelve el factorial del número
}

const numeroFactorial = 5;

console.log(
  `El factorial de ${numeroFactorial} es: ${factorial(numeroFactorial)}`
); // Llama a la función y muestra el resultado en la consola
