const data = require('../data/integrantes');

function listar(req, res) {
  res.json(data.obtenerTodas());
}

function obtener(req, res) {
  const id = Number(req.params.id);
  const integrante = data.obtenerPorId(id);

  if (!integrante) {
    return res.status(404).json({
      error: 'Integrante no encontrado'
    });
  }

  res.json(integrante);
}

function crear(req, res) {
  const { nombre, correo } = req.body || {};

  if (
    typeof nombre !== 'string' || !nombre.trim() ||
    typeof correo !== 'string' || !correo.trim()
  ) {
    return res.status(400).json({
      error: 'nombre y correo son obligatorios y deben ser textos no vacíos'
    });
  }

  const nuevo = data.crear({
    nombre: nombre.trim(),
    correo: correo.trim()
  });

  res.status(201).json(nuevo);
}

module.exports = {
  listar,
  obtener,
  crear
};