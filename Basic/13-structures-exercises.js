// 1. Crea un array que almacene cindo animales
let animals = ["puma", "tigre", "jaguar", "leopardo", "lince"];

// 2. Añade dos más. Uno al principio y otro al final
animals.unshift("pantera");
animals.push("gato");

console.log(animals);

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1);

console.log(animals);

// 4. Crea un set que almacene cinco libros
let books = new Set([
  "El principito",
  "Don Quijote de la Mancha",
  "Cien años de soledad",
  "El señor de los anillos",
  "Harry Potter",
]);

// 5. Añade dos más. Uno de ellos repetido
books.add("Reina Roja");
books.add("El principito");

console.log(books);

// 6. Elimina uno concreto a tu elelección
books.delete("Don Quijote de la Mancha");

console.log(books);

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([
  [1, "Enero"],
  [2, "Febrero"],
  [3, "Marzo"],
  [4, "Abril"],
  [5, "Mayo"],
]);

// 8. Comprueba que el mes número 5 existe en el map e imprime su valor
console.log(months.has(5));
console.log(months.get(5));

// 9. Añade al mapa una clave con un array como que almacene los meses de verano
months.set("verano", ["Junio", "Julio", "Agosto"]);
console.log(months);

// 10. Crea un array, transfórmalo en un set y almacénalo en un map
let colours = ["rojo", "verde", "azul"];
let colourSet = new Set(colours);
let colourMap = new Map([["colours", colourSet]]);

console.log(colourMap);
