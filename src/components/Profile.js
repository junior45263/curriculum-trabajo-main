import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
//import SubirCV from "./components/SubirCV";
import Home from "./Home";
import EliminarCV from "./EliminarCV";
//import ModificarCV from "./components/ModificarCV";
import ListaCV from "./ListaCV";
import CV from "./CV";
import CVModificar from "./CVModificar";
import TablaExcel from "./TablaExcel";

export const Profile = () => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (isAuthenticated) {
    // Obtener el token de autenticación
    getAccessTokenSilently()
      .then((token) => console.log("Token de autenticación:", token))
      .catch((error) => console.error("Error al obtener el token:", error));
  }

  return (
    isAuthenticated && (
      <div className="Aut">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cv">
              <Route index element={<ListaCV />} />
              <Route path="agregar" element={<CV />} />
              <Route path="eliminar/:cv" element={<EliminarCV />} />
              <Route path="modificar/:cv" element={<CVModificar />} />
              <Route path="excel" element={<TablaExcel />} />
            </Route>
          </Route>
        </Routes>
      </div>
    )
  );
};
