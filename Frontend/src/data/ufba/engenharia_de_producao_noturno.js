import { GradeState } from "../../components/materia";
export const engenharia_de_producao_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENGF56",
          nome: "INTRODUÇÃO Á ENGENHARIA DE PRODUÇÃO",
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
      ],
    },

    {
      numero: "2",
      materias: [
        {
          id: "0",
          codigo: "ENGD01",
          nome: "MÉTODOS COMPUTACIONAIS NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
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
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
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
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ENGD02",
          nome: "ESTATÍSTICA NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "2", numero: "2" },
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
          codigo: "QUIB50",
          nome: "FUNDAMENTOS DE QUÍMICA",
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
          codigo: "ECO151",
          nome: "ECONOMIA E FINANÇAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "1",
          codigo: "FIS122",
          nome: "FISICA GERAL E EXPERIMENTAL II-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "MATA04",
          nome: "CÁLCULO C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENG207",
          nome: "METROLOGIA INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ENG269",
          nome: "CIÊNCIAS DO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ENGF81",
          nome: "PESQUISA OPERACIONAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "3" },
            { id: "2", numero: "1" },
            { id: "2", numero: "2" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "ENGF90",
          nome: "FUNDAMENTOS DE MECÂNICA DOS SÓLIDOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
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
          codigo: "ENGF77",
          nome: "ADMINISTRAÇAO NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "ENGF78",
          nome: "MECÂNICA DOS FLUÍDOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "2" },
          ],
        },
        {
          id: "2",
          codigo: "ENGF80",
          nome: "SISTEMAS DE PRODUÇÃO DISCRETA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "5" },
          ],
        },
        {
          id: "3",
          codigo: "ENGF82",
          nome: "PESQUISA OPERACIONAL II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "4",
          codigo: "FCC024",
          nome: "CONTABILIDADE DE CUSTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "DIR175",
          nome: "LEGISLAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "ENG308",
          nome: "SISTEMAS DE GARANTIA DA QUALIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "1", numero: "3" },
            { id: "0", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ENGF79",
          nome: "PRINCÍPIOS DOS PROCESSOS CONTÍNUOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "ENGF86",
          nome: "ENGENHARIA ECONÔMICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ENG037",
          nome: "PLANEJAMENTO E CONTROLE DA PRODUCAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "1",
          codigo: "ENG040",
          nome: "GESTÃO EMPREENDEDORA DA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "0", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ENG179",
          nome: "PROJETO E PLANEJAMENTO INDUSTRIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "2", numero: "6" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "3",
          codigo: "ENG430",
          nome: "ENGENHARIA DE PRODUTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "4",
          codigo: "ENGA62",
          nome: "LOGÍSTICA DE TRANSPORTES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENG039",
          nome: "GESTÃO DA QUALIDADE NA ENGENHARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "1", numero: "3" },
            { id: "0", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "ENGF83",
          nome: "SISTEMAS DE APOIO Á DECISÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "8" },
            { id: "1", numero: "3" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ENGF84",
          nome: "MODELAGEM E OTIMIZAÇÃO DE SISTEMAS DE PRODUÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "8" },
            { id: "2", numero: "8" },
            { id: "4", numero: "8" },
            { id: "2", numero: "7" },
            { id: "2", numero: "6" },
            { id: "3", numero: "6" },
          ],
        },
        {
          id: "3",
          codigo: "ENGF85",
          nome: "ENGENHARIA DO TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "8" },
            { id: "4", numero: "8" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENG432",
          nome: "MANUFATURA ASSISTIDA POR COMPUTADOR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "8" },
            { id: "2", numero: "8" },
            { id: "2", numero: "7" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "ENGF88",
          nome: "PLANEJAMENTO DO TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "8" },
            { id: "3", numero: "8" },
            { id: "0", numero: "6" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "2",
          codigo: "FIS123",
          nome: "FÍSICA GERAL E EXPERIMENTAL III-E",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "11",
      materias: [
        {
          id: "0",
          codigo: "ENG003",
          nome: "ELETRICIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "10" }],
        },
        {
          id: "1",
          codigo: "ENGF89",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "10" }],
        },
      ],
    },

    {
      numero: "12",
      materias: [
        {
          id: "0",
          codigo: "ENGF87",
          nome: "ESTÁGIO EM ENGENHARIA DE PRODUÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
