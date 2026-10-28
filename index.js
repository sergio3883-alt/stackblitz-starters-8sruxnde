const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/integrantes', require('./src/routes/integrantes'));
app.use('/tareas', require('./src/routes/tareas'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor activo en el puerto ' + PORT);
});