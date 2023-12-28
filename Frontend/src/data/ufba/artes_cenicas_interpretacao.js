import { GradeState } from "../../components/materia";
export const artes_cenicas_interpretacao = {
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
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "TEA192",
          nome: "Dramaturgia I",
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
          id: "1",
          codigo: "TEA277",
          nome: "ILUMINAÇÃO I",
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
          codigo: "TEAA27",
          nome: "Laboratório de Interpretação Teatral: A Personagem Dramática",
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
          codigo: "TEAA22",
          nome: "Elementos Plásticos da Cena: Figurino e Maquiagem",
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
          id: "1",
          codigo: "TEAA28",
          nome: "Laboratório de Interpretação Teatral: O Ator Narrador",
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
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "TEA276",
          nome: "CENOGRAFIA I",
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
          id: "1",
          codigo: "TEAA29",
          nome: "Laboratório de Interpretação Teatral: Teatro Rito e perform",
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
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "TEA259",
          nome: "Produção Teatral",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "0", numero: "6" },
            { id: "1", numero: "4" },
            { id: "0", numero: "5" },
            { id: "2", numero: "4" },
            { id: "1", numero: "5" },
            { id: "1", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "TEAA30",
          nome: "Atuação em Espetáculo Teatral I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "0", numero: "6" },
            { id: "1", numero: "4" },
            { id: "0", numero: "5" },
            { id: "2", numero: "4" },
            { id: "1", numero: "5" },
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
          codigo: "TEAA45",
          nome: "Atuação em Espetáculo Teatral II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "0", numero: "6" },
            { id: "1", numero: "4" },
            { id: "0", numero: "5" },
            { id: "2", numero: "4" },
            { id: "1", numero: "5" },
            { id: "1", numero: "6" },
          ],
        },
      ],
    },
  ],
};
