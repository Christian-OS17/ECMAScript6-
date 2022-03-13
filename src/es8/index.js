// object.entries devuelve los valores convertidos en una matriz

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}
const entries = Object.entries(data);
console.log(entries);

// cuantos elementos tiene una matris
console.log(entries.length);

// Object.values devuelve los valores de un objeto en un arreglo
const datas = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana'
}
const values = Object.values(datas);
console.log(values);
console.log(values.length);
//padding  agrega caracteres en esto depende los que tenemos sumando los existentes + los nuevos
const string = "Bien";
console.log(string.padStart(10, 'vamos '));
// agregar al final 
console.log(string.padEnd(7, ' *2 '));

// Es importante tener en cuenta la diferencia entre las promesas y async await.
//  Porque se encargan de lo mismo, la asíncronia, pero de distinta manera. 
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)  // es lo mismo que un if 
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error("Ocurrio algo"))
    });
}

// se identifica con async y await 
// async Nos sirve para marcar una funcion asincrona y su valor de retorno
//pone en espera la ejecucion mientras la promesa resuelve 
const HelloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

HelloAsync();

// se debe ejecutar de la siguiente manera buenas practicas
const anotherFuction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    }catch (error) {
        console.log(error);
    }
};