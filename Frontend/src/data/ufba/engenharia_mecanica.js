import { GradeState } from "../../components/materia";
export const engenharia_mecanica = {
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
          codigo: "ENG033",
          nome: "INTRODUÇÃO À ENGENHARIA MECANICA",
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
          codigo: "FIS121",
          nome: "FISICA GERAL E EXPERIMENTAL I-E",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
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
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ENG041",
          nome: "MATERIAIS DE CONSTRUCAO MECANICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "4", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "ENG207",
          nome: "METROLOGIA INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "MAT045",
          nome: "PROCESSAMENTO DE DADOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENG001",
          nome: "MECANICA GERAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ENG042",
          nome: "MATERIAIS DE CONSTRUCAO MECANICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ENG314",
          nome: "PROCESSOS DE FABRICACAO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ENG370",
          nome: "FENÔMENOS DE TRANSPORTES I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
        {
          id: "4",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "MAT174",
          nome: "CÁLCULO NUMÉRICO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "4", numero: "3" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENG002",
          nome: "MECANICA GERAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG285",
          nome: "RESISTENCIA DOS MATERIAIS I A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ENG315",
          nome: "PROCESSOS DE FABRICACAO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "4",
          codigo: "MAT236",
          nome: "MÉTODOS ESTATÍSTICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ENG110",
          nome: "RESISTENCIA DOS MATERIAIS III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ENG309",
          nome: "FENOMENOS DE TRANSPORTE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ENG323",
          nome: "TERMODINÂMICA APLICADA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "5" },
            { id: "2", numero: "3" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ENG441",
          nome: "FADIGA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "1", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ECOB40",
          nome: "INTRODUÇÃO À ECONOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "1",
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENG324",
          nome: "TERMODINÂMICA APLICADA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ENG443",
          nome: "CONTROLE DE VIBRAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "4",
          codigo: "ENG444",
          nome: "ELEMENTOS DE MÁQUINAS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
        {
          id: "5",
          codigo: "ENG445",
          nome: "ELEMENTOS DE MÁQUINAS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "4", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ADM012",
          nome: "ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "DIR175",
          nome: "LEGISLAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENG312",
          nome: "PROJETOS MECANICOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "2", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ENG318",
          nome: "SISTEMAS FLUIDOMECANICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "6" },
            { id: "3", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ENG319",
          nome: "SISTEMAS TERMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "6" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "5",
          codigo: "ENG320",
          nome: "TRANSPORTE MECANICO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "7" },
            { id: "4", numero: "7" },
            { id: "5", numero: "7" },
          ],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENG220",
          nome: "MAQUINAS OPERATRIZES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "4", numero: "7" },
            { id: "5", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ENG442",
          nome: "MECANISMOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "5" },
            { id: "3", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENG034",
          nome: "TRABALHO DE CONCLUSAO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG374",
          nome: "ESTÁGIO SUPERVISIONADO CURRICULAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "8" },
            { id: "4", numero: "6" },
            { id: "1", numero: "9" },
          ],
        },
      ],
    },
  ],
};
