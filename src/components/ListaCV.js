import { useNavigate } from "react-router-dom";
import { Grid, h } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import { useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

function ListaCV() {
  const wrapperRef = useRef(null);
  const navigate = useNavigate();
  const grid = new Grid({
    columns: [
      "ID",
      "Nombre",
      "Apellidos",
      "Titulo",
      "Telefono",
      "Correo electronico",
      "Linkedin",
      "Idiomas",
      {
        name: "Modificar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-primary",
              onClick: () => navigate(`/cv/modificar/${row.cells[0].data}`),
            },
            "Modificar"
          );
        },
      },
      {
        name: "Eliminar",
        formatter: (cell, row) => {
          return h(
            "button",
            {
              className: "btn btn-danger",
              onClick: () => {
                Swal.fire({
                  title: "¿Estás seguro?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Sí, eliminarlo",
                  cancelButtonText: "Cancelar",
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    const res = await fetch(
                      `http://localhost:5000/curriculum/${row.cells[0].data}`,
                      {
                        method: "DELETE",
                      }
                    );
                    if (res.ok) {
                      console.error("Curriculum eliminado");
                      window.location.reload(); // Recargar la página
                    } else {
                      console.error("Error al eliminar el curriculum");
                    }
                  }
                });
              },
            },
            "Eliminar"
          );
        },
      },
    ],
    width: "auto",
    search: true,
    pagination: {
      enabled: true,
      limit: 5,
      summary: true,
    },
    sort: true,
    style: {
      th: {
        background: "#D40909",
        color: "#fbf8f8",
        border: "3px solid #ccc",
        textAlign: "center",
      },
    },
    autoWidth: true,
    language: {
      search: {
        placeholder: "🔍 Buscar...",
      },
      pagination: {
        previous: "⬅️",
        next: "➡️",
        showing: "😃 Mostrando",
        results: () => "registros",
      },
    },
    server: {
      url: "http://localhost:5000/curriculum",
      then: (data) =>
        data.map((curriculum) => [
          curriculum.id,
          curriculum.nombre,
          curriculum.apellidos,
          curriculum.titulo,
          curriculum.telefono,
          curriculum.correo_electronico,
          curriculum.linkedin,
          curriculum.idioma,
          curriculum.linkedin,
        ]),
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  }, [grid]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "30px" }}>Lista de CVs</h1>
      <div
        ref={wrapperRef}
        style={{ textAlign: "center", marginTop: "30px" }}
      />
      <ToastContainer />
    </>
  );
}

export default ListaCV;
