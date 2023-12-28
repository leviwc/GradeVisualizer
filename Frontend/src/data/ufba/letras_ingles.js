import { GradeState } from "../../components/materia";
export const letras_ingles = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "LETA09",
          nome: "OFICINA DE LEITURA E PRODUÇÃO DE TEXTOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETA10",
          nome: "INTRODUÇÃO AOS ESTUDOS LITERÁRIOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "LETA11",
          nome: "INTRODUÇÃO AOS ESTUDOS LINGÜISTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "LETA12",
          nome: "INTRODUÇÃO AO ESTUDO DA LINGUA LATINA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LETA14",
          nome: "TÉCNICAS DE PESQUISA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "LETB42",
          nome: "LINGUA INGLESA EM NIVEL BÁSICO",
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
          codigo: "LETA18",
          nome: "LEITURA DE TEXTOS EM LINGUA LATINA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "1",
          codigo: "LETA19",
          nome: "MORFOLOGIA DA LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "LETA21",
          nome: "A LITERATURA BRASILEIRA E A CONSTRUÇÃO DA NACIONALIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "LETA22",
          nome: "A LITERATURA PORTUGUESA E O IMAGINÁRIO BRASILEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "4",
          codigo: "LETB43",
          nome: "LINGUA INGLESA EM NIVEL INTERMEDIÁRIO",
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
          codigo: "LETA24",
          nome: "SINTAXE DA LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETA91",
          nome: "FONÉTICA E FONOLOGIA DA LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "2",
          codigo: "LETA94",
          nome: "HISTÓRIA DA LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "LETB44",
          nome: "LINGUA INGLESA EM NIVEL AVANÇADO",
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
          codigo: "LETA03",
          nome: "SEMINÁRIOS INTERDISCIPLINARES- ENSINO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETA90",
          nome: "O CONTO DE LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "LETA92",
          nome: "A FRASE NOMINAL DA LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "LETA97",
          nome: "PRODUÇÃO DE TEXTOS EM LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "LETE48",
          nome: "LIBRAS I- LÍNGUA BRASILEIRA DE SINAIS NIVEL I",
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
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETA93",
          nome: "A POESIA DE LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "LETA95",
          nome: "A FRASE VERBAL DA LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "LETB26",
          nome: "LEITURA DE PRODUÇÕES ARTISTICAS EM LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
      ],
    },

    {
      numero: "6",
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
          codigo: "LETA96",
          nome: "O ROMANCE DE LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "LETB27",
          nome: "LEITURA DE PRODUÇÕES DA MIDIA EM LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "LETA98",
          nome: "O TEATRO DE LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "LETB28",
          nome: "ESTÁGIO SUPERVISIONADO I DE LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "LETB29",
          nome: "ESTÁGIO SUPERVISIONADO II DE LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
