import { GradeState } from "../../components/materia";
export const canto_lirico = {
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
          codigo: "MUSA77",
          nome: "HISTÓRIA DA MÚSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
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
          codigo: "MUSG53",
          nome: "CANTO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MUSG59",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL I",
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
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "MUSB32",
          nome: "PIANO SUPLEMENTAR II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MUSB79",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSG54",
          nome: "CANTO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "5",
          codigo: "MUSG60",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL II",
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
          codigo: "MUSA61",
          nome: "PERCEPÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "MUSA79",
          nome: "HISTÓRIA DA MÚSICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MUSB33",
          nome: "PIANO SUPLEMENTAR III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MUSC60",
          nome: "PRÁTICA DE CONJUNTO:CANTO CORAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSG55",
          nome: "CANTO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "5",
          codigo: "MUSG61",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "6",
          codigo: "MUSG64",
          nome: "LITERATURA E PERFORMANCE VOCAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
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
          codigo: "MUSA80",
          nome: "HISTÓRIA DA MÚSICA IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MUSB34",
          nome: "PIANO SUPLEMENTAR IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MUSC61",
          nome: "PRÁTICA DE CONJUNTO:CANTO CORAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MUSG56",
          nome: "CANTO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MUSG62",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL VII",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "6",
          codigo: "MUSG65",
          nome: "LITERATURA E PERFORMANCE VOCAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
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
          codigo: "MUSB78",
          nome: "MÚSICA DE CÂMARA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MUSG57",
          nome: "CANTO V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MUSG63",
          nome: "LITERATURA E ESTRUTURAÇÃO MUSICAL VIII",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MUSG66",
          nome: "LITERATURA E PERFORMANCE VOCAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
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
          codigo: "MUSC86",
          nome: "MÚSICA DE CÂMARA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MUSG58",
          nome: "CANTO VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "MUSG67",
          nome: "LITERATURA E PERFORMANCE VOCAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MUSG68",
          nome: "PREPARAÇÃO DE RECITAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "1",
          codigo: "MUSG70",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "2",
          codigo: "MUSG72",
          nome: "FUNDAMENTOS DA PEDAGOGIA DA VOZ",
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
          codigo: "MUSG69",
          nome: "PREPARAÇÃO DE RECITAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "MUSG71",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
