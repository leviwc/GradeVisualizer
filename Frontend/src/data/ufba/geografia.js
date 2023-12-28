import { GradeState } from "../../components/materia";
export const geografia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "GEOA13",
          nome: "HISTÓRIA DO PENSAMENTO GEOGRÁFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEOA14",
          nome: "GEOGRAFIA DA POPULAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOA15",
          nome: "CARTOGRAFIA SISTEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MAT021",
          nome: "ESTATISTICA I B",
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
          codigo: "GEO035",
          nome: "TEORIA DA GEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "GEOA16",
          nome: "CLIMATOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOA17",
          nome: "CARTOGRAFIA TEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "GEOA43",
          nome: "GEOLOGIA BÁSICA",
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
          codigo: "EDCA02",
          nome: "ORGANIZAÇÃO DA EDUCAÇÃO BRASILEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDCA11",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEO134",
          nome: "GEOGRAFIA ECONOMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOA19",
          nome: "HIDROGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "GEOA23",
          nome: "GEOGRAFIA URBANA",
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
          codigo: "EDCA12",
          nome: "DIDÁTICA E PRAXIS PEDAGÓGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "1",
          codigo: "GEOA18",
          nome: "GEOGRAFIA AGRÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "GEOA21",
          nome: "AEROFOTOGRAMETRIA FOTOINTERPRETAÇÃO E SENSORIAMENTO REMOTO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOB36",
          nome: "PEDOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
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
          codigo: "EDCH84",
          nome: "ESTÁGIO I EM GEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "GEOA20",
          nome: "FUNDAMENTOS DE GEOMORFOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "GEOA24",
          nome: "GEOGRAFIA REGIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOA26",
          nome: "LEITURA E INTERPRETAÇÃO DE CARTAS E MAPAS",
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
          codigo: "EDCH85",
          nome: "ESTÁGIO II EM GEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "GEO084",
          nome: "LE - GEOGRAFIA DO BRASIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEOA25",
          nome: "BIOGEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "EDCH86",
          nome: "ESTÁGIO III EM GEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "GEO132",
          nome: "GEOGRAFIA POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEOA30",
          nome: "ESTUDO INTEGRADO DA PAISAGEM",
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
          codigo: "EDCH87",
          nome: "ESTÁGIO IV EM GEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "GEOA28",
          nome: "ORGANIZAÇÃO REGIONAL DO ESPAÇO MUNDIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
      ],
    },
  ],
};
