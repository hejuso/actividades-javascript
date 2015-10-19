var cifra = prompt("Introduce una posición");
var fibonacci=1;
var ant=0;
var act=1;

for (var i = 1; i < cifra; i++) {

	fibonacci = ant + act;
    ant = act;
    act = fibonacci;

};
console.log(ant);
console.log(act);
document.write(fibonacci);