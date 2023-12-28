import { GradeState } from "../../components/materia";
export const decoracao = {
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
          codigo: "ARQ005",
          nome: "DESENHO GEOMETRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA017",
          nome: "TECNICAS DE REPRESENTAÇÃO GRAFICA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBA152",
          nome: "DESENHO DE OBSERVACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBA154",
          nome: "METODOLOGIA DO PROJETO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "FCH002",
          nome: "ESTETICA I",
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
          codigo: "ARQ004",
          nome: "DESCRITIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ARQ006",
          nome: "DESENHO GEOMETRICO II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ARQ131",
          nome: "DESENHO ARQUITETONICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "EBA003",
          nome: "HISTORIA DA ARTE III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBA172",
          nome: "DESENVOLVIMENTO DO PROJETO DE DECORACAO AMBIENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "1" },
            { id: "4", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ARQ010",
          nome: "PERSPECTIVA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "EBA105",
          nome: "TEORIA E TECNICA DA PINTURA",
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
          codigo: "EBA160",
          nome: "ERGONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBA171",
          nome: "HISTORIA DO MOBILIARIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "5",
          codigo: "EBA173",
          nome: "DESENVOLVIMENTO DO PROJETO DE DECOR AMBIENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "5", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "EBA018",
          nome: "DESENHO DE OBSERVACAO II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EBA135",
          nome: "EXPRESSAO TRIDIMENSIONAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA153",
          nome: "FOTOGRAFIA I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBA170",
          nome: "MAQUETES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "4",
          codigo: "EBA174",
          nome: "DESENVOLVIMENTO DO PROJETO DE DECORACAO AMBIENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "3" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "EBA181",
          nome: "HISTORIA DA ARTE CONTEMPORANEA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ARQ138",
          nome: "CONFORTO AMBIENTAL EM DECORACAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "1",
          codigo: "EBA010",
          nome: "HISTORIA DA ARTE BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "EBA123",
          nome: "CERAMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EBA143",
          nome: "DESENHO VI",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EBA175",
          nome: "DESENVOLVIMENTO DO PROJETO DE DECORACAO AMBIENTAL IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "EBA176",
          nome: "DESENVOLVIMENTO DO PROJETO DE DECORACAO AMBIENTAL V",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "FCH006",
          nome: "INTRODUÇÃO SOCIOLOGIA I",
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
          codigo: "EBA177",
          nome: "DESENVOLVIMENTO DO PROJETO DE DECORACAO AMBIENTAL VI",
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
          codigo: "EBA019",
          nome: "PRATICA PROFISSIONAL EM DECORACAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
      ],
    },
  ],
};
