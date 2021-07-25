//#############################################################################
/**
 * Se agrega la funcion include a los arreglos o a los strings
 */

let numbers =[1,2,3,7,8];
if(numbers.includes(7)){
    console.log("Si se encuentra el valor 7 ");
}else{
    console.log("No se ecuentra el valor 7"); 
}

let cadena ="hola que tal, me llamo jared";
if(cadena.includes("jared")){
    console.log("Si se encontró el texto jared en la cadena")
}

//#############################################################################
/**
 * uso de exponentes con el doble asterisco
 */
let base =4;
let exponente =3;
let resultado = base**exponente;
console.log(`${base} exponente  ${exponente} es: ${resultado}`);