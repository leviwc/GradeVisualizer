import React, { Component } from "react";
import UppercaseToCamelCase from "./upperToCamel";
import SearchBarWithBackButton from "./materiaSearchBar";

export const GradeState = {
  NEUTRAL: "NEUTRAL",
  PASSED: "PASSED",
  FAILED: "FAILED",
  AVAILABLE: "AVAILABLE",
  BLOCKED: "BLOCKED",
};

class Materia extends Component {
  render() {
    return (
      <div className={this.handleClassDiv()}>
        <div className="codigo">{this.props.materia.codigo}</div>
        <div className="materia_name">
          <UppercaseToCamelCase uppercaseText={this.props.materia.nome} />
        </div>
        <br />
        <input
          type="button"
          value="passou"
          className="botao state"
          onClick={() =>
            this.props.onClickBotaoPassou({
              id: this.props.materia.id,
              numero: this.props.numero,
            })
          }
        />
        <input
          type="button"
          value="perdeu"
          className="botao perdeu"
          onClick={() =>
            this.props.onClickBotaoPerdeu({
              id: this.props.materia.id,
              numero: this.props.numero,
            })
          }
        />
      </div>
    );
  }
  handleLiberado() {
    const length = this.props.materia.dependencias.length;
    const semestre = this.props.semestres;
    const dependencia = this.props.materia.dependencias;
    let tam = 0;
    for (let i = 0; i < length; i++) {
      if (
        semestre[dependencia[i].numero - 1].materias[dependencia[i].id]
          .state === GradeState.PASSED
      ) {
        tam++;
      }
    }
    if (tam === length) {
      return true;
    } else {
      return false;
    }
  }
  handleBloqueada() {
    const length = this.props.materia.dependencias.length;
    const semestre = this.props.semestres;
    const dependencia = this.props.materia.dependencias;
    let tam = false;
    for (let i = 0; i < length; i++) {
      if (
        semestre[dependencia[i].numero - 1].materias[dependencia[i].id]
          .state === GradeState.FAILED
      ) {
        tam = true;
      }
      if (
        semestre[dependencia[i].numero - 1].materias[dependencia[i].id]
          .state === GradeState.BLOCKED
      ) {
        tam = true;
      }
    }
    return tam;
  }
  handleClassDiv() {
    let classe = "materia";
    const materia = this.props.materia;

    if (
      this.handleLiberado() &&
      materia.state !== GradeState.AVAILABLE &&
      materia.state !== GradeState.PASSED &&
      materia.state !== GradeState.FAILED
    ) {
      this.props.onLiberado({
        id: this.props.materia.id,
        numero: this.props.numero,
      });
    }
    if (
      !this.handleLiberado() &&
      materia.state !== GradeState.BLOCKED &&
      materia.state !== GradeState.NEUTRAL
    ) {
      this.props.onNormal({
        id: this.props.materia.id,
        numero: this.props.numero,
      });
    }
    if (
      this.handleBloqueada() &&
      materia.state !== GradeState.BLOCKED &&
      materia.state !== GradeState.FAILED
    ) {
      this.props.onBlocked({
        id: this.props.materia.id,
        numero: this.props.numero,
      });
    }
    if (materia.state === GradeState.BLOCKED && !this.handleBloqueada()) {
      this.props.onNormal({
        id: this.props.materia.id,
        numero: this.props.numero,
      });
    }
    if (materia.state === GradeState.PASSED) {
      classe += " state";
    } else if (materia.state === GradeState.FAILED) {
      classe += " perdeu";
    } else if (materia.state === GradeState.AVAILABLE) {
      classe += " liberada";
    } else if (materia.state === GradeState.BLOCKED) {
      classe += " bloqueada";
    }
    return classe;
  }
}

export default Materia;
