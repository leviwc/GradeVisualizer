import { GradeState } from "../../components/materia";
export const comunicacao_producao = {
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
          codigo: "COM111",
          nome: "OFICINA DE COMUNICAÇÃO ESCRITA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "COMB56",
          nome: "TEORIAS DA CULTURA",
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
          codigo: "ADM012",
          nome: "ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
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
          codigo: "COMB60",
          nome: "OFICINA DE ANÁLISE DE PÚBLICOS E PRÁTICAS CULTURAIS",
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
          codigo: "COMB57",
          nome: "POLÍTICAS CULTURAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "COMB61",
          nome: "PRODUÇÃO E CIRCULAÇÃO DE CONTEÚDOS EM MÍDIAS DIGITAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "COMB62",
          nome: "COMUNICAÇÃO VISUAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
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
          codigo: "COMB58",
          nome: "ECONOMIA DA CULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "COMB63",
          nome: "OFICINA DE COMUNICAÇÃO ESTRATÉGICA",
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
          codigo: "COM105",
          nome: "COMUNICAÇÃO E POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "1",
          codigo: "COMB59",
          nome: "ÉTICA E DIREITOS CULTURAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "COMB64",
          nome: "OFICINA DE PLANEJAMENTO E ELABORAÇÃO DE PROJETOS EM CULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
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
          codigo: "COMB53",
          nome: "TCC I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "COMB65",
          nome: "OFICINA DE PRODUÇÃO EM CULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "COMB54",
          nome: "TCC II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "1",
          codigo: "COMB66",
          nome: "OFICINA DE GESTÃO EM CULTURA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "COMB55",
          nome: "TCC III",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
