fetch('http://127.0.0.1:5500/pasajeros.json').then((response) =>response.json()).then((pasajeros) => {
    const nombreDePasajeros = pasajeros.map((pasaje) =>pasajeros.nombre)
    console.log(nombreDePasajeros)
});