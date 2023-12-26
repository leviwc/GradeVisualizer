import React from "react";
import "./../App.css";

export const MateriaStatusLegend = () => {
  return (
    <div className="linha">
      <div className="legenda">
        <div className="materia liberada">Liberada</div>
        <div className="materia state">Passou</div>
        <div className="materia perdeu">Perdeu</div>
        <div className="materia bloqueada">Bloqueada</div>
      </div>
    </div>
  );
};
