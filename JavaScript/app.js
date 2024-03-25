// Uso de Variables

/*
var nombre = 'Victoria';
console.log(nombre);
console.log(typeof(nombre));

var edad = 23;
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = true;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var Trabajo;
console.log(Trabajo);
*/


//Operadores Matematicos

/* 
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna=34;
edadMaria=28;
yearActual= 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades= edadAna + edadMaria;

yearAna= yearActual - edadAna;
yearMaria= yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nacio Ana ' + yearAna);
console.log('Año en que nacio Maria ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2);*/

////Operadores Logicos, unarios y de asignacion

//Logicos ( <>, <=, >=, == )

/*
var edadAna, edadMaria, diferenciaEdad;

edadAna=34;
edadMaria=28;

var mayorAna = edadAna > edadMaria;
console.log(mayorAna);

// Unarios, ++Incremento, --Decremento 

edadAna++;
console.log(edadAna);

// Asignacion, ( +=, -=, *=, %= )
var a = 12;
var b = 5;

a += b;
console.log(a);

a -= b;
console.log(a);

a *= b;
console.log(a);

a %= b;
console.log(a);

// Operador de Modulo, %
var c = a % 5; // Resto de una división 
console.log(c);
*/

//// Sentencias y estructuras de control

// Sentencia if...else
/*
var nombre = 'Victoria';
var esCasada = false;

if (esCasada == true){
    console.log (nombre + ' es casada.');
} else {
    console.log (nombre + ' es soltera.');
}

// Sentencias Logicas (not, and, or)

var nombre = 'Victoria';
var edad = 23;

//edad < 12 es un niño.
//edad > 11, es < 18 es un adolescente.
//edad > 17, es < 60, es un adulto.
//edad > 60 es un anciano.

if (edad < 12){
    console.log(nombre + ' es una niña. ');
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es adolescente. ');
} else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es adulta. ');
} else if (edad > 60) {
    console.log(nombre + 'es anciana. ');
}

// Sentencia Switch

var mes = 2;
switch (mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
     case 4:
        console.log('Abril');
        break;
    default:
        console.log('Mes no encontrado')
}

// Sentencia For

for(var i=1; i<=10; i+=5){
    console.log(i);
}

// Sentencia while, Do while (Misma logica que un For)

var i = 1;
while (i<=10){
    console.log(i);
    i++;
}
console.log(i);

// Sentencia Do..while

var i = 1;
do{ 
    console.log(i);
   i++;
} while (i<=10);
console.log(i);
*/

//// Funciones y arreglos

