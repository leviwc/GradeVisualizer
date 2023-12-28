import { GradeState } from "../../components/materia";
export const arquivologia_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ICI011",
          nome: "FUNDAMENTOS DA INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICIA06",
          nome: "HISTÓRIA DOS ARQUIVOS E DOS DOCUMENTOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICIA07",
          nome: "FORMAÇÃO E ÉTICA DO ARQUIVISTA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICIA08",
          nome: "FUNDAMENTOS DA ARQUIV. BIBLIOTEC. E CIÊNCIA DA INFORMAÇÃO",
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
          codigo: "ICIA05",
          nome: "ELABORAÇÃO E ORGANIZAÇÃO DO TRABALHO CIENTÍFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICIA10",
          nome: "ARQUIVOS CORRENTES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ICIA13",
          nome: "TECNOLOGIAS DA INFORMAÇÃO ARQUIVÍSTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICIA39",
          nome: "ADMINISTRAÇÃO DE UNIDADES DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LET044",
          nome: "LÍNGUA PORTUGUESA COMO INSTRUMENTO DE COMUNICAÇÃO N-100",
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
          codigo: "ICI223",
          nome: "ARQUIVO INTERMEDIÁRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ICIA09",
          nome: "PRESERVAÇÃO DE ACERVOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICIA11",
          nome: "DESCRIÇÃO ARQUIVÍSTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "LET053",
          nome: "INGLES INSTRUMENTAL I N-100",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LET400",
          nome: "PALEOGRAFIA E DIPLOMATICA I",
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
          codigo: "ICIA12",
          nome: "ARQUIVOS PERMANENTES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ICIA14",
          nome: "TIPOLOGIA DOCUMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ICIA15",
          nome: "DISSEMINAÇÃO DA INFORMAÇÃO ARQUIVÍSTICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICIA16",
          nome: "METODOLOGIA DA PESQUISA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ICIA17",
          nome: "ESTÁGIO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "2" },
            { id: "0", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ICI024",
          nome: "POLÍTICAS DE ARQUIVOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICIA41",
          nome: "PLANEJAMENTO DE UNIDADE DE INFORMAÇÃO",
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
          codigo: "ICIB01",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "3", numero: "4" },
            { id: "1", numero: "6" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ICIB02",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
