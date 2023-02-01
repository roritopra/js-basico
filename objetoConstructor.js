//Lo que hace es como la estructura de construcción del objeto

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//AQUÍ ES COMO SE PUEDE CREAR UNA VARIABLE CUALQUIERA CON EL PARAMETRO

var autoNuevo = new auto("Tesla", "Model 3", 2020)
var autoNuevo2 = new auto("Toyota", "Supra", 2002)



////EJEMPLO
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 2 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }