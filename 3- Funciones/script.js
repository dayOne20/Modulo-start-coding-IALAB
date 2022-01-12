// EJERCICIOS

/* 
1) Crear un programa que pida al usuario que ingrese un numero
y le devuelva un mensaje indicando si el numero es positivo, 
negativo o si es 0.
*/

// const findNumberType = (number) => {
//   let message = "";
//   const parsedNumber = +number;

//   if (!parsedNumber && parsedNumber !== 0) {
//     message = "El valor ingresado no es un numero";
//     return message;
//   }

//   if (parsedNumber === 0) {
//     message = "El numero ingresado es 0";
//   } else if (parsedNumber > 0) {
//     message = "El numero ingresado es positivo";
//   } else {
//     message = "El numero ingresado es negativo";
//   }

//   return message;
// };

// const chosenNumber = prompt("Ingresa un numero");

// const response = findNumberType(chosenNumber);

// alert(response);

/*
2) Crear un programa que pida un numero al usuario y le devuelva
un mensaje diciendo si el numero es primo o no.
Aclaración: Los números primos son aquellos que tienen exactamente 4 divisores enteros.
*/

// const isPrime = (number) => {
//   const parsedNumber = +number;

//   if (!parsedNumber && parsedNumber !== 0) {
//     alert("El valor ingresado no es un numero");
//     return;
//   }

//   if (parsedNumber < 2) return false;

//   for (let i = 2; i < parsedNumber; i++) {
//     if (parsedNumber % i === 0) return false;
//   }

//   return true;1
// };

// const chosenNumber = prompt("Ingresa un numero");

// const isNumberPrime = isPrime(chosenNumber);

// if (isNumberPrime !== undefined) {
//   if (isNumberPrime) alert("El numero es primo");
//   else alert("El numero no es primo");
// }

/*
3) Crear un programa que convierta la termperatura de grados Celsius a 
Faranheit y viceversa. El usuario deberia ingresar la temperatura y a que
unidad la quiere convertir.
*/
//C a F (C x 9/5) + 32
// F a C (F -32) x 5/9

// const convertTemperature = (temperature, target) => {
//   const parsedTemp = +temperature;
//   const parsedTarget = target.toLowerCase();

//   if (!parsedTemp && parsedTemp !== 0) {
//     alert("El valor ingresado no es valido");
//     return;
//   }

//   if (parsedTarget === "celsius") {
//     return ((parsedTemp - 32) * 5) / 9;
//   } else if (parsedTarget === "faranheit") {
//     return (parsedTemp * 9) / 5 + 32;
//   } else {
//     alert("El formato ingresado no es valido");
//     return;
//   }
// };

// const temperature = prompt("Ingresa la temperatura");
// const target = prompt("Ingresa a que unidad de medida la queres convertir");

// const response = convertTemperature(temperature, target);

// if (response !== undefined) {
//   alert(`La temperatura en ${target.toLowerCase()} es ${response}`);
// }

/*
4) Crear un programa para calcular el total de una compra. Para ello, se le
tiene que pedir al usuario que ingrese el precio de cada producto y, cuando termine, 
que ingrese la palabra 'total'. Devolverle el total de la compra.
*/

// const calculateTotal = () => {
//   let total = 0;
//   let subTotal;

//   do {
//     subTotal = prompt("Ingresa el valor del producto");
//     const parsedSubtotal = +subTotal;
//     if (parsedSubtotal) {
//       total += parsedSubtotal;
//     } else {
//       if (subTotal.toLowerCase() !== "total")
//         alert("El valor ingresado no es correcto");
//     }
//   } while (subTotal.toLowerCase() !== "total");

//   return total;
// };

// const response = calculateTotal();

// alert(response);

// Truthy y Falsy

//FALSY: 0, null, undefined, NaN, '', "", ``, false

// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(!!0);
// console.log(!!"");
// console.log(Boolean("Hola Mundo"));
// console.log(Boolean(40));
// console.log(!![]);
// console.log(!!{});

// const firstName = prompt("Ingresa tu nombre");

// if (+firstName) {
//   console.log("esto es truthy", firstName);
// } else {
//   console.log("esto es falsy,", +firstName);
// }
