import { GradeState } from "../../components/materia";
export const design = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ARQ003",
          nome: "DESCRITIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBA017",
          nome: "TECNICAS DE REPRESENTAÇÃO GRAFICA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA152",
          nome: "DESENHO DE OBSERVACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH002",
          nome: "ESTETICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LET042",
          nome: "LINGUA PORTUGUESA I-A N-100",
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
          codigo: "ARQ005",
          nome: "DESENHO GEOMETRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBA153",
          nome: "FOTOGRAFIA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA159",
          nome: "METODOLOGIA VISUAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "EBA182",
          nome: "INTRODUÇÃO À COMPUTAÇÃO NAS ARTES GRÁFICAS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "LET043",
          nome: "LINGUA PORTUGUESA II-A N-100",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ARQ004",
          nome: "DESCRITIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "EBA003",
          nome: "HISTORIA DA ARTE III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA135",
          nome: "EXPRESSAO TRIDIMENSIONAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBA155",
          nome: "FOTOGRAFIA II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ARQ010",
          nome: "PERSPECTIVA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ARQ011",
          nome: "DESENHO TECNICO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA138",
          nome: "TEORIA DA PERCEPCAO VISUAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBA156",
          nome: "TEC UTILIZ MATER EXPRESSIVOS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBA158",
          nome: "HISTORIA DO DESENHO INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EBA157",
          nome: "TÉCNICA DA UTILIZAÇÃO DE MATERIAIS EXPRESSIVOS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "EBA161",
          nome: "MATERIAIS E PROCESSOS GRAFICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS136",
          nome: "FISICA GERAL E EXPERIMENTAL I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MAT219",
          nome: "MATEMATICA I-A",
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
          codigo: "EBA105",
          nome: "TEORIA E TECNICA DA PINTURA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBA147",
          nome: "GRAVURA IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA154",
          nome: "METODOLOGIA DO PROJETO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBA162",
          nome: "PRODUCAO E ANALISE GRAFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBA164",
          nome: "DESENVOLVIMENTO DO PROJETO DE PROGRAMAÇÃO VISUAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "2", numero: "2" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "EBA160",
          nome: "ERGONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBA165",
          nome: "DESENVOLVIMENTO DO PROJETO DE PROGRAMAÇÃO VISUAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
        {
          id: "2",
          codigo: "EBA183",
          nome: "INTRODUÇÃO À COMPUTAÇÀO NAS ARTES GRÁFICAS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ECO001",
          nome: "FUNDAMENTOS DE ECONOMIA",
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
          codigo: "DIR159",
          nome: "INSTITUICÃO DE DIREITO PÚBLICO E PRIVADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBA163",
          nome: "PRODUÇÃO E ANALISE DA IMAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "2",
          codigo: "EBA166",
          nome: "DESENVOLVIMENTO DO PROJETO DE PROGRAMAÇÃO VISUAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "3",
          codigo: "FCH006",
          nome: "INTRODUÇÃO SOCIOLOGIA I",
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
          codigo: "EBA167",
          nome: "DESENVOLVIMENTO DO PROJETO DE PROGRAMAÇÃO VISUAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "8" }],
        },
        {
          id: "1",
          codigo: "EBA168",
          nome: "ESTAGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "EBA184",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "9" }],
        },
      ],
    },
  ],
};
