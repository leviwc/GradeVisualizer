import { GradeState } from "../../components/materia";
export const engenharia_de_agrimensura = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENGJ18",
          nome: "INTRODUÇÃO A ENGENHARIA DE AGRIMENSURA E CARTOGRÁFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA02",
          nome: "CÁLCULO A",
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
          codigo: "ARQ011",
          nome: "DESENHO TECNICO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ARQ013",
          nome: "DESCRITIVA I A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ENGA50",
          nome: "TOPOGRAFIA - A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "0", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ENGJ17",
          nome: "TECNOLOGIA DOS MATERIAIS APLICADA À ENG. DE AGRIM. E CARTOG.",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGJ19",
          nome: "TOPOGRAFIA - LEVANTAMENTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ENGJ20",
          nome: "PROGRAMAÇÃO APLICADA À ENG. DE AGRIMENSURA E CARTOGRÁFICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ENGJ21",
          nome: "AJUSTAMENTO DE OBSERVAÇÕES GEODÉSICAS A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "5",
          codigo: "ENGJ44",
          nome: "ELEMENTOS DE GEOLOGIA E DE GEOMORFOLOGIA",
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
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGC30",
          nome: "MECÂNICA DOS SÓLIDOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ENGJ22",
          nome: "AJUSTAMENTO DE OBSERVAÇÕES GEODÉSICAS B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "4" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "ENGJ25",
          nome: "PROJEÇÕES CARTOGRÁFICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
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
          codigo: "ENG304",
          nome: "PROJETO DE ESTRADAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ENGJ23",
          nome: "ASTRONOMIA GEODÉSICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ENGJ27",
          nome: "TOPOGRAFIA - PROCESSAMENTO E AJUSTAMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ENGJ28",
          nome: "FOTOGRAMETRIA E SENSORIAMENTO REMOTO SUB-ORBITAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "ENGJ29",
          nome: "SISTEMAS DE INFORMAÇÕES GEOGRÁFICAS",
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
          codigo: "ENGG62",
          nome: "METODOLOGIA E EXPRESSÃO DO CONHECIMENTO CIENTÍFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGJ16",
          nome: "LEGISLAÇÃO SOCIAL E TERRITORIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGJ24",
          nome: "GEODÉSIA GEOMÉTRICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENGL73",
          nome: "SENSORIAMENTO REMOTO ORBITAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "4",
          codigo: "GEOA17",
          nome: "CARTOGRAFIA TEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ENG371",
          nome: "HIDROLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENGA58",
          nome: "ECONOMIA APLICADA À ENGENHARIA CIVIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGJ33",
          nome: "PROCESSAMENTO DIGITAL DE IMAGENS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
        {
          id: "3",
          codigo: "ENGJ34",
          nome: "GEODÉSIA ESPACIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "4",
          codigo: "ENGJ38",
          nome: "FOTOGRAMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "3", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENGJ26",
          nome: "GEODÉSIA FÍSICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "8" }],
        },
        {
          id: "1",
          codigo: "ENGJ31",
          nome: "AGRIMENSURA LEGAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "2",
          codigo: "ENGJ32",
          nome: "PARCELAMENTO TERRITORIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "3",
          codigo: "ENGJ36",
          nome: "LABORATÓRIO INTEGRADO - SIG E SR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "6" },
            { id: "2", numero: "8" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENGA57",
          nome: "ADMINISTRAÇÃO APLICADA À ENGENHARIA CIVIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGJ35",
          nome: "CADASTRO TERRITORIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "9" }],
        },
        {
          id: "2",
          codigo: "ENGJ37",
          nome: "LABORATÓRIO INTEGRADO - PRODUÇÃO DE MAPAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENGJ40",
          nome: "LEVANTAMENTOS ESPECIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "3", numero: "8" },
            { id: "4", numero: "8" },
          ],
        },
      ],
    },

    {
      numero: "11",
      materias: [
        {
          id: "0",
          codigo: "ENGJ39",
          nome: "LABORATÓRIO INTEGRADO - CADASTRO TERRITORIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "1", numero: "10" },
          ],
        },
        {
          id: "1",
          codigo: "ENGJ41",
          nome: "ESTÁGIO OBRIGATÓRIO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGJ42",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "9" },
            { id: "2", numero: "10" },
          ],
        },
      ],
    },

    {
      numero: "12",
      materias: [
        {
          id: "0",
          codigo: "ENGJ43",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "11" }],
        },
      ],
    },
  ],
};
