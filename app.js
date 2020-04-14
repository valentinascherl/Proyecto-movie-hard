//entry point
const http = require("http");
const cargarDetalleHome = require ("./src/homePage");
const cargarDetalleEnCartelera = require("./src/enCartelera");
const cargarDetalleMasVotadas = require("./src/masVotadas");
const cargarDetallePreguntasFrecuentes = require("./src/preguntasFrecuentes");
const cargarDetalleSucursales = require("./src/sucursales");

let movies = JSON.parse(
    fs.readFileSync("./data/movies.json",{
    enconding: "utf-8", 
  })
);

let preguntas = JSON.parse(
    fs.readFileSync("./data/faqs.json",{
    enconding: "utf-8", 
  })
);

let sucursales = JSON.parse(
    fs.readFileSync("./data/theaters.json",{
    enconding: "utf-8", 
  })
);




const server = http.createServer((req, res) => {
    //cada vez que solicito un recurso ejecuto el callback del createServer
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    // Route System: con el switch logramos que nuestra app pueda "rutear" las diferenes peticiones:
    // Es decir, por ejemplo cuando solicitemos el recurso '/' con el switch indicaremos que parte de nuestro
    // código atenderá/ejecutará dicha petición, es decir todo el codigo contenido entre [case '/':] hasta el [break;]
	switch (req.url) {
		// Home
		case '/':
            let detalleHome = cargarDetalleHome();
            res.write('Home\n' + detalleHome);
            //usamos la función write para enviar para enviar el texto requerido en el cuerpo de la respuesta al browser.
            res.end();  //Por último, llamamos res.end() para finalizar nuestra respuesta

			break;
		// En cartelera
		case '/en-cartelera':
            let detalleCartelera = cargarDetalleEnCartelera();
            res.write('En Cartelera\n' + detalleCartelera);
			res.end();

			break;
		//Mas votadas
		case '/mas-votadas':
            let detalleMasVotadas = cargarDetalleMasVotadas();
            res.write('Mas Votadas\n' + detalleMasVotadas);
			res.end();

			break;
        //Sucursales
        case '/sucursales':
			let detalleSucursales = cargarDetalleSucursales();
			req.write('Sucursales\n' + detalleSucursales);
			res.end();
			break;
		case '/contacto':
            let tituloContacto = "Contactenos";
			const descripcion = "​¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email:dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.";
			res.end(`${tituloContacto}\n\n${descripcion}`);

			break;
		case '/preguntas-frecuentes':
			let detallePreguntasFrecuentes = cargarDetallePreguntasFrecuentes();
			req.write('Preguntas Frecuentes\n' + detallePreguntasFrecuentes);
			res.end();

			break;
		default:
			res.end('404 not found')

	}

});



// También puedo configurar el puerto y el hostname en variables, para luego poder modificarlas más fácil.
// y hacer mi código más fácil de mantener y de entender.
const port = 3030;
const hostname = 'localhost';
//luego usando string template puedo mantener actualizado el mensaje a mostrar, por ejemplo:
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});