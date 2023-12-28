import { GradeState } from "../../components/materia";
export const computacao_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "EDCB80",
          nome: "FILOSOFIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA37",
          nome: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA39",
          nome: "SEMINÁRIOS DE INTRODUÇÃO AO CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATA42",
          nome: "MATEMÁTICA DISCRETA I",
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
          codigo: "EDC287",
          nome: "EDUCAÇÃO E TECNOLOGIAS CONTEMPORÂNEAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA68",
          nome: "COMPUTADOR ÉTICA E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATC73",
          nome: "INTRODUÇÃO À LÓGICA MATEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATC81",
          nome: "SISTEMAS BÁSICOS DE COMPUTAÇÃO: ARQUITETURA E SOFTWARE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MATD04",
          nome: "ESTRUTURAS DE DADOS",
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
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "MATA55",
          nome: "PROGRAMAÇÃO ORIENTADA A OBJETOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATC94",
          nome: "INTRODUÇÃO AS LINGUAGENS FORMAIS E TEORIA DA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
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
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA41",
          nome: "INFORMÁTICA NA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA59",
          nome: "REDES DE COMPUTADORES I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATA62",
          nome: "ENGENHARIA DE SOFTWARE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MATC82",
          nome: "SISTEMAS WEB",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EDC286",
          nome: "AVALIAÇÃO DA APRENDIZAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MATB19",
          nome: "SISTEMAS MULTIMÍDIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MATB21",
          nome: "AMBIENTES INTERATIVOS DE APRENDIZAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "MATD05",
          nome: "BANCO DE DADOS E APLICAÇÕES",
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
          codigo: "MATB22",
          nome: "LABORATÓRIO DE INFORMÁTICA NA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "1",
          codigo: "MATC68",
          nome: "ESTÁGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MATC72",
          nome: "INTERAÇÃO HUMANO-COMPUTADOR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MATC76",
          nome: "PRÁTICA DE ENSINO DE COMPUTAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MATC78",
          nome: "PROJETO DE SOFTWARE EDUCATIVO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MATB20",
          nome: "INTELIGÊNCIA ARTIFICIAL EM EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "MATC69",
          nome: "ESTÁGIO SUPERVISIONADO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "MATC77",
          nome: "PRÁTICA DE ENSINO DE COMPUTAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MATC79",
          nome: "PROJETOS INTERDISCIPLINARES: CONCEPÇÃO E PRÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "2", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MATC70",
          nome: "ESTÁGIO SUPERVISIONADO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "MATC71",
          nome: "ESTÁGIO SUPERVISIONADO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "8" }],
        },
      ],
    },
  ],
};
