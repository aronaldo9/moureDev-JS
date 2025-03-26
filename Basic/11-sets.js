// Sets

// Declaración
let mySet = new Set();
let mySet2 = {}; // No es un set

console.log(mySet);
console.log(mySet2);

// Inicialización
mySet = new Set(["Aarón", "Pesqueira", "AaronPFDev", 45, true]);

console.log(mySet);

// Métodos comunes

// add y delete
mySet.add("https://portfolio-aaronpfdev.netlify.app/portfolio");

console.log(mySet);

mySet.delete("https://portfolio-aaronpfdev.netlify.app/portfolio");

console.log(mySet);

// has
console.log(mySet.has("Aarón"));

// size
console.log(mySet.size);

// Convertir un set a array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir array a set
mySet = new Set(myArray);
console.log(mySet);

// No admite elementos duplicados
mySet.add("Aarón");
mySet.add("Aarón");

console.log(mySet);
