import { GradeState } from "../../components/materia";
export const ciencias_contabeis = {
  semestre: [
    {
      numero: "1",
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
          codigo: "DIR159",
          nome: "INSTITUICÃO DE DIREITO PÚBLICO E PRIVADO",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ECOB40",
          nome: "INTRODUÇÃO À ECONOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCC033",
          nome: "CONTABILIDADE INTRODUTORIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "FCC041",
          nome: "MET.PESQ.APLIC.CONTABILIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MATG10",
          nome: "CÁLCULO ELEMENTAR",
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
          codigo: "DIR161",
          nome: "LEGISLACÃO TRIBUTÁRIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "DIR167",
          nome: "DIREITO COMERCIAL VII",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "2",
          codigo: "FCC034",
          nome: "CONTABILIDADE INTRODUTÓRIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "1" }],
        },
        {
          id: "3",
          codigo: "FCC066",
          nome: "ECONOMIA DAS ORGANIZAÇÕES",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "4",
          codigo: "LETF01",
          nome: "LÍNGUA PORTUGUESA - LEITURA E PRODUÇÃO DE TEXTO PARA FINS ES",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "MAT020",
          nome: "ESTATISTICA I A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "DIR164",
          nome: "LEGISLACÃO SOCIAL E DIREITO DO TRABALHO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCC024",
          nome: "CONTABILIDADE DE CUSTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "2",
          codigo: "FCC035",
          nome: "CONTABILIDADE INTERMEDIARIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
        {
          id: "3",
          codigo: "MAT023",
          nome: "ESTATISTICA II A",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "2" }],
        },
        {
          id: "4",
          codigo: "MAT191",
          nome: "MATEMATICA FINANCEIRA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "1" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ECO173",
          nome: "ECONOMIA BRASILEIRA CONTEMPORANEA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "1",
          codigo: "FCC036",
          nome: "CONTABILIDADE AVANCADA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "2",
          codigo: "FCC044",
          nome: "ORCAMENTO E FIN.GOVERNAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "3",
          codigo: "FCC052",
          nome: "INFORM.APLICADA CONTABILIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "3" }],
        },
        {
          id: "4",
          codigo: "FCC060",
          nome: "MACROECONOMIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
      ],
    },

    {
      numero: "5",
      materias: [
        {
          id: "0",
          codigo: "FCC037",
          nome: "TEORIA DA CONTABILIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "1",
          codigo: "FCC039",
          nome: "ANALISE DE CUSTOS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "2",
          codigo: "FCC040",
          nome: "CONTABILIDADE TRIBUTARIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "2" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "3",
          codigo: "FCC050",
          nome: "CONTABILIDADE GOVERNAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "FCC051",
          nome: "INST.FINAN.MERCADO DE CAPITAIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "4" }],
        },
      ],
    },

    {
      numero: "6",
      materias: [
        {
          id: "0",
          codigo: "FCC009",
          nome: "AUDITORIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "1",
          codigo: "FCC023",
          nome: "ANALISE DAS DEMONST.CONTABEIS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "2",
          codigo: "FCC038",
          nome: "ETICA GERAL E PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "FCC045",
          nome: "ORCAMENTO EMP.PLAN.ESTRATEGICO",
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
          codigo: "FCC010",
          nome: "AUDITORIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "6" }],
        },
        {
          id: "1",
          codigo: "FCC046",
          nome: "SISTEMA INFORMACAO GERENCIAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "6" },
            { id: "3", numero: "4" },
          ],
        },
        {
          id: "2",
          codigo: "FCC049",
          nome: "PERICIA CONTABIL E ARBITRAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "4" }],
        },
        {
          id: "3",
          codigo: "FCC053",
          nome: "AUDITORIA GOVERNAMENTAL",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "3", numero: "5" },
          ],
        },
      ],
    },

    {
      numero: "8",
      materias: [
        {
          id: "0",
          codigo: "FCC047",
          nome: "INTRODUCAO A CONTROLADORIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "7" }],
        },
        {
          id: "1",
          codigo: "FCCF02",
          nome: "ESTÁGIO EM CONTABILIDADE",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "2" }],
        },
      ],
    },
  ],
};
