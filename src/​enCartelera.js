const fs = require("fs");

let movies = JSON.parse(
    fs.readFileSync("./data/movies.json",{
    enconding: "utf-8", 
  })
);

function cargarDetalleEnCartelera(){
    const totalPeli = '\nTotal de películas en cartelera​: ​(' + movies.length + ')';
    let tituloCartelera = "En Cartelera";
    let titulosConResenias = "";
    movies.forEach(elemento => titulosConResenias += `${elemento.title}\n${elemento.overview}\n\n`);
    return (`${tituloCartelera}\n\n\n ${totalPeli}\n\n\n${titulosConResenias}`);
}

module.exports = cargarDetalleEnCartelera;