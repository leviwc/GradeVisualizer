import React, { Component } from 'react';
import Semestre from './components/semestre'
import './App.css';


class App extends Component {

  state = {

    semestre: [
      {
        numero: "1", materias: [
          {
            id: "0", codigo: "ENGF56", nome: "Introdução a Engenharia de Produção", passou: 0, dependencias: [

            ]
          },
          {
            id: "1", codigo: "MATA01", nome: "Geometria Análitica", passou: 0, dependencias: [

            ]
          },
          {
            id: "2", codigo: "MATA02", nome: "Cálculo A", passou: 0, dependencias: [

            ]
          },
          {
            id: "3", codigo: "QUIB50", nome: "Fundamentos de Química", passou: 0, dependencias: [

            ]
          }]
      },

      {
        numero: "2", materias: [
          {
            id: "0", codigo: "ENGF77", nome: "Administração na Engenharia", passou: 0, dependencias: [

            ]
          },
          {
            id: "1", codigo: "ECO151", nome: "Economia e Finanças", passou: 0, dependencias: [

            ]
          },
          {
            id: "2", codigo: "FIS121", nome: "Física Geral e Experimental I", passou: 0, dependencias: [

            ]
          },
          {
            id: "3", codigo: "MATA03", nome: "Cálculo B", passou: 0, dependencias: [
              { id: "1", numero: "1" }, { id: "2", numero: "1" }
            ]
          }]
      },

      {
        numero: "3", materias: [
          {
            id: "0", codigo: "ENG207", nome: "Metrologia Industrial", passou: 0, dependencias: [
              { id: "2", numero: "2" }
            ]
          },
          {
            id: "1", codigo: "DIR175", nome: "Legislação Social", passou: 0, dependencias: [

            ]
          },
          {
            id: "2", codigo: "FIS122", nome: "Física Geral e Experimental II", passou: 0, dependencias: [
              { id: "2", numero: "2" }, { id: "1", numero: "1" }, { id: "2", numero: "1" }
            ]
          },
          {
            id: "3", codigo: "MATA04", nome: "Cálculo C", passou: 0, dependencias: [
              { id: "3", numero: "2" }
            ]
          }]
      },

      {
        numero: "4", materias: [
          {
            id: "0", codigo: "ENGF80", nome: "Sistemas de Produção Discreta", passou: 0, dependencias: [

            ]
          },
          {
            id: "1", codigo: "ENGD01", nome: "Métodos Computacionais na Engenharia", passou: 0, dependencias: [
              { id: "2", numero: "1" }
            ]
          },
          {
            id: "2", codigo: "FIS123", nome: "Física Geral e Experimental III", passou: 0, dependencias: [
              { id: "2", numero: "3" }, { id: "3", numero: "2" }
            ]
          },
          {
            id: "3", codigo: "MATA07", nome: "Álgebra Linear A", passou: 0, dependencias: [
              { id: "1", numero: "1" }
            ]
          }]
      },

      {
        numero: "5", materias: [
          {
            id: "0", codigo: "ENGF81", nome: "Pesquisa Operacional I", passou: 0, dependencias: [
              { id: "3", numero: "4" }, { id: "1", numero: "4" }, { id: "3", numero: "2" }
            ]
          },
          {
            id: "1", codigo: "ENG003", nome: "Eletricidade", passou: 0, dependencias: [
              { id: "2", numero: "4" }
            ]
          },
          {
            id: "2", codigo: "ENG269", nome: "Ciências do Ambiente", passou: 0, dependencias: [

            ]
          },
          {
            id: "3", codigo: "ENG041", nome: "Materiais de Construção Mecânica", passou: 0, dependencias: [
              { id: "2", numero: "2" }
            ]
          }]
      },

      {
        numero: "6", materias: [
          {
            id: "0", codigo: "ENGF82", nome: "Pesquisa Operacional II", passou: 0, dependencias: [
              { id: "0", numero: "5" }
            ]
          },
          {
            id: "1", codigo: "ENGD02", nome: "Estatística na Engenharia", passou: 0, dependencias: [
              { id: "2", numero: "1" }, { id: "1", numero: "4" }
            ]
          },
          {
            id: "2", codigo: "ENGF90", nome: "Fundamentos de Mecânica dos Sólidos", passou: 0, dependencias: [
              { id: "2", numero: "2" }, { id: "2", numero: "1" }
            ]
          },
          {
            id: "3", codigo: "ENGF78", nome: "Mecânica dos Fluídos", passou: 0, dependencias: [
              { id: "2", numero: "3" }, { id: "3", numero: "2" }
            ]
          }]
      },

      {
        numero: "7", materias: [
          {
            id: "0", codigo: "ENG308", nome: "Sistemas de Garantia da Qualidade", passou: 0, dependencias: [
              { id: "0", numero: "2" }, { id: "1", numero: "6" }
            ]
          },
          {
            id: "1", codigo: "ENG432", nome: "Manufatura Auxiliada por Computador", passou: 0, dependencias: [
              { id: "1", numero: "5" }, { id: "1", numero: "4" }
            ]
          },
          {
            id: "2", codigo: "FCC024", nome: "Contabilidade de Custos", passou: 0, dependencias: [
              { id: "1", numero: "2" }
            ]
          },
          {
            id: "3", codigo: "ENGF79", nome: "Princípios de Processos Contínuos", passou: 0, dependencias: [
              { id: "2", numero: "1" }, { id: "3", numero: "1" }
            ]
          }]
      },

      {
        numero: "8", materias: [
          {
            id: "0", codigo: "ENG039", nome: "Gestão da Qualidade na Engenharia", passou: 0, dependencias: [
              { id: "0", numero: "2" }, { id: "0", numero: "7" }
            ]
          },
          {
            id: "1", codigo: "ENGA62", nome: "Logística de Transportes", passou: 0, dependencias: [
              { id: "0", numero: "6" }
            ]
          },
          {
            id: "2", codigo: "ENGF86", nome: "Engenharia Econômica", passou: 0, dependencias: [
              { id: "1", numero: "2" }, { id: "2", numero: "7" }
            ]
          },
          {
            id: "3", codigo: "ENG037", nome: "Planejamento e Controle da Produção", passou: 0, dependencias: [
              { id: "0", numero: "4" }
            ]
          }]
      },

      {
        numero: "9", materias: [
          {
            id: "0", codigo: "ENGF83", nome: "Sistemas de Apoio a Decisão", passou: 0, dependencias: [
              { id: "0", numero: "6" }
            ]
          },
          {
            id: "1", codigo: "ENGF88", nome: "Projeto e Planejamento industrial", passou: 0, dependencias: [
              { id: "0", numero: "4" }, { id: "3", numero: "8" }, { id: "2", numero: "8" }
            ]
          },
          {
            id: "2", codigo: "ENGF84", nome: "Modelagem e Otimização de Sistemas Produtivos", passou: 0, dependencias: [
              { id: "0", numero: "6" }, { id: "1", numero: "6" }, { id: "3", numero: "8" }
            ]
          },
          {
            id: "3", codigo: "ENGF85", nome: "Engenharia do Trabalho", passou: 0, dependencias: [
              { id: "0", numero: "2" }, { id: "0", numero: "1" }
            ]
          }]
      },

      {
        numero: "10", materias: [
          {
            id: "0", codigo: "ENGF88", nome: "Planejamento de TCC ENG179", passou: 0, dependencias: [
              { id: "0", numero: "9" }, { id: "2", numero: "9" }
            ]
          },
          {
            id: "1", codigo: "ENG430", nome: "Engenharia do Produto", passou: 0, dependencias: [
              { id: "0", numero: "8" }, { id: "0", numero: "1" }
            ]
          }]
      },

      {
        numero: "11", materias: [
          {
            id: "0", codigo: "ENGF89", nome: "Trabalho de Conclusão de Curso", passou: 0, dependencias: [
              { id: "0", numero: "10" }
            ]
          },
          {
            id: "1", codigo: "ENG040", nome: "Gestão Empreendedora na Engenharia", passou: 0, dependencias: [
              { id: "2", numero: "8" }, { id: "0", numero: "2" }
            ]
          }]
      },

      {
        numero: "12", materias: [
          {
            id: "0", codigo: "ENGF87", nome: "Estágio em Engenharia de Produção", passou: 0, dependencias: [

            ]
          }]
      }

    ]
  }


  render() {
    return (
      <div>
        <div className="linha">
          {this.state.semestre.map(semestre => {
            return <Semestre key={semestre.numero} onNormal={this.onNormal} onBlocked={this.onBlocked} onLiberado={this.onLiberado} semestre={semestre} semestres={this.state.semestre} onClickBotaoPassou={this.onClickBotaoPassou} onClickBotaoPerdeu={this.onClickBotaoPerdeu} />
          })}
        </div>
        <div className="linha">
          <div className="legenda">
            verde fraco= liberada, verde forte=passou, vermelhor forte=perdeu, vermelho fraco=trancada;
          </div>
        </div>
      </div>
    );
  }
  onBlocked = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 4;

    this.setState({ semestre });
  }
  onNormal = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 0;

    this.setState({ semestre });
  }
  onLiberado = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 3;

    this.setState({ semestre });
  }
  onClickBotaoPassou = (event) => {
    let semestre = this.state.semestre;
    const materia = semestre[event.numero - 1].materias[event.id];
    semestre[event.numero - 1].materias[event.id].passou = 1;
    materia.dependencias.map((content) => {
      this.onClickBotaoPassou(content);
    });
    this.setState({ semestre });
  }
  onClickBotaoPerdeu = (event) => {
    let semestre = this.state.semestre;
    semestre[event.numero - 1].materias[event.id].passou = 2;
    this.setState({ semestre });
  }

}

export default App;
