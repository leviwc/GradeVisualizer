import { GradeState } from "../../components/materia";
export const desenho_e_plastica = {
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
          codigo: "EBA001",
          nome: "HISTORIA DA ARTE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA004",
          nome: "DESENHO I",
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
      ],
    },

    {
      numero: "2",
      materias: [
        {
          id: "0",
          codigo: "ARQ003",
          nome: "DESCRITIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ARQ006",
          nome: "DESENHO GEOMETRICO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "2",
          codigo: "EBA002",
          nome: "HISTORIA DA ARTE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "EBA008",
          nome: "TECNICA DA REPRESENTACAO GRAFICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "FCH180",
          nome: "ESTETICA II",
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
          codigo: "ARQ004",
          nome: "DESCRITIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
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
          codigo: "EBA181",
          nome: "HISTORIA DA ARTE CONTEMPORANEA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "EDCA01",
          nome: "FUNDAMENTOS PSICOLÓGICOS DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
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
          codigo: "ARQ011",
          nome: "DESENHO TECNICO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "EBA111",
          nome: "GRAVURA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "EBA133",
          nome: "EXPRESSAO TRIDIMENSIONAL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "4",
          codigo: "EDCJ26",
          nome: "METODOLOGIA DO ENSINO DAS ARTES VISUAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "5",
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
          codigo: "ARQ010",
          nome: "PERSPECTIVA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "EBA010",
          nome: "HISTORIA DA ARTE BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EBA107",
          nome: "PINTURA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "3",
          codigo: "EBA135",
          nome: "EXPRESSAO TRIDIMENSIONAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "EDCJ22",
          nome: "ESTÁGIO SUPERVISIONADO EM ENSINO DE ARTES VISUAIS I",
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
          codigo: "EBA015",
          nome: "DESENHO III-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "1",
          codigo: "EBA122",
          nome: "INICIAÇÃO ÀS TECNICAS INDUSTRIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "EDCJ23",
          nome: "ESTÁGIO SUPERVISIONADO EM ENSINO DE ARTES VISUAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "EBA115",
          nome: "COMPOSICAO DECORATIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "EDCJ24",
          nome: "ESTÁGIO SUPERVISIONADO EM ENSINO DE ARTES VISUAIS III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "EBA116",
          nome: "COMPOSICAO DECORATIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "EDCJ25",
          nome: "ESTÁGIO SUPERVISIONADO EM ENSINO DE ARTES VISUAIS IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },
  ],
};
