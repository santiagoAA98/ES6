"use strict";

var USUARIO = {
  nombre: 'Carlos',
  correo: 'carlos@gmail.com',
  edad: 22,
  pais: 'paraguay'
};
var nombre = USUARIO.nombre,
    edad = USUARIO.edad;
console.log("el se llama ".concat(nombre, " y su edad es ").concat(edad)); //ahora con utilizando una funcion

var mostrarInfo = function mostrarInfo(_ref) {
  var nombre = _ref.nombre,
      _ref$profesion = _ref.profesion,
      profesion = _ref$profesion === void 0 ? 'estudiante' : _ref$profesion;
  return console.log("el se llama ".concat(nombre, " y su profesion es ").concat(profesion));
};

mostrarInfo(USUARIO);