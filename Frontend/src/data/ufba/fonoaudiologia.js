import { GradeState } from "../../components/materia";
export const fonoaudiologia = {
  semestre: [
    {
      numero: "1",
      materias: [
        {
          id: "0",
          codigo: "BIO165",
          nome: "GENÉTICA HUMANA APLICADA À FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "FCH006",
          nome: "INTRODUÇÃO SOCIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICS007",
          nome: "ANATOMIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICS073",
          nome: "FUNDAMENTOS DE FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSB01",
          nome: "AUDIÇÃO E SAÚDE",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ICSB55",
          nome: "SEMINÁRIO INTERDISCIPLINAR EM FONOAUDIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "IPSA01",
          nome: "PSICOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "7",
          codigo: "ISC001",
          nome: "INTRODUÇÃO À SAÚDE COLETIVA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "8",
          codigo: "LET001",
          nome: "LÌNGUA PORTUGUESA I N-100",
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
          codigo: "ICS076",
          nome: "BIOFISICA V - APLICADA A FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSA95",
          nome: "ANATOMIA APLICADA À FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "1" }],
        },
        {
          id: "2",
          codigo: "ICSA96",
          nome: "HISTOLOGIA E EMBRIOLOGIA APLICADA À FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSA99",
          nome: "FISIOLOGIA HUMANA BÁSICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSB02",
          nome: "PROCESSOS DE AQUISIÇÃO E DESENV. DA COMUNICAÇÃO HUMANA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "IPSA77",
          nome: "PSICOLOGIA DO DESENVOLVIMENTO HUMANO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "1" }],
        },
        {
          id: "6",
          codigo: "ISCB04",
          nome: "SOCIEDADE CULTURA E SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "7",
          codigo: "LET399",
          nome: "FONETICA E FONOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "8", numero: "1" }],
        },
      ],
    },

    {
      numero: "3",
      materias: [
        {
          id: "0",
          codigo: "FOF025",
          nome: "ORTODONTIA APLICADA À FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ICSB03",
          nome: "FISIOLOGIA APLICADA À FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ICSB08",
          nome: "SAÚDE VOCAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSB09",
          nome: "METODOLOGIA CIENTÍFICA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "4",
          codigo: "ICSB10",
          nome: "LINGUAGEM E ALTERAÇÕES DA COMUNICAÇÃO ORAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "5",
          codigo: "ICSB18",
          nome: "AUDIOLOGIA CLÍNICA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "2" }],
        },
        {
          id: "6",
          codigo: "ISCA82",
          nome: "EPIDEMIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "7",
          codigo: "LET396",
          nome: "LINGUA PORTUGUESA XX-A N-100",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "7", numero: "2" }],
        },
      ],
    },

    {
      numero: "4",
      materias: [
        {
          id: "0",
          codigo: "ICSB11",
          nome: "LINGUAGEM E TRANSTORNOS DE FALA NA INFÂNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "7", numero: "2" },
          ],
        },
        {
          id: "1",
          codigo: "ICSB19",
          nome: "AUDIOLOGIA INFANTIL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "2",
          codigo: "ICSB25",
          nome: "DISFONIAS FUNCIONAIS E ORGANOFUNCIONAIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "2" },
            { id: "1", numero: "3" },
            { id: "2", numero: "3" },
          ],
        },
        {
          id: "3",
          codigo: "ICSB30",
          nome: "MOTRICIDADE OROFACIAL NOS DISTÚRBIOS MIOFUNCIONAIS ORAIS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "4",
          codigo: "ICSB56",
          nome: "SEMINÁRIO INTERDISICPLINAR EM FONOAUDIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "5",
          codigo: "ISCB08",
          nome: "POLÍTICA PLANEJAMENTO E GESTÃO EM SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "MED238",
          nome: "PATOLOGIA DOS ÓRGÃOS DA AUDIÇÃO E FONAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "1", numero: "3" }],
        },
        {
          id: "7",
          codigo: "MED240",
          nome: "NEUROLOGIA APLICADA À FONOAUDIOLOGIA",
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
          codigo: "ICS105",
          nome: "FARMACOLOGIA APLICADA À FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "2" }],
        },
        {
          id: "1",
          codigo: "ICSB12",
          nome: "LINGUAGEM ESCRITA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "4" }],
        },
        {
          id: "2",
          codigo: "ICSB20",
          nome: "AVALIAÇÃO OBJETIVA DA AUDIÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ICSB26",
          nome: "DISFONIAS ORGÂNICAS",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ICSB31",
          nome: "MOTRICIDADE OROFACIAL NOS DISTURBIOS MIOFUNCIONAIS ORAIS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "3" },
            { id: "1", numero: "3" },
          ],
        },
        {
          id: "5",
          codigo: "ISCB20",
          nome: "EDUCAÇÃO E COMUNICAÇÃO EM SAÚDE I",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "6",
          codigo: "LETE48",
          nome: "LIBRAS I- LÍNGUA BRASILEIRA DE SINAIS NIVEL I",
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
          codigo: "ICS085",
          nome: "SURDEZ E LINGUAGEM",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "2" },
            { id: "1", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ICS087",
          nome: "FONOAUDIOLOGIA EDUCACIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSB16",
          nome: "FLUÊNCIA",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "3",
          codigo: "ICSB21",
          nome: "PROCESSAMENTO AUDITIVO E TECNOLOGIA DE REABILITAÇÃO AUDITIVA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "3" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "4",
          codigo: "ICSB27",
          nome: "FONONCOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "5",
          codigo: "ICSB32",
          nome: "MOTRICIDADE OROFACIAL NAS REUROPATIAS INFANTIS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "7", numero: "4" },
          ],
        },
        {
          id: "6",
          codigo: "ICSB35",
          nome: "SAÚDE COLETIVA E FONOAUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "7", numero: "1" },
            { id: "5", numero: "4" },
          ],
        },
      ],
    },

    {
      numero: "7",
      materias: [
        {
          id: "0",
          codigo: "ICS098",
          nome: "ETICA PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "1",
          codigo: "ICSB15",
          nome: "LINGUAGEM E ENVELHECIMENTO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "4", numero: "2" }],
        },
        {
          id: "2",
          codigo: "ICSB22",
          nome: "AVALIAÇÃO E REABILITAÇÃO VESTIBULAR",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "3" }],
        },
        {
          id: "3",
          codigo: "ICSB28",
          nome: "VOZ PROFISSIONAL",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "2", numero: "4" }],
        },
        {
          id: "4",
          codigo: "ICSB34",
          nome: "MOTRICIDADE OROFACIAL NAS NEUROPATIAS EM ADULTOS",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "1", numero: "3" },
            { id: "7", numero: "4" },
          ],
        },
        {
          id: "5",
          codigo: "ICSB38",
          nome: "ESTÁGIO EM SAÚDE COLETIVA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "6" }],
        },
        {
          id: "6",
          codigo: "ICSB50",
          nome: "PROJETO DE PESQUISA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "3" }],
        },
        {
          id: "7",
          codigo: "ICSB58",
          nome: "SEMINÁRIO INTERDISCIPLINAR EM FONOAUDIOLOGIA IV",
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
          codigo: "ICSB24",
          nome: "CLÍNICA EM AUDIOLOGIA",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "3" },
            { id: "1", numero: "4" },
          ],
        },
        {
          id: "1",
          codigo: "ICSB33",
          nome: "FONOAUDIOLOGIA EM AMBIENTE HOSPITALAR",
          state: GradeState.NEUTRAL,
          dependencias: [],
        },
        {
          id: "2",
          codigo: "ICSB39",
          nome: "ESTÁGIO EM SAÚDE COLETIVA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "7" }],
        },
        {
          id: "3",
          codigo: "ICSB42",
          nome: "ESTÁGIO EM LINGUAGEM I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "4", numero: "3" },
            { id: "0", numero: "4" },
            { id: "1", numero: "5" },
            { id: "1", numero: "7" },
            { id: "2", numero: "6" },
          ],
        },
        {
          id: "4",
          codigo: "ICSB45",
          nome: "ESTÁGIO EM MOTRICIDADE OROFACIAL I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "4" },
            { id: "4", numero: "5" },
          ],
        },
        {
          id: "5",
          codigo: "ICSB47",
          nome: "ESTÁGIO EM VOZ I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "4", numero: "6" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "6",
          codigo: "ICSB51",
          nome: "PROJETO DE PESQUISA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "7" }],
        },
      ],
    },

    {
      numero: "9",
      materias: [
        {
          id: "0",
          codigo: "ICSB36",
          nome: "PRÁTICAS FONOAUDIOLÓGICAS I",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "0", numero: "6" },
            { id: "2", numero: "5" },
            { id: "2", numero: "4" },
            { id: "4", numero: "6" },
            { id: "4", numero: "5" },
            { id: "6", numero: "5" },
          ],
        },
        {
          id: "1",
          codigo: "ICSB40",
          nome: "ESTÁGIO EM AUDIOLOGIA I",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "8" }],
        },
        {
          id: "2",
          codigo: "ICSB43",
          nome: "ESTÁGIO EM LINGUAGEM II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "8" }],
        },
        {
          id: "3",
          codigo: "ICSB46",
          nome: "ESTÁGIO EM MOTRICIDADE OROFACIAL II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "5", numero: "6" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "4",
          codigo: "ICSB48",
          nome: "ESTÁGIO EM VOZ II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "3", numero: "5" },
            { id: "4", numero: "6" },
            { id: "3", numero: "7" },
          ],
        },
        {
          id: "5",
          codigo: "ICSB52",
          nome: "PESQUISA ORIENTADA",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "6", numero: "8" }],
        },
      ],
    },

    {
      numero: "10",
      materias: [
        {
          id: "0",
          codigo: "ICSB37",
          nome: "PRÁTICAS FONOAUDIOLÓGICAS II",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "4", numero: "3" },
            { id: "0", numero: "4" },
            { id: "3", numero: "6" },
            { id: "3", numero: "7" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "1",
          codigo: "ICSB41",
          nome: "ESTÁGIO EM AUDIOLOGIA II",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "0", numero: "8" }],
        },
        {
          id: "2",
          codigo: "ICSB44",
          nome: "ESTÁGIO EM LINGUAGEM III",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "3", numero: "8" }],
        },
        {
          id: "3",
          codigo: "ICSB49",
          nome: "ESTÁGIO EM FONOAUDIOLOGIA HOSPITALAR",
          state: GradeState.NEUTRAL,
          dependencias: [
            { id: "2", numero: "5" },
            { id: "4", numero: "6" },
            { id: "1", numero: "8" },
            { id: "4", numero: "7" },
          ],
        },
        {
          id: "4",
          codigo: "ICSB54",
          nome: "TRABALHO DE CONCLUSÃO DE CURSO DE GRADUAÇÃO",
          state: GradeState.NEUTRAL,
          dependencias: [{ id: "5", numero: "9" }],
        },
      ],
    },
  ],
};
