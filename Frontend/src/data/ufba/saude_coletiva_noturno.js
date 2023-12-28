import { GradeState } from "../../components/materia";
export const saude_coletiva_noturno = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "ISC001",
          nome: "INTRODUÇÃO À SAÚDE COLETIVA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ISCA45",
          nome: "INTRODUÇÃO ÀS CIÊNCIAS HUMANAS E SOCIAIS EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ISCA46",
          nome: "ESTUDO MORFO-FUNCIONAL HUMANO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ISCA47",
          nome: "INFORMÁTICA EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ISCA48",
          nome: "SAÚDE DOENÇA-CUIDADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ISCA49",
          nome: "SEMINÁRIOS INTERDISCIPLINARES EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "ISCE87",
          nome: "PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA I",
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
          codigo: "ISCA44",
          nome: "TEORIAS SOCIAIS EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ISCA96",
          nome: "ESTUDO MORFO-FUNCIONAL HUMANO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ISCA97",
          nome: "ESTATÍSTICA EM SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ISCE88",
          nome: "PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA II",
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
          codigo: "ISCB04",
          nome: "SOCIEDADE CULTURA E SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ISCB08",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ISCB12",
          nome: "EPIDEMIOLOGIA E INFORMAÇÃO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ISCB16",
          nome: "VIGILÂNCIA E PROMOÇÃO DA SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ISCB20",
          nome: "EDUCAÇÃO E COMUNICAÇÃO EM SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ISCE89",
          nome: "PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA III",
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
          codigo: "ISCB05",
          nome: "SOCIEDADE CULTURA E SAÚDE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "3" }],
        },
        {
          id: "1",
          codigo: "ISCB09",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ISCB13",
          nome: "EPIDEMIOLOGIA E INFORMAÇÃO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ISCB17",
          nome: "VIGILÂNCIA E PROMOÇÃO DA SAÚDE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "4",
          codigo: "ISCB21",
          nome: "EDUCAÇÃO E COMUNICAÇÃO EM SAÚDE II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "3" }],
        },
        {
          id: "5",
          codigo: "ISCE90",
          nome: "PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA IV",
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
          codigo: "ISCB06",
          nome: "SOCIEDADE CULTURA E SAÚDE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "1",
          codigo: "ISCB10",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ISCB14",
          nome: "EPIDEMIOLOGIA E INFORMAÇÃO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "3",
          codigo: "ISCB18",
          nome: "VIGILÂNCIA E PROMOÇÃO DA SAÚDE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ISCB31",
          nome: "EDUCAÇÃO E COMUNICAÇÃO EM SAÚDE III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ISCE91",
          nome: "PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA V",
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
          codigo: "ISCB07",
          nome: "SOCIEDADE CULTURA E SAÚDE IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "5" }],
        },
        {
          id: "1",
          codigo: "ISCB11",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "5" }],
        },
        {
          id: "2",
          codigo: "ISCB15",
          nome: "EPIDEMIOLOGIA E INFORMAÇÃO IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "5" }],
        },
        {
          id: "3",
          codigo: "ISCB19",
          nome: "VIGILÂNCIA E PROMOÇÃO DA SAÚDE IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "5" }],
        },
        {
          id: "4",
          codigo: "ISCB32",
          nome: "EDUCAÇÃO E COMUNICAÇÃO EM SAÚDE IV",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "5" }],
        },
        {
          id: "5",
          codigo: "ISCE92",
          nome: "PRÁTICAS INTEGRADAS EM SAÚDE COLETIVA VI",
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
          codigo: "ISCB34",
          nome: "ESTÁGIO I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ISCE93",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO I",
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
          codigo: "ISCB36",
          nome: "ESTÁGIO II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "7" }],
        },
        {
          id: "1",
          codigo: "ISCE94",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO II",
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
          codigo: "ISCE95",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "8" }],
        },
      ],
    },
  ],
};
