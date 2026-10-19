const integrantes = [];
let siguienteId = 1;

function obtenerTodas() {
  return integrantes;
}

function obtenerPorId(id) {
  return integrantes.find(integrante => integrante.id === id);
}

function crear(datos) {
  const nuevoIntegrante = {
    ...datos,
    id: siguienteId++
  };

  integrantes.push(nuevoIntegrante);
  return nuevoIntegrante;
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear
};