import { GradeState } from "../../components/materia";
export const oceanografia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "GEO202",
          nome: "GEOLOGIA FÍSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "GEOD38",
          nome: "INTRODUÇÃO AOS ESTUDOS OCEANOGRÁFICOS",
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
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "QUI003",
          nome: "QUÍMICA",
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
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "GEOD37",
          nome: "FUNDAMENTOS DE OCEANOGRAFIA BIOLÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "GEOD48",
          nome: "OCEANOGRAFIA GEOLÓGICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "QUIA25",
          nome: "QUÍMICA ORGÂNICA FUNDAMENTAL VI",
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
          codigo: "BIO146",
          nome: "FITOPLANCTON",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "2",
          codigo: "GEOD40",
          nome: "ESTATÍSTICA APLICADA ÀS CIÊNCIAS DA TERRA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "GEOD43",
          nome: "DINÂMICA COSTEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "4",
          codigo: "QUI010",
          nome: "QUIMICA ANALITICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "BIO147",
          nome: "ZOOPLANCTON",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "FISA39",
          nome: "OCEANOGRAFIA FÍSICA DESCRITIVA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "2",
          codigo: "GEOD41",
          nome: "ECOLOGIA MARINHA E COSTEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "GEOD44",
          nome: "ORGANISMOS NECTÔNICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "4",
          codigo: "GEOD51",
          nome: "SEDIMENTOLOGIA DO AMBIENTE MARINHO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "BIO166",
          nome: "FISIOLOGIA DOS ANIMAIS MARINHOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "BIO167",
          nome: "BENTOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "2", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "FISD26",
          nome: "ANÁLISE E MODELAGEM DE PROCESSOS OCEANOGRÁFICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "GEOD45",
          nome: "FUNDAMENTOS DE ESTRATIGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "4",
          codigo: "QUIC53",
          nome: "OCEANOGRAFIA QUÍMICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "4", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FIS149",
          nome: "INTRODUÇÃO À OCEANOGRAFIA DINÂMICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "GEOD42",
          nome: "MÉTODOS DE CAMPO EM OCEANOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "1", numero: "4" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "GEOD49",
          nome: "GEOMÁTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "QUIC54",
          nome: "OCEANOGRAFIA QUÍMICA II",
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
          codigo: "BIO170",
          nome: "GERENCIAMENTO DE AMBIENTES COSTEIROS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "1",
          codigo: "FIS150",
          nome: "DINÂMICA DOS OCEANOS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "2",
          codigo: "GEO227",
          nome: "PROC. E SEDIMENTACAO.E PROBL AMBIENTAIS EM ZONAS COSTEIRAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "GEOD39",
          nome: "CONTAMINAÇÃO MARINHA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "4",
          codigo: "GEOD50",
          nome: "GEOMÁTICA II",
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
          codigo: "FIS152",
          nome: "METEOROLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "GEOD52",
          nome: "GEOQUÍMICA DOS OCEANOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "GEOD46",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
            { id: "2", numero: "7" },
            { id: "3", numero: "7" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "GEOD47",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "9" }],
        },
      ],
    },
  ],
};
