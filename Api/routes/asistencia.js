const express = require("express");
const router = express.Router();
const asistenciaController = require("../controllers/asistencia");

// Ruta para obtener todas las asistencias
router.get("/asistencia", asistenciaController.getAllAsistencia);

// Ruta para eliminar una asistencia por ID
router.delete("/asistencia/:id", asistenciaController.deleteAsistencia);

// Ruta para actualizar una asistencia por ID
router.put("/asistencia/:id", asistenciaController.updateAsistencia);

// Ruta para insertar una nueva asistencia
router.post("/asistencia", asistenciaController.insertAsistencia);

module.exports = router;
