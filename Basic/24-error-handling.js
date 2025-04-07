// Exceptions

// Produce una excepción
let myObject;
// console.log(myObject.email);

// Tratamiento de errores

// try-catch

try {
  // Código que intenta ejecutar
  console.log(myObject.email);
  console.log("Finaliza la ejecución sin errores");
} catch (error) {
  // Bloque de error
  console.log("Se ha producido un error");
}

// Captura del error
try {
  console.log(myObject.email);
} catch (error) {
  console.log("Se ha producido un error", error.message);
}

// Bloque finally
try {
  console.log(myObject);
} catch (error) {
  console.log("Se ha producido un error", error.message);
} finally {
  console.log(
    "Este código se ejecuta siempre, independientemente de si se produce un error o no"
  );
}

// No está soportado
// try {
//   console.log(myObject.email);
// } finally {
//   console.log("Este código se ejecuta siempre");
// }

// Lanzamiento de errores

// throw
function sumIntegers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Esta operación sólo suma números");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Esta operación sólo suma números enteros");
  }
  if (a == 0 || b == 0) {
    throw new SumZeroIntegerError("Se está intentando sumar cero", a, b);
  }
  return a + b;
}

try {
  console.log(sumIntegers(5, 3));
  console.log(sumIntegers(5.5, 3));
  console.log(sumIntegers("5", 3));
  console.log(sumIntegers(5, "3"));
  console.log(sumIntegers("5", "3"));
} catch (error) {
  console.log("Se ha producido un error.", error.message);
}

// Capturar varios tipos de errores

try {
  // console.log(sumIntegers(5.5, 3));
  console.log(sumIntegers("5", 3));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo:", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error", error.message);
  }
}

// Crear excepciones personalizadas
class SumZeroIntegerError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }
  printNumbers() {
    console.log(this.a, " + ", this.b);
  }
}

try {
  // console.log(sumIntegers(5.5, 3));
  console.log(sumIntegers(0, 3));
} catch (error) {
  console.log("Se ha producido un error personalizado", error.message);
  error.printNumbers();
}
