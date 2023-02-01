//Un filtro (MÉTODO FILTER) donde hacemos un recorrido del array buscando que solo obtenga los de un precio en adelante por ejemplo que busque los de 500 pesos pa arriba
//Find: Retorna solo la primera coincidencia.
//Filter: Retorna todas las coincidencias.
//Primer método de filtro
var articulos = [
     { nombre: "Bici" , costo: 3000 },
     { nombre: "Tv", costo: 2500 },
     { nombre: "Libro" , costo: 320 },
     { nombre: "Celular", costo: 10000 },
     { nombre: "Laptop", costo: 20000 },
     { nombre: "Teclado", costo: 500 },
     { nombre: "Audifonos", coste: 1700 },
];

var articulosFiltrado = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

console.log(articulosFiltrado)
//Se generan los objetos que tienen un costo menor o igual a 500

//Segundo método de filtro con map, lo diferente es que genera un nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos)