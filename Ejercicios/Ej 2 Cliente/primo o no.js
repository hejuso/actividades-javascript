var num = parseInt(prompt("Deme un numero pls"));

function primo(num) {

	var aux = true;

	for (var i = 2; i < num; i++) {

		if (i != num) {

			if ((num % i) == 0) {

				aux = false;

			}
		}

	}

	if (aux == true) {

		return "El numero es primo";

	} else {

		return "No es primo";

	}
}

alert(primo(num));