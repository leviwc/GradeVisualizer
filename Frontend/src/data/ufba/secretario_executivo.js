import { GradeState } from "../../components/materia";
export const secretario_executivo = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ADM200",
          nome: "INTRODUCAO A ADMINISTRACAO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADM228",
          nome: "TÉCNICAS SECRETARIAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "FCH001",
          nome: "INTRODUÇÃO À FILOSOFIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICIA04",
          nome: "COMPETÊNCIA INFORMACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "LETB36",
          nome: "LÍNGUA ESPANHOLA EM NÍVEL BÁSICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "LETB42",
          nome: "LINGUA INGLESA EM NIVEL BÁSICO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "LETE17",
          nome: "LÍNGUA PORTUGUESA I",
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
          codigo: "ADM229",
          nome: "TÉCNICAS SECRETARIAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCH004",
          nome: "LOGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ICI114",
          nome: "DOCUMENTACAO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "3",
          codigo: "LETB37",
          nome: "LINGUA ESPANHOLA EM NIVEL INTERMEDIÁRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "1" }],
        },
        {
          id: "4",
          codigo: "LETB43",
          nome: "LINGUA INGLESA EM NIVEL INTERMEDIÁRIO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
        {
          id: "5",
          codigo: "LETE18",
          nome: "LÍNGUA PORTUGUESA II",
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
          codigo: "ADM188",
          nome: "REDAÇÃO EMPRESARIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "6", numero: "1" },
            { id: "5", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "LETB38",
          nome: "LINGUA ESPANHOLA EM NIVEL AVANÇADO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "LETB44",
          nome: "LINGUA INGLESA EM NIVEL AVANÇADO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "3",
          codigo: "LETE19",
          nome: "LÍNGUA PORTUGUESA III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
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
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ADM235",
          nome: "PANORAMA SOCIO - POLITICO NO BRASIL E NO MUNDO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADMC99",
          nome: "INFORMÁTICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ADMD01",
          nome: "GESTÃO ECONÔMICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "LETE21",
          nome: "REDAÇÃO EMPRESARIAL EM LINGUA INGLESA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "LETE22",
          nome: "REDAÇÃO EMPRESARIAL EM LINGUA ESPANHOLA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "5",
          codigo: "MAT022",
          nome: "ESTATÍSTICA I - C",
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
          codigo: "ADM202",
          nome: "COMUNICAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADM244",
          nome: "GESTAO SECRETARIAL I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ADMD02",
          nome: "PLANEJAMENTO EMPRESARIAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMD03",
          nome: "INFORMÁTICA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ICI121",
          nome: "ARQUIVISTICA",
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
          codigo: "ADM173",
          nome: "ADMINISTRACAO MERCADOLOGICA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADM207",
          nome: "GESTAO DE ORGANIZACOES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ADM245",
          nome: "GESTAO SECRETARIAL II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMD04",
          nome: "METODOLOGIA DA PESQUISA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "2" },
            { id: "3", numero: "1" },
          ],
        },
        {
          id: "4",
          codigo: "ADMD05",
          nome: "INFORMÁTICA III - AUTOMAÇÃO DE ESCRITÓRIOS",
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
          codigo: "ADM180",
          nome: "COMERCIO EXTERIOR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ADMD06",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "6" }],
        },
        {
          id: "2",
          codigo: "ADMD07",
          nome: "EMPREENDEDORISMO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ADMD08",
          nome: "SISTEMAS DE INFORMAÇÕES GERENCIAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "DIR159",
          nome: "INSTITUICÃO DE DIREITO PÚBLICO E PRIVADO",
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
          codigo: "ADM240",
          nome: "GESTAO CONTABIL PARA SECRETARIOS",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ADMD09",
          nome: "ESTÁGIO CURRICULAR SUPERVISIONADO",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "0", numero: "2" },
            { id: "3", numero: "5" },
            { id: "4", numero: "5" },
          ],
        },
      ],
    },
  ],
};
