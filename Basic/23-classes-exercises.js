// 1. Crea una clase que reciba dos propiedades
class Vehicle {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

// 2. Añade un método a la clase que use las propiedades
class Vehicle2 {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  describe() {
    return `Este vehículo es de la marca ${this.brand} y es de color ${this.color}`;
  }
}

// 3. Muestra los valores de las propiedades e invoca a la función
const myCar = new Vehicle2("Toyota", "gris");
console.log(myCar.brand);
console.log(myCar.color);
console.log(myCar.describe());

// 4. Añade un método estático a la primera clase
class Vehicle3 {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  static action() {
    return "El vehículo acelera";
  }
}

// 5. Haz uso del método estático
console.log(Vehicle3.action());

// 6. Crea una clase que haga uso de herencia
class Car extends Vehicle {
  constructor(brand, color, model) {
    super(brand, color);
    this.model = model;
  }
}

// 7. Crea una clase que haga uso de Getters y Setters
class GetSetVehicle {
  constructor(brand, color) {
    this._brand = brand;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }
  get color() {
    return this._color;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }
  set color(newColor) {
    this._color = newColor;
  }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class PrivateVehicle {
  #brand;
  #color;

  constructor(brand, color) {
    this.#brand = brand;
    this.#color = color;
  }

  get brand() {
    return this.#brand;
  }
  get color() {
    return this.#color;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }
  set color(newColor) {
    this.#color = newColor;
  }
}

// 9. Utiliza los get y set y muestra sus valores
const myCar2 = new GetSetVehicle("Peugeot", "azul");
console.log(myCar2.brand); // Peugeot
console.log(myCar2.color); // azul
const myCar3 = new PrivateVehicle("Peugeot", "azul");
console.log(myCar3.brand); // Peugeot
console.log(myCar3.color); // azul

// 10. Sobreescribe un método de una clase que utilice herencia
// 6. Crea una clase que haga uso de herencia
class Car extends Vehicle {
  constructor(brand, color, model) {
    super(brand, color);
    this.model = model;
  }

  describe() {
    return `Este vehículo es un ${this.brand} ${this.model} de color ${this.color}`;
  }
}
