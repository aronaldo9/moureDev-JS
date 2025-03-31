let myArray = [1, 2, 3, 4];

let person = {
  name: "Aarón",
  age: 45,
  alias: "AaronPFDev",
};

let myValue = myArray[1];
console.log(myValue);

let myName = person.name;
console.log(myName);

// Desestructuración

// Sintaxis arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray;
console.log(myValue0);
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);

// Sintaxis de arrays con valores predeterminados
let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] =
  myArray;
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);

// Ignorar elementos del array
let [myValue10, , , myValue13] = myArray;
console.log(myValue10);
console.log(myValue13);

// Sintaxis de objetos
let { name, age, alias } = person;
console.log(name);
console.log(age);
console.log(alias);

// Sintaxis de objetos con valores predeterminados
let { name2, age2, alias2, email = "email@email.com" } = person;
console.log(name2); // no existe
console.log(age2); // no existe
console.log(alias2); // no existe
console.log(email);

// Sintaxis objects con nuevos nombres de variables
let { name: name3, age: age3, alias: alias3 } = person;
console.log(name3);
console.log(age3);
console.log(alias3);

// Sintaxis con objetos anidados
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

let {
  name: name4,
  job: { name: jobName },
} = person3;
console.log(name4); // Aarón
console.log(jobName); // Programador

// Propagación (...)

// Sintaxis de arrays
let myArray2 = [...myArray]; // Copia el array
console.log(myArray2); // [1, 2, 3, 4]

let myArray3 = [...myArray, 5, 6, 7]; // Copia el array y añade elementos
console.log(myArray3); // [1, 2, 3, 4, 5, 6, 7]

// Combinación de arrays
let myArray4 = [...myArray2, ...myArray3]; // Copia el array y añade otro array
console.log(myArray4); // [1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7]

// Sintaxis de objetos
let person4 = { ...person }; // Copia el objeto
console.log(person4); // { name: 'Aarón', age: 45, alias: 'AaronPFDev' }

let person5 = { ...person, email: "aronaldo9@hotmail.com" }; // Copia el objeto y añade una propiedad

console.log(person5); // { name: 'Aarón', age: 45, alias: 'AaronPFDev', email: 'aronaldo9@hotmail.com' }
