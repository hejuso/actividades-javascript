
document.write("<table border=1>");
document.write("<legend><h1><font color='red'>Ejercicio 1: Tablas de multiplicar</font></h1></legend>");

document.write("<tr>");
document.write("<th><h2><font color='blue'>Tabla de multiplicar del 8</font></h2></th>");
document.write("<th><h2><font color='blue'>Tabla de multiplicar del 9</font></h2></th>");
document.write("</tr>");



for (var x = 1; x <= 10; x++) {
	r1=8*x;
	r2=9*x;
	document.write("<tr><th>"+8+"x"+x+"="+ r1 + "</th><th>"+9+"x"+x+"="+ r2 + "</th></tr>")
}



document.write("</table>");