import { GradeState } from "../../components/materia";
export const teatro = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "TEAA14",
          nome: "POÉTICAS DA ENCENAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAA15",
          nome: "JOGOS E IMPROVISAÇÃO TEATRAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "TEAA21",
          nome: "HISTÓRIA DO TEATRO NO BRASIL E NA BAHIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "TEAB23",
          nome: "TEATRO EM COMUNIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "TEAB24",
          nome: "LABORATÓRIO DE PRÁTICAS PEDAGÓGICAS I",
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
          codigo: "TEA278",
          nome: "ARTES VISUAIS I-A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAA16",
          nome: "HISTÓRIA DO TEATRO OCIDENTAL: DA ANTIGUIDADE CLÁSSICA AO ROM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "TEAA20",
          nome: "FORMAS DE ATUAÇÃO CÊNICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "TEAA31",
          nome: "FUNDAMENTOS DE ENSINO DE TEATRO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "TEAB25",
          nome: "LABORATÓRIO DE PRÁTICAS PEDAGÓGICAS II",
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
          codigo: "TEA093",
          nome: "ANÁLISE DE TEXTO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAA17",
          nome: "HISTÓRIA DO TEATRO OCIDENTAL MODERNO E CONTEMPORÂNEO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "TEAA18",
          nome: "PROCESSOS DE ENCENAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "TEAB26",
          nome: "LABORATÓRIO DE PRÁTICAS PEDAGÓGICAS III",
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
          codigo: "LETE48",
          nome: "LIBRAS I- LÍNGUA BRASILEIRA DE SINAIS NIVEL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAA32",
          nome: "METODOLOGIAS PARA O ENSINO DE TEATRO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
            { id: "1", numero: "2" },
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
            { id: "2", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "TEAB27",
          nome: "AVALIAÇÃO EM ARTE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
            { id: "1", numero: "2" },
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
            { id: "2", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "TEAB28",
          nome: "LABORATÓRIO DE PRÁTICAS PEDAGÓGICAS IV",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "TEAB30",
          nome: "PRÁTICAS CÊNICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
            { id: "1", numero: "2" },
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
            { id: "2", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "TEAA47",
          nome: "SISTEMATIZAÇÃO DE PRÁTICAS EM PEDAGOGIA DO TEATRO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAB29",
          nome: "ESTÁGIO SUPERVISIONADO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "TEAB31",
          nome: "TEATRO DE FORMAS ANIMADAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
            { id: "1", numero: "2" },
            { id: "2", numero: "3" },
            { id: "2", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "TEAA46",
          nome: "METODOLOGIA DA PESQUISA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAB32",
          nome: "TEATRO NEGRO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
            { id: "1", numero: "1" },
            { id: "1", numero: "2" },
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
            { id: "2", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "TEAB33",
          nome: "ESTÁGIO SUPERVISIONADO II",
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
          codigo: "EDCB91",
          nome: "GESTÃO EDUCACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "TEAA48",
          nome: "LABORATÓRIO DE ESCRITA MONOGRÁFICA EM PEDAGOGIA E TEATRO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "TEAB34",
          nome: "CRIAÇÃO CÊNICA NO CONTEXTO ESCOLAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "TEAB35",
          nome: "ESTÁGIO SUPERVISIONADO III",
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
          codigo: "TEAA42",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
