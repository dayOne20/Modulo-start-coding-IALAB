//EJERCICIOS

/*
Dada la siguiente lista de invitados en ese orden:

Lucas,
Matias,
Jose,
Pedro,
Martina, 
Marcelo, 
Esteban, 
Marcela, 
Martin


 1) Informar por consola el numero de invitados 
*/
const list = [
  "Lucas",
  "Matias",
  "Jose",
  "Pedro",
  "Martina",
  "Marcelo",
  "Esteban",
  "Marcela",
  "Martin",
];

// console.log(`La cantidad de invitados es de ${list.length}`);

/*2) Imprimir por consola el nombre del ultimo invitado

 */
// console.log(
//   `El ultimo invitado de la fiesta es ${list[list.length - 1]}`);



/*3) A ultimo momento, se invito a Pedro a la fiesta, por lo que
 hay que agregarlo al final de la lista.
 */
list.push("Pedro");

// console.log(list);

/*4) Media hora antes de empezar Marcela confirmo que no podia asistir.
 Generar una nueva lista que contenga los invitados que confirmaron su
 presencia.
 */

const newList = list.filter((firstName) => firstName !== "Marcela");

// console.log(newList);

/*4) Por cada invitado, asignarle un numero de orden conforme
su posicion en la lista. Mostrar este numero de orden en un nuevo
array de la siguiente manera: "Juan. Orden: 1".
*/

const listWithOrderNumber = newList.map(
  (firstName, index) => `${firstName}. Orden: ${index + 1}`
);

console.log(listWithOrderNumber);

// 5) Suponiendo que los invitados consumieron la siguente cantidad de platos

//     Lucas: 3 platos
//     Esteban: 1 platos
//     Jose: 1 plato
//     Los restantes: 4 platos

// Calular el numero total de platos consumidos al final de la fiesta


// const totalDishes = newList.reduce((acummulator, currentValue) => {
//   if (currentValue === "Lucas") {
//     return acummulator + 3;
//   } else if (currentValue === "Esteban" || currentValue === "Jose") {
//     return acummulator + 1;
//   } else {
//     return acummulator + 4;
//   }
// }, 0);

// console.log(totalDishes);
// /*
// 6) Acomodar los invitados por orden alfabetico.

// */

// const orderedNames = newList.sort();
// console.log(orderedNames);
