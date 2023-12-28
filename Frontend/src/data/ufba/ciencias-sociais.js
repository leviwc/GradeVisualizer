import { GradeState } from "../../components/materia";
export const ciencias_sociais = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FCHM54",
          nome: "INTRODUÇÃO À ANTROPOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHM55",
          nome: "INTRODUÇÃO À CIÊNCIA POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHM56",
          nome: "INTRODUÇÃO À SOCIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHM57",
          nome: "LEITURA DISCURSO E PRODUÇÃO DE TEXTOS EM CIÊNCIAS SOCIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCHM58",
          nome: "INTRODUÇÃO À METODOLOGIA EM CIÊNCIAS SOCIAIS",
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
          codigo: "EDCB81",
          nome: "SOCIOLOGIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCHM59",
          nome: "HISTÓRIA E FILOSOFIA NAS CIÊNCIAS SOCIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCHM60",
          nome: "NATUREZA CULTURA E SOCIEDADE NA ANTROPOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "3",
          codigo: "FCHM61",
          nome: "TEORIA POLÍTICA MODERNA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "4",
          codigo: "FCHM62",
          nome: "ESTRUTURA E TRANSFORMAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "5",
          codigo: "FCHM63",
          nome: "PRÁTICA PEDAGÓGICA EM CIÊNCIAS SOCIAIS I-ANTROPOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FCHE91",
          nome: "ETNOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCHM64",
          nome: "PRÁTICA PEDAGÓGICA EM CIÊNCIAS SOCIAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "FCHM66",
          nome: "ELITISMO PLURALISMO E DEMOCRACIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "FCHM67",
          nome: "INDIVIDUO SOCIEDADE E MODERNIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "FCHM68",
          nome: "SOCIOLOGIA BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "5",
          codigo: "FCHM72",
          nome: "ECONOMIA E POLÍTICA NA ANTROPOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "FCHE94",
          nome: "METODOLOGIA DE PROJETOS DE INTERVENÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCHM65",
          nome: "PRÁTICA PEDAGÓGICA EM CIÊNCIAS SOCIAIS III-C.POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "FCHM69",
          nome: "CIÊNCIA E RELIGIÃO NA ANTROPOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "3",
          codigo: "FCHM70",
          nome: "PENSAMENTO POLÍTICO BRASILEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "4",
          codigo: "FCHM71",
          nome: "AÇÃO E INTERAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ICI114",
          nome: "DOCUMENTACAO II",
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
          dependencias: [
            { id: "5", numero: "2" },
            { id: "1", numero: "3" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "EDCL21",
          nome: "ESTÁGIO EM CIÊNCIAS SOCIAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "2" },
            { id: "1", numero: "3" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "EDCL32",
          nome: "PSICOLOGIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHM73",
          nome: "INSTITUIÇÕES POLÍTICAS BRASILEIRAS CONTEMPORÂNEAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
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
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "EDCL22",
          nome: "ESTÁGIO EM CIÊNCIAS SOCIAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "EDCL25",
          nome: "ESTADO POLÍTICAS E OREGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCHM74",
          nome: "ATIVIDADE DE EXTENSÃO EM CIÊNCIAS SOCIAIS",
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
          codigo: "EDCB91",
          nome: "GESTÃO EDUCACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCL23",
          nome: "ESTÁGIO EM CIÊNCIAS SOCIAIS III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "LETE48",
          nome: "LIBRAS I- LÍNGUA BRASILEIRA DE SINAIS NIVEL I",
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
          codigo: "EDCL24",
          nome: "ESTÁGIO EM CIÊNCIAS SOCIAIS IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
