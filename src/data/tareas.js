const tareas = [];
let siguienteId = 1;

function obtenerTodas() {
  return tareas;
}

function obtenerPorId(id) {
  return tareas.find(tarea => tarea.id === id);
}

function crear(datos) {
  const nuevaTarea = {
    ...datos,
    id: siguienteId++
  };

  tareas.push(nuevaTarea);
  return nuevaTarea;
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear
};