// 1. Captura una excepción utilizando try-catch

let myCar;

try {
  console.log(myCar.brand);
  console.log("Ejecución sin errores");
} catch (error) {
  console.error("Ha ocurrido un error:", error);
}

// 2. Captura una excepción utilizando try-catch y finally

try {
  console.log(myCar);
} catch (error) {
  console.error("Ha ocurrido un error:", error);
} finally {
  console.log("Este bloque se ejecuta siempre, haya un error o no");
}

// 3. Lanza una excepción genérica

function checkNumber(num) {
  if (typeof num !== "number") {
    throw new Error("El valor debe ser un número");
  }
  return true;
}
try {
  checkNumber("texto"); // Lanza un error
} catch (error) {
  console.error("Error genérico:", error.message);
}

// 4. Crea una excepción personalizada

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// 5. Lanza una excepción personalizada
function checkString(str) {
  if (typeof str !== "string") {
    throw new CustomError("El valor debe ser una cadena de texto");
  }
  return true;
}

try {
  checkString(123); // Lanza un error
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Error personalizado:", error.message);
  } else {
    console.error("Error desconocido:", error.message);
  }
}

checkString("texto"); // No lanza error

// 6. Lanza varias excepciones según una lógica definida
function validateInput(input) {
  if (typeof input !== "string") {
    throw new TypeError("El valor debe ser una cadena de texto");
  }
  if (input.length < 5) {
    throw new RangeError("La cadena debe tener al menos 5 caracteres");
  }
  return true;
}

validateInput(123); // Lanza un TypeError
validateInput("abc"); // Lanza un RangeError
validateInput("texto"); // No lanza un error

// 7. Captura varias excepciones en un mismo try-catch
function validateInput(input) {
  try {
    if (typeof input !== "string") {
      throw new TypeError("El valor debe ser una cadena de texto");
    }
    if (input.length < 5) {
      throw new RangeError("La cadena debe tener al menos 5 caracteres");
    }
    return true;
  } catch (error) {
    if (error instanceof TypeError) {
      console.error("Error de tipo:", error.message);
    } else if (error instanceof RangeError) {
      console.error("Error de rango:", error.message);
    } else {
      console.error("Error desconocido:", error.message);
    }
  }
}

validateInput(123); // Lanza un TypeError
validateInput("abc"); // Lanza un RangeError
validateInput("texto"); // No lanza un error

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
const values = ["10", "20.5", "texto", "30", "40.7", "error"];
const floatValues = [];
const errors = [];

for (const value of values) {
  try {
    const floatValue = parseFloat(value);
    if (isNaN(floatValue)) {
      throw new Error(`No se puede convertir "${value}" a float`);
    }
    floatValues.push(floatValue);
  } catch (error) {
    errors.push(error.message);
  }
}
console.log("Valores convertidos a float:", floatValues);
console.log("Errores:", errors);

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

function checkProperty(obj, prop) {
  if (!obj.hasOwnProperty(prop)) {
    throw new CustomError(`El objeto no tiene la propiedad "${prop}"`);
  }
  return true;
}

const myObject = { name: "Juan", age: 30 };
const propertyToCheck = "email";

try {
  checkProperty(myObject, propertyToCheck);
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Error personalizado:", error.message);
  } else {
    console.error("Error desconocido:", error.message);
  }
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximmo de 10
function retryOperation(operation, maxRetries) {
  let attempts = 0;
  while (attempts < maxRetries) {
    try {
      return operation();
    } catch (error) {
      attempts++;
      console.error(`Error en el intento ${attempts}:`, error.message);
    }
  }
  throw new Error("Se alcanzó el número máximo de reintentos");
}

// Ejemplo de uso
function unreliableOperation() {
  if (Math.random() < 0.5) {
    throw new Error("Operación fallida");
  }
  return "Operación exitosa";
}

const maxRetries = 10;
try {
  const result = retryOperation(unreliableOperation, maxRetries);
  console.log(result);
} catch (error) {
  console.error("Error final:", error.message);
}
