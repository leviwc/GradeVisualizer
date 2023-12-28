import { GradeState } from "../../components/materia";
export const gastronomia = {
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
          codigo: "LETF01",
          nome: "LÍNGUA PORTUGUESA - LEITURA E PRODUÇÃO DE TEXTO PARA FINS ES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "NUTA20",
          nome: "ALIMENTAÇÃO NUTRIÇÃO SAÚDE E SEGURANÇA ALIMENTAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "NUTA21",
          nome: "A GASTRONOMIA E O GASTRÔNOMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "NUTA22",
          nome: "GASTRONOMIA BÁSICA",
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
          codigo: "HACA48",
          nome: "ARTE E ESTÉTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "LETA37",
          nome: "LEITURA DE TEXTOS EM LINGUA FRANCESA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "NUTA23",
          nome: "HISTÓRIA DA GASTRONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "NUTA24",
          nome: "HIGIENE E VIGILÂNCIA SANITÁRIA EM UNIDADES GASTRONÔMICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "NUTA25",
          nome: "FRUTAS E HORTALIÇAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "5",
          codigo: "NUTA26",
          nome: "ATELIÊ GASTRONÔMICO I",
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
          codigo: "LETD49",
          nome: "LEITURA DE TEXTOS ACADÊMICOS EM LINGUA FRANCESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "NUTA27",
          nome: "CULTURA ALIMENTAR BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "NUTA28",
          nome: "CARNE BOVINA SUÍNA E AVES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "3",
          codigo: "NUTA29",
          nome: "CEREAIS RAÍZES TUBÉRCULOS E BULBOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "NUTA30",
          nome: "ATELIÊ GASTRONÔMICO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "5", numero: "2" },
          ],
        },
        {
          id: "5",
          codigo: "NUTA68",
          nome: "ÉTICA E GASTRONOMIA",
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
          codigo: "LETD50",
          nome: "LEITURA DE TEXTOS LITERÁRIOS EM LINGUA FRANCESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "NUTA31",
          nome: "SOCIOLOGIA E ANTROPOLOGIA DA ALIMENTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "NUTA32",
          nome: "PESCADOS FRUTOS DO MAR E CARNES EXÓTICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "NUTA34",
          nome: "GESTÃO DE UNIDADES GASTRONÔMICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "NUTA35",
          nome: "GASTRONOMIA BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "NUTA36",
          nome: "ATELIÊ GASTRONÔMICO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "NUTA38",
          nome: "OVOS LEITE E DERIVADOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "NUTA39",
          nome: "BEBIDAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "2",
          codigo: "NUTA40",
          nome: "GASTRONOMIA BAIANA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "NUTA41",
          nome: "ATELIÊ GASTRONÔMICO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "NUTA42",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I - A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "NUTA44",
          nome: "PANIFICAÇÃO E CONFEITARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "2",
          codigo: "NUTA45",
          nome: "EVENTOS GASTRONÔMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "3",
          codigo: "NUTA46",
          nome: "ATELIÊ GASTRONÔMICO V",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "NUTA48",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II - A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "NUTA49",
          nome: "GASTRONOMIA HOSPITALAR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "2",
          codigo: "NUTA50",
          nome: "ATELIÊ GASTRONÔMICO VI",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "3",
          codigo: "NUTA53",
          nome: "SEMINÁRIO INTEGRADOR - A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "NUTA37",
          nome: "ESTÁGIO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "1" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "NUTA43",
          nome: "ESTÁGIO II - BEBIDAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "NUTA47",
          nome: "ESTÁGIO III - PANIFICAÇÃO E CONFEITARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "6" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "3",
          codigo: "NUTA51",
          nome: "ESTÁGIO IV - GASTRONOMIA BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "4" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "4",
          codigo: "NUTA52",
          nome: "ESTÁGIO V - GASTRONOMIA INTERNACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
      ],
    },
  ],
};
