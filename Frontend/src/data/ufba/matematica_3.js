import { GradeState } from "../../components/materia";
export const matematica_3 = {
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
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
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
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
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
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "MATB36",
          nome: "GRUPOS E ANÉIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MATB40",
          nome: "SEQUÊNCIAS SÉRIES E EDO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "3",
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
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "4", numero: "3" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "MATB43",
          nome: "CÁLCULO DIFERENCIAL VETORIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "2",
          codigo: "MATB44",
          nome: "ANÁLISE I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "MAT205",
          nome: "ALGEBRA III - INTRODUCAO À TEORIA DE GALOIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "1",
          codigo: "MATB50",
          nome: "TOPOLOGIA E ESPAÇOS MÉTRICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "2",
          codigo: "MATB51",
          nome: "TEORIA DAS EQUAÇÕES DIFERENCIAIS ORDINÁRIAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "MATG05",
          nome: "ANÁLISE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "MAT208",
          nome: "GEOMETRIA DIFERENCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "1", numero: "5" },
          ],
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
          codigo: "MATB54",
          nome: "ESTÁGIO SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "3",
          codigo: "MATG07",
          nome: "ANÁLISE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "MATB49",
          nome: "SEMINÁRIOS TEMÁTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "1",
          codigo: "MATB55",
          nome: "MONOGRAFIA",
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
