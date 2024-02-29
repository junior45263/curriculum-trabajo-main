import React, { useState, useEffect } from "react";
import { HotTable, HotColumn } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import { registerLanguageDictionary, esMX } from "handsontable/i18n";
import "handsontable/dist/handsontable.full.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

registerAllModules();
registerLanguageDictionary(esMX);

function TablaExcel() {
  const [usuarios, setUsuarios] = useState([]);
  const [diasDelMes, setDiasDelMes] = useState([]);
  const [nuevoAlumnoData, setNuevoAlumnoData] = useState({
    id: "",
    nombre: "",
    apellidos: "",
    dia_1: "",
    dia_2: "",
  });
  const hotTableComponent = React.useRef(null);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    obtenerDatosAsistencia();
    const dias = [];
    for (let i = 1; i <= 31; i++) {
      dias.push(i.toString());
    }
    setDiasDelMes(dias);
  }, []);

  const obtenerDatosAsistencia = async () => {
    try {
      const response = await axios.get("http://localhost:5000/asistencia");
      console.log("Datos de asistencia recibidos:", response.data);

      // Modificar la estructura de los datos para incluir el recuento de asistencias y faltas
      const datosAsistencia = response.data.map((alumno) => ({
        ...alumno,
        ...calcularTotalAsistencias(alumno),
      }));

      setUsuarios(datosAsistencia);
    } catch (error) {
      console.error("Error al obtener los datos de asistencia:", error);
    }
  };

  const guardarDatos = async (changes, source) => {
    if (source === "edit") {
      const newData = [...usuarios];
      if (changes && Array.isArray(changes)) {
        changes.forEach(([row, prop, oldValue, newValue]) => {
          if (prop.startsWith("dia_")) {
            const usuarioIndex = row;
            const dia = parseInt(prop.replace("dia_", ""));
            const valorActual = newData[usuarioIndex][prop] || "";

            newData[usuarioIndex][prop] = newValue;

            // Actualizar los recuentos de asistencias y faltas
            const totalAsistenciasFaltas = calcularTotalAsistencias(
              newData[usuarioIndex]
            );

            try {
              axios.put(
                `http://localhost:5000/asistencia/${newData[usuarioIndex].id}`,
                { ...newData[usuarioIndex], ...totalAsistenciasFaltas }
              );
              console.log(
                "Datos de asistencia actualizados en la base de datos"
              );
            } catch (error) {
              console.error(
                "Error al guardar los cambios en la base de datos:",
                error
              );
            }
          }
        });
        setUsuarios(newData);
      }
    }
  };

  const calcularTotalAsistencias = (usuario) => {
    let totalAsistencias = 0;
    let totalFaltas = 0;
    for (const prop in usuario) {
      if (prop.startsWith("dia_")) {
        if (usuario[prop] === ".") {
          totalAsistencias++;
        } else if (usuario[prop] === "x") {
          totalFaltas++;
        }
      }
    }
    return { asistencias: totalAsistencias, faltas: totalFaltas };
  };

  const agregarAlumno = async () => {
    const newData = [...usuarios, nuevoAlumnoData];
    setUsuarios(newData);
    setNuevoAlumnoData({
      id: "",
      nombre: "",
      apellidos: "",
      dia_1: "",
      dia_2: "",
    });
    try {
      await axios.post("http://localhost:5000/asistencia", nuevoAlumnoData);
      console.log("Nuevo alumno agregado a la base de datos");
    } catch (error) {
      console.error("Error al agregar nuevo alumno a la base de datos:", error);
    }
  };

  const eliminarAlumno = async () => {
    if (selectedRow !== null) {
      const alumnoId = usuarios[selectedRow].id;
      const newData = usuarios.filter(
        (usuario, index) => index !== selectedRow
      );
      setUsuarios(newData);
      setSelectedRow(null);
      try {
        await axios.delete(`http://localhost:5000/asistencia/${alumnoId}`);
        console.log("Alumno eliminado de la base de datos");
      } catch (error) {
        console.error("Error al eliminar alumno de la base de datos:", error);
      }
    } else {
      console.warn("No se ha seleccionado ningún alumno para eliminar");
    }
  };

  const handleRowSelect = (index) => {
    setSelectedRow(index);
  };

  const descargarArchivo = () => {
    const pluginDescarga =
      hotTableComponent.current.hotInstance.getPlugin("exportFile");

    pluginDescarga.downloadFile("csv", {
      filename: "Asistencia",
      fileExtension: "csv",
      mimeType: "text/csv",
      columnHeaders: true,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoAlumnoData({
      ...nuevoAlumnoData,
      [name]: value,
    });
  };

  return (
    <div>
      <center>
        <h2>Lista De Asistencia</h2>
      </center>
      <div>
        <h2>Agregar Alumno Nuevo</h2>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="Matricula"
          name="id"
          value={nuevoAlumnoData.id}
          onChange={handleInputChange}
        />
        <input
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nuevoAlumnoData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Apellidos"
          name="apellidos"
          value={nuevoAlumnoData.apellidos}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <br />

      <Button
        variant="primary"
        style={{ marginRight: "10px" }}
        onClick={agregarAlumno}
      >
        Agregar Alumno
      </Button>
      <Button
        variant="danger"
        style={{ marginRight: "10px" }}
        onClick={eliminarAlumno}
      >
        Eliminar Alumno
      </Button>
      <Button
        variant="success"
        style={{ marginRight: "10px" }}
        onClick={() => guardarDatos(null, "edit")}
      >
        Guardar Cambios
      </Button>
      <Button
        variant="secondary"
        style={{ marginRight: "10px" }}
        onClick={descargarArchivo}
      >
        Descargar Archivo
      </Button>
      <br />
      <br />
      <div>NOMBRE DE LA ESCUELA: GRUPO: GRADO: NOMBRE DEL DOCENTE:</div>
      {usuarios && (
        <HotTable
          ref={hotTableComponent}
          language={esMX.languageCode}
          data={usuarios}
          licenseKey="non-commercial-and-evaluation"
          colHeaders={true}
          rowHeaders={true}
          columnSorting={true}
          mergeCells={true}
          contextMenu={["row_above", "row_below"]}
          readOnly={false}
          afterChange={(changes, source) => guardarDatos(changes, source)}
          afterSelection={handleRowSelect}
          observeChanges={true}
        >
          <HotColumn data="id" readOnly={true} title="Matricula" />
          <HotColumn data="nombre" title="Nombre" />
          <HotColumn data="apellidos" title="Apellidos" />
          {diasDelMes.map((dia, index) => (
            <HotColumn key={index} data={`dia_${dia}`} title={dia} />
          ))}
          <HotColumn data="asistencias" title="Asistencias" readOnly={true} />
          <HotColumn data="faltas" title="Faltas" readOnly={true} />
        </HotTable>
      )}
    </div>
  );
}

export default TablaExcel;
