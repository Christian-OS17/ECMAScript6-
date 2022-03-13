// replaceAll 

//remplasa solo la palabra que en cuentra en la posicion 1
const string = 'JavaScript es maravilloso y con JavaScript crear el futuro de la web';
const replaceString = string.replace('JavaScript', 'Python')
console.log(replaceString)
//remplasa en las coincidencias 
const replaceString2 = string.replaceAll('JavaScript', 'Python');
console.log(replaceString2);

//metodos privados
class Message {
    #show(val) { // agregando # se vuelve privado
        console.log(val)
    }
}

const message = new Message();
message.show('Hola!');


// promise.any objeto global captura la primera respuesta que sea satisfactoria

const promise1 = new Promise((resolve,reject) => reject("sin resolver"));
const promise2 = new Promise((resolve,reject) => resolve("resualta"));
const promise3 = new Promise((resolve,reject) => resolve("resuelta 2"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//

class anyClass {
    constructor(element){
    this.ref = new WeakMap(element)
    }
}

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

 isTrue = true;
isFalse = false;
console.log(isTrue ||= isFalse);

isTrue = undefined;
isFalse = false;
console.log(isTrue ??= isFalse);