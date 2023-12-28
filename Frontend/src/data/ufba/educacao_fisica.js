import { GradeState } from "../../components/materia";
export const educacao_fisica = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "BIO159",
          nome: "BASES BIOLOGICAS DO DESENVOLVIMENTO HUMANO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA16",
          nome: "HISTÓRIA DA EDUCAÇÃO FÍSICA ESPORTE LAZER",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCD40",
          nome: "TEORIA GERAL DA EDUCAÇÃO FÍSICA ESPORTE E LAZER",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCD48",
          nome: "ABORDAGENS MÉTODOS E TÉCNICAS DE PESQUISA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCD76",
          nome: "PRÁTICA DE ENSINO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
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
          codigo: "DAN062",
          nome: "ELEMENTOS DA DANCA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCD49",
          nome: "ESPORTE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCD50",
          nome: "GINÁSTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCD52",
          nome: "PRÁTICA DE ENSINO II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCH007",
          nome: "INTRODUCAO SOCIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICS007",
          nome: "ANATOMIA I",
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
          codigo: "EDCD51",
          nome: "EDUCAÇÃO E SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCD53",
          nome: "ESPORTE II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCD54",
          nome: "GINÁSTICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCD55",
          nome: "PRÁTICA DE ENSINO III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCD56",
          nome: "ABORDAGENS MÉTODOS E TÉCNICAS DE PESQUISA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "5",
          codigo: "EDCD75",
          nome: "BIOMECÂNICA APLICADA A EDUCAÇÃO FÍSICA",
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
          codigo: "EDCD57",
          nome: "EDUCAÇÃO E LAZER",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCD59",
          nome: "EDUCAÇÃO IDENTIDADE E PLURALIDADE CULTURAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCD62",
          nome: "PRÁTICA DE ENSINO IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS021",
          nome: "FISIOLOGIA I",
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
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EDC238",
          nome: "CAPOEIRA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCD60",
          nome: "ESPORTE III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCD61",
          nome: "GINÁSTICA III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCD71",
          nome: "ESTÁGIO SUPERVISIONADO EM EDUCAÇÃO FÍSICA I",
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
          codigo: "EDCD64",
          nome: "ABORDAGENS MÉTODOS E TÉCNICAS DE PESQUISA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "1",
          codigo: "EDCD70",
          nome: "POLÍTICAS PÚBLICAS DE EDUCAÇÃO FÍSICA SAÚDE ESPORTE E LAZER",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCD72",
          nome: "ESTÁGIO SUPERVISIONADO EM EDUCAÇÃO II",
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
          codigo: "EDC243",
          nome: "TREINAMENTO DESPORTIVO",
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
          codigo: "EDCD58",
          nome: "EDUCAÇÃO FÍSICA ADAPTADA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCD73",
          nome: "ESTÁGIO SUPERVISIONADO EM EDUCAÇÃO FÍSICA III",
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
          codigo: "EDCA70",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "EDCD74",
          nome: "ESTÁGIO SUPERFISIONADO EM EDUCAÇÃO FÍSICA IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
