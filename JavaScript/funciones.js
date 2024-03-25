/*
function sumar( a, b, c){
     return a + b + c; 
}

var result = sumar (1, 1, 8);
console.log(result);
*/

////Funciones Recursivas
/*
var factorial = function(n){
    if (( n == 0 ) || (n == 1))
       return 1;
    else
       return (n * factorial(n - 1));
}

console.log(factorial(5));
*/

///// Arreglo o arrays

var nombres = ['Victoria', 'Mari', 'Dai', 'Mariano'];
var verduras = new Array ('Tomate', 'Lechuga', 'Palta');

// console.log(nombres[3]);
// console.log(verduras[1]);

// nombres[0]= 'vicky';
// verduras[1]='Pepino';

// console.log(nombres[0]);
// console.log(verduras[1]);

/*
console.log(nombres.length);
for (var i = 0; i <= nombres.length - 1; i++){
    console.log(nombres[i]);
}

verduras.forEach(function(elemento, indice){
    console.log(elemento, indice)
})
*/

// Agregar elementos al final

console.log(nombres);
nombres.push('Pablo');
console.log(nombres);

// Agregar elementos al principio

nombres.unshift('Luisa');
console.log(nombres);

// Quitar elementos al final

nombres.pop();
console.log(nombres);

// Quitar elementos al principio

nombres.shift();
console.log(nombres);

// Saber la posicion de un elemento

var pos = nombres.indexOf('Mari');
console.log(pos);

// Quitar elementos q estan en el centro.

nombres.splice(1, 2);
console.log(nombres);

