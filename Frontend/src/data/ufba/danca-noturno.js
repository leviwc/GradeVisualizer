import { GradeState } from "../../components/materia";
export const danca_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "DANB63",
          nome: "MID: ESTUDOS DO CORPO EM DANÇA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DANB64",
          nome: "MID: ESTUDOS DE PROCESSOS CRIATIVOS EM DANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "DANB65",
          nome: "ESTUDOS EM CINESIOLOGIA NA DANÇA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "DANB66",
          nome: "MID: ESTUDOS CRÍTICO-ANALÍTICOS EM DANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "DANB67",
          nome: "OFICINA DE LEITURAS E ESCRITAS: AUTORIA PROCESSOS IDENTITÁR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "DANC11",
          nome: "EAD: DANÇAS E CULTURAS DE REDE",
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
          codigo: "DANB68",
          nome: "MID: ESTUDOS DO CORPO EM DANÇA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DANB69",
          nome: "MID: PROJETO INTERDISCIPLINAR DE CRIAÇÃO EM DANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "DANB70",
          nome: "OFICINA DE LEITURAS E ESCRITAS: PRODUÇÃO DE TEXTO ARTÍSTICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "DANC17",
          nome: "ESTUDOS EM CINESIOLOGIA DA DANÇA II",
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
          codigo: "DANB71",
          nome: "MID: ESTUDOS EM DANÇA E EDUCAÇÃO AMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DANB72",
          nome: "MID: ESTUDOS AFRO-DIASPÓRICOS EM DANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "DANB73",
          nome: "MID: ESTUDOS EM DANÇA E DEFICIÊNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "DANB74",
          nome: "SEMINÁRIOS INTERDISCIPLINARES EM DANÇA E DIERITOS HUMANOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCL27",
          nome: "PSICOLOGIA DA EDUCAÇÃO",
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
          codigo: "DANB75",
          nome: "LABORATÓRIO ARTÍSTICO-PEDAGÓGICO EM DANÇA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DANB76",
          nome: "MID: ESTUDOS EM DANÇA E SABERES INDÍGENAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "DANB77",
          nome: "MID: ESTUDOS DE GÊNERO E SEXUALIDADE EM DANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "DANB78",
          nome: "MID: DANÇA EM CAMPO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
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
          codigo: "DANB79",
          nome: "LABORATÓRIO ARTÍSTICO-PEDAGÓGICO EM DANÇA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "DANB80",
          nome: "MID: PROCESSOS EDUCACIONAIS E POLÍTICAS DA DANÇA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "DANB81",
          nome: "MID: DANÇA EM CAMPO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "3",
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
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
          codigo: "DANB82",
          nome: "ESTÁGIO DE LICENCIATURA EM DANÇA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "0", numero: "5" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "DANB83",
          nome: "MID: DANÇA COMO TECNOLOGIA EDUCACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "DANB84",
          nome: "LABORATÓRIO ARTÍSTICO-PEDAGÓGICO EM DANÇA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "3",
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "DANB85",
          nome: "ESTÁGIO DE LICENCIATURA EM DANÇA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "DANB86",
          nome: "MID: ESTUDOS CRÍTICO-ANALÍTICOS: INTRODUÇÃO À PESQUISA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "DANB87",
          nome: "ESTÁGIO DE LICENCIATURA EM DANÇA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "DANB88",
          nome: "TCC",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "0", numero: "7" },
          ],
        },
      ],
    },
  ],
};
