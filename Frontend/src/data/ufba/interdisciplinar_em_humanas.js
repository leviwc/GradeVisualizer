import { GradeState } from "../../components/materia";
export const interdisciplinar_em_humanas = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "HACA01",
          nome: "ESTUDOS SOBRE A CONTEMPORANEIDADE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "HACA03",
          nome: "ESTUDOS DAS HUMANIDADES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "LETE43",
          nome: "LÍNGUA PORTUGUESA PODER E DIVERSIDADE CULTURAL",
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
          codigo: "HACA34",
          nome: "ESTUDOS SOBRE A CONTEMPORANEIDADE II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "LETE45",
          nome: "LEITURA E PRODUÇÃO DE TEXTOS EM LÍNGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
