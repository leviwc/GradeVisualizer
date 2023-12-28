import React, { useEffect } from "react";
import Semestre from "./semestre";
import "./../App.css";
import { GradeState } from "./materia";
import { MateriaStatusLegend } from "./materiaLegend";

const Course = ({ semestres, setSemestres, universityId, courseId }) => {
  useEffect(() => {
    // You can fetch initial data or perform other side effects here
    // For example, fetching data from an API
    // fetchData(universityId, courseId).then((data) => setSemestres(data));
  }, [universityId, courseId]); // Add any dependencies for your useEffect

  const onBlocked = (event) => {
    setSemestres((prevSemestres) => {
      const semestresCopy = [...prevSemestres];
      const materia = semestresCopy[event.numero - 1].materias[event.id];
      materia.state = GradeState.BLOCKED;
      return semestresCopy;
    });
  };

  const onNormal = (event) => {
    setSemestres((prevSemestres) => {
      const semestresCopy = [...prevSemestres];
      const materia = semestresCopy[event.numero - 1].materias[event.id];
      materia.state = GradeState.NEUTRAL;
      return semestresCopy;
    });
  };

  const onLiberado = (event) => {
    setSemestres((prevSemestres) => {
      const semestresCopy = [...prevSemestres];
      const materia = semestresCopy[event.numero - 1].materias[event.id];
      materia.state = GradeState.AVAILABLE;
      return semestresCopy;
    });
  };

  const onClickBotaoPassou = (event) => {
    setSemestres((prevSemestres) => {
      const semestresCopy = [...prevSemestres];
      const materia = semestresCopy[event.numero - 1].materias[event.id];

      if (materia.state === GradeState.PASSED) {
        materia.state = GradeState.NEUTRAL;
      } else {
        materia.state = GradeState.PASSED;
        materia.dependencias.forEach((content) => {
          propagatePassou(content, semestresCopy);
        });
      }

      return semestresCopy;
    });
  };

  const propagatePassou = (event, semestresCopy) => {
    const materia = semestresCopy[event.numero - 1].materias[event.id];
    materia.state = GradeState.PASSED;

    materia.dependencias.forEach((content) => {
      propagatePassou(content, semestresCopy);
    });
  };

  const onClickBotaoPerdeu = (event) => {
    setSemestres((prevSemestres) => {
      const semestresCopy = [...prevSemestres];
      const materia = semestresCopy[event.numero - 1].materias[event.id];
      if (materia.state === GradeState.FAILED) {
        materia.state = GradeState.NEUTRAL;
      } else {
        materia.state = GradeState.FAILED;
        materia.dependencias.forEach((content) => {
          propagatePassou(content, semestresCopy);
        });
      }
      return semestresCopy;
    });
  };

  return (
    <div>
      <div className="linha">
        {semestres.map((semestre) => (
          <Semestre
            key={semestre.numero}
            onNormal={onNormal}
            onBlocked={onBlocked}
            onLiberado={onLiberado}
            semestre={semestre}
            semestres={semestres}
            onClickBotaoPassou={onClickBotaoPassou}
            onClickBotaoPerdeu={onClickBotaoPerdeu}
          />
        ))}
      </div>
      <div className="linha">
        <div className="legenda">
          <MateriaStatusLegend />
        </div>
      </div>
    </div>
  );
};

export default Course;
