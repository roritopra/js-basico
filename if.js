
let pc = 0
let jugador = 0

//1 tijeras
//2 papel
//3 piedra

function resultado(jugador, pc) {
    if (jugador == 1 && pc == 2) {
        console.log("ganaste")
    } else if (jugador ==3  && pc == 1) {
        console.log("Ganaste")
    } else if (jugador == 2 && pc == 3) {
        console.log("Ganaste")
    } else if (jugador == pc){
        console.log("Empate")
    } else {
        console.log("Perdiste chaval")
    }
}

resultado(2, 2);