

const NOMBRES = ['carlos', 'alejandro', 'maria'];
const APELLIDOS = ['alberto', 'posada', 'soto'];

//funcion normal
const numeroCaracteres = NOMBRES.map(function(nombre){
    console.log(`${nombre} tiene  ${nombre.length} numero de letras`);
});


//funcion flecha
let numeroCaracteresDos = APELLIDOS.map(apellido => {
    console.log(`${apellido} tiene  ${apellido.length} numero de letras`);
});

//acortando funcion tipo flecha
numeroCaracteresDos = APELLIDOS.map(apellido => {
    return `${apellido} tiene  ${apellido.length} numero de letras`
});

//acortando mas la funcion tipo flecha
numeroCaracteresDos = APELLIDOS.map(apellido => `${apellido} tiene  ${apellido.length} numero de letras`);


/*
    estructura de funcion tipo flecha
    (parametro) => {
        //return or codigo a ejecutar
    }
**/