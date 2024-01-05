import React from "react";
import "./../App.css";

export const MateriaStatusLegend = () => {
  return (
    <div className="linha">
      <div className="legenda">
        <div className="materia liberada doc">Liberada</div>
        <div className="materia state doc">Passou</div>
        <div className="materia perdeu doc">Perdeu</div>
        <div className="materia bloqueada doc">Bloqueada</div>
      </div>
    </div>
  );
};
