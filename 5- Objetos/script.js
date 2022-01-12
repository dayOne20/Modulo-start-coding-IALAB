//EJERCICIOS

/*
1) Crear una clase Deportes, que reciba el atributo nombre
y un metodo que permita mostrar por consola ese nombre.
Ademas, crear un metodo que permita mostrar si el deporte es
individual o por equipos.

Crear una subclase que sea DeportesDeEquipo que permita ademas del nombre, 
el numero de integrantes que deben formar parte de ese equipo. 
Crear un metodo para
mostrar el siguiente mensaje: 
"Para jugar al futbol necesitas 11 jugadores por equipo".
 Tener en cuenta que 'futbol' y 11 son valores que 
 pueden variar dependiedo
 del deporte (por ejemplo, si fuese basket, seria 5 jugadores)

 Futbol
 Basket
 Tenis

PARA ESTA ACTIVIDAD, USAR LO VISTO RESPECTO DE CLASES Y OBJETOS
*/

// class Sport {
//   constructor(name, isTeamSport) {
//     this.name = name;
//     this.isTeamSport = isTeamSport;
//   }

//   sayName() {
//     console.log(`El nombre del deporte es ${this.name}`);
//   }

//   sayIsTeamSport() {
//     const message = this.isTeamSport
//       ? `${this.name} es un deporte de equipo`
//       : `${this.name} no es un deporte de equipo`;

//     console.log(message);
//   }
// }

// class TeamSports extends Sport {
//   constructor(name, playersByTeam) {
//     super(name);
//     this.playersByTeam = playersByTeam;
//   }

//   sayPlayersByTeam() {
//     console.log(
//       `Para jugar al ${this.name} necesitas ${this.playersByTeam} jugadores por equipo`
//     );
//   }
// }

// const tenis = new Sport("Tenis", false);
// tenis.sayName();
// tenis.sayIsTeamSport();

// const futbol = new TeamSports("Futbol", 11);

// futbol.sayName();
// futbol.sayPlayersByTeam();

// const basket = new TeamSports("Basket", 5);

// basket.sayName();
// basket.sayPlayersByTeam();

/*2) Andrea y Martin deciden hacer un picnic al aire libre.
Andrea propone llevar una bolsa con 2 cervezas, 2 sandwiches y 1 bolsa
de papas fritas. Por su parte, Martin lleva 1 porcion de torta, una gaseosa
y 1 paquete de galletitas dulces.

CREAR UN OBJETO QUE REPRESENTE CADA UNA DE LAS BOLSAS,
DONDE CADA PRODUCTO TENGA LA CANTIDAD QUE LLEVO CADA UNO.

REALIZAR LAS SIGUIENTES TAREAS:

a) Mostrar por consola los productos que llevo cada uno
(solo el nombre del producto)

b) En el camino al picnic, la bolsa de Andrea se rompio, 
por lo que tuvieron que poner todo en la bolsa de Martin.
Realizar el cambio correspondiente para que la bolsa de Martin
tenga el total de los productos del picnic.

c) Calcular el total de productos que llevaron al picnic
*/

const AndreaBag = { cervezas: 2, sandwiches: 2, papasFritas: 1 };
const MartinBag = { torta: 1, gaseosa: 1, galletitas: 1 };

// console.log(AndreaBag, MartinBag);

const AndreaProducts = Object.keys(AndreaBag);
const MartinProducts = Object.keys(MartinBag);

// console.log(AndreaProducts, MartinProducts);

Object.assign(MartinBag, AndreaBag);

// console.log(AndreaBag);

// console.log(MartinBag);

//usar Object.keys

const productsName = Object.keys(MartinBag);

// console.log(productsName);

let totalProducts = 0;

// productsName.forEach((product) => (totalProducts += MartinBag[product]));

// console.log(totalProducts);

// for (const key in MartinBag) {
//   if (Object.hasOwnProperty.call(MartinBag, key)) {
//     totalProducts += MartinBag[key];
//   }
// }

// console.log(totalProducts);

const productsQuantity = Object.values(MartinBag);

const totalProductsWithReduce = productsQuantity.reduce(
  (acumulador, currentValue) => acumulador + currentValue,
  0
);

console.log(totalProductsWithReduce);
