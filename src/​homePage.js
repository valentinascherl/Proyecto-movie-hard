const fs = require("fs");

let movies = JSON.parse(
    fs.readFileSync("./data/movies.json",{
    enconding: "utf-8", 
  })
);

function cargarDetalleHome(){
    const titulo = '​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores  películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.\n';
    const totalPeli = '\nTotal de películas en cartelera​: ​(' + movies.length + ')';
    const listadoPeli = '\n\nListados de películas:'
    const pelis = movies.map(movie => movie.title);
    pelis.sort();
    let peliListas = ' \n';
    for (let unaPeli of pelis) {
        peliListas += unaPeli+' \n';
    }
    const piePagina =  `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;
    return titulo + totalPeli + listadoPeli + peliListas + piePagina;
}
module.exports = cargarDetalleHome;






