import { GradeState } from "../../components/materia";
export const musica_piano = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSA43",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSA59",
          nome: "PERCEPÇÃO MUSICAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSA69",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSB31",
          nome: "PIANO SUPLEMENTAR I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSC64",
          nome: "FUNDAMENTOS DA EDUCAÇÃO MUSICAL I",
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
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSA60",
          nome: "PERCEPÇÃO MUSICAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "MUSA70",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MUSA92",
          nome: "PRINCÍPIOS PRÁTICOS DE INFORMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSB32",
          nome: "PIANO SUPLEMENTAR II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "5",
          codigo: "MUSB79",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MUSC65",
          nome: "FUNDAMENTOS DA EDUCAÇÃO MUSICAL II",
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
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSA61",
          nome: "PERCEPÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MUSA71",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MUSB33",
          nome: "PIANO SUPLEMENTAR III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MUSB76",
          nome: "M ÚSICA BRASILEIRA DE TRADIÇÃO ORAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSC66",
          nome: "METODOLOGIA DA EDUCAÇÃO MUSICAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSA62",
          nome: "PERCEPÇÃO MUSICAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MUSA72",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MUSA77",
          nome: "HISTÓRIA DA MÚSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSA88",
          nome: "INTRODUÇÃO À PESQUISA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MUSB34",
          nome: "PIANO SUPLEMENTAR IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "7",
          codigo: "MUSC67",
          nome: "METODOLOGIA DA EDUCAÇÃO MUSICAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "MUS182",
          nome: "APRECIACAO MUSICAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUS233",
          nome: "PRATICA DE CONJUNTO INSTRUMENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSA63",
          nome: "PERCEPÇÃO MUSICAL V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MUSA73",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL V",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSA78",
          nome: "HISTÓRIA DA MÚSICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSC68",
          nome: "ESTÁGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "7", numero: "4" }],
        },
        {
          id: "6",
          codigo: "MUSC72",
          nome: "METODOLOGIA DE PESQUISA EM EDUCAÇÃO MUSICAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
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
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MUSA74",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "2",
          codigo: "MUSA79",
          nome: "HISTÓRIA DA MÚSICA III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSC69",
          nome: "ESTÁGIO SUPERVISIONADO II",
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
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSC70",
          nome: "ESTÁGIO SUPERVISIONADO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MUSA36",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSC71",
          nome: "ESTÁGIO SUPERVISIONADO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
