var cadena = prompt("Introduzca num y letras");
var sum = 0;

//Otra opción es if(cadena.charAt(i) / 1){
//					sum += parseInt(cadena.charAt(i));
//				 }

for(var i=0; i<cadena.length;i++){

	if(!isNaN(cadena.charAt(i))){

		sum += parseInt(cadena.charAt(i));

	}

}

alert("El resultado de la funcion es: "+sum);