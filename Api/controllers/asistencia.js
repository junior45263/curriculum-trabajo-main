const connect = require("../connect");

// Función para obtener todas las asistencias
module.exports.getAllAsistencia = async (req, res) => {
  try {
    const conn = await connect();
    const [rows, fields] = await conn.query(
      "SELECT `id`, `nombre`, `apellidos`, `dia_1`, `dia_2`, `dia_3`, `dia_4`, `dia_5`, `dia_6`, `dia_7`, `dia_8`, `dia_9`, `dia_10`, `dia_11`, `dia_12`, `dia_13`, `dia_14`, `dia_15`, `dia_16`, `dia_17`, `dia_18`, `dia_19`, `dia_20`, `dia_21`, `dia_22`, `dia_23`, `dia_24`, `dia_25`, `dia_26`, `dia_27`, `dia_28`, `dia_29`, `dia_30`, `dia_31`, `faltas` FROM `asistencia`"
    );
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener la asistencia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para eliminar una asistencia por ID
module.exports.deleteAsistencia = async (req, res) => {
  const id = req.params.id;
  try {
    const conn = await connect();
    const [result] = await conn.query("DELETE FROM asistencia WHERE id = ?", [
      id,
    ]);
    res.json({ message: `Asistencia con ID ${id} eliminada correctamente` });
  } catch (error) {
    console.error("Error al eliminar la asistencia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para actualizar una asistencia por ID
module.exports.updateAsistencia = async (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  try {
    const conn = await connect();
    const [result] = await conn.query("UPDATE asistencia SET ? WHERE id = ?", [
      newData,
      id,
    ]);
    res.json({ message: `Asistencia con ID ${id} actualizada correctamente` });
  } catch (error) {
    console.error("Error al actualizar la asistencia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Función para insertar una nueva asistencia
module.exports.insertAsistencia = async (req, res) => {
  const newData = req.body;
  try {
    const conn = await connect();
    const [result] = await conn.query("INSERT INTO asistencia SET ?", [
      newData,
    ]);
    res.json({
      message: "Asistencia insertada correctamente",
      id: result.insertId,
    });
  } catch (error) {
    console.error("Error al insertar la asistencia:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
