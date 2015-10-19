var ciudad = prompt("Introduzca una ciudad");

switch(ciudad){

	case "valencia":
		document.write("Universidad de Valencia: Se convalidarán 30 créditos");
	break;

	case "madrid":
		document.write("Universidad de Marid: No se convalidan créditos");
	break;

	case "sevilla":
	case "granada":
	case "cordoba":
	document.write("Universidad	de	Sevilla, Granada y Córdoba: Se convalidan 50 créditos");
	break;
}