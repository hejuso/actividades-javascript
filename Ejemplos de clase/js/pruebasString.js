/*
var cadena="Módulos: DWEC, DWES, PRG, BDA.";
var inicio=cadena.indexOf(":");
var fin=cadena.indexOf(".");

var listado = cadena.substring(inicio+1,fin);
var listadoFinal=listado.split(",");

for (var i = 0; i < listadoFinal; i++) {
	document.write(listadoFinal[i]);
};
*/

var texto="algo";
var letra="";
var resultado="";

for (var i = 0; i < texto.length; i++) {
	letra = texto.charAt(i);

	switch(letra){

		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
			resultado += texto.charAt(i).toUpperCase();
			break;

		default:
			resultado += texto.charAt(i);
		;

	}

};

document.write(resultado);

/*
var texto="Hola a todos los alumnos de DAWN, alumnos";
var subcadena="alumnos";
var valor=texto.indexOf(subcadena,18);
console.log(valor);
*/
/*
var nombre=prompt("Dime tu nombre");

if(nombre.toUpperCase()==="PEPE"){

	console.log("Eres Pepe");
}else{

	console.log("No eres Pepe");

}
*/

/*
var v1="perro";
var v2="gato";

if(v1>v2){

	console.log("El perro es mayor");

}else{

	console.log("La gato es mayor");

}

console.log(v1.localeCompare(2));
*/
