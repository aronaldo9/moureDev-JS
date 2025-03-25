// Strings

// Concatenación
let myName = "Aarón";
let greeting = "Hola, " + myName + "!";
console.log(greeting);
console.log(typeof greeting);

// Longitud de una cadena
console.log(greeting.length);

// Acceso a caracteres
console.log(greeting[0]);
console.log(greeting[11]);

// Métodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.indexOf("Aarón"));
console.log(greeting.indexOf("Hola"));
console.log(greeting.indexOf("Pesqueira"));
console.log(greeting.includes("Aarón"));
console.log(greeting.includes("Hola"));
console.log(greeting.includes("Pesqueira"));
console.log(greeting.slice(0, 10));
console.log(greeting.replace("Aarón", "AaronPFDev"));

// Template literals (plantillas literales)
let message = `Hola, este es mi
curso de JavaScript`;
console.log(message);

// Interpolación de variables
let email = "aronaldo9@hotmail.com";

console.log(`Hola, ${myName}! Tu email es ${email}`);
