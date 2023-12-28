import { GradeState } from "../../components/materia";
export const composicao_e_regencia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "MUSA43",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSA59",
          nome: "PERCEPÇÃO MUSICAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSA69",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSA83",
          nome: "INTRODUÇÃO À INSTRUMENTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSA92",
          nome: "PRINCÍPIOS PRÁTICOS DE INFORMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSB10",
          nome: "COMPOSIÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MUSB31",
          nome: "PIANO SUPLEMENTAR I",
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
          codigo: "MUSA60",
          nome: "PERCEPÇÃO MUSICAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "MUSA70",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "MUSA88",
          nome: "INTRODUÇÃO À PESQUISA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSA93",
          nome: "TÉCNICA VOCAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSB11",
          nome: "COMPOSIÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
        {
          id: "5",
          codigo: "MUSB79",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "MUSA61",
          nome: "PERCEPÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "MUSA71",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MUSA77",
          nome: "HISTÓRIA DA MÚSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MUSB12",
          nome: "COMPOSIÇÃO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MUSC60",
          nome: "PRÁTICA DE CONJUNTO:CANTO CORAL III",
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
          codigo: "MUSA62",
          nome: "PERCEPÇÃO MUSICAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "MUSA72",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MUSA78",
          nome: "HISTÓRIA DA MÚSICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MUSB13",
          nome: "COMPOSIÇÃO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MUSB32",
          nome: "PIANO SUPLEMENTAR II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "MUSA63",
          nome: "PERCEPÇÃO MUSICAL V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "MUSA73",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MUSA79",
          nome: "HISTÓRIA DA MÚSICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MUSA84",
          nome: "INSTRUMENTAÇÃO E ORQUESTRAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MUSB14",
          nome: "COMPOSIÇÃO V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "5",
          codigo: "MUSB33",
          nome: "PIANO SUPLEMENTAR III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "MUSA64",
          nome: "PERCEPÇÃO MUSICAL VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MUSA74",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "MUSA80",
          nome: "HISTÓRIA DA MÚSICA IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "MUSA85",
          nome: "INSTRUMENTAÇÃO E ORQUESTRAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "MUSB15",
          nome: "COMPOSIÇÃO VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "5",
          codigo: "MUSB34",
          nome: "PIANO SUPLEMENTAR IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MUSA75",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL VII",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "MUSA86",
          nome: "INSTRUMENTAÇÃO E ORQUESTRAÇÃO III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "MUSA90",
          nome: "TÉCNICAS DE ANÁLISE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MUSB16",
          nome: "COMPOSIÇÃO VII",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MUSA76",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL VIII",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "0", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "MUSA87",
          nome: "INSTRUMENTAÇÃO E ORQUETRAÇÃO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "2",
          codigo: "MUSB17",
          nome: "COMPOSIÇÃO VIII",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "3",
          codigo: "MUSD76",
          nome: "SEMINÁRIOS EM MÚSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "MUSB18",
          nome: "COMPOSIÇÃO IX",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "1",
          codigo: "MUSB87",
          nome: "MONOGRAFIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "MUSB19",
          nome: "COMPOSIÇÃO X",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "9" }],
        },
        {
          id: "1",
          codigo: "MUSB88",
          nome: "MONOGRAFIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "9" }],
        },
        {
          id: "2",
          codigo: "MUSD77",
          nome: "ESTÁGIO SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
