import { GradeState } from "../../components/materia";
export const jornalismo = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "COM101",
          nome: "TEORIAS DA COMUNICAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "COMB79",
          nome: "INTRODUÇÃO ÀS PRÁTICAS JORNALÍSTICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "COMB80",
          nome: "INTRODUÇÃO AO TEXTO JORNALÍSTICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "COMB88",
          nome: "HISTÓRIA DO JORNALISMO",
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
          codigo: "COM121",
          nome: "TEORIAS DO JORNALISMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "COMB52",
          nome: "COMUNICAÇÃO MEIOS E LINGUAGENS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "2",
          codigo: "COMB81",
          nome: "JORNALISMO INTEGRADO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "COM103",
          nome: "ESTÉTICA DA COMUNICAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "COMB82",
          nome: "JORNALISMO INTEGRADO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "COMB89",
          nome: "GESTÃO DE PRÁTICAS E PROCESSOS JORNALÍSTICOS",
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
          codigo: "COM104",
          nome: "COMUNICAÇÃO E TECNOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "COMB83",
          nome: "JORNALISMO INTEGRADO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "COMB90",
          nome: "JORNALISMO ESPECIALIZADO",
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
          codigo: "COM105",
          nome: "COMUNICAÇÃO E POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "COM115",
          nome: "COMUNICAÇÃO E ÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "2",
          codigo: "COMB84",
          nome: "JORNALISMO INTEGRADO IV",
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
          codigo: "COM106",
          nome: "COMUNICAÇÃO E CULTURA CONTEMPORÂNEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "COMB85",
          nome: "JORNALISMO INTEGRADO V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "COMB91",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO EM JORNALISMO I",
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
          codigo: "COMB86",
          nome: "JORNALISMO INTEGRADO VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "1",
          codigo: "COMB87",
          nome: "ESTÁGIO SUPERVISIONADO EM JORNALISMO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "COMB92",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO EM JORNALISMO II",
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
          codigo: "COMB93",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO EM JORNALISMO III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "0", numero: "3" },
            { id: "0", numero: "4" },
            { id: "0", numero: "5" },
            { id: "0", numero: "6" },
            { id: "1", numero: "5" },
            { id: "0", numero: "2" },
            { id: "1", numero: "2" },
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
            { id: "2", numero: "2" },
            { id: "1", numero: "3" },
            { id: "1", numero: "4" },
            { id: "2", numero: "5" },
            { id: "1", numero: "6" },
            { id: "0", numero: "7" },
            { id: "1", numero: "7" },
            { id: "3", numero: "1" },
            { id: "2", numero: "3" },
            { id: "2", numero: "4" },
            { id: "2", numero: "6" },
            { id: "2", numero: "7" },
          ],
        },
      ],
    },
  ],
};
