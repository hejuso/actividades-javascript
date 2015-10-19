var num = parseInt(prompt("Introduzca numero."));
var suma = 1;

document.write("El resultado en factorial de " + num + " es: <br>");

for (var i = num; i > 0; i--) {

	suma *= i;

	if (i == 1) {

		document.write(i + " = ");

	} else {

		document.write(i + " * ");
	}
};


document.write(suma);