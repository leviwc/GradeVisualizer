import { GradeState } from "../../components/materia";
export const filosofia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FCHB42",
          nome: "HISTÓRIA DA FILOSOFIA ANTIGA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHB49",
          nome: "INTRODUÇÃO À FILOSOFIA I - A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHB51",
          nome: "INTRODUÇÃO À LÓGICA",
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
          codigo: "FCHB43",
          nome: "HISTÓRIA DA FILOSOFIA ANTIGA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCHB50",
          nome: "LEITURA E REDAÇÃO DE TEXTO FILOSÓFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHB52",
          nome: "LÓGICA E LINGUAGEM",
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
          codigo: "FCH028",
          nome: "ONTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHB44",
          nome: "HISTORIA DA FILOSOFIA MEDIEVAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "FCHB45",
          nome: "HISTÓRIA DA FILOSOFIA MODERNA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "1",
          codigo: "FCHB54",
          nome: "FILOSOFIA E CIÊNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
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
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH033",
          nome: "TEORIA DO CONHECIMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH280",
          nome: "FILOSOFIA POLITICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHB46",
          nome: "HISTÓRIA DA FILOSOFIA MODERNA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "5",
          codigo: "FCHB55",
          nome: "TUTORIA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "1", numero: "1" },
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "6",
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
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "FCH283",
          nome: "ESTETICA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHB47",
          nome: "HISTÓRIA DA FILOSOFIA CONTEMPORÂNEA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "4",
          codigo: "FCHB56",
          nome: "TUTORIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
        {
          id: "5",
          codigo: "FCHC33",
          nome: "ÉTICA I - A",
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
          codigo: "EDCA17",
          nome: "DIDÁTICA E PRÁXIS PEDAGÓGICA EM FILOSOFIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "EDCB80",
          nome: "FILOSOFIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHB48",
          nome: "HISTÓRIA DA FILOSOFIA CONTEMPORÂNEA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "3",
          codigo: "FCHB57",
          nome: "TUTORIA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "4",
          codigo: "FCHB59",
          nome: "SEMINÁRIO DE PESQUISA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "5" },
            { id: "4", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "EDCA18",
          nome: "DIDÁTICA E PRÁXIS PEDAGÓGICA EM FILOSOFIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "FCHB58",
          nome: "TUTORIA IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
        {
          id: "2",
          codigo: "FCHC67",
          nome: "MONOGRAFIA FINAL - LICENCIATURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
      ],
    },
  ],
};
