import { GradeState } from "../../components/materia";
export const ciencias_da_computacao = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA37",
          nome: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA38",
          nome: "PROJETO DE CIRCUITOS LÓGICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATA39",
          nome: "SEMINÁRIOS DE INTRODUÇÃO AO CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MATA42",
          nome: "MATEMÁTICA DISCRETA I",
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
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "MATA40",
          nome: "ESTRUTURAS DE DADOS E ALGORITMOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "MATA48",
          nome: "ARQUITETURA DE COMPUTADORES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA57",
          nome: "LABORATÓRIO DE PROGRAMAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MATA95",
          nome: "COMPLEMENTOS DE CÁLCULO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
          ],
        },
        {
          id: "5",
          codigo: "MATA97",
          nome: "MATEMÁTICA DISCRETA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FISA75",
          nome: "ELEMENTOS DO ELETROMAGNETISMO E DE CIRCUITOS ELÉTRICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "1",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "1" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "MATA47",
          nome: "LÓGICA PARA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA49",
          nome: "PROGRAMAÇÃO DE SOFTWARE BÁSICO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "4",
          codigo: "MATA50",
          nome: "LINGUAGENS FORMAIS E AUTÔMATOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
        {
          id: "5",
          codigo: "MATA55",
          nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "FCHC45",
          nome: "METODOLOGIA E EXPRESSÃO TÉCNICO-CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA51",
          nome: "TEORIA DA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "MATA52",
          nome: "ANÁLISE E PROJETO DE ALGORITMOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA58",
          nome: "SISTEMAS OPERACIONAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MATA61",
          nome: "COMPILADORES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "MATA68",
          nome: "COMPUTADOR ÉTICA E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "MATA53",
          nome: "TEORIA DOS GRAFOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "1",
          codigo: "MATA54",
          nome: "ESTRUTURAS DE DADOS E ALGORITMOS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MATA59",
          nome: "REDES DE COMPUTADORES I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MATA62",
          nome: "ENGENHARIA DE SOFTWARE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MATE12",
          nome: "PARADIGMAS DE LINGUAGENS DE PROGRAMAÇÃO A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "MATA60",
          nome: "BANCO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MATA64",
          nome: "INTELIGÊNCIA ARTIFICIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "0", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "MATA65",
          nome: "COMPUTAÇÃO GRÁFICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "2" },
            { id: "4", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATA88",
          nome: "FUNDAMENTOS DE SISTEMAS DISTRIBUÍDOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "2", numero: "5" },
          ],
        },
        {
          id: "4",
          codigo: "MATE11",
          nome: "ENGENHARIA DE SOFTWARE II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MATA66",
          nome: "PROJETO FINAL DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MATA67",
          nome: "PROJETO FINAL DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
      ],
    },
  ],
};
