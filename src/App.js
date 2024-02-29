import React, { useState } from "react";
import { Profile } from "./components/Profile";
import BarraSuperior from "./components/BarraSuperior";

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [cvs, setCvs] = useState([]); // Estado para almacenar los currículos

  const handleRefresh = () => {
    // Incrementa el valor de refreshKey para forzar un re-renderizado de componentes que lo utilizan
    setRefreshKey((prevKey) => prevKey + 1);
    // Recarga la página
    window.location.reload();
  };

  const handleDelete = (cvId) => {
    // Lógica para eliminar el currículum vitae de la base de datos
  };

  return (
    <div>
      <BarraSuperior />
      <Profile />
    </div>
  );
};

export default App;
