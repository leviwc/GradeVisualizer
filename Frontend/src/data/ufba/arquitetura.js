import { GradeState } from "../../components/materia";
export const arquitetura = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ARQ018",
          nome: "INTRODUCAO A ARQUITETURA E URBANISMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ARQ022",
          nome: "MATEMATICA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ARQB72",
          nome: "EXPRESSÃO GRÁFICA 1",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ARQB74",
          nome: "ATELIER DE PROJETO 1",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCH043",
          nome: "ESTETICA - FILOSOFIA DAS ARTES",
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
          codigo: "ARQ019",
          nome: "MATEMATICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ARQ020",
          nome: "ESTUDOS SOCIAIS E AMBIENTAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ARQ021",
          nome: "HISTORIA DA ARQUITETURA E URBANISMO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "3",
          codigo: "ARQB73",
          nome: "EXPRESSÃO GRÁFICA 2",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ARQB75",
          nome: "ATELIER DE PROJETO 2",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "5",
          codigo: "FIS130",
          nome: "FISICA GERAL I-B",
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
          codigo: "ARQ023",
          nome: "HISTORIA DA ARQUITETURA CONTEMPORANEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ARQ025",
          nome: "CONFORTO AMBIENTAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ARQ026",
          nome: "INFORMATICA APLICADA A ARQUITETURA E URBANISMO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ARQB76",
          nome: "ATELIER DE PROJETO 3",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "4",
          codigo: "ENG021",
          nome: "MECANICA DAS ESTRUTURAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ENG022",
          nome: "MATERIAIS DE CONSTRUÇÃO",
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
          codigo: "ARQ027",
          nome: "HISTORIA DA ARQUITETURA E URBANISMO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ARQ030",
          nome: "CONFORTO AMBIENTAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ARQ046",
          nome: "ETICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ARQB77",
          nome: "ATELIER DE PROJETO 4",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ENG023",
          nome: "TECNICAS CONSTRUTIVAS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "5",
          codigo: "ENG025",
          nome: "INTRODUCAO AOS SISTEMAS ESTRUTURAIS",
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
          codigo: "ARQ032",
          nome: "HISTORIA E.TEORIA DA ARQUITETURA .BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ARQ033",
          nome: "SISTEMAS ESTRUTURAIS I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ARQ034",
          nome: "CONFORTO AMBIENTAL III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ARQ035",
          nome: "INFORMATICA APLICADA A ARQUITETURA E. URBANISMO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ARQB78",
          nome: "ATELIER DE PROJETO 5",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ENG024",
          nome: "TÉCNICAS CONSTRUTIVAS II",
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
          codigo: "ARQ036",
          nome: "TECNICAS RETROSPECTIVAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ARQ037",
          nome: "SISTEMAS ESTRUTURAIS II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ARQ038",
          nome: "INSTALACOES I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ARQ039",
          nome: "INSTALACOES II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ARQ040",
          nome: "ORGANIZACAO DO TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ARQB79",
          nome: "ATELIER DE PROJETO 6",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ARQ029",
          nome: "HISTORIA DO URBANISMO E DO PLANEJAMENTO URBANO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ARQB80",
          nome: "ATELIER DE PROJETO 7",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "6" }],
        },
        {
          id: "2",
          codigo: "ARQB82",
          nome: "ATELIER DE PLANEJAMENTO URBANO-REGIONAL 1",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ARQ043",
          nome: "ESTAGIO CURRICULAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ARQB81",
          nome: "ATELIER DE PROJETO 8",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "2",
          codigo: "ARQB83",
          nome: "ATELIER DE PLANEJAMENTO URBANO-REGIONAL 2",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ARQ045",
          nome: "TRABALHO FINAL DE GRADUACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
