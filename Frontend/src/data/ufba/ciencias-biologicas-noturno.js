import { GradeState } from "../../components/materia";
export const ciencias_biologicas_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "BIO007",
          nome: "INTRODUÇÃO A BIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "BIOA01",
          nome: "INTRODUÇÃO À BIOLOGIA COMPARADA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "BIOB23",
          nome: "MÉTODO DE ESTUDOS EM BIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FISA92",
          nome: "FISICA GERAL E EXPERIMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "QUI030",
          nome: "COMPLEMENTOS DE QUIMICA III",
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
          codigo: "BIO010",
          nome: "BIOLOGIA CELULAR E MOLECULAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "BIOB24",
          nome: "FORMULAÇÃO DE PROBLEMAS DE PESQUISA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "BIOB26",
          nome: "ORIGEM E EVOLUÇÃO DOS PROCARIONTES E EUCARIONTES BASAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "BIOB27",
          nome: "INTRODUÇÃO À DIVERSIDADE ZOOLÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "4",
          codigo: "GEOA74",
          nome: "GEOLOGIA GERAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICS001",
          nome: "BIOFÍSICA I",
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
          codigo: "BIOB65",
          nome: "DIVERSIDADE ZOOLÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "1",
          codigo: "BIOB66",
          nome: "ESTATÍSTICA APLICADA À BIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "BIOB67",
          nome: "BIOLOGIA DAS ALGAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "3",
          codigo: "BIOB68",
          nome: "GENÉTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "4",
          codigo: "BIOB69",
          nome: "MORFOLOGIA VEGETAL",
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
          codigo: "BIO129",
          nome: "EMBRIOLOGIA GERAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "BIOC01",
          nome: "DIVERSIDADE ZOOLÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "2",
          codigo: "BIOC02",
          nome: "SISTEMÁTICA E EVOLUÇÃO DE BRIÓFITAS E PTERIDÓFITAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "BIOC14",
          nome: "ECOLOGIA I - DE INDIVÍDUOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICS053",
          nome: "BIOQUÍMICA BÁSICA PARA CIÊNCIAS BIOLÓGICAS",
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
          codigo: "BIOC03",
          nome: "ECOLOGIA II - DE POPULAÇÕES E COMUNIDADES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "BIOC05",
          nome: "SISTEMÁTICA E EVOLUÇÃO DE ESPERMATÓFITAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "2",
          codigo: "BIOC13",
          nome: "DIVERSIDADE ZOOLÓGICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
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
          codigo: "BIOC10",
          nome: "GENÉTICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "1",
          codigo: "BIOC41",
          nome: "FISIOLOGIA VEGETAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCB33",
          nome: "ESTÁGIO SUPERVISIONADO I",
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
          codigo: "BIO032",
          nome: "FISIOLOGIA ANIMAL COMPARADA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "1",
          codigo: "BIOC06",
          nome: "ECOLOGIA III - ECOSSISTEMAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "2",
          codigo: "EDCL06",
          nome: "ESTÁGIO SUPERVISIONADO II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ICSA43",
          nome: "ANATOMIA I-A",
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
          codigo: "BIOC12",
          nome: "BIOLOGIA EVOLUTIVA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
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
          codigo: "EDCL07",
          nome: "ESTÁGIO SUPERVISIONADO III-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "3",
          codigo: "ICS026",
          nome: "HISTOLOGIA I",
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
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "BIOC07",
          nome: "ATIVIDADE INTERDISCIPLINAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCL08",
          nome: "ESTÁGIO SUPERVISIONADO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "8" }],
        },
        {
          id: "2",
          codigo: "GEO024",
          nome: "PALEONTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ICS021",
          nome: "FISIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "8" }],
        },
      ],
    },
  ],
};
