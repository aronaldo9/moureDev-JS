// Ejercicios desestructuración y propagación

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let friends = ["Aarón", "Pepe", "Juan", "Luis"];
let [friend0, friend1, friend2, friend3] = friends;
console.log(friend0); // Aarón
console.log(friend1); // Pepe

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let [, , , , friend4 = "Sin nombre"] = friends;
console.log(friend4);

let player = {
  name: "Fulanito",
  team: "Team A",
  age: 25,
  position: "Forward",
};

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let { name, position } = player;
console.log(name); // Fulanito
console.log(position); // Forward

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let { name: playerName, position: playerPosition } = player;
console.log(playerName); // Fulanito
console.log(playerPosition); // Forward

// 5. Usa desestructuración para extraer dos propiedaddes de un objeto anidado

let player2 = {
  name: "Fulanito",
  team: "Team A",
  age: 25,
  position: "Forward",
  stats: {
    goals: 10,
    assists: 5,
  },
};

let {
  stats: { goals, assists },
} = player2;
console.log(goals); // 10
console.log(assists); // 5

// 6. Usa propagación para combinar dos arrays en uno nuevo
let friends2 = ["Miguel", "Roger"];
let friends3 = [...friends, ...friends2];
console.log(friends3);

// 7. Usa propagación para crear una copia de un array
let friends4 = [...friends]; // Copia el array
console.log(friends4);

// 8. Usa propagación para combinar dos objetos en uno nuevo
let player3 = {
  exp: 3,
  foot: "right",
};
let player4 = { ...player2, ...player3 };
console.log(player4);

// 9. Usa propagación para crear una copia de un objeto
let player5 = { ...player4 };
console.log(player5);

// 10. Combina desestructuración y propagación
let [firstFriend, ...restOfFriends] = friends;
console.log(firstFriend); // Aarón
console.log(restOfFriends); // ["Pepe", "Juan", "Luis"]

let { name: playerName2, ...playerStats } = player2;
console.log(playerName2); // "Fulanito"
console.log(playerStats); // { team: "Team A", age: 25, position
