//##################################################################
/**
 * OPERADOR DE REPOSO
 * Puede extraer las propiedades de un objeto que aun no se ha contruido
 * 
 */
const obj={
    name:"jared",
    age:32,
    country:"Mexico",
}

let {name,...all} =obj;
console.log(name,all);
// resultado: jared { age: 32, country: 'Mexico' }



//##################################################################
/**
 * Unir varios elemenos en un nuevo elemento con la propiedad de propagacion
 */
 const obj2={
    name:"jared",
    age:32,
}
 const obj3={
     ...obj2,
    country:"Mexico",
}
console.log(obj3);
// resultado: { name: 'jared', age: 32, country: 'Mexico' }



//##################################################################
/**
 * Promise. finally
 * finally se ejecuta siempre, cuando se termina la ejecucion de la promesa
 */
const helloWorld = ()=>{
    return new Promise((resolve,reject)=>{
        (true) ? setTimeout(() => 
            resolve("Hello world")
        , 5000)  : reject(new Error("Test Error")) ;
    });
}
helloWorld()
.then(response=>console.log(response)).catch(error=>console.log(error)).finally(()=>console.log("Finalizó"));



//##################################################################
/**
 * Agrupar bloques de regex usando match
 */

const regexData=/([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(match);
console.log(year,month,day);
