import { GradeState } from "../../components/materia";
export const matematica_2 = {
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
          codigo: "MAT191",
          nome: "MATEMATICA FINANCEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MAT198",
          nome: "FUNDAMENTOS DE MATEMATICA ELEMENTAR I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MAT199",
          nome: "FUNDAMENTOS DE MATEMATICA ELEMENTAR II-A",
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
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATB32",
          nome: "INTRODUÇÃO À TEORIA DOS NÚMEROS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATB33",
          nome: "LIMITES E DERIVADAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATB34",
          nome: "GEOMETRIA ANALÍTICA E ÁLGEBRA VETORIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATB59",
          nome: "ESTATÍSTICA BÁSICA A",
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
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATB31",
          nome: "INTRODUÇÃO À ANÁLISE COMBINATÓRIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATB35",
          nome: "GRUPOS E ANÉIS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATB37",
          nome: "INTEGRAIS E FUNÇÕES DE VÁRIAS VARIÁVEIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "4",
          codigo: "MATB38",
          nome: "ÁLGEBRA LINEAR I- B",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
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
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "2",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATB40",
          nome: "SEQUÊNCIAS SÉRIES E EDO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MATB41",
          nome: "ÁLGEBRA LINEAR II-B",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EDCA80",
          nome: "METODOLOGIA DO ENSINO DA MATEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "EDCA81",
          nome: "ESTÁGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "LETE46",
          nome: "LIBRAS-LÍNGUA BRASILEIRA DE SINAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATB43",
          nome: "CÁLCULO DIFERENCIAL VETORIAL",
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
          codigo: "EDCL03",
          nome: "ESTÁGIO SUPERVISIONADO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MATB39",
          nome: "MATEMÁTICA PARA A EDUCAÇÃO BÁSICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MATB44",
          nome: "ANÁLISE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "3",
          codigo: "MATB49",
          nome: "SEMINÁRIOS TEMÁTICOS",
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
          codigo: "EDCL04",
          nome: "ESTÁGIO SUPERVISIONADO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "MATB46",
          nome: "FUNÇÕES HOLOMORFAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MATB47",
          nome: "LABORATÓRIO DE ENSINO DE MATEMÁTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
          codigo: "MATG03",
          nome: "MATEMÁTICA PARA A EDUCAÇÃO BÁSICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "EDCL05",
          nome: "ESTÁGIO SUPERVISIONADO IV",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "MATB48",
          nome: "LABORATÓRIO DE ENSINO DE MATEMÁTICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MATG04",
          nome: "MATEMÁTICA PARA EDUCAÇÃO BÁSICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
      ],
    },
  ],
};
