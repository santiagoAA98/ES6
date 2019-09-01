const PERSONA = ['carlos', 23, 'Mexico'];

const [nombre, , pais, profesion='no especificado'] = PERSONA;

const MOSTRARINFO = ([nombre, , pais, profesion='no especificado'] = PERSONA) => console.log(`${nombre} - ${pais} - ${profesion}`);
MOSTRARINFO();