const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando' });
});

const rutasIntegrantes = require('./src/routes/integrantes');
const rutasTareas = require('./src/routes/tareas');

app.use('/integrantes', rutasIntegrantes);
app.use('/tareas', rutasTareas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor activo en el puerto ' + PORT);
});