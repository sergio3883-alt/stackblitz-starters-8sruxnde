const tareas = [];
let siguienteId = 1;

function obtenerTodas() {
  return tareas;
}

function obtenerPorId(id) {
  return tareas.find(tarea => tarea.id === id);
}

function crear(datos) {
  const nuevaTarea = { ...datos, id: siguienteId++ };
  tareas.push(nuevaTarea);
  return nuevaTarea;
}

function actualizar(id, datos) {
  const tarea = obtenerPorId(id);
  if (!tarea) return null;

  Object.assign(tarea, datos);
  return tarea;
}

function eliminar(id) {
  const posicion = tareas.findIndex(tarea => tarea.id === id);
  if (posicion === -1) return false;

  tareas.splice(posicion, 1);
  return true;
}

module.exports = {
  obtenerTodas,
  obtenerPorId,
  crear,
  actualizar,
  eliminar
};