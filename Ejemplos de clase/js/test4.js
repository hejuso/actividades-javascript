var base = parseInt(prompt("Dame la base"));
var exp = parseInt(prompt("Dame el exponente"));
var resul = 0;

for (var i = 1; i < exp; i++) {

	if (i == 1) {
		resul += (base * base);
	} else {
		resul *= base;
	}

};

if (exp == 0) {
	resul = 1;
}

alert("El resultado es: " + resul);