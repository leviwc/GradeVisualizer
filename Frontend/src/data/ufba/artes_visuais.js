import { GradeState } from "../../components/materia";
export const artes_visuais = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "EBAA69",
          nome: "CONCEITOS E FUNDAMENTOS DA ARTE OCIDENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBAA70",
          nome: "FUNDAMENTOS DA PINTURA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBAA79",
          nome: "EXPRESSÃO TRIDIMENSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBAA81",
          nome: "FUNDAMENTOS DO DESENHO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCH002",
          nome: "ESTETICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "2",
      materias: [
        {
          id: "0",
          codigo: "EBAA72",
          nome: "INTRODUÇÃO À HISTÓRIA DA ARTE BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "EBAA73",
          nome: "LABORATÓRIO DA COR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "EBAA76",
          nome: "TEORIA DA PERCEPÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBAA78",
          nome: "DESENHO E PERSPECTIVA DE OBSERVAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "EBAA83",
          nome: "MODELAGEM E TÉCNICAS DE REPRODUÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "EBAA71",
          nome: "INTRODUÇÃO À ARTE CONTEMPORÂNEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "EBAA74",
          nome: "MÉTODOS E METODOLOGIAS DO PROJETO EM ARTES E DESIGN",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBAA77",
          nome: "COMPUTAÇÃO NAS ARTES GRÁFICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBAA80",
          nome: "FOTOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBAA82",
          nome: "INTRODUÇÃO ÀS ARTES GRÁFICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "EBAA75",
          nome: "PESQUISA EM ARTES VISUAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EBAA84",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO - TCC",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },
  ],
};
