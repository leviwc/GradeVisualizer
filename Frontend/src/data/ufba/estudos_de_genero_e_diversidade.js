import { GradeState } from "../../components/materia";
export const estudos_de_genero = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FCHE01",
          nome: "METODOLOGIA CIENTIFICA APLICADA AOS ESTUDOS DE GÊNERO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHE02",
          nome: "INTRODUÇÃO AOS ESTUDOS DE GÊNERO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHE03",
          nome: "RELAÇÕES DE GÊNERO NAS SOCIEDADES CONTEMPORANEAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHE38",
          nome: "POLÍTICA I",
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
          codigo: "FCHE04",
          nome: "GÊNERO E RELAÇÕES DE PODER",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHE05",
          nome: "GÊNERO E LINGUAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHE39",
          nome: "ORGANIZAÇÃO POLITICA DO BRASIL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FCHE43",
          nome: "GÊNERO E ESTADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHE44",
          nome: "GÊNERO E VIOLÊNCIA",
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
          codigo: "FCHE40",
          nome: "GÊNERO E DESENVOLVIMENTO REGIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHE41",
          nome: "GÊNERO E POLÍTICAS PÚBLICAS I",
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
          codigo: "FCHE23",
          nome: "INICIAÇAO CENTÍFICA AOS ESTUDOS DE GENERO 1",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHE42",
          nome: "GÊNERO E POLÍTICAS PÚBLICAS II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FCHE24",
          nome: "INICIAÇÃO CIENTÍFICA AOS ESTUDOS DE GÊNERO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "FCHE25",
          nome: "GENERO E POLÍTICAS PÚBLICAS III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHE28",
          nome: "ESTÁGIO SUPERVISIONADO EM GENERO E DIVERSIDADES I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "FCHE27",
          nome: "GENERO E POLÍTICAS PÚBLICAS IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHE31",
          nome: "ORIENTAÇÃO MONOGRÁFICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHE59",
          nome: "ESTÁGIO SUPERVISIONADO EM GENERO E DIVERSIDADE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "FCHE30",
          nome: "ESTÁGIO SUPERVISIONADO EM GENERO E DIVERSIDADE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "1",
          codigo: "FCHE32",
          nome: "ORIENTAÇÃO MONOGRÁFICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
