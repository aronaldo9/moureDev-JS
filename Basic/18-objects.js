// Objects

// Sintaxis

let person = {
  name: "Aarón",
  age: 45,
  alias: "AaronPFDev",
};

// Acceso a propiedades

// Notación punto
console.log(person.name); // Recomendada

// Notación corchetes
console.log(person["name"]);

// Modificación
person.name = "Aarón Pesqueira";
console.log(person.name); // Aarón Pesqueira

console.log(typeof person.age);
person.age = "45";
console.log(person.age); // 45
console.log(typeof person.age);

// Eliminar propiedades
delete person.age;
console.log(person);

// Añadir propiedades
person.email = "aronaldo9@hotmail.com";
person["age"] = 45;
console.log(person);

// Métodos (funciones)

let person2 = {
  name: "Pepe",
  alias: "PepeDev",
  age: 35,
  walk: function () {
    console.log("Caminando...");
  },
};
person2.walk(); // Caminando...

// Anidación d eobjects
let person3 = {
  name: "Aarón",
  age: 45,
  alias: "AaronPFDev",
  walk: function () {
    console.log("Caminando...");
  },
  job: {
    name: "Programador",
    exp: 2,
    work: function () {
      console.log(`La persona con ${this.exp} de experiencia, trabaja`);
    },
  },
};

console.log(person3);
console.log(person3.job);
console.log(person3.job.name);
person3.job.work();

// Igualdad de objects
let person4 = {
  name: "Aarón Pesqueira",
  alias: "AaronPFDev",
  email: "aronaldo9@hotmail.com",
  age: 45,
};

console.log(person);
console.log(person4);

console.log(person == person4); // false
console.log(person === person4); // false
console.log(person.name == person4.name); // true

// Iteración
// for (let value of person4) {
//   console.log(value); // Error: person4 is not iterable
// }

for (let key in person4) {
  console.log(key + ": " + person4[key]); // name, alias, email, age
}

// Funciones como objects

function Person(name, age) {
  // Debería ser una clase
  this.name = name;
  this.age = age;
}

let person5 = new Person("Aarón", 45);
console.log(person5); // Person { name: 'Aarón', age: 45 }

console.log(typeof person5); // object
console.log(typeof person4); // object
