/*
var a=['a', 'b', 'c'];
var b=[];

for (var i = 0; i < a.length; i++) {
	b[i]=a[i];
};

document.write("--LETRAS-- <br>");

for (var i = 0; i < a.length; i++) {
	document.write(b[i]+" ");
};
*/
var c=['a','b','c'];

var d=['a','b','c'];
var iguales=true;

for (var i = 0; i < c.length && iguales; i++) {
	if(c[i]!=d[i]){

		iguales=false;
	}
};

if(iguales){

	alert("Son iguales");


}else{
	alert("No son iguales");

}