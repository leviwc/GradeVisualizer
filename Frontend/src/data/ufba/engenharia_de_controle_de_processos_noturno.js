import { GradeState } from "../../components/materia";
export const engenharia_de_controle_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENGF57",
          nome: "INTRODUÇÃO Á ENGENHARIA DE CONTROLE E AUTOMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA01",
          nome: "GEOMETRIA ANALÍTICA",
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
          codigo: "QUIB50",
          nome: "FUNDAMENTOS DE QUÍMICA",
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
          codigo: "MATA03",
          nome: "CÁLCULO B",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "MATA07",
          nome: "ÁLGEBRA LINEAR A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "MATA38",
          nome: "PROJETO DE CIRCUITOS LÓGICOS",
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
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "1",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "2",
          codigo: "MATA37",
          nome: "INTRODUÇÃO À LÓGICA DE PROGRAMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA48",
          nome: "ARQUITETURA DE COMPUTADORES",
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
          codigo: "ENGD02",
          nome: "ESTATÍSTICA NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "MATA40",
          nome: "ESTRUTURAS DE DADOS E ALGORITMOS I",
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
          codigo: "ENG314",
          nome: "PROCESSOS DE FABRICACAO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGG03",
          nome: "MÉTODOS NUMÉRICOS NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS124",
          nome: "FÍSICA GERAL E EXPERIMENTAL IV-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATC30",
          nome: "LABORATÓRIO DE PROGRAMAÇÃO I",
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
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENG032",
          nome: "INSTRUMENTAÇÃO APLIC. À INDÚSTRIA DO PETRÓLEO E GÁS NATURAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGD06",
          nome: "ENGENHARIA ECONÔMICA E GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENGF91",
          nome: "MECÂNICA DOS SÓLIDOS E MATERIAIS",
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
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGF79",
          nome: "PRINCÍPIOS DOS PROCESSOS CONTÍNUOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGF94",
          nome: "EQUIPAMENTOS E COMPONENTES PARA CONTROLE E AUTOMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENGF99",
          nome: "INSTRUMENTAÇÃO E AUTOMAÇÃO INDUSTRIAL I",
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
          codigo: "ENG229",
          nome: "APLICAÇÕES INDUSTRIAIS DA COMPUTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGF93",
          nome: "ANÁLISE DE PROCESSOS E SISTEMAS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGG01",
          nome: "INSTRUMENTAÇÃO E AUTOMAÇÃO INDUSTRIAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENG009",
          nome: "CONTROLE DE PROCESSOS QUÍMICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGF95",
          nome: "ANÁLISE DE PROCESSOS E SISTEMAS II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGG02",
          nome: "INSTRUMENTAÇÃO E AUTOMAÇÃO INDUSTRIAL III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENG179",
          nome: "PROJETO E PLANEJAMENTO INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGF96",
          nome: "CONTROLE AVANÇADO E MULTIVARIÁVEL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "11",
      materias: [
        {
          id: "0",
          codigo: "ENG037",
          nome: "PLANEJAMENTO E CONTROLE DA PRODUCAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGD07",
          nome: "OPERAÇÃO E SEGURANÇA DE PLANTAS INDUSTRIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ENGF97",
          nome: "CONTROLE E SISTEMAS NÃO LINEARES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },

    {
      numero: "12",
      materias: [
        {
          id: "0",
          codigo: "ENGG05",
          nome: "TCC EM ENGENHARIA DE CONTROLE E AUTOMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGH70",
          nome: "ESTÁGIO EM ENGENHARIA DE CONTROLE E AUTOMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
