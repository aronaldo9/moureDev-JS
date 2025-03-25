// 1. Concatena dos cadenas de texto
let myDog = "Akil";
let info = "Mi perro se llama " + myDog;
console.log(info);

// 2. Muestra la longitud de una cadena de texto
console.log(info.length);

// 3. Muestra el primer y el último carácter de un string
console.log(info[0]);
console.log(info[info.length - 1]);

// 4. Convierte a mayúsculas y a minúsculas un string
console.log(info.toUpperCase());
console.log(info.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let message = `Este es mi perro
y se llama
Akil`;
console.log(message);

// 6. Interpola el valor de una variable en un string
let age = 8;
console.log(`${info} y tiene ${age} años`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(info.replace(/ /g, "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(info.includes("perro"));

// 9. Comprueba si dos strings son iguales
let myDog2 = "Akiliño";
console.log(myDog == myDog2);
console.log(myDog === myDog2);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myDog.length == myDog2.length);
console.log(myDog.length === myDog2.length);
