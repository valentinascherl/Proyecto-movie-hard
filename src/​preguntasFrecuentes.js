const fs = require("fs");

let preguntas = JSON.parse(
    fs.readFileSync("./data/faqs.json",{
    enconding: "utf-8", 
  })
);

function cargarDetallePreguntasFrecuentes(){
    let tituloPreguntasFrecuentes = "Preguntas Frecuentes";
	const totalDePreguntas = '\nTotal de preguntas​: ​(' + faqs.length + ')\n';
	let preguntasConRespuesta = "";
    faqs.forEach(elemento => preguntasConRespuesta += `${elemento.faq_title}\n${elemento.faq_answer}\n\n`);
    return (`${tituloPreguntasFrecuentes}\n\n${totalDePreguntas}\n${preguntasConRespuesta}\n\n\n`);
}

module.exports = cargarDetallePreguntasFrecuentes;