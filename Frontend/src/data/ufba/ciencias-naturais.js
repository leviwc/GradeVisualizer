import { GradeState } from "../../components/materia";
export const ciencias_naturais = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ARQ005",
          nome: "DESENHO GEOMETRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "BIO007",
          nome: "INTRODUÇÃO A BIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS007",
          nome: "ANATOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "LET044",
          nome: "LÍNGUA PORTUGUESA COMO INSTRUMENTO DE COMUNICAÇÃO N-100",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "QUI001",
          nome: "COMPLEMENTOS DE QUIMICA I",
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
          codigo: "BIO111",
          nome: "BOTANICA VII",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA04",
          nome: "SOCIEDADE E EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEO023",
          nome: "GEOCIENCIAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MAT015",
          nome: "COMPLEMENTOS DE MATEMATICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "QUI148",
          nome: "QUÍMICA ORGÂNICA NAS CIÊNCIAS NATURAIS",
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
          codigo: "BIO006",
          nome: "FUNDAMENTOS ZOOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS134",
          nome: "FISICA PARA LICENCIATURA EM CIENCIAS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FISA01",
          nome: "INTRODUÇÃO À ASTRONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICS004",
          nome: "BIOQUÍMICA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MAT218",
          nome: "ESTATISTICA E PROBABILIDADE II",
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
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA03",
          nome: "FILOSOFIA E EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCK87",
          nome: "ESTÁGIO SUPERVISIONADO EM CIÊNCIAS NATURAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "FIS135",
          nome: "FISICA PARA LICENCIATURA EM CIENCIAS II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICS046",
          nome: "PARASITOLOGIA HUMANA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "NUT170",
          nome: "INTRODUÇÃO À NUTRIÇÃO II",
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
          codigo: "BIO130",
          nome: "ECOLOGIA GERAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDC219",
          nome: "HIGIENE EDUCACAO E SAUDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDC283",
          nome: "CURRÍCULO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCJ81",
          nome: "ENSINO DE CIÊNCIAS NATURAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCK88",
          nome: "ESTÁGIO SUPERVISIONADO EM CIÊNCIAS NATURAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ICS001",
          nome: "BIOFÍSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MAT115",
          nome: "INTRODUCAO AO PROCESSAMENTO DE DADOS",
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
          codigo: "EDC267",
          nome: "EDUCACAO AMBIENTAL",
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
          codigo: "EDCK89",
          nome: "ESTÁGIO SUPERVISIONADO EM CIÊNCIAS NATURAIS III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "3",
          codigo: "FAR159",
          nome: "SOCORROS DE URGENCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
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
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "EDCK90",
          nome: "ESTÁGIO SUPERVISIONADO EM CIÊNCIAS NATURAIS IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
      ],
    },
  ],
};
