// 1. Escribe un comentario en una línea
// Esto es un comentario

// 2. Escribe un comentario en varias lineas

/** Esto es un comentario
 * en varias líneas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivo
let str = "Hola";
let num = 3;
let isBool = false;
let undef = undefined;
let nullValue = null;
let mySymbol = Symbol("mysymbol");
let myBigInt = BigInt(1234335657898709879776565331344365442234465);
let myBigInt2 = 1234335657898709879776565331344365442234465n;

// 4. Imprime por consola el valor de todas las variables
console.log(str);
console.log(num);
console.log(isBool);
console.log(undef);
console.log(nullValue);
console.log(mySymbol);
console.log(myBigInt);
console.log(myBigInt2);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof str);
console.log(typeof num);
console.log(typeof isBool);
console.log(typeof undef);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);

// 6. A continuación modifica los valores de las variables por otros del mismo tipo
str = "Adios";
num = 4;
isBool = true;
undef = null;
nullValue = undefined;
mySymbol = Symbol("mysymbol2");
myBigInt = BigInt(1234335657898709879776565331344365442234466);
myBigInt2 = 1234335657898709879776565331344365442234466n;

// 7. A continuación modifica los valores de las variables por otros de distinto tipo
str = 3;
num = "Hola";
isBool = 4;
undef = false;
nullValue = 5;
mySymbol = "Hola";
myBigInt = 5;
myBigInt2 = "Hola";

// 8. Declara constantes con valorea asociados a todos los datos de tipo primitivo
const constStr = "Hola";
const constNum = 3;
const constIsBool = false;
const constUndef = undefined;
const constNullValue = null;
const constMySymbol = Symbol("mysymbol");
const constMyBigInt = BigInt(1234335657898709879776565331344365442234465);
const constMyBigInt2 = 1234335657898709879776565331344365442234465n;

// 9. A continuacion, modifica los valores de las constantes
// constStr = "Adios";
// constNum = 4;
// constIsBool = true;
// constUndef = null;
// constNullValue = undefined;
// constMySymbol = Symbol("mysymbol2");
// constMyBigInt = BigInt(1234335657898709879776565331344365442234466);
// constMyBigInt2 = 1234335657898709879776565331344365442234466n;

// 10. Comenta las lineas que producen algun tipo de error al ejecutarse
