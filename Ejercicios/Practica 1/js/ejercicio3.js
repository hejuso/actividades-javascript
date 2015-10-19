var comprobeixon = true;
document.write("Soluciones:");
document.write("<br>");
document.write("<br>");

var op1 = prompt("Introduzca el primer numero");
var operador = prompt("Introduzca el operador");
var op2 = prompt("Introduzca el segundo numero");
var resultado;


switch(operador) {

	case "+":

	resultado = parseInt(op1) + parseInt(op2);

	break;

	case "-":

	resultado = parseInt(op1) - parseInt(op2);

	break;

	case "*":

	resultado = parseInt(op1) * parseInt(op2);

	break;

	case "/":

	resultado = parseInt(op1) / parseInt(op2);

	break;

	default:

	prompt("Introduzca un valor correcto");

}

	document.write("El resultado de "+op1+" "+operador+" "+op2+" = "+resultado);
	document.write("<br>");
	document.write("<br>");


document.write("Gracias, adios");