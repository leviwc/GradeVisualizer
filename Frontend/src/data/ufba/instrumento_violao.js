import { GradeState } from "../../components/materia";
export const instrumento_violao = {
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
          codigo: "MUSC35",
          nome: "SEMINÁRIOS EM INSTRUMENTO I",
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
          codigo: "MUSA78",
          nome: "HISTÓRIA DA MÚSICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSB79",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSD05",
          nome: "SEMINÁRIOS EM INSTRUMENTO II",
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
          codigo: "MUSA69",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSA79",
          nome: "HISTÓRIA DA MÚSICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MUSB31",
          nome: "PIANO SUPLEMENTAR I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSC58",
          nome: "LITERATURA DO VIOLÂO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSD06",
          nome: "SEMINÁRIOS EM INSTRUMENTO III",
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
          codigo: "MUSA70",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSB32",
          nome: "PIANO SUPLEMENTAR II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MUSB78",
          nome: "MÚSICA DE CÂMARA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSC55",
          nome: "PEDAGOGIA DO VIOLÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSD07",
          nome: "SEMINÁRIOS EM INSTRUMENTO IV",
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
          codigo: "MUSA71",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSB33",
          nome: "PIANO SUPLEMENTAR III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MUSC46",
          nome: "PRÁTICA DE CONJUNTO PARA VIOLONISTAS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSC56",
          nome: "PEDAGOGIA DO VIOLÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MUSC86",
          nome: "MÚSICA DE CÂMARA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSD08",
          nome: "SEMINÁRIOS EM INSTRUMENTO V",
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
          codigo: "MUSA72",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MUSB34",
          nome: "PIANO SUPLEMENTAR IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "MUSC57",
          nome: "CORREPETIÇÃO PARA VIOLONISTAS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSC87",
          nome: "MÚSICA DE CÂMARA III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSC88",
          nome: "PRÁTICA DE CONJUNTO PARA VIOLONISTAS II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSD09",
          nome: "SEMINÁRIOS EM INSTRUMENTO VI",
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
          codigo: "MUSA36",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSD10",
          nome: "SEMINÁRIOS EM INSTRUMENTO VII",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MUSA37",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "MUSD11",
          nome: "SEMINÁRIOS EM INSTRUMENTO VIII",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
