// Clases

class Person {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

// Sintaxis
let person = new Person("Aarón", 45, "AaronPFDev");
let person2 = new Person("Pepe", 35, "PepeDev");

console.log(person);
console.log(person2);

console.log(typeof person);

// Valores por defecto
class DefaultPerson {
  constructor(name = "Sin nombre", age = 0, alias = "Sin alias") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let person3 = new DefaultPerson("Jose", 38);

console.log(person3);

// Acceso a propiedades

console.log(person3.name);
console.log(person3.age);
console.log(person3.alias);
console.log(person3["alias"]);

person3.alias = "JoseDev";
console.log(person3.alias);

// Funciones en clases
class PersonWithMethod {
  constructor(name, age, alias) {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
  walk() {
    console.log("La persona camina.");
  }
}

let person4 = new PersonWithMethod("Aarón", 45, "AaronPFDev");
person4.walk(); // La persona camina.

// Propiedades privadas

class PrivatePerson {
  #bank; // Propiedad privada
  constructor(name, age, alias, bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank; // Propiedad privada
  }
  pay() {
    this.#bank;
    console.log("La persona paga.");
  }
}

let person5 = new PrivatePerson("Aarón", 45, "AaronPFDev", "IBAN1234567890");
console.log(person5);
console.log(person5.bank); // no se puede acceder
// person5.bank = "gfuifhvkhjvokyug"; // crea una nueva propiedad, no modifica #bank

// Getters y Setters
class GetSetPerson {
  #name;
  #age;
  #alias;
  #bank;
  constructor(name, age, alias, bank) {
    this.#name = name;
    this.#age = age;
    this.#alias = alias;
    this.#bank = bank;
  }
  get name() {
    return this.#name;
  }

  set bank(newBank) {
    this.#bank = newBank;
  }
}

let person6 = new GetSetPerson("Aarón", 45, "AaronPFDev", "IBAN1234567890");
console.log(person6);
console.log(person6.name); // permite leerlo, pero no escribirlo

person6.bank = "IBAN5669645689"; // permite escribirlo

// Herencia
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("emite un sonido genérico");
  }
}

class Dog extends Animal {
  run() {
    console.log("El perro corre");
  }
  sound() {
    console.log("Guau guau");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    super(name); // Llama al constructor de la clase padre
    this.size = size;
  }
  swim() {
    console.log("El pez nada");
  }
}

let myDog = new Dog("Akil");
myDog.run();
myDog.sound(); // emite un sonido genérico

let myFish = new Fish("Pez", "grande");
myFish.swim();
myFish.sound(); // emite un sonido genérico

// Métodos estáticos
class MathOperations {
  static suma(a, b) {
    return a + b;
  }
}

console.log(MathOperations.suma(2, 3)); // 5
