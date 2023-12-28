import { GradeState } from "../../components/materia";
export const administracao_publica_e_gestao = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ADMK42",
          nome: "ELEMENTOS DE CIÊNCIAS SOCIAIS APLICADAS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADMK43",
          nome: "FUNDAMENTOS DA ADMINISTRAÇÃO PÚBLICA E GESTÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ADMK44",
          nome: "HISTÓRIA DO PENSAMENTO DOS ESTUDOS ORGANIZACIONAIS E GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMK45",
          nome: "ÉTICA SOCIEDADE E UNIVERSIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "MAT019",
          nome: "ELEMENTOS DE MATEMÁTICA",
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
          codigo: "ADMK46",
          nome: "TEORIA DO CONHECIMENTO E INICIAÇÃO CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADMK47",
          nome: "ESTADO ECONOMIA E SOCIEDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ADMK48",
          nome: "TEORIAS DA ADMINISTRAÇÃO PÚBLICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "3",
          codigo: "ADMK49",
          nome: "DIVERSIDADES E DESIGUALDADES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "4",
          codigo: "ECOB42",
          nome: "TEORIA MACROECONÔMICA I - A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "ADMK50",
          nome: "DEMOCRACIA SISTEMAS DE CONTROLE E PARTICIPAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ADMK51",
          nome: "ABORDAGENS CONTEMPORÂNEAS DE ORGANIZAÇÃO E GESTÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "DIRA84",
          nome: "DIREITO CONSTITUCIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MATF59",
          nome: "ESTATÍSTICA BÁSICA PARA HUMANIDADES",
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
          codigo: "ADMK52",
          nome: "MÉTODOS QUALITATIVOS APLICADOS À GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ADMK53",
          nome: "ABORDAGENS CONTEMPORÂNEAS DE ORGANIZAÇÃO E GESTÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ADMK54",
          nome: "GESTÃO DA INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ADMK86",
          nome: "SOCIEDADE ORGANIZAÇÕES MOVIMENTOS E PARTICIPAÇÃO SOCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "4",
          codigo: "DIR031",
          nome: "DIREITO ADMINISTRATIVO I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MAT191",
          nome: "MATEMATICA FINANCEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "ADMK55",
          nome: "MÉTODOS QUANTITATIVOS APLICADOS À GESTÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ADMK56",
          nome: "DESENVOLVIMENTO TERRITORIAL E PODERES LOCAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ADMK57",
          nome: "GESTÃO TRIBUTÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ADMK58",
          nome: "COMUNICAÇÃO NAS ORGANIZAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ADMK59",
          nome: "GESTÃO DE TECNOLOGIAS DA INFORMAÇÃO E DA COMUNICAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ADMK60",
          nome: "COMPORTAMENTO HUMANO NO TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "ADMK61",
          nome: "TEORIA E ANÁLISE DE POLÍTICAS PÚBLICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "1",
          codigo: "ADMK62",
          nome: "FINANÇAS PÚBLICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ADMK63",
          nome: "GESTÃO DE SERVIÇOS PÚBLICOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMK64",
          nome: "ADMINISTRAÇÃO DE SISTEMA DE INFORMAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ADMK65",
          nome: "ESTÁGIO CURRICULAR OBRIGATÓRIO",
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
          codigo: "ADMK66",
          nome: "PROBLEMÁTICA AMBIENTAL POLÍTICA E GESTÃO DO MEIO AMBIENTE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "ADMK67",
          nome: "PLANEJAMENTO E ORÇAMENTO PÚBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "6" }],
        },
        {
          id: "2",
          codigo: "ADMK68",
          nome: "GESTÃO E IMPLEMENTAÇÃO DE POLÍTICAS PÚBLICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "6" }],
        },
        {
          id: "3",
          codigo: "ADMK69",
          nome: "GESTÃO DE PESSOAS NO SETOR PÚBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "5" }],
        },
        {
          id: "4",
          codigo: "ADMK70",
          nome: "LABORATÓRIO DE PROGRAMAS E PROJETOS SOCIAIS",
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
          codigo: "ADMK71",
          nome: "ELABORAÇÃO DE PROJETO DE TCC",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "4" },
            { id: "0", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ADMK72",
          nome: "ADMINISTRAÇÃO POLÍTICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "2",
          codigo: "ADMK73",
          nome: "LOGÍSTICA SUPRIMENTOS E PATRIMÔNIO NO SETOR PÚBLICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMK74",
          nome: "LABORATÓRIO DE AVALIAÇÃO DE POLÍTICAS PÚBLICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "7" }],
        },
        {
          id: "4",
          codigo: "FCC050",
          nome: "CONTABILIDADE GOVERNAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ADMK75",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO (TCC)",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "8" }],
        },
        {
          id: "1",
          codigo: "ADMK76",
          nome: "SUSTENTABILIDADE E RESPONSABILIDADE SOCIOAMBIENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "2",
          codigo: "ADMK77",
          nome: "CONTEXTO SOCIAL POLÍTICO E ECONÔMICO MUNDIAL E BRASILEIRO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "3",
          codigo: "ADMK78",
          nome: "NEGOCIAÇÃO E MEDIAÇÃO DE CONFLITOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
      ],
    },
  ],
};
