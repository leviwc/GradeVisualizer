import { GradeState } from "../../components/materia";
export const biblioteconomia_e_documentacao = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICI175",
          nome: "HISTÓRIA DO LIVRO E DAS BIBLIOTECAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICIA05",
          nome: "ELABORAÇÃO E ORGANIZAÇÃO DO TRABALHO CIENTÍFICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICIA08",
          nome: "FUNDAMENTOS DA ARQUIV. BIBLIOTEC. E CIÊNCIA DA INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LET053",
          nome: "INGLES INSTRUMENTAL I N-100",
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
          codigo: "ADM001",
          nome: "INTRODUCÃO À ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH004",
          nome: "LOGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICI011",
          nome: "FUNDAMENTOS DA INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICIB67",
          nome: "TECNOLOGIAS EM SERVIÇOS DE INFORMAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICIB68",
          nome: "NORMALIZAÇÃO DA DOCUMENTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "LET054",
          nome: "INGLES INSTRUMENTAL II N-100",
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
          codigo: "FCH007",
          nome: "INTRODUCAO SOCIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICIA39",
          nome: "ADMINISTRAÇÃO DE UNIDADES DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ICIB69",
          nome: "ORGANIZAÇÃO TEMÁTICA DA INFORMAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ICIB70",
          nome: "FONTES DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICIB71",
          nome: "LEITURA: FUNDAMENTOS E PRÁTICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MAT021",
          nome: "ESTATISTICA I B",
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
          codigo: "ICIA16",
          nome: "METODOLOGIA DA PESQUISA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ICIB72",
          nome: "ORGANIZAÇÃO TEMÁTICA DA INFORMAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ICIB73",
          nome: "REPRESENTAÇÃO DESCRITIVA I - PUBLICAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ICIB74",
          nome: "ORGANIZAÇÃO DOS SERVIÇOS BIBLIOTECÁRIOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ICIB75",
          nome: "BIBLIOTECAS PÚBLICAS E ESCOLARES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "4", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ICIA41",
          nome: "PLANEJAMENTO DE UNIDADE DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ICIB76",
          nome: "ESTUDOS DE USO E DE USUÁRIO DA INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ICIB77",
          nome: "ORGANIZAÇÃO TEMÁTICA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ICIB78",
          nome: "DISSEMINAÇÃO DA INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ICIB79",
          nome: "REPRESENTAÇÃO DESCRITIVA II - MATERIAIS ESPECIAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ICIB80",
          nome: "BIBLIOTECAS UNIVERSITÁRIAS E ESPECIALIZADAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ICI010",
          nome: "FORMACAO E DES.DE COLECOES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "3", numero: "3" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ICIB81",
          nome: "LABORATÓRIOS DE PRÁTICAS INTEGRADAS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "1", numero: "4" },
            { id: "3", numero: "4" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "2",
          codigo: "ICIB82",
          nome: "TECNOLOGIAS EM SERVIÇOS DE INFORMAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ICIA36",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICIB83",
          nome: "LABORATÓRIOS DE PRÁTICAS INTEGRADAS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
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
          codigo: "ICIA37",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "ICIB84",
          nome: "ESTÁGIO SUPERVISIONADO EM BIBLIOTECONOMIA DOCUMENTAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "0", numero: "5" },
            { id: "2", numero: "5" },
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
      ],
    },
  ],
};
