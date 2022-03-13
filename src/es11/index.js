//dinamic impor relizar importaciones dinamicas

const button = document.getElementById("btn");

button.addEventListener('click',async function () {
    const module = await import("./file.js");
    module.hello();
});

// 1- Añadiendo una "n" al final se activa el big int en el valor
const aBigNumber = 9007199254740991n;

// 2- otra forma es el metodo BigInt 
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// promise all Setteld ejecutara todas las promesas sin importar si una es rechaada 
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve "));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));

// 🌎 Global This

console.log(window);
console.log(globalThis);

// 🔍 Nuevo operador lógico: null operator

const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)
// Chaining 
const user = {};
console.log(user?.profile?.email); //  para entrar al objeto sin romper la app

// un ejemplo de usabilida es validar si existe algun valor en el objeto
if(user?.profile?.email) {
    console.log('email')
} else{
    console.log('fail')
}
