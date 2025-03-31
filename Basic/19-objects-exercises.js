// Ejercicios con Objetos

// 1. Crea un objeto con tres propiedades

let dog = {
  name: "Akil",
  breed: "German Sheperd",
  age: 7,
};

// 2. Accede y muestra su valor
console.log(dog);
console.log(dog.name);
console.log(dog.breed);
console.log(dog.age);

// 3. Agrega una nueva propiedad
dog.color = "Black-Gold";

// 4. Elimina una de las 3 primeras propiedades
delete dog.age;
console.log(dog);

// 5. Agrega una función e invócala
dog.action = function () {
  console.log("El perro ladra");
};

console.log(dog);
dog.action();

// 6. Itera las propiedades del objeto
for (let key in dog) {
  console.log(key + ": " + dog[key]);
}

// 7. Crea un objeto anidado
let person = {
  name: "Aarón",
  age: 45,
  address: {
    street: "Calle Falsa",
    number: 123,
    city: "Cualquiera",
  },
};

console.log(person);

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(person.address.street);
console.log(person.address.number);
console.log(person.address.city);

// 9. Comprueba si los dos objetos creados son iguales

let dogCopy = {
  name: "Akil",
  breed: "German Shepherd",
  age: 7,
};

console.log(dog === dogCopy); // Devuelve false
console.log(dog.name === dogCopy.name); // Devuelve true
console.log(dog.breed === dogCopy.breed); // Devuelve true

// 10. Comprueba si dos propiedades diferentes son iguales
console.log(dog.name === person.name); // Devuelve false
