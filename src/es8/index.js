//##################################################################
/**
 * Object.entries
 * 
 * Regresa la clave-valor de una matriz, es decir
 * convierte un objeto a un arreglo asociativo
 * 
 * 
 */

const data={
    frontend: 'Jared',
    backend: 'Oscar',
    design: 'Ana'
}
// transfromar objeto a matriz
const entries = Object.entries(data);
console.log(data); // objeto
console.log(entries);// arreglo asociativo
//##################################################################

/**
 * Object values
 * Convierte los valores de un objeto a un arreglo unidimencional
 * 
 */
 const data2={
    frontend: 'Jared',
    backend: 'Oscar',
    design: 'Ana'
}
const values = Object.values(data2);
console.log(values);

//##################################################################
/**
 * Padding
 * agregar elementos vacios antes o despues de una cadena
 * se indica la longitud total que debe ser la cadena y el caracte con que se rellenará los espacios
 */

const string ='hello';
console.log(string.padStart(10,'0'));
console.log(string.padEnd(10,'0'));
//##################################################################
/**
 * Async y await
 */

const helloWorld = ()=>{
    return new Promise((resolve, reject)=>{
        (true)?
            setTimeout(()=>{ resolve("Hello world! ")},3000)
        :
            reject(new Error("Test error"));
        
    })
}
const helloAsync = async()=>{
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();


