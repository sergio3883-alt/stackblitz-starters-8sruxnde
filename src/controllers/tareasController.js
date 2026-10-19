const data = require('../data/tareas');

function listar(req, res) {
  res.json(data.obtenerTodas());
}

function obtener(req, res) {
  const id = Number(req.params.id);
  const tarea = data.obtenerPorId(id);

  if (!tarea) {
    return res.status(404).json({
      error: 'Tarea no encontrada'
    });
  }

  res.json(tarea);
}

function crear(req, res) {
  const {
    titulo,
    descripcion,
    responsable,
    estado,
    fechaLimite
  } = req.body || {};

  const textos = [
    titulo,
    descripcion,
    estado,
    fechaLimite
  ];

  if (
    textos.some(valor =>
      typeof valor !== 'string' || !valor.trim()
    ) ||
    !Number.isInteger(responsable) ||
    responsable <= 0
  ) {
    return res.status(400).json({
      error: 'titulo, descripcion, estado y fechaLimite deben ser textos no vacíos; responsable debe ser un número entero positivo'
    });
  }

  const nueva = data.crear({
    titulo: titulo.trim(),
    descripcion: descripcion.trim(),
    responsable,
    estado: estado.trim(),
    fechaLimite: fechaLimite.trim()
  });

  res.status(201).json(nueva);
}

module.exports = {
  listar,
  obtener,
  crear
};