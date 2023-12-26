import { GradeState } from "../../components/materia";

export const newEngProdData = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ENGF56",
          nome: "Introdução a Engenharia de Produção",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "MATA01",
          nome: "Geometria Análitica",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "MATA02",
          nome: "Cálculo A",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "QUIB50",
          nome: "Fundamentos de Química",
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
          codigo: "ENGF77",
          nome: "Administração na Engenharia",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ECO151",
          nome: "Economia e Finanças",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS121",
          nome: "Física Geral e Experimental I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "MATA03",
          nome: "Cálculo B",
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
          codigo: "ENG207",
          nome: "Metrologia Industrial",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "1",
          codigo: "DIR175",
          nome: "Legislação Social",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FIS122",
          nome: "Física Geral e Experimental II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "1", numero: "1" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "MATA04",
          nome: "Cálculo C",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ENGF80",
          nome: "Sistemas de Produção Discreta",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ENGD01",
          nome: "Métodos Computacionais na Engenharia",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "FIS123",
          nome: "Física Geral e Experimental III",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "MATA07",
          nome: "Álgebra Linear A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ENGF81",
          nome: "Pesquisa Operacional I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "1", numero: "4" },
            { id: "3", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ENG003",
          nome: "Eletricidade",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ENG269",
          nome: "Ciências do Ambiente",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ENG041",
          nome: "Materiais de Construção Mecânica",
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
          codigo: "ENGF82",
          nome: "Pesquisa Operacional II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "ENGD02",
          nome: "Estatística na Engenharia",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "ENGF90",
          nome: "Fundamentos de Mecânica dos Sólidos",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "2", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "ENGF78",
          nome: "Mecânica dos Fluídos",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "3" },
            { id: "3", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ENG308",
          nome: "Sistemas de Garantia da Qualidade",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "6" },
          ],
        },
        {
          id: "1",
          codigo: "ENG432",
          nome: "Manufatura Auxiliada por Computador",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "5" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "FCC024",
          nome: "Contabilidade de Custos",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ENGF79",
          nome: "Princípios de Processos Contínuos",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "ENG039",
          nome: "Gestão da Qualidade na Engenharia",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "0", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ENGA62",
          nome: "Logística de Transportes",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "2",
          codigo: "ENGF86",
          nome: "Engenharia Econômica",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "2", numero: "7" },
          ],
        },
        {
          id: "3",
          codigo: "ENG037",
          nome: "Planejamento e Controle da Produção",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ENGF83",
          nome: "Sistemas de Apoio a Decisão",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "ENGF88",
          nome: "Projeto e Planejamento industrial",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "3", numero: "8" },
            { id: "2", numero: "8" },
          ],
        },
        {
          id: "2",
          codigo: "ENGF84",
          nome: "Modelagem e Otimização de Sistemas Produtivos",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "1", numero: "6" },
            { id: "3", numero: "8" },
          ],
        },
        {
          id: "3",
          codigo: "ENGF85",
          nome: "Engenharia do Trabalho",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "0", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ENGF88",
          nome: "Planejamento de TCC ENG179",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "9" },
            { id: "2", numero: "9" },
          ],
        },
        {
          id: "1",
          codigo: "ENG430",
          nome: "Engenharia do Produto",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "8" },
            { id: "0", numero: "1" },
          ],
        },
      ],
    },

    {
      numero: "11",
      materias: [
        {
          id: "0",
          codigo: "ENGF89",
          nome: "Trabalho de Conclusão de Curso",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "10" }],
        },
        {
          id: "1",
          codigo: "ENG040",
          nome: "Gestão Empreendedora na Engenharia",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "8" },
            { id: "0", numero: "2" },
          ],
        },
      ],
    },

    {
      numero: "12",
      materias: [
        {
          id: "0",
          codigo: "ENGF87",
          nome: "Estágio em Engenharia de Produção",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
