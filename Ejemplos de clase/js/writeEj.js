/*with(document){
	write("La altura total "+screen.height);
	write("<br>")
	write("La altura total "+screen.width);
	write("<br>")
	write("Altura disponible "+screen.availHeight);
	write("<br>")
	write("Altura disponible "+screen.availWidth);
	write("<br>")
	write(screen.colorDepth)
}

var ventana = window.open("","","width=200,height=200");
ventana.document.write("HOLA")
*/

var ventana;

function botVentCerrar(){

	ventana = window.close();

}

function botVent(){

	for (var i = 0; i < 5; i++) {
		
		ventana = window.open("","","width=200,height=200");
		ventana.document.write("<button onclick='window.close()'>Cerrar</button>");
		
	};

}