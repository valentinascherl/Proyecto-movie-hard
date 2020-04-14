const fs = require("fs");

let sucursales = JSON.parse(
    fs.readFileSync("./data/theaters.json",{
    enconding: "utf-8", 
  })
);

function cargarDetalleSucursales(){
    let tituloSucursales = "Nuestras Salas";
	let totalSalas = '\nTotal de salas​: ​(' + theaters.length + ')\n';
	let salaConNombre = "";
    theaters.forEach(elemento => salaConNombre += `${elemento.name}\n${elemento.address}\n${elemento.description}\n\n`);
    return (`${tituloSucursales}\n\n\n${totalSalas}\n${salaConNombre}`);
}

module.exports = cargarDetalleSucursales;