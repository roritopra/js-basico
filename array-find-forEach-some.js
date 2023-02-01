//El método find nos ayuda a encontrar algo dentro de un artículo, lo que hace es validar un true o false
//Find: Retorna solo la primera coincidencia.
var articulos = [
    { nombre: "Bici" , costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro" , costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", coste: 1700 },
];

var encuentraArticulo = articulos.find(function(articulo) {
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);
//Devuelve un nuevo array que trae todo el objeto completo


//El método forEach no genera un nuevo array, lo que hace es un filtrado sin modificarlo y ejecuta la función una vez por cada elemento del array
var articulos = [
    { nombre: "Bici" , costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro" , costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", coste: 1700 },
];

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
})
//Esto regresa los nombres que están dentro del Array, solo los nombres y ya


//Este médtodo some regresa una validación de true o false para articulos que cumplan esa validación}
var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
});
console.log(articulosBaratos)
//Esto regresa un true, solo una validación 