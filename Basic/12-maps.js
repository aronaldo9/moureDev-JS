// Maps

// Declaración

let myMap = new Map();

// Inicialización
myMap = new Map([
  ["name", "Aarón"],
  ["email", "aronaldo9@hotmail.com"],
  ["age", 45],
]);

console.log(myMap);

// Métodos y propiedades comunes

// set
myMap.set("alias", "AaronPFDev");
myMap.set("name", "Aaron Pesqueira");

console.log(myMap);

// get
console.log(myMap.get("name"));

// has
console.log(myMap.has("surname"));
console.log(myMap.has("age"));

// delete
myMap.delete("email");

console.log(myMap);

// keys
console.log(myMap.keys());

// values
console.log(myMap.values());

// entries
console.log(myMap.entries());

// size
console.log(myMap.size);

// clear
myMap.clear();

console.log(myMap);
