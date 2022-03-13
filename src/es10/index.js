let array = [1,2,3, [1,2,3, [1,2,3]]];
//un nuevo método que nos permite aplanar arreglos.
console.log(array.flat());
console.log(array.flat(2));
// lo mismo que flat con el beneficio de que primero 
//manipular con una funcion la data para luego poder aplanar.
let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value, value * 2]));

//trimStart nos permite eliminar los espacios en blanco de un string 
let hello = '            hello word  ';
console.log(hello);
console.log(hello.trimStart());
//eliminar espacion al final 
console.log(hello.trimEnd());

//------ obpcional catch

try {

}catch {
    // sa ha cambiado a catch (error) se puede dejar como se oresenta
}

//lo inverso a Object.entries(), es decir podemos convertir un objeto 
//en una matriz clave/valor con Object.entries(), y hace lo inverso es decir
// de una matriz clave/valor a un objeto con Object.fromEntries()

let entries = [["names", "christian"],["ages", 29]];
console.log(Object.fromEntries(entries));

//objeto de tipo simbolo permite ver la descripicon de un objeto

let mySimbol = 'My symbol description';
let symbol = Symbol(mySimbol);
console.log(symbol.description);
