//oprador de reposo estra las propiedades objeto que aun no esta contruido

const object = {
    namevar: 'Christian',
    age: 29,
    country: 'MX'
}
// permite extraer un valor en el siguiente valor se extrae el nombre del objeto
// let { namevar, ...all } =object;
// console.log(namevar, all);

//quita la un vaor y nos devuelve un objeto con los valores que se requiere 
let { country, ...all } =object;
console.log(all);


//unir dos objetos 
const obj = {
    namevar: 'Christian',
    age: 29,
}

const obj1 = {
    ... obj,
    country: 'MX'
}
console.log(obj1)

// saber como a terminado la ejecucion de una promesa

const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true)
        // ? resolve('Hello world') 
        ? setTimeout( () => resolve ("helow World"), 3000)
        : reject(new Error('eaxamen de error'))
    });
};

helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizo ejecucion'))

//como poder agrupar bloques del regex

const regeData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regeData.exec('2019-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);