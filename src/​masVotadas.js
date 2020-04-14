const fs = require("fs");

let movies = JSON.parse(
    fs.readFileSync("./data/movies.json",{
    enconding: "utf-8", 
  })
);

function cargarDetalleMasVotadas(){
    let tituloMasVotadas="Mas Votadas";
	let promedioPelis = 0;
    movies.forEach(elemento => {
    promedioPelis += elemento.vote_average})
    let promedio = Math.round(promedioPelis/movies.length);
    let masValoradas = movies.filter(movie => movie.vote_average >= 7);
    let totalPelisRating = masValoradas.length + '\n\n';
    let masValuadas = ' \n';
    for (let pelis of masValoradas) {
        masValuadas += `${pelis.title}\n${pelis.vote_average}\n${pelis.overview}\n\n`;
    }
    return (`${tituloMasVotadas}\n\n\nTotal de peliculas con rating mayor o igual a 7: ${totalPelisRating}\nRating promedio: ${promedio}\n${masValuadas}`);
}

module.exports = cargarDetalleMasVotadas;