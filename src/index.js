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

            res.end();  //Por último, llamamos res.end() para finalizar nuestra respuesta.

			break;

		// En cartelera

		case '/en-cartelera':
			const totalPeli = '\nTotal de películas en cartelera​: ​(' + movies.length + ')';
			let tituloCartelera = "En Cartelera";
            let titulosConResenias = "";
			movies.forEach(elemento => titulosConResenias += `${elemento.title}\n${elemento.overview}\n\n`);
			res.end(`${tituloCartelera}\n\n\n ${totalPeli}\n\n\n${titulosConResenias}`);

			break;

		//Mas votadas

		case '/mas-votadas':
			let tituloMasVotadas="Mas Votadas";
			let promedioPelis = 0;
            movies.forEach(elemento => {
            promedioPelis += elemento.vote_average})
            let promedio = Math.round(promedioPelis/movies.length);
            let masValoradas = movies.filter(movie => movie.vote_average >= 7);
            let totalPelisRating = masValoradas.length + '\n\n';
            let masValuadas = ' \n';
            for (let pelis of masValoradas) {
            masValuadas += `${pelis.title}\n${pelis.vote_average}\n${pelis.overview}\n\n`;}

			res.end(`${tituloMasVotadas}\n\n\nTotal de peliculas con rating mayor o igual a 7: ${totalPelisRating}\nRating promedio: ${promedio}\n${masValuadas}`);

			break;

        //Sucursales

        case '/sucursales':
			let tituloSucursales = "Nuestras Salas";
			let totalSalas = '\nTotal de salas​: ​(' + theaters.length + ')\n';
			let salaConNombre = "";
			theaters.forEach(elemento => salaConNombre += `${elemento.name}\n${elemento.address}\n${elemento.description}\n\n`);



			res.end(`${tituloSucursales}\n\n\n${totalSalas}\n${salaConNombre}`);

			break;


		case '/contacto':
			let tituloContacto = "Contactenos";
			const descripcion = "​¿Tenés algo para contarnos? Nos encanta escuchar a nuestros clientes. Si deseas contactarnos podés escribirnos al siguiente email:dhmovies@digitalhouse.com o en las redes sociales. Envianos tu consulta,sugerencia o reclamo y será respondido a la brevedad posible. Recordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.";


			res.end(`${tituloContacto}\n\n${descripcion}`);

			break;

		case '/preguntas-frecuentes':
			let tituloPreguntasFrecuentes = "Preguntas Frecuentes";
			const totalDePreguntas = '\nTotal de preguntas​: ​(' + faqs.length + ')\n';
			let preguntasConRespuesta = "";
			faqs.forEach(elemento => preguntasConRespuesta += `${elemento.faq_title}\n${elemento.faq_answer}\n\n`);

			res.end(`${tituloPreguntasFrecuentes}\n\n${totalDePreguntas}\n${preguntasConRespuesta}\n\n\n`);

			break;

		default:

			res.end('404 not found')

	}

});

