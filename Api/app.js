const express = require("express");
const curriculum = require("./routes/curriculum");
const asistencia = require("./routes/asistencia"); // Importa las rutas de asistencia

// Rutas
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());

app.use(curriculum);
// Agrega la ruta de asistencia a la aplicación
app.use(asistencia);

module.exports = app;
