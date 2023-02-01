///////EJEMPLO 1
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes() {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]); 
}





////////EJEMPLO 2
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes() {
    console.log(`Hola, ${estudiante}`);
}

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}

