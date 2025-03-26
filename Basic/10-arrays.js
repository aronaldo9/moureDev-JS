// array

// declaración
let myArray = [];
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// inicialización

myArray = [1];
myArray2 = new Array(1); // si se pone un único valor, reserva ese espacio de memoria, no guarda el valor como dato

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array("Aarón", "Pesqueira", "AaronPFDev", 45, true); // No se recomienda

console.log(myArray);
console.log(myArray2);

// agregar elementos
myArray2 = new Array(3);
myArray2[0] = "Aarón";
myArray2[1] = "Pesqueira";
myArray2[2] = "AaronPFDev";

console.log(myArray2);

myArray = [];
myArray[2] = "Aarón";
// myArray[0] = "Pesqueira";
myArray[1] = "AaronPFDev";

console.log(myArray);

// Métodos comunes
myArray = [];

myArray.push("Aarón");
myArray.push("Pesqueira");
myArray.push("AaronPFDev");
myArray.push(45);

console.log(myArray);

console.log(myArray.pop()); // Elimina el último y lo devuelve
console.log(myArray);

// shift y unshift
myArray.shift(); // Elimina el primer elemento
console.log(myArray);

myArray.unshift("Aarón"); // Añade al principio
console.log(myArray);

// length
console.log(myArray.length);

// clear
// myArray.clear(); // No existe
myArray = []; // Para borrarlo hay que volver a inicializarlo
myArray.length = 0; // Otra forma de borrarlo (pero no se recomienda)
console.log(myArray);

// slice
myArray = ["Aarón", "Pesqueira", "AaronPFDev", 45, true];
let myNewArray = myArray.slice(1, 3); // No modifica el array original

console.log(myNewArray);

// splice
myArray.splice(1, 2); // Elimina 2 elementos desde la posición 1

console.log(myArray);

myArray = ["Aarón", "Pesqueira", "AaronPFDev", 45, true];
myArray.splice(1, 2, "Aarón Pesqueira"); // Elimina 2 elementos desde la posición 1 y añade "Aarón Pesqueira"

console.log(myArray);
