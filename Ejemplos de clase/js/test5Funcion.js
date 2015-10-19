function factorialFun(num) {
	var suma = 1;

	for (var i = num; i > 0; i--) {

		suma *= i;

	};

	return suma;

}

try {

	var factorial = Number(prompt("Dime número"));

	alert("El resultado es: " + factorialFun(factorial));

} catch (ex) {

	alert(ex);

}