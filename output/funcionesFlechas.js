"use strict";

var NOMBRES = ['carlos', 'alejandro', 'maria'];
var APELLIDOS = ['alberto', 'posada', 'soto']; //funcion normal

var numeroCaracteres = NOMBRES.map(function (nombre) {
  console.log("".concat(nombre, " tiene  ").concat(nombre.length, " numero de letras"));
}); //funcion flecha

var numeroCaracteresDos = APELLIDOS.map(function (apellido) {
  console.log("".concat(apellido, " tiene  ").concat(apellido.length, " numero de letras"));
}); //acortando funcion tipo flecha

numeroCaracteresDos = APELLIDOS.map(function (apellido) {
  return "".concat(apellido, " tiene  ").concat(apellido.length, " numero de letras");
}); //acortando mas la funcion tipo flecha

numeroCaracteresDos = APELLIDOS.map(function (apellido) {
  return "".concat(apellido, " tiene  ").concat(apellido.length, " numero de letras");
});
/*
    estructura de funcion tipo flecha
    (parametro) => {
        //return or codigo a ejecutar
    }
**/