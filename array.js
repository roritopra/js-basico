var frutas = ["Manzana" , "Plátano", "Cereza" , "Fresa"]

//¿Cómo hagoo para saber cuandos elementos hay en un array?
console.log(frutas.length)

//¿Cómo hago para atraer un elemento del array?
console.log(frutas[0])

///////////////////Mutar un array

//Esto va a añadir un elemento al final del array por lo que aparecerá uvas
var masFrutas = frutas.push("Uvas")

//Quitar el ultimo elemento del array, lo que hace es eliminar uvas del array
var ultimo = frutas.pop("Uvas")

//Agregar un elemento al inicio del array, en este caso se va a crear el elemento uvas al inicio del array
var nuevaLongitud = frutas.unshift("Uvas")

//Para eliminar el elemento que esté en el inicio dell array
var borraFruta = fruta.shift("Uvas")

//Es para encontrar el número del elemento de un array gigante y no sepamos en que posición está
var posicion = frutas.indexOf("Cereza")

//Es para especificar que elemento dentro del array quiero elminar y cuantos atributos dentro del elemento
var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']