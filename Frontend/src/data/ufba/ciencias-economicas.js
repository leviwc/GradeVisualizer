import { GradeState } from "../../components/materia";
export const ciencias_economicas = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ECOB39",
          nome: "EVOLUÇÃO DO MÉTODO CIENTÍFICO E POLÍTICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ECOB40",
          nome: "INTRODUÇÃO À ECONOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCH007",
          nome: "INTRODUCAO SOCIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MAT047",
          nome: "COMPLEMENTOS DE MATEMATICA I A",
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
          codigo: "ECO195",
          nome: "HISTORIA DO PENSAMENTO ECONOMICO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ECOB41",
          nome: "CONTABILIDADE SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "FCC019",
          nome: "CONTABILIDADE E ANALISE DE BALANCO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "MATF14",
          nome: "ESTATÍSTICA ECONÔMICA I",
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
          codigo: "ADM001",
          nome: "INTRODUCÃO À ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ECOB42",
          nome: "TEORIA MACROECONÔMICA I - A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ECOB44",
          nome: "TEORIA MICROECONÔMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATF15",
          nome: "ESTATÍSTICA ECONÔMICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
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
          codigo: "ECOB43",
          nome: "TEORIA MACROECONÔMICA II - A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ECOB45",
          nome: "TEORIA MICROECONÔMICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ECOB46",
          nome: "ECONOMIA MARXISTA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "4",
          codigo: "ECOB47",
          nome: "ECONOMETRIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ECOB48",
          nome: "EVOLUÇÃO DO CAPITALISMO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ECOB49",
          nome: "TEORIA MACROECONÔMICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ECOB50",
          nome: "TEORIA MICROECONÔMICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ECOB51",
          nome: "ECONOMIA MARXISTA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ECOB52",
          nome: "ECONOMETRIA II",
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
          codigo: "ECO170",
          nome: "ORGANIZACAO INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ECO175",
          nome: "ECONOMIA DO SETOR PUBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ECOB53",
          nome: "FORMAÇÃO ECONÔMICA DO BRASIL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ECOB54",
          nome: "ENGENHARIA ECONÔMICA DE PROJETOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ECOB55",
          nome: "METODOLOGIA DA PESQUISA EM ECONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ECO173",
          nome: "ECONOMIA BRASILEIRA CONTEMPORANEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "1",
          codigo: "ECO196",
          nome: "DESENVOLVIMENTO SOCIO-ECONOMICO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ECOB56",
          nome: "ECONOMIA MONETÁRIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "3",
          codigo: "ECOB91",
          nome: "ELABORAÇÃO DE TCC I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ECO193",
          nome: "ECONOMIA INTERNACIONAL I-A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "2", numero: "4" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ECOB57",
          nome: "ECONOMIA E MEIO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ECOB94",
          nome: "Elaboração de TCC II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
      ],
    },
  ],
};
