// Template para regresar un valor random de un array
// function randomRegion() {
//     var random = regiones[Math.floor(Math.random() * regiones.length)];
//     return random
// }

//Caracteristicas de personajes
//Region del personaje
var regiones = [
    "Liyue",
    "Mondstadt",
    "Inazuma",
    "Sumeru"
]
//Elige una region random
function randomRegion() {
    var random = regiones[Math.floor(Math.random() * regiones.length)];
    return random;
}

//Visión o elemento del personaje
var visiones = [
    "Ameno",
    "Electro",
    "Geo",
    "Hydro",
    "Pryo",
    "Cryo",
    "Dreno"
]
//Elige una vision o elemento random
function randomVision(){
    var random = visiones[Math.floor(Math.random() * visiones.length)];
    return random;
}

//Arma del personaje
var tipoArma = [
    "Espada ligera",
    "Manodoble",
    "Lanza",
    "Arco",
    "Catalizador"
]
//Elige un tipo de arma random
function randomArma(){
    var random = tipoArma[Math.floor(Math.random() * tipoArma.length)];
    return random;
}

//Rol del personaje en combate
var roles = [
    "Burst Support",
    "DPS",
    "Off-Fields DPS",
    "Soporte",
    "Sub-DPS"
]
//Elige un rol random
function randomRol(){
    var random = roles[Math.floor(Math.random() * roles.length)];
    return random;
}

//Calidad cuantiicada en estrellas⭐
var estrellas = [
    "⭐⭐⭐⭐",
    "⭐⭐⭐⭐⭐"
]
//Elige una calidad random
function randomEstrellas(){
    var random = estrellas[Math.floor(Math.random() * estrellas.length)];
    return random;
}

//Plantilla para la creación del objeto
function personaje(region, vision, arma, rol, calidad) {
    this.region = region;
    this.vision = vision;
    this.arma = arma;
    this.rol = rol;
    this.calidad = calidad;
}

//Ciclo de creación de objetos
for (let i = 0; i < 30; i++) {
    var personajes = new personaje( randomRegion(), randomVision(), randomArma(), randomRol(), randomEstrellas());
    console.log(personajes);
}


// var personajes = new personaje( randomRegion(), randomVision(), randomArma(), randomRol(), randomEstrellas());
// console.log(personajes);
