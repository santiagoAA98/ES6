const crearObjeto = (nombre,edad) => {
    return {
        nombre,
        edad,
        mostrarInfo: () => {
            return `${nombre} tiene ${edad}`;
        }
    }
}


console.log(crearObjeto('Carlos', 22).mostrarInfo());