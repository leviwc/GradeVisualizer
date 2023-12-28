import { GradeState } from "../../components/materia";
export const letras_vernaculas_noturno = {
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
          codigo: "LETA13",
          nome: "INTRODUÇÃO AO ESTUDO DA LINGUA PORTUGUESA",
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
      ],
    },

    {
      numero: "2",
      materias: [
        {
          id: "0",
          codigo: "LETA12",
          nome: "INTRODUÇÃO AO ESTUDO DA LINGUA LATINA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETA16",
          nome: "ESTUDO DE TEORIAS E REPRESENTAÇÕES DA LITERATURA E DA CULTUR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "LETA17",
          nome: "FONÉTICA E FONOLOGIA DA LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "LETA19",
          nome: "MORFOLOGIA DA LINGUA PORTUGUESA",
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
          codigo: "LETA18",
          nome: "LEITURA DE TEXTOS EM LINGUA LATINA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "LETA21",
          nome: "A LITERATURA BRASILEIRA E A CONSTRUÇÃO DA NACIONALIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "LETA22",
          nome: "A LITERATURA PORTUGUESA E O IMAGINÁRIO BRASILEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "LETA24",
          nome: "SINTAXE DA LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "LETA20",
          nome: "INTRODUÇÃO À SEMÂNTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "1",
          codigo: "LETA23",
          nome: "INTRODUÇÃO À LINGÜISTICA ROMÂNICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "LETA25",
          nome: "O CÂNONE LITERÁRIO BRASILEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "3",
          codigo: "LETA26",
          nome: "TEORIAS LINGÜISTICAS CONTEMPORÂNEAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "LETA28",
          nome: "INTRODUÇÃO À ANÁLISE TEXTUAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "5",
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
          codigo: "LETA27",
          nome: "A LINGUA PORTUGUESA NO DOMINIO DA ROMÂNIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "LETA29",
          nome: "LITERATURA BRASILEIRA CONTEMPORÂNEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "3",
          codigo: "LETA31",
          nome: "LEITURA DE PRODUÇÕES ARTÍSTICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LETA32",
          nome: "LEITURA DE PRODUÇÕES DA MIDIA",
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
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETA30",
          nome: "A LINGUA PORTUGUESA NO BRASIL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "EDCA62",
          nome: "ESTÁGIO SUPERVISIONADO I DE LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "LETA03",
          nome: "SEMINÁRIOS INTERDISCIPLINARES- ENSINO",
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
          codigo: "EDCA63",
          nome: "ESTÁGIO SUPERVISIONADO II DE LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
      ],
    },
  ],
};
