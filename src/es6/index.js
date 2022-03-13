//------parametros por defectos en funciones  estas se pueden remplasar con es6

//crear funcion anterior mente 
function newFuction(name, age, country) {
    var name = name || 'Christian';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age, country);
}


// funcion con es6 lo nuevo 
function newFuction2( name = 'Christian', age = 32, country = ""){
    console.log(name,age, country);
}
newFuction2();
newFuction2('Oliver' , '29', 'CO');

//template concatenacion 

let hello = "hello";
let world = "world";
let epicPhrase = hello + ' '+ world;
console.log(epicPhrase);
// es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ------- multilinea o salto de linea
// anteriormente
let lorem = "texto de prueba para realizar un salto de linea \n"
+ "salto de linea que necesitamos";

// salto de linea de es6
let lorem2 = `otra cadena para realizar el salto de linea 
a hora es un salto de linea con es6
`
console.log(lorem);
console.log(lorem);

//destructuracion de elementos 

let person = {
    'namep': 'Christian',
    'age': 29,
    'country': 'MX'
}
//accder al los elementos del objeto anteriormente
console.log(person.namep, person.age);

//destructuracion de elementos con es6
let{namep,age} = person;
console.log(namep, age);

// operador de propagacion que sirve para expandir ciertos elementos

let team1 = ['Christian', 'Oscar', 'Julian'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

// union de diferentes de elementos 
let education = ['David', ... team1, ...team2];
console.log(education);

//variables 
{
    var globalVar = 'Global var'; // global 
}

{
    let globalLet = 'Glovar let';  // global dentro del bloque no es accesible fuera de aqui
    console.log(globalLet);
}
console.log(globalVar);
console.log(globalLet);

//con COST no se pede reasignar valor 
const a = 'b';
a = 'a'; 


// ------- propiedad de objetos mejorado y su asignacion 
let nameVar = 'Christian';
let ageP = 32;

// es5 acceder a elementos y crrear objetos con nuevos valores
obj = {name: nameVar, age: ageP};
// es6 arroa codigo 
obj2 = {nameVar, ageP};
console.log(obj);
console.log(obj2);

//arrow funcions o funciones de flechas sintaxis mas reducida 

const datas = [
    {names:'Christian', ages:29},
    {names:'Oliver', ages:27}
]

//iteracion 
// forma antigua pasando funcion anonima 
let listOfName = datas.map(function (item) {
    console.log(item.names);
})
//es6 con arrow function que son funciones anonimas
let listOfName2 = datas.map(item => console.log(item.names));

//otra forma con arrow funciton con constantes  si son muchos parametros 
const listOfName3 = (name, age) => {
    //bloque de codigo 
}
// solo parametro
const  listoOfNme4 = nme => {
    //bloque de codigo
}
// otra forma es crear una funcion que recibe valor Numerico  y lo que hace es multiplicar 
const square = num => num * num ;

// ----- promesas 
//como JS no es sincorinco va ejecutando elemento por elemento, se maneja el sincronismo 
// (que dos elemntos no suseden al mismo tiemo) si no en una seri de situaciones 
// en el siguiente codigo se realiza una promesa que en determinado valor regresa un resolve o reject
const helloPromise = () => {
    return new Promise((resolve,  reject) => {
        if (false) {
            resolve('hey very good');
        } else {
            reject('Ups!!');
        }
    });
}

//ejecutar promesa
helloPromise()
    .then(response => console.log(response))
    .then (() => console.log("Hola"))
    .catch(error => console.log(error));

//------ clases en es6 para sintaxis mas clara y erencias 
// crear calculadora como ejemplo 

class calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(a ,b) {
        this.valueA = a;
        this.valueB = b;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log("la suma es: " + calc.sumar(5,65));

// import y expor para trabajar con mosulos 
import hello from "./modules";

hello();


//---- generadores 

function* hellowWorld() {
    if (true) {
        yield 'bien, ';
    }
    if (true) {
        yield ('Muy bieeen');
    }
};

const generationHello = hellowWorld(); 
console.log(generationHello.next().value);
console.log(generationHello.next().value);
console.log(generationHello.next().value);




