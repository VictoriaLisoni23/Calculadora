// Cambiar el titulo de la pestaña
console.log(document.title);
document.title = 'Prueba de titulo';
console.log(document.title);

// Consultar el body
console.log(document.body);

// Consultar elementos especificos
var h1 = document.getElementsByTagName('h1');

// Cambiar el titulo al H1 (elemento especifico)
h1[0].innerHTML='HTML';
console.log(h1);

// Mostrar boton
var boton = document.getElementById('boton');
console.log(boton);

boton.addEventListener('click', mensaje);

function mensaje(){
    alert('Mensaje')
}

