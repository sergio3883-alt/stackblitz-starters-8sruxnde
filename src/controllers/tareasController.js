const data = require('../data/tareas');
const integrantes = require('../data/integrantes');

const estadosPermitidos = ['pendiente', 'en progreso', 'hecha'];

function validar(datos) {
  const { titulo, descripcion, responsable, estado, fechaLimite } = datos;
  const textos = [titulo, descripcion, estado, fechaLimite];

  if (textos.some(valor => typeof valor !== 'string' || !valor.trim())) {
    return 'titulo, descripcion, estado y fechaLimite son obligatorios';
  }

  if (!Number.isInteger(responsable) || responsable <= 0) {
    return 'responsable debe ser un número entero positivo';
  }

  if (!integrantes.obtenerPorId(responsable)) {
    return 'El integrante seleccionado como responsable no existe';
  }

  if (!estadosPermitidos.includes(estado.trim())) {
    return 'estado debe ser pendiente, en progreso o hecha';
  }

  const textoFecha = fechaLimite.trim();
  const fecha = new Date(textoFecha + 'T00:00:00Z');

  if (!/^\d{4}-\d{2}-\d{2}$/.test(textoFecha) ||
      Number.isNaN(fecha.getTime()) ||
      fecha.toISOString().slice(0, 10) !== textoFecha) {
    return 'fechaLimite debe ser una fecha válida con formato AAAA-MM-DD';
  }

  return null;
}

function prepararDatos(datos) {
  return {
    titulo: datos.titulo.trim(),
    descripcion: datos.descripcion.trim(),
    responsable: datos.responsable,
    estado: datos.estado.trim(),
    fechaLimite: datos.fechaLimite.trim()
  };
}

function listar(req, res) {
  let resultado = data.obtenerTodas();
  const { estado, responsable } = req.query;

  if (estado !== undefined) {
    if (!estadosPermitidos.includes(estado)) {
      return res.status(400).json({
        error: 'Filtro de estado no válido'
      });
    }

    resultado = resultado.filter(tarea => tarea.estado === estado);
  }

  if (responsable !== undefined) {
    const idResponsable = Number(responsable);

    if (!Number.isInteger(idResponsable) || idResponsable <= 0) {
      return res.status(400).json({
        error: 'Filtro de responsable no válido'
      });
    }

    resultado = resultado.filter(
      tarea => tarea.responsable === idResponsable
    );
  }

  res.json(resultado);
}

function obtener(req, res) {
  const tarea = data.obtenerPorId(Number(req.params.id));

  if (!tarea) {
    return res.status(404).json({
      error: 'Tarea no encontrada'
    });
  }

  res.json(tarea);
}

function crear(req, res) {
  const datos = req.body || {};
  const error = validar(datos);

  if (error) {
    return res.status(400).json({ error });
  }

  const nueva = data.crear(prepararDatos(datos));
  res.status(201).json(nueva);
}

function actualizar(req, res) {
  const id = Number(req.params.id);

  if (!data.obtenerPorId(id)) {
    return res.status(404).json({
      error: 'Tarea no encontrada'
    });
  }

  const datos = req.body || {};
  const error = validar(datos);

  if (error) {
    return res.status(400).json({ error });
  }

  const actualizada = data.actualizar(id, prepararDatos(datos));
  res.json(actualizada);
}

function eliminar(req, res) {
  const exito = data.eliminar(Number(req.params.id));

  if (!exito) {
    return res.status(404).json({
      error: 'Tarea no encontrada'
    });
  }

  res.status(204).send();
}

module.exports = {
  listar,
  obtener,
  crear,
  actualizar,
  eliminar
};