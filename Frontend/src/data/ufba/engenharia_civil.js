import { GradeState } from "../../components/materia";
export const engenharia_civil = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ARQ013",
          nome: "DESCRITIVA I A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG446",
          nome: "INTRODUÇÃO À ENGENHARIA CIVIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "GEOA01",
          nome: "FUNDAMENTOS DE GEOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
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
          codigo: "ARQ134",
          nome: "DESENHO TECNICO II-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ENG447",
          nome: "METODOLOGIA CIENTIFICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
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
          codigo: "ENGA50",
          nome: "TOPOGRAFIA - A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ENGN89",
          nome: "Isostática A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "4",
          codigo: "QUI029",
          nome: "QUIMICA GERAL",
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
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ENGA51",
          nome: "MATERIAIS DE CONSTRUÇÃO I - A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ENGN90",
          nome: "Mecânica dos Materiais I-A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "4",
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
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
          codigo: "ENG301",
          nome: "RESISTENCIA DOS MATERIAIS II A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG304",
          nome: "PROJETO DE ESTRADAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ENGA52",
          nome: "GEOPROCESSAMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ENGA53",
          nome: "MATERIAIS DE CONSTRUÇÃO II - A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ENGA54",
          nome: "MECÂNICA DOS SOLOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "4" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "5",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
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
          codigo: "DIR175",
          nome: "LEGISLAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG114",
          nome: "HIPERESTATICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE Condições especiais de pré-requisito.",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENG298",
          nome: "ESTÁTICA DAS CONSTRUÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "4",
          codigo: "ENG305",
          nome: "CONSTRUÇÃO DE ESTRADAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "5",
          codigo: "ENGA55",
          nome: "MECÂNICA DOS SOLOS II",
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
          codigo: "ENG118",
          nome: "ESTRUTURAS DE CONCRETO ARMADO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "6" },
            { id: "3", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ENG136",
          nome: "HIDRAULICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ENG296",
          nome: "CONSTRUCAO CIVIL I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "3",
          codigo: "ENG299",
          nome: "CONSTRUÇÕES DE AÇO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "4",
          codigo: "ENG300",
          nome: "CONSTRUÇÕES DE MADEIRAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "5",
          codigo: "ENGA56",
          nome: "FUNDAÇÕES - A",
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
          codigo: "ENG119",
          nome: "ESTRUTURAS DE CONCRETO ARMADO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "ENG273",
          nome: "INSTALAÇÕES HIDRÁULICAS SANITÁRIAS E PREDIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "7" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "ENG297",
          nome: "CONSTRUCAO CIVIL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "3",
          codigo: "ENG303",
          nome: "SANEAMENTO BÁSICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "4",
          codigo: "ENG371",
          nome: "HIDROLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "5",
          codigo: "ENGA57",
          nome: "ADMINISTRAÇÃO APLICADA À ENGENHARIA CIVIL",
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
          codigo: "ENGA58",
          nome: "ECONOMIA APLICADA À ENGENHARIA CIVIL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "8" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "ENGA60",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "0", numero: "4" },
            { id: "1", numero: "6" },
            { id: "1", numero: "7" },
            { id: "2", numero: "6" },
            { id: "2", numero: "7" },
            { id: "4", numero: "7" },
            { id: "4", numero: "6" },
            { id: "1", numero: "2" },
            { id: "2", numero: "5" },
            { id: "3", numero: "5" },
            { id: "5", numero: "7" },
            { id: "5", numero: "5" },
            { id: "4", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENG302",
          nome: "ESTÁGIO EM ENGENHARIA CIVIL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "7" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ENGH54",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "9" }],
        },
      ],
    },
  ],
};
