// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let myName = "Aarón";

if (myName === "Aarón") {
  console.log(myName);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos

let userName = "aaron";
let password = "123456";

if (userName === "aaron" && password === "123456") {
  console.log("Bienvenido!");
} else {
  console.log("Usuario o contraseña incorrectos.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = -1;

if (num > 0) {
  console.log("El número es positivo");
} else if (num < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 14;
let yearsToVote = 18 - age;

if (age >= 18) {
  console.log("Puedes votar");
} else {
  console.log(`No puedes votar. Te faltan ${yearsToVote} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let age2 = 20;
let personalStatus = age2 >= 18 ? "adulto" : "menor";
console.log(personalStatus);

// 6. Muestra en qué estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 3;
let season;

if (month >= 1 && month <= 3) {
  season = "Invierno";
} else if (month >= 4 && month <= 6) {
  season = "Primavera";
} else if (month >= 7 && month <= 9) {
  season = "Verano";
} else if (month >= 10 && month <= 12) {
  season = "Otoño";
} else {
  season = "Mes no válido";
}

console.log(season);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let days;

if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  days = 31;
} else {
  days = 30;
}

console.log(days);

// switch

// 8. Usa un switch para imprimir unm ensaje de saludo diferente dependiendo del idioma
let language = "es";
let message;

switch (language) {
  case "es":
    message = "Hola";
    break;
  case "en":
    message = "Hello";
    break;
  case "fr":
    message = "Bonjour";
    break;
  case "de":
    message = "Hallo";
    break;
  default:
    message = "Idioma no soportado";
}

console.log(message);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
month = 3;
let season2;

switch (month) {
  case 1:
  case 2:
  case 3:
    season2 = "Invierno";
    break;
  case 4:
  case 5:
  case 6:
    season2 = "Primavera";
    break;
  case 7:
  case 8:
  case 9:
    season2 = "Verano";
    break;
  case 10:
  case 11:
  case 12:
    season2 = "Otoño";
    break;
  default:
    season2 = "Mes no válido";
}

console.log(season2);

// 10. Usa un switch para hacer de nuevo el ejercicio 7
month = 3;
let days2;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days2 = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days2 = 30;
    break;
  case 2:
    days2 = 28; // Suponiendo que no consideramos años bisiestos
    break;
  default:
    days2 = "Mes no válido";
}

console.log(days2);
