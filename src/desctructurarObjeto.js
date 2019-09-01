const USUARIO = {
    nombre: 'Carlos',
    correo: 'carlos@gmail.com',
    edad: 22,
    pais: 'paraguay'
}


const {nombre, edad} = USUARIO;

console.log(`el se llama ${nombre} y su edad es ${edad}`);

//ahora con utilizando una funcion
const mostrarInfo = ({nombre, profesion = 'estudiante'}) => console.log(`el se llama ${nombre} y su profesion es ${profesion}`);
mostrarInfo(USUARIO);
