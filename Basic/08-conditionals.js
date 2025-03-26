// Conditionals

// if, else if, else

// if(si)
let age = 18;

if (age == 37) {
  console.log("La edad es 37");
}

// else (si no)
if (age == 37) {
  console.log("La edad es 37");
} else {
  console.log("La edad no es 37");
}

// else if (si no, si)
if (age == 37) {
  console.log("La edad es 37");
} else if (age < 18) {
  console.log("Es menor de edad");
} else {
  console.log("La edad no es 37 ni es menor de edad");
}

// Operadores ternarios
// condition ? expr1 : expr2

const message = age == 37 ? "La edad es 37" : "La edad no es 37";
console.log(message);

// Switch
let day = 0;
let dayName;

switch (day) {
  case 0:
    dayName = "Lunes";
    break;
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miércoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sábado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default:
    dayName = "Día no válido";
}

console.log(dayName);
