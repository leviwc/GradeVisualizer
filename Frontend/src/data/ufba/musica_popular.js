import { GradeState } from "../../components/materia";
export const musica_popular = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "MUSA19",
          nome: "HARMONIA NA MÚSICA POPULAR I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MUSA25",
          nome: "HISTÓRIA DA MPB I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MUSA31",
          nome: "TÓPICOS EM TECNOLOGIA APLICADA Á MÚSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSA59",
          nome: "PERCEPÇÃO MUSICAL I",
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
          codigo: "MUSA20",
          nome: "HARMONIA NA MÚSICA POPULAR II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "MUSA26",
          nome: "HISTÓRIA DA MPB II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "MUSA43",
          nome: "PRÁTICA DE CONJUNTO: CANTO CORAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MUSA60",
          nome: "PERCEPÇÃO MUSICAL II",
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
          codigo: "MUSA21",
          nome: "HARMONIA NA MÚSICA POPULAR III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "MUSA61",
          nome: "PERCEPÇÃO MUSICAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "MUSA22",
          nome: "HARMONIA NA MÚSICA POPULAR IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "MUSA62",
          nome: "PERCEPÇÃO MUSICAL IV",
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
          codigo: "MUSA27",
          nome: "IMPROVISAÇÃO PARA MÚSICA POPULAR I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "MUSA35",
          nome: "PESQUISA EM MUSICA",
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
      ],
    },
  ],
};
