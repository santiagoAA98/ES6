"use strict";

var NAME = 'andres';
var AGE = 31;
var CITY = 'madrid'; //Antes

console.log('la persona es' + NAME + ', tiene' + AGE + ' años y vive en' + CITY); //Ahora

console.log("la persona es ".concat(NAME, ", tiene ").concat(AGE, " a\xF1os y vive en ").concat(CITY));