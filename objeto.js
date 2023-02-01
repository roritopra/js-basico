var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
    }

//para llamar a una parte de mi objeto    

miAuto.marca

//Para mandar a llamar el mismo objeto agregando una propiedad como funcion
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

miAuto.detalleDelAuto();

//Qué es el this?
//This hace referencia al objeto, osea llamando al objeto
//El this es una variable que hace referencia al objeto, es la forma de acceder de igual forma a ciertos valores del objeto