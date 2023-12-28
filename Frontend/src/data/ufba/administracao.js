import { GradeState } from "../../components/materia";
export const administracao = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ADM202",
          nome: "COMUNICAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADMF52",
          nome: "HABILIDADES E COMPETÊNCIAS DO ADMINISTRADOR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ADMF54",
          nome: "ESTUDOS ORGANIZACIONAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMF56",
          nome: "INICIAÇÃO CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "DIR159",
          nome: "INSTITUICÃO DE DIREITO PÚBLICO E PRIVADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MAT013",
          nome: "MATEMATICA I",
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
          codigo: "ADM170",
          nome: "ADMINISTRACAO CONTABIL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADM203",
          nome: "INFORMÁTICA APLICADA À ADMINISTRAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "6", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ADM218",
          nome: "ABORDAGEM SÓCIO POLÍTICA DAS ORGANIZAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "1" },
            { id: "3", numero: "1" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "3",
          codigo: "DIR161",
          nome: "LEGISLACÃO TRIBUTÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ECO155",
          nome: "INTRODUÇÃO ÀS TEORIAS ECONOMICAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MAT020",
          nome: "ESTATISTICA I A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ADM223",
          nome: "ESTUDOS ANTROPOLÓGICOS DAS ORGANIZAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ADM226",
          nome: "GESTAO DE CUSTOS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "6", numero: "1" },
          ],
        },
        {
          id: "2",
          codigo: "ADMF53",
          nome: "SEMINÁRIOS DE PRÁTICAS DE GESTÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMF59",
          nome: "SISTEMAS DE INFORM GERENCIAIS PARA TOMADA DE DECISÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "4",
          codigo: "DIR164",
          nome: "LEGISLACÃO SOCIAL E DIREITO DO TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "5",
          codigo: "ECO142",
          nome: "ECONOMIA BRASILEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "6",
          codigo: "MAT191",
          nome: "MATEMATICA FINANCEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ADM150",
          nome: "ESTADO E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "1" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ADM172",
          nome: "ADMINISTRACAO FINANCEIRA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "6", numero: "3" },
          ],
        },
        {
          id: "2",
          codigo: "ADM173",
          nome: "ADMINISTRACAO MERCADOLOGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "3" },
            { id: "5", numero: "2" },
          ],
        },
        {
          id: "3",
          codigo: "ADMF55",
          nome: "ESTUDOS ORGANIZACIONAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "IPSA01",
          nome: "PSICOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MAT023",
          nome: "ESTATISTICA II A",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "2" },
            { id: "6", numero: "3" },
          ],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ADM149",
          nome: "ESTRATEGIA ECONOMICA DAS EMPRESAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ADM174",
          nome: "ADMINISTRACAO DA PRODUCAO I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "3" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "ADM177",
          nome: "ADMINISTRACAO FINANCEIRA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ADM211",
          nome: "MÉTODOS QUANTITATIVOS APLICADOS À ADMINISTRAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ADMB81",
          nome: "ÉTICA EMPRESARIAL RESPONSABILIDADE SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "5",
          codigo: "ADMF72",
          nome: "SEMINÁRIOS DE PRÁTICAS DE GESTÃO II",
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
          codigo: "ADM221",
          nome: "ESTÁGIO CURRICULAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "1", numero: "5" },
            { id: "2", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ADMF50",
          nome: "POLÍTICAS PÚBLICAS E GESTÃO GOVERNAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ADMF58",
          nome: "PLANEJAMENTO E CONTROLE DE OPERAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ADM154",
          nome: "ELABORAÇÃO E ANÁLISE DE PROGRAMAS E PROJETOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "3", numero: "3" },
            { id: "5", numero: "3" },
          ],
        },
        {
          id: "1",
          codigo: "ADM179",
          nome: "ADMINISTRACAO MERCADOLOGICA II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "4" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "ADM204",
          nome: "PESQUISA APLICADA À ADMINISTRAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "3" },
            { id: "5", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "ADM222",
          nome: "GESTAO DE PESSOAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "1" },
            { id: "3", numero: "4" },
            { id: "3", numero: "1" },
            { id: "4", numero: "3" },
            { id: "4", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ADM227",
          nome: "ORCAMENTO E FINANCAS PUBLICAS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "1", numero: "6" },
          ],
        },
        {
          id: "5",
          codigo: "ADMB80",
          nome: "ADMINISTRAÇÃO POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "3", numero: "4" },
            { id: "5", numero: "1" },
          ],
        },
        {
          id: "6",
          codigo: "ADMF73",
          nome: "SEMINÁRIOS DE PRÁTICAS DE GESTÃO III",
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
          codigo: "ADM175",
          nome: "ADMINISTRAÇÃO ESTRATÉGICA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "4" },
            { id: "2", numero: "4" },
            { id: "1", numero: "5" },
            { id: "5", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ADM181",
          nome: "ADMINISTRACAO DA PRODUCAO II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "2",
          codigo: "ADMF60",
          nome: "GESTÃO DE PESSOAS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ADM224",
          nome: "TCC - TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
      ],
    },
  ],
};
