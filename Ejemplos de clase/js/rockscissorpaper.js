var opcion = prompt("Elige: piedra, papel o tijeras");
var random = Math.random();
var opMaquina;

//randomize

if (random >= 0.33) {
	opMaquina = "piedra";
}

if (random < 0.66 && random < 0.33) {
	opMaquina = "papel";
}

if (random < 1 && random > 0.66) {
	opMaquina = "tijeras";
}

document.write("Elección de la maquina: " + opMaquina)
document.write("<br>")
document.write("Tu elección: " + opcion)

//Elección del jugador

document.write("<br>")
document.write("<br>")
document.write("<h2>--- Resultado ---</h2>")

if (opMaquina == "piedra" && opcion == "tijeras") {
	document.write("<h1 class='perder'> Perdiste </h1>");
}

if (opMaquina == "piedra" && opcion == "piedra") {
	document.write("<h1 class='empatar'> Empataste </h1>");
}

if (opMaquina == "piedra" && opcion == "papel") {
	document.write("<h1 class='ganar'> Ganaste </h1>");
}

if (opMaquina == "papel" && opcion == "tijeras") {
	document.write("<h1 class='ganar'> Ganaste </h1>");
}

if (opMaquina == "papel" && opcion == "papel") {
	document.write("<h1 class='empatar'> Empataste </h1>'");
}

if (opMaquina == "papel" && opcion == "piedra") {
	document.write("<h1 class='perder'> Perdiste </h1>");
}

if (opMaquina == "tijeras" && opcion == "tijeras") {
	document.write("<h1 class='empatar'> Empataste </h1>");
}

if (opMaquina == "tijeras" && opcion == "piedra") {
	document.write("<h1 class='ganar'> Ganaste </h1>");
}

if (opMaquina == "tijeras" && opcion == "papel") {
	document.write("<h1 class='perder'> Perdiste </h1>");
}