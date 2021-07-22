
// ## PASE DE PARAMETROS CON VALORES DEFAULT

// funcion anterior a es6 para setear valores por defecto
function newFunction(name,age,country){
    var name= name || 'jared';
    var age= age||32;
    var country = country||'Mexico';
    console.log(name,age,country);
};


// ES6
function newFunction2(name='jared',age=32,country="Mexico"){
    console.log(name,age,country);
}

newFunction2();
newFunction('Oscar',32,'Colombia');

//###############################################################################################
/**
 * CONCATENACION
 * usando comillas francesas "template literal"
 */

let hello="Hello";
let world = "World";
let epicPhrase = hello + ' ' + world; // concatenacion antigua
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`; // nueva concatenacion con comillas francesas
console.log(epicPhrase2);
//###############################################################################################
/**
 * MULTILINEA
 *  utilizando template-literal y comillas francesas
 */

// multilinea de los ancestros
let lorem ="Lorem Ipsum es simplemente el texto de relleno de las imprentas\n"
  + "y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de \n"
  + "las industrias desde el año 1500, cuando un impresor (N. del T. persona que \n"
  + "se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.";
  /**Multilinea con ES6 */
let lorem2 =`Lorem Ipsum es simplemente el texto de relleno de las imprentas
 y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
 las industrias desde el año 1500, cuando un impresor (N. del T. persona que
 se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.`;

 console.log(lorem);
 console.log("*********************************");
 console.log(lorem2);
//###############################################################################################
/** 
 * DESESTRUCTURACION DE ELEMENTOS
 */
let person={
    'name':'Jared',
    'age' : 32,
    'country':"Mexico"
};
//antes
console.log(person.name,person.age,person.country);
// ES6
/**
 * especifica las propiedades que se quieren extraer del objeto
 */
let {name,age,country} =person;
console.log(name,age,country);

/**
 * solo name y country
 */
let {name, country } =person;
console.log(name,country);
//###############################################################################################

//## OPERADOR DE PROPAGACION
// se usa para combinar listas
// para unir las listas se colocan puntos suspensivos antes de cada arreglo que se va a fusionar
let team1 =["Jared" ,"Juan","Jose"];
let tema2=["Antonio","Alfonso","Alberto"];
let union = [...team1,'Mario',...tema2]; // este mero es
console.log(union);
//###############################################################################################

// USO DE var, let y const

// let esta disponible en el ambito global
// let solo esta disponible en el scope, osea.. en el bloque de codigo donde va a ser llamado
//ejemplo
{
    var globalVar = "globalVar";
}
{
    let globalLet ="globalLet";
    // console.log(globalLet);// solo puede ser usado aqui
}
console.log(globalVar);// si se puede acceder aunque su llamada sea fuera del ambito de declaracion
console.log(globalLet);// arroja un error ya que solo puede ser usado dentro de su scope
// uso de const
// son constantes, no puede cambiar su valor y vive dentro de su scope

const a ='a';
a = 'b'; //error, no se puede asignar nuevo valor a una constante


//###############################################################################################

