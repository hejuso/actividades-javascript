var passCorrecta = "daw";
var comprobacion = true;

var pass = prompt("Introduzca password:");

while(comprobacion){

	if(pass == passCorrecta){
		comprobacion = false;

	}else{
		pass = prompt("Introduzca password:");
		comprobacion=true;
	}

}