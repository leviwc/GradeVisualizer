import { GradeState } from "../../components/materia";
export const pedagogia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "EDC271",
          nome: "INICIACAO AO TRABALHO ACADEMICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDC272",
          nome: "ORGANIZAÇÃO DA EDUCACAO BRASILEIRA 1",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDC273",
          nome: "ANTROPOLOGIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCA05",
          nome: "HISTÓRIA DA EDUCAÇÃO BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCB57",
          nome: "PSICOLOGIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "EDCB81",
          nome: "SOCIOLOGIA DA EDUCAÇÃO",
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
          codigo: "EDC283",
          nome: "CURRÍCULO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDC284",
          nome: "DIDATICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDC287",
          nome: "EDUCAÇÃO E TECNOLOGIAS CONTEMPORÂNEAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCB80",
          nome: "FILOSOFIA DA EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCB84",
          nome: "LINGUAGEM E EDUCAÇÃO",
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
          codigo: "EDCB93",
          nome: "ESTÁGIO 1",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "FCH187",
          nome: "HISTÓRIA DA CIVILIZAÇÃO BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "GEOB07",
          nome: "GEOGRAFIA NO ENSINO FUNDAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA82",
          nome: "CIÊNCIAS NATURAIS NO ENSINO FUINDAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LETE47",
          nome: "LÍNGUA PORTUGUESA NO ENSINO FUNDAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MATC26",
          nome: "MATEMÁTICA PARA O ENSINO FUNDAMENTAL I",
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
          codigo: "EDC302",
          nome: "METODOLOGIA DO ENSINO DE LINGUA PORTUGUESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "EDC303",
          nome: "METODOLOGIA DO ENSINO DA MATEMÁTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "EDC304",
          nome: "ARTE-EDUCAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDC314",
          nome: "METODOLOGIA DO ENSINO DE CIÊNCIAS NATURAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "4",
          codigo: "EDCB86",
          nome: "METODOLOGIA DO ENSINO DA HISTÓRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "5",
          codigo: "EDCB87",
          nome: "METODOLOGIA DO ENSINO DA GEOGRAFIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "6",
          codigo: "EDCB94",
          nome: "ESTÁGIO 2",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "EDC290",
          nome: "EDUCACAO INFANTIL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDC291",
          nome: "EDUCACAO DE JOVENS E ADULTOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCB85",
          nome: "ALFABETIZAÇÃO E LETRAMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCB89",
          nome: "EDUCAÇÃO DE PESSOAS COM NECESSIDADES EDUCATIVAS ESPECIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "EDCB90",
          nome: "EDUCAÇÃO PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "EDCB95",
          nome: "ESTÁGIO 3",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "6",
          codigo: "LETE48",
          nome: "LIBRAS I- LÍNGUA BRASILEIRA DE SINAIS NIVEL I",
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
          codigo: "EDC286",
          nome: "AVALIAÇÃO DA APRENDIZAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "EDC289",
          nome: "PESQUISA EM EDUCACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCB91",
          nome: "GESTÃO EDUCACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "EDCB96",
          nome: "ESTÁGIO 4",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "4",
          codigo: "EDCB98",
          nome: "PRÁTICAS EDUCATIVAS EM EDUCAÇÃO INFANTIL",
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
          codigo: "EDCB92",
          nome: "PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO - TCC",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
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
          codigo: "EDCB97",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "0", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "EDCK67",
          nome: "EDUCAÇÃO GÊNERO E SEXUALIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "EDCK68",
          nome: "EDUCAÇÃO E RELAÇÕES ÉTNICO-RACIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
