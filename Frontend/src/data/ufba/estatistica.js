import { GradeState } from "../../components/materia";
export const estatistica = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "MAT198",
          nome: "FUNDAMENTOS DE MATEMATICA ELEMENTAR I-A",
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
          codigo: "MATA02",
          nome: "CÁLCULO A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATB59",
          nome: "ESTATÍSTICA BÁSICA A",
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
          codigo: "MAT223",
          nome: "PROBABILIDADE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "1",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATD38",
          nome: "ESTATISTICA BASICA B",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MATD39",
          nome: "ANALISE DESCRITIVA E EXPLORATORIA DE DADOS A",
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
          codigo: "FCHC45",
          nome: "METODOLOGIA E EXPRESSÃO TÉCNICO-CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MAT224",
          nome: "PROBABILIDADE II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "4",
          codigo: "MATD41",
          nome: "INTRODUÇÃO AOS MODELOS LINEARES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
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
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MAT186",
          nome: "ELEMENTOS DE PROCESSOS ESTOCÁSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "3", numero: "3" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATD40",
          nome: "ANALISE DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATD42",
          nome: "INFERENCIA A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "MAT229",
          nome: "ANALISE DE REGRESSAO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "MATD43",
          nome: "INFERENCIA B",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "2",
          codigo: "MATD44",
          nome: "AMOSTRAGEM A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MATD46",
          nome: "ESTATISTICA COMPUTACIONAL A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "4", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "MATD47",
          nome: "METODOS MULTIVARIADOS A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "MATD48",
          nome: "PLANEJAMENTO DE EXPERIMENTOS A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "MATD50",
          nome: "MODELOS LINEARES GENERALIZADOS A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "MATD51",
          nome: "ANALISE DAS SERIES TEMPORAIS A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ADM001",
          nome: "INTRODUCÃO À ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATD45",
          nome: "SISTEMAS DE INFORMAÇÕES E A PROFISSÃO DO ESTATÍSTICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATD49",
          nome: "ESTATISTICA NÃO PARAMETRICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "3",
          codigo: "MATD52",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MATD53",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
      ],
    },
  ],
};
